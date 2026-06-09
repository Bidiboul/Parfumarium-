import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartToast from "@/components/CartToast";

// Police titres : serif élégante et raffinée
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Police textes : sans-serif moderne et lisible
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parfumarium.example"),
  title: {
    default: "Parfumarium — L'élégance d'un parfum, sans le prix du luxe",
    template: "%s · Parfumarium",
  },
  description:
    "Parfumarium crée des fragrances raffinées et accessibles. Découvrez des parfums élégants, sensuels et modernes, pensés pour sublimer chaque instant.",
  keywords: [
    "parfum",
    "fragrance",
    "parfum de luxe abordable",
    "eau de parfum",
    "parfum élégant",
    "Parfumarium",
  ],
  openGraph: {
    title: "Parfumarium — L'élégance d'un parfum, sans le prix du luxe",
    description:
      "Des fragrances raffinées, pensées pour sublimer chaque instant. Un luxe discret, conçu pour le quotidien.",
    type: "website",
    locale: "fr_FR",
    siteName: "Parfumarium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parfumarium",
    description: "L'élégance d'un parfum, sans le prix du luxe.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
