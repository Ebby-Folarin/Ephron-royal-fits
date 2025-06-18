import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "@/components/navigation/footer/Footer.module.css";
import { Call, DirectSend } from "iconsax-react";
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
    <footer className={styles.footer}>
      
      {/* Contact Form Section */}
      <div className={styles.contactSection}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h4 className="fw-bold mb-3">Get in touch</h4>
              <p className="mb-4">have questions or feedback? we&apos;d love to hear from you!</p>
              <div className="d-flex align-items-center mb-3">
                <DirectSend size={22} color="#57aecf" variant="Bold" className="me-3" />
                <span>ephronroyalfits@gmail.com</span>
              </div>
              <div className="d-flex align-items-center">
                <Call size={22} color="#57aecf" variant="Bold" className="me-3" />
                <span>+234-706-386-9144</span>
              </div>
            </div>
            <div className="col-md-7">
              <form onSubmit={onSendMessage} className={styles.contactForm}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className={`form-control ${styles.formInput}`} 
                      placeholder="Full Name" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className={`form-control ${styles.formInput}`} 
                      placeholder="Email Address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea 
                      className={`form-control ${styles.formInput}`} 
                      placeholder="Your Message" 
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className={styles.submitButton} disabled={sending}>
                      {sending ? <Loader /> : "send message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className="container py-5">
          <div className="row">
            {/* HELP & INFORMATION */}
            <div className="col-md-3 mb-4">
              <h6 className={styles.footerHeading}>HELP & INFORMATION</h6>
              <ul className={styles.footerLinks}>
                <li><Link href="/help" className={styles.footerLink}>help</Link></li>
                <li><Link href="/track-order" className={styles.footerLink}>track order</Link></li>
                <li><Link href="/delivery-returns" className={styles.footerLink}>delivery & returns</Link></li>
                <li><Link href="/sitemap" className={styles.footerLink}>sitemap</Link></li>
              </ul>
            </div>

            {/* ABOUT EPHRON ROYAL FITS */}
            <div className="col-md-3 mb-4">
              <h6 className={styles.footerHeading}>ABOUT EPHRON ROYAL FITS</h6>
              <ul className={styles.footerLinks}>
                <li><Link href="/about" className={styles.footerLink}>about us</Link></li>
                <li><Link href="/careers" className={styles.footerLink}>careers at ephron royal fits</Link></li>
                <li><Link href="/corporate-responsibility" className={styles.footerLink}>corporate responsibility</Link></li>
                <li><Link href="/investors" className={styles.footerLink}>investors&apos; site</Link></li>
              </ul>
            </div>

            {/* MORE FROM EPHRON ROYAL FITS */}
            <div className="col-md-3 mb-4">
              <h6 className={styles.footerHeading}>MORE FROM EPHRON ROYAL FITS</h6>
              <ul className={styles.footerLinks}>
                <li><Link href="/mobile-apps" className={styles.footerLink}>mobile and ephron royal fits apps</Link></li>
                <li><Link href="/gift-vouchers" className={styles.footerLink}>gift vouchers</Link></li>
                <li><Link href="/black-friday" className={styles.footerLink}>black friday</Link></li>
                <li><Link href="/thrift" className={styles.footerLink}>ephron royal fits x thrift+</Link></li>
              </ul>
            </div>

            {/* SHOPPING FROM */}
            <div className="col-md-3 mb-4">
              <h6 className={styles.footerHeading}>SHOPPING FROM:</h6>
              <p className={styles.countrySelector}>you&apos;re in <span className={styles.currentCountry}>nigeria</span> <Link href="/country-selector" className={styles.changeLink}>CHANGE</Link></p>
              
              <div className={styles.internationalSites}>
                <p className={styles.smallText}>our international sites:</p>
                <div className={styles.flagsContainer}>
                  <Link href="#" className={styles.flagLink}>
                    <Image src="/images/facebook.png" alt="Nigeria" width={24} height={16} style={{objectFit: 'cover'}} />
                  </Link>
                  <Link href="#" className={styles.flagLink}>
                    <Image src="/images/instagram.png" alt="United States" width={24} height={16} style={{objectFit: 'cover'}} />
                  </Link>
                  <Link href="#" className={styles.flagLink}>
                    <Image src="/images/twitter.png" alt="United Kingdom" width={24} height={16} style={{objectFit: 'cover'}} />
                  </Link>
                  <Link href="#" className={styles.flagLink}>
                    <Image src="/images/paystack.png" alt="Canada" width={24} height={16} style={{objectFit: 'cover'}} />
                  </Link>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <Call size={18} color="#57aecf" variant="Bold" className="me-2" />
                  <span className="fw-bold">+234-706-386-9144</span>
                </div>
                <p className="small text-muted">customer support available mon-fri, 9am-5pm</p>
              </div>
            </div>
          </div>

          {/* Social Media and Payment Methods */}
          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className={styles.socialIcons}>
                <Link href="https://www.facebook.com/profile.php?id=61565968947843&mibextid=LQQJ4d" target="_blank" className={styles.socialLink}>
                  <Image src="/images/facebook.png" alt="facebook" width={30} height={30} className={styles["icon-hover"]} />
                </Link>
                <Link href="https://www.instagram.com/ephron_royal_fits" target="_blank" className={styles.socialLink}>
                  <Image src="/images/instagram.png" alt="instagram" width={30} height={30} className={styles["icon-hover"]} />
                </Link>
                <Link href="https://x.com/e_royalfits" target="_blank" className={styles.socialLink}>
                  <Image src="/images/twitter.png" alt="twitter" width={30} height={30} className={styles["icon-hover"]} />
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className={styles.paymentMethods}>
                <Image src="/images/paystack.png" alt="paystack" className={styles.paymentIcon} width={120} height={30} />
                <Image src="/images/apple_pay.svg" alt="apple pay" width={60} height={30} className={styles.paymentIcon} />
                {/* Add more payment methods as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-6">
              <p className={styles.copyright}>© 2023 ephron royal fits. all rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link href="/privacy" className={styles.footerBottomLink}>privacy & cookies</Link>
              <span className={styles.divider}>|</span>
              <Link href="/terms" className={styles.footerBottomLink}>t&cs</Link>
              <span className={styles.divider}>|</span>
              <Link href="/accessibility" className={styles.footerBottomLink}>accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
