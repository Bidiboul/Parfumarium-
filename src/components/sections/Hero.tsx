import Link from "next/link";
import { getBestSellers } from "@/data/products";
import HeroVisual from "./HeroVisual";
import Logo from "@/components/Logo";

// Positions des particules scintillantes (décoratif)
const SPARKLES = [
  { top: "12%", left: "8%", size: 6, delay: "0s" },
  { top: "24%", left: "92%", size: 4, delay: "1.2s" },
  { top: "68%", left: "6%", size: 5, delay: "2.1s" },
  { top: "82%", left: "54%", size: 4, delay: "0.6s" },
  { top: "40%", left: "48%", size: 3, delay: "1.8s" },
  { top: "58%", left: "88%", size: 6, delay: "2.6s" },
];

export default function Hero() {
  const featured = getBestSellers()[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand via-ivory to-ivory pt-[88px]">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-champagne/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      {/* Particules scintillantes */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
          aria-hidden
        />
      ))}

      <div className="container-luxe relative grid items-center gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24 lg:py-28">
        {/* Texte */}
        <div className="max-w-xl animate-fade-up">
          <Logo tone="gold" variant="icon" size={48} className="mb-5 block" />
          <span className="eyebrow">Maison de parfums · 60 fragrances</span>
          <h1 className="mt-5 font-serif text-[2.25rem] leading-[1.07] text-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            L'élégance d'un parfum,
            <span className="text-shimmer block">sans le prix du luxe.</span>
          </h1>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-warmgray md:text-lg">
            Découvrez des fragrances raffinées, inspirées des plus grandes
            créations, pensées pour sublimer chaque instant. Un luxe discret,
            conçu pour le quotidien.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/collection" className="btn-primary">
              Découvrir la collection
            </Link>
            <Link href="/a-propos" className="btn-outline">
              Notre histoire
            </Link>
          </div>

          {/* Réassurance */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            {["Expédiée en 72h", "Dès 19,90 €", "Paiement sécurisé"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-luxe text-ink/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Visuel */}
        <div className="relative flex justify-center md:justify-end">
          {featured && <HeroVisual product={featured} />}
        </div>
      </div>
    </section>
  );
}
