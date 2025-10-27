/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Navbar from "@/components/navigation/navbar/navbar";
import Footer from "@/components/navigation/footer/footer";
import { getWSSchema, getWPSchema, getLBSchema } from "@/components/schema";
import { useState } from "react";
import SearchBox from "@/components/search/search";
import Cart from "@/components/cart/cart";
import Script from "next/script";

export default function CartPage() {
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = (state) => setShowSearch(state);

  const pageName = "Ephron Royal 'fits - Cart";
  const pageDesc =
    "Elevate your style with Ephron Royal 'fits, where art meets fashion in a harmonious blend of creativity and elegance. Explore our online store for a curated collection of unique art-inspired fashion pieces that allow you to express your individuality.";
  const pageKeywords =
    "Art-inspired fashion, Unique fashion pieces, Creative clothing, Fashion with a story, Wearable art, Ephron Royal 'fits online store";

  const baseURL = "https://ephronroyalfits.com/";
  const pageURL = `${baseURL}cart`;

  const wSSchema = getWSSchema(baseURL);
  const wPSchema = getWPSchema(pageName, pageDesc, baseURL, [
    { "@type": "ListItem", position: 1, name: "Home", item: baseURL },
    { "@type": "ListItem", position: 2, name: pageName, item: pageURL },
  ]);

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
    `${baseURL}logo/png/logo.png`,
    "Cash, Credit Card, Transfer",
    "NGN, USD, EURO",
    "Mo-Fr 09:00-17:00",
    { latitude: "7.6183612", longitude: "5.1391947" }
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageName}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" href="/logo/png/logo_trans.png" />
        <meta name="author" content="Ephron Royal fits" />
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(wSSchema || {}),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(wPSchema || {}),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lBSchema || {}),
          }}
        />
      </Head>

      <Script src="https://checkout.flutterwave.com/v3.js" strategy="afterInteractive" />

      <main>
        <Navbar emitShowSearch={handleShowSearch} />
        <Cart />
        <Footer />
      </main>

      {showSearch && (
        <SearchBox show={showSearch} onHide={() => setShowSearch(false)} />
      )}
    </>
  );
}
