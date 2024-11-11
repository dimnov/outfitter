import Head from "next/head";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./fonts/satoshi.css";
import "./fonts/integralCF.css";
import "./globals.css";

export const metadata = {
  title: "Outfitter - Fashion Online Store",
  description:
    "Shop trendy clothing, shoes, and accessories at Outfitter. New arrivals every season!",
  keywords:
    "clothing, fashion, online store, men's fashion, women's fashion, accessories, trendy clothes",
  author: "Outfitter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
