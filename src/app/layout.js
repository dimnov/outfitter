import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import "./fonts/satoshi.css";
import "./fonts/integralCF.css";
import "./globals.css";

export const metadata = {
  title: "Outfitter - Fashion Online Store",
  description:
    "Shop trendy clothing, shoes, and accessories at Outfitter. New arrivals every season!",
  keywords:
    "clothing, fashion, online store, men's fashion, women's fashion, accessories, trendy clothes",
  authors: [{ name: "Outfitter" }],
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-icon-180x180.png" },
    ],
    other: [{ rel: "icon", type: "image/png", sizes: "192x192", url: "/android-icon-192x192.png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
