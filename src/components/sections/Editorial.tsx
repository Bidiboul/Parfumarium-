"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { home } from "@/data/homeContent";
import { useLang } from "@/i18n/LanguageProvider";
import { L } from "@/i18n/dict";

/** Section éditoriale : phrase de marque centrée, grande respiration. */
export default function Editorial() {
  const { lang } = useLang();
  const { editorial } = home;

  return (
    <section className="bg-sage-light">
      <div className="container-luxe py-20 text-center md:py-28">
        <FadeIn className="mx-auto max-w-3xl">
          <span className="gold-rule mx-auto" aria-hidden />
          <p className="mt-8 font-serif text-[1.6rem] leading-snug text-ink text-balance sm:text-3xl md:text-[2.4rem]">
            {L(editorial.text, lang)}
          </p>
          <Link
            href={editorial.ctaHref}
            className="group mt-8 inline-flex items-center gap-2 font-sans text-sm uppercase
              tracking-luxe text-amber transition-colors hover:text-ink"
          >
            {L(editorial.ctaLabel, lang)}
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
