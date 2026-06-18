import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartToast from "@/components/CartToast";
import ScrollProgress from "@/components/ScrollProgress";

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
  metadataBase: new URL("https://parfumarium.fr"),
  title: {
    default: "Parfumarium — Parfums élégants & fragrances raffinées",
    template: "%s · Parfumarium",
  },
  description:
    "Parfumarium — parfums élégants pour homme et femme. Des fragrances raffinées et longue tenue, pensées pour affirmer votre signature olfactive. Boutique à Vaison-la-Romaine.",
  keywords: [
    "parfum élégant",
    "parfum homme",
    "parfum femme",
    "fragrance raffinée",
    "parfum longue tenue",
    "parfum premium",
    "signature olfactive",
    "eau de parfum",
    "Parfumarium",
  ],
  openGraph: {
    title: "Parfumarium — Parfums élégants & fragrances raffinées",
    description:
      "Des parfums premium et longue tenue, pour homme et femme. Affirmez votre signature olfactive.",
    type: "website",
    locale: "fr_FR",
    siteName: "Parfumarium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parfumarium — Élégance intemporelle",
    description: "L'art de choisir le parfum qui vous ressemble.",
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
          <ScrollProgress />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
