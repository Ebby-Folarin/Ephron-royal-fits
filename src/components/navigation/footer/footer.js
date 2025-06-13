import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "@/components/navigation/footer/Footer.module.css";
import { Call, Camera, DirectSend, Instagram, Location } from "iconsax-react";
import Loader from "@/components/loader/loader";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";

export default function Footer() {
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const onSendMessage = async (e) => {
    e.preventDefault();
    setSending(true);

    const collRef = collection(db, "contactUs");
    const contactDoc = {
      fullName: fullName,
      email: email,
      message: message,
    };

    setDoc(doc(collRef, email), contactDoc)
      .then(() => toast.success("Message sent."))
      .catch((e) => toast.error(`Error while sending message: ${e.message}`))
      .finally(() => setSending(false));
  };

  return (
    <footer style={{ fontSize: 14, fontFamily: "'Julius Sans One', sans-serif" }}>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <div className="py-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61565968947843&mibextid=LQQJ4d"
                  target="_blank"
                  className="me-5"
                >
                  <Image src="/images/facebook.png" alt="facebook" width={30} height={30} className={styles["icon-hover"]} />
                </Link>

                <Link
                  href="https://www.instagram.com/ephron_royal_fits"
                  target="_blank"
                  className="me-5"
                >
                  <Image
                    src="/images/instagram.png"
                    alt="instagram"
                    width={30}
                    height={30}
                    className={styles["icon-hover"]}
                  />
                </Link>

                <Link href="https://x.com/e_royalfits" target="_blank">
                  <Image src="/images/twitter.png" alt="twitter" width={30} height={30} className={styles["icon-hover"]} />
                </Link>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <div className="py-4">
                <Image
                  src="/images/paystack.png"
                  alt="paystack"
                  className={`me-4 ${styles["icon-hover"]}`}
                  width={180}
                  height={40}
                />
                <Image 
                  src="/images/apple_pay.svg" 
                  alt="apple pay" 
                  width={80} 
                  height={40} 
                  className={styles["icon-hover"]} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg_blue_50">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <Image src="/images/fashion.png" alt="fashion" width={20} height={20} />

                <p className="ms-3 text-white fw-bold m-0">TOP FASHION</p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <Image src="/images/delivery.png" alt="delivery" width={20} height={20} />

                <p className="ms-3 text-white fw-bold m-0">SMOOTH DELIVERY</p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <Image src="/images/support.png" alt="support" width={20} height={20} />

                <p className="ms-3 text-white fw-bold m-0">EXELLENT SUPPORT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" py-5"
        style={{
          background: "linear-gradient(135deg, #fffbe6 0%, #f7e7ce 100%)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Image
                src="/logo/png/logo_long.png"
                alt="logo"
                className="rounded"
                width={150}
                height={40}
              />
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold">CONTACT</h6>

              <div className="mt-5 d-flex my-2">
                <Call className="me-1 black" variant="Bulk" />
                <div className="d-flex flex-column black me-1">
                  <b>WhatsApp</b>
                  <Link
                    className="text-decoration-none black"
                    href="https://wa.me/+2347063869144?text=I am contacting you from ERF to enquire about..."
                    target="_blank"
                  >
                    +234-706-386-9144
                  </Link>
                </div>
              </div>

              <div className="d-flex my-2">
                <DirectSend className="me-1 black" variant="Bulk" />
                <div className="d-flex flex-column black me-1">
                  <b>Email Us</b>
                  <Link
                    className="text-decoration-none black"
                    href="mailto:ephronroyalfits@gmail.com"
                    target="_blank"
                  >
                    ephronroyalfits@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold">COMPANY</h6>

              <ul className="mt-5 list-unstyled">
                <li className="mb-3">
                  <Link
                    className="text-decoration-none black"
                    href="https://wa.me/+2347063869144?text=I am contacting you from ERF to enquire about..."
                    target="_blank"
                  >
                    Contact Us
                  </Link>
                </li>

                <li className="mb-3">
                  <Link className="text-decoration-none black" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>

                <li className="mb-3">
                  <Link className="text-decoration-none black" href="/terms">
                    Terms And Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <div
                className="p-3 bg-white shadow rounded-4 h-100"
                style={{ minWidth: 250, minHeight: 240, maxWidth: 320, margin: '0 auto' }}
              >
                <h5
                  className="fw-bold mb-2 text-center"
                  style={{ color: "#1a1a1a", fontSize: 18 }}
                >
                  Contact Us
                </h5>
                <p
                  className="text-muted mb-3 text-center"
                  style={{ fontSize: 12 }}
                >
                  Have a question or feedback? Fill out the form below and we&apos;ll get back to you soon.
                </p>
                <form className="row g-2" onSubmit={onSendMessage}>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control rounded-3 py-1 px-2"
                      required
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                      style={{ border: "1px solid #e0e0e0", background: "#fafbfc", fontSize: 13 }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control rounded-3 py-1 px-2"
                      required
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ border: "1px solid #e0e0e0", background: "#fafbfc", fontSize: 13 }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control rounded-3 py-1 px-2"
                      required
                      placeholder="Message"
                      style={{ height: "60px", border: "1px solid #e0e0e0", background: "#fafbfc", resize: "vertical", fontSize: 13 }}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-12 d-grid mt-1">
                    <button
                      type="submit"
                      disabled={sending}
                      className={`btn ${styles.btn_nav} fw-bold rounded-3 py-1`}
                      style={{ background: "#1a1a1a", color: "#fff", letterSpacing: 1, fontSize: 14 }}
                    >
                      {sending ? <Loader /> : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col text-center">
              <Link className="text-muted text-decoration-none" href="/">
                All rights reserved © www.ephronroyalfits.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
