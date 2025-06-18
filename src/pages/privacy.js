import Head from "next/head";
import Navbar from "@/components/navigation/navbar/navbar";
import Footer from "@/components/navigation/footer/footer";
import { getWSSchema, getWPSchema, getLBSchema } from "@/components/schema";
import { useState } from "react";

export default function PrivacyPage() {
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = (state) => setShowSearch(state);

  // page default data
  const pageName = "Ephron Royal 'fits - Privacy Policy";
  const pageDesc =
    "Elevate your style with Ephron Royal 'fits, where art meets fashion in a harmonious blend of creativity and elegance. Explore our online store for a curated collection of unique art-inspired fashion pieces that allow you to express your individuality. Immerse yourself in a world where every garment tells a story, bringing together the realms of art and fashion seamlessly. Discover the perfect fusion of artistic expression and sartorial sophistication at Ephron Royal 'fits.";
  const pageKeywords =
    "Art-inspired fashion, Unique fashion pieces, Creative clothing, Fashion with a story, Wearable art, Eccentric style, Artistic expression in fashion, Fashion showcase, Individuality in clothing, Ephron Royal 'fits online store";
  const baseURL = "https://ephronroyalfits.com/";
  const pageURL = "https://ephronroyalfits.com/privacy";

  // web site schema
  const wSSchema = getWSSchema(baseURL);

  // web page schema
  const wPSchema = getWPSchema(pageName, pageDesc, baseURL, [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseURL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: pageURL,
    },
  ]);

  // local business schema
  const lBSchema = getLBSchema(
    pageName,
    {
      streetAddress: "Nill Ifesowapo crescent",
      addressLocality: "Ado",
      addressRegion: "Ekiti",
      postalCode: "360101",
      addressCountry: "NG",
    },
    "+234-706-386-9144",
    "ephronroyalfits@gmail.com",
    baseURL,
    `${baseURL}/logo/png/logo.png`,
    "Cash, Credit Card, Transfer",
    "NGN, USD, EURO",
    "Mo-Fr 09:00-17:00",
    {
      latitude: "7.6183612",
      longitude: "5.1391947",
    }
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{pageName}</title>

        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href="/logo/png/logo_trans.png" />
        <meta name="author" content="Ephron Royal 'fits" />
        <meta property="og:title" content={pageName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo/png/logo_text.png" />
        <meta property="og:image:width" content="1277" />
        <meta property="og:image:height" content="473" />
        <meta property="og:url" content={baseURL} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:site_name" content={pageName} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wSSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wPSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lBSchema) }}
        />
      </Head>

      <main>
        <Navbar emitShowSearch={handleShowSearch} />
        <div className="bottom_spacer" />

        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-start">
              <h4 className="fw-bold">PRIVACY POLICY</h4>
              <p className="mb-3">
                This Privacy Policy outlines how EPHRON ROYAL &apos;FITS collects,
                uses, discloses, and manages your personal information when you
                visit our website or make a purchase. By using our website, you
                consent to the terms outlined in this policy.
              </p>

              <h5 className="mb-2 fw-bold">INFORMATION WE COLLECT:</h5>
              <ol>
                <li>
                  <b>Personal Information:</b>
                  <p>
                    we may collect your name, email address, phone number,
                    shipping address, and payment information when you make a
                    purchase or create an account.
                  </p>
                </li>

                <li>
                  <b>Browsing Information:</b>
                  <p>
                    we automatically collect information about your device, IP
                    address, browser type, and how you interact with our website.
                  </p>
                </li>

                <li>
                  <b>Cookies and Similar Technologies:</b>
                  <p>
                    we use cookies and similar technologies to enhance your
                    browsing experience and collect information about how you use
                    our website.
                  </p>
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">HOW WE USE YOUR INFORMATION:</h5>
              <ol>
                <li>
                  <b>To Process Transactions:</b>
                  <p>
                    we use your personal information to process orders, payments,
                    and shipping.
                  </p>
                </li>

                <li>
                  <b>To Provide Customer Service:</b>
                  <p>
                    we use your contact information to respond to inquiries,
                    provide support, and update you on your orders.
                  </p>
                </li>

                <li>
                  <b>To Improve Our Services:</b>
                  <p>
                    we analyze browsing information to enhance our website,
                    products, and services.
                  </p>
                </li>

                <li>
                  <b>To Send Marketing Communications:</b>
                  <p>
                    with your consent, we may send you promotional emails about
                    new products, special offers, or fashion tips.
                  </p>
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">SHARING YOUR INFORMATION:</h5>
              <ol>
                <li>
                  <b>Service Providers:</b>
                  <p>
                    we may share your information with third-party service
                    providers who help us with payment processing, shipping,
                    customer service, and marketing.
                  </p>
                </li>

                <li>
                  <b>Legal Requirements:</b>
                  <p>
                    we may disclose your information when required by law or to
                    protect our rights and comply with legal processes.
                  </p>
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">YOUR CHOICES:</h5>
              <ol>
                <li>
                  <b>Account Information:</b>
                  <p>
                    you can review and update your account information by
                    logging into your account on our website.
                  </p>
                </li>

                <li>
                  <b>Marketing and Other Commendable Communications:</b>
                  <p>
                    you can opt-out of receiving fashion tips or ideas and
                    relevant promotional emails by following the instructions in
                    the emails or contacting us directly.
                  </p>
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">SECURITY:</h5>
              <ol>
                <li>
                  we implement security measures to protect your information,
                  both during transmission and once it is received
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">CONCERNING COOKIES:</h5>
              <ol>
                <li>
                  we use cookies to enhance your browsing experience and analyse
                  website traffic. you can choose to disable cookies, but this
                  may affect certain features of our website from your end.
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">
                ANY REWARDABLE ATTRIBUTE TO CHANGES IN THE FUTURE:
              </h5>
              <ol>
                <li>
                  we may update our privacy policy from time to time. any
                  changes will be posted on this page, and we encourage you to
                  review the policy periodically.
                </li>
              </ol>

              <h5 className="mb-2 fw-bold">CONTACT US:</h5>
              <ol>
                <li>
                  if you have any further questions or concerns about our
                  privacy policy, please contact us at [your contact email/phone
                  number].
                </li>
              </ol>
              
              <b>thank you for trusting EPHRON ROYAL &apos;FITS</b>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
