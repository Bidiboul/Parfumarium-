"use client";

import { useLang } from "@/i18n/LanguageProvider";

type Txt = string | { fr: string; en: string };

interface PageHeroProps {
  eyebrow?: Txt;
  title: Txt;
  subtitle?: Txt;
}

/** Bandeau d'en-tête des pages internes. Accepte du texte simple ou bilingue. */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  const { lang } = useLang();
  const r = (v?: Txt) =>
    v == null || typeof v === "string" ? v : v[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-ivory pt-[152px]">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-champagne/40 blur-3xl" />
      <div className="container-luxe relative py-16 text-center md:py-24">
        {eyebrow && <span className="eyebrow">{r(eyebrow)}</span>}
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-ink sm:text-5xl md:text-6xl">
          {r(title)}
        </h1>
        <span className="gold-rule mx-auto mt-6" aria-hidden />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-warmgray md:text-lg">
            {r(subtitle)}
          </p>
        )}
      </div>
    </section>
  );
}
