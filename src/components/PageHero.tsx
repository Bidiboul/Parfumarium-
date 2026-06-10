interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** Bandeau d'en-tête utilisé en haut des pages internes (sous le header fixe). */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-ivory pt-[116px]">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-champagne/40 blur-3xl" />
      <div className="container-luxe relative py-16 text-center md:py-24">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <span className="gold-rule mx-auto mt-6" aria-hidden />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-warmgray md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
