"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import { L, useT } from "@/i18n/dict";

const REVIEWS = [
  {
    name: "Camille L.",
    location: "Paris",
    text: {
      fr: "Un sillage incroyable pour ce prix. On me demande sans cesse quel est mon parfum. Creamy Milk est devenu ma signature.",
      en: "An incredible trail for the price. People keep asking what I'm wearing. Creamy Milk has become my signature.",
    },
    product: "Creamy Milk 590",
  },
  {
    name: "Théo M.",
    location: "Lyon",
    text: {
      fr: "Tabac Vanilla tient toute la journée et reste élégant du matin au soir. Une tenue et une richesse remarquables.",
      en: "Tabac Vanilla lasts all day and stays elegant from morning to evening. Remarkable longevity and richness.",
    },
    product: "Tabac Vanilla 196",
  },
  {
    name: "Inès R.",
    location: "Bordeaux",
    text: {
      fr: "Le flacon est superbe, l'odeur sublime et l'emballage soigné. J'ai eu l'impression d'ouvrir un vrai cadeau de luxe.",
      en: "The bottle is superb, the scent sublime and the packaging refined. It felt like opening a true luxury gift.",
    },
    product: "Crystal Rouge 1035",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5/5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLang();
  const t = useT();

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-luxe">
        <FadeIn>
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
        </FadeIn>

        <FadeIn className="mt-8 flex justify-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-full border border-champagne bg-white px-8 py-4 shadow-card sm:flex-row sm:gap-4">
            <Stars />
            <p className="font-sans text-sm text-ink">
              <span className="font-serif text-xl text-amber">4,8/5</span>
              <span className="mx-2 text-champagne">·</span>
              {t.testimonials.satisfied}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <FadeIn key={review.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/8 bg-ivory p-8 shadow-card">
                <Stars />
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                  « {L(review.text, lang)} »
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/8 pt-5">
                  <p className="font-sans text-sm font-medium text-ink">
                    {review.name}
                  </p>
                  <p className="font-sans text-xs text-warmgray">
                    {review.location} · {review.product}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
