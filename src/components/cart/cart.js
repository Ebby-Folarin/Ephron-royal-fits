import styles from "@/components/cart/Cart.module.css";
import { ShoppingCart } from "iconsax-react";
import Link from "next/link";
import CartItem from "@/components/cart/cart_item";
import toCurrency from "@/components/utils/toCurrency";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-hot-toast";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { doc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/firebase/fire_config";
import { useState } from "react";
import Loader from "@/components/loader/loader";
import { v4 } from "uuid";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { items, clearCart } = useCart();
  const { authUser } = useAuth();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  const onCreateOrder = async (isCompleted, ref) => {
    const docRef = doc(collection(db, "orders"));
    const orderDoc = {
      id: docRef.id,
      ref: ref,
      image: "https://ephronroyalfits.vercel.app/logo/png/logo_trans.png",
      name: "Cart Purchase",
      email: authUser.email,
      amount: totalPrice,
      isCompleted: isCompleted,
      status: isCompleted ? "placed" : "cancelled",
      items: items,
      addedOn: serverTimestamp(),
    };

    try {
      await setDoc(docRef, orderDoc);
      const response = await fetch(
        `/api/send_order_${isCompleted ? "placed" : "cancelled"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order: orderDoc, email: authUser.email }),
        }
      );

      if (response.ok && !isCompleted) toast.error("Order cancelled");
      if (response.ok && isCompleted) {
        toast.success("Order placed");
        clearCart();
      }
    } catch (error) {
      toast.error(`Something went wrong. Please try again later: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Move the hook here (top-level inside component)
  const ref = v4();
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY,
    tx_ref: ref,
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: authUser?.email || "guest@ephronroyalfits.com",
      name: authUser?.email?.split("@")[0] || "Guest",
    },
    customizations: {
      title: "Ephron Order",
      description: "Secure checkout with Flutterwave",
      logo: "https://ephronroyalfits.vercel.app/logo/png/logo_trans.png",
    },
    callback: function (response) {
      if (response.status === "successful") {
        onCreateOrder(true, ref);
      } else {
        onCreateOrder(false, ref);
      }
      closePaymentModal();
    },
    onClose: () => onCreateOrder(false, ref),
  };

  const handleFlutterPayment = useFlutterwave(config); // ✅ called safely at top-level

  const makeOrder = () => {
    if (!authUser) {
      toast.error("Sign in to place order.");
      return;
    }

    setLoading(true);

    handleFlutterPayment({
      callback: config.callback,
      onClose: config.onClose,
    });
  };

  return (
    <div style={{ marginTop: "6rem" }}>
      {items.length === 0 && (
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-sm-10 text-center">
              <ShoppingCart variant="Bulk" size={100} color="#57aecf" />
              <div className="my-4">
                <h4>Your cart is empty!</h4>
                <p className="text-muted m-0">
                  Browse and start ordering with a click.
                </p>
              </div>
              <Link
                href="/"
                className="my-4 btn btn-lg btn-outline-primary rounded-0"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      )}

      {items.length > 0 && (
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-8">
              <div className={styles.card_header}>Shopping Cart</div>
              <div className="row mt-2">
                {items.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="m-2 p-2 shadow-sm">
                <div className={styles.card_header}>Summary</div>
                <div className="d-flex flex-column py-3 border-bottom justify-content-between">
                  <div className="d-flex justify-content-between">
                    <b>Total</b>
                    <b>{toCurrency(totalPrice)}</b>
                  </div>
                </div>

                <button
                  onClick={makeOrder}
                  disabled={loading}
                  className="btn btn-lg btn-dark border-0 rounded-0 w-100 mt-4"
                >
                  {loading ? <Loader /> : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
