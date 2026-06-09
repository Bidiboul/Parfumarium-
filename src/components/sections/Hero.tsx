import Image from "next/image";
import Link from "next/link";
import { getBestSellers, formatPrice } from "@/data/products";

export default function Hero() {
  const featured = getBestSellers()[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand via-ivory to-ivory pt-[88px]">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-champagne/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-luxe relative grid items-center gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24 lg:py-28">
        {/* Texte */}
        <div className="max-w-xl animate-fade-up">
          <span className="eyebrow">Maison de parfums · 60 fragrances</span>
          <h1 className="mt-5 font-serif text-[2.7rem] leading-[1.05] text-ink text-balance sm:text-6xl lg:text-7xl">
            L'élégance d'un parfum,
            <span className="block text-amber">sans le prix du luxe.</span>
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
            {["Livraison en 48h", "Dès 19,90 €", "Paiement sécurisé"].map(
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
          <div className="relative w-full max-w-sm animate-fade-in">
            <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2.5rem] bg-gradient-to-b from-champagne/60 to-transparent blur-2xl" />
            {featured && (
              <Link
                href={`/produit/${featured.slug}`}
                className="block animate-slow-float overflow-hidden rounded-[2rem] border border-white/60 shadow-card"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={featured.image}
                    alt={`${featured.name} — ${featured.family}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </Link>
            )}
            {/* Étiquette flottante */}
            {featured && (
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-ink/8 bg-ivory px-5 py-4 shadow-soft">
                <p className="font-sans text-[10px] uppercase tracking-luxe text-gold">
                  Coup de cœur
                </p>
                <p className="mt-1 font-serif text-lg text-ink">
                  {featured.name}
                </p>
                <p className="font-sans text-sm text-amber">
                  dès {formatPrice(featured.price)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
