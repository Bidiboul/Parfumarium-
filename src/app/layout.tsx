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
  metadataBase: new URL("https://parfumarium.example"),
  title: {
    default: "Parfumarium — Élégance intemporelle",
    template: "%s · Parfumarium",
  },
  description:
    "Parfumarium sélectionne des fragrances pour leur caractère, leur tenue et leur signature olfactive. L'art de choisir le parfum qui vous ressemble.",
  keywords: [
    "parfum",
    "fragrance",
    "parfum de luxe abordable",
    "eau de parfum",
    "parfum élégant",
    "Parfumarium",
  ],
  openGraph: {
    title: "Parfumarium — Élégance intemporelle",
    description:
      "Des fragrances choisies pour révéler votre présence. Une signature olfactive qui vous accompagne.",
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
