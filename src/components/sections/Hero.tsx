import Image from "next/image";
import Link from "next/link";
import { home } from "@/data/homeContent";

/**
 * Hero premium : grande image plein écran, léger filtre sombre pour la
 * lisibilité, texte aligné à gauche et CTA. Contenu éditable dans
 * src/data/homeContent.ts.
 */
export default function Hero() {
  const { hero } = home;

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Filtre sombre (plus dense à gauche pour le texte) */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-ink/15" />

      {/* Contenu */}
      <div className="container-luxe relative z-10 w-full pt-[116px]">
        <div className="max-w-xl animate-fade-up text-ivory">
          <span className="font-sans text-xs uppercase tracking-luxe text-gold">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 font-serif leading-[1.05] text-balance text-[2.7rem] sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ivory/85 md:text-lg">
            {hero.subtitle}
          </p>

          <Link
            href={hero.ctaHref}
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full
              bg-ivory px-9 py-4 font-sans text-sm uppercase tracking-luxe text-ink
              transition-all duration-500 hover:bg-sage-light hover:shadow-soft
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gold
              focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {hero.ctaLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Indice de défilement */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-1 animate-slow-float rounded-full bg-ivory/70" />
        </span>
      </div>
    </section>
  );
}
