"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import { home } from "@/data/homeContent";
import { useLang } from "@/i18n/LanguageProvider";
import { L } from "@/i18n/dict";

/** Section institutionnelle « Notre approche » : fond clair, texte centré. */
export default function Approche() {
  const { lang } = useLang();
  const { approche } = home;

  return (
    <section className="bg-white">
      <div className="container-luxe py-20 text-center md:py-28">
        <FadeIn className="mx-auto flex max-w-3xl flex-col items-center">
          <Logo tone="gold" variant="icon" size={48} className="mb-7" />
          <span className="eyebrow">{L(approche.eyebrow, lang)}</span>
          <h2 className="mt-5 font-serif text-[1.7rem] leading-snug text-ink text-balance sm:text-3xl md:text-[2.3rem]">
            {L(approche.title, lang)}
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-warmgray">
            {L(approche.subtitle, lang)}
          </p>
          <Link href={approche.ctaHref} className="btn-outline mt-9">
            {L(approche.ctaLabel, lang)}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
