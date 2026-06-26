"use client";

import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/i18n/LanguageProvider";
import { L } from "@/i18n/dict";

const C = {
  eyebrow: { fr: "Contact", en: "Contact" },
  title: { fr: "Parlons parfum", en: "Let's talk fragrance" },
  subtitle: {
    fr: "Une question, une envie, un conseil olfactif ? Notre équipe est à votre écoute.",
    en: "A question, a wish, olfactory advice? Our team is here to help.",
  },
  coords: { fr: "Nos coordonnées", en: "Get in touch" },
  email: { fr: "E-mail", en: "Email" },
  boutique: { fr: "Boutique", en: "Boutique" },
  inBoutique: { fr: "En boutique", en: "In store" },
  inBoutiqueVal: {
    fr: "Accompagnement personnalisé par notre équipe",
    en: "Personalised advice from our team",
  },
  writeTitle: { fr: "Écrivez-nous", en: "Write to us" },
  writeSub: {
    fr: "Réponse garantie sous 24 heures ouvrées.",
    en: "Guaranteed reply within 24 business hours.",
  },
  faqTitle: { fr: "Questions fréquentes", en: "Frequently asked questions" },
};

const FAQ = [
  {
    q: { fr: "Quels sont les délais d'expédition ?", en: "What are the dispatch times?" },
    a: {
      fr: "Vos commandes sont préparées et expédiées sous 72h en France métropolitaine.",
      en: "Your orders are prepared and dispatched within 72h in mainland France.",
    },
  },
  {
    q: { fr: "Comment choisir ma contenance ?", en: "How do I choose my size?" },
    a: {
      fr: "Chaque parfum existe en 30, 50 et 100 ml (le 15 ml est actuellement en rupture). Le 30 ml est idéal pour découvrir, le 100 ml pour adopter une signature au quotidien.",
      en: "Each fragrance comes in 30, 50 and 100 ml (the 15 ml is currently out of stock). The 30 ml is ideal to discover, the 100 ml to adopt a signature for everyday.",
    },
  },
  {
    q: { fr: "Vos parfums sont-ils testés sur les animaux ?", en: "Are your perfumes tested on animals?" },
    a: {
      fr: "Jamais. Toutes nos créations sont cruelty-free et formulées dans le respect de normes strictes.",
      en: "Never. All our creations are cruelty-free and made to strict standards.",
    },
  },
];

export default function ContactPage() {
  const { lang } = useLang();
  const infos = [
    { label: L(C.email, lang), value: "parfumarium.contact@gmail.com", href: "mailto:parfumarium.contact@gmail.com" },
    { label: L(C.boutique, lang), value: "Grand Rue, 84110 Vaison-la-Romaine" },
    { label: L(C.inBoutique, lang), value: L(C.inBoutiqueVal, lang) },
  ];

  return (
    <>
      <PageHero eyebrow={C.eyebrow} title={C.title} subtitle={C.subtitle} />

      <section className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-ink">{L(C.coords, lang)}</h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-8 space-y-6">
              {infos.map((info) => (
                <li key={info.label}>
                  <p className="font-sans text-xs uppercase tracking-luxe text-gold">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="mt-1 block font-serif text-lg text-ink transition-colors hover:text-amber">
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-serif text-lg text-ink">{info.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-8">
            <div className="rounded-2xl border border-ink/8 bg-sand/60 p-8 md:p-10">
              <h2 className="font-serif text-2xl text-ink">{L(C.writeTitle, lang)}</h2>
              <p className="mt-2 font-sans text-sm text-warmgray">{L(C.writeSub, lang)}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-20">
          <h2 className="text-center font-serif text-3xl text-ink">{L(C.faqTitle, lang)}</h2>
          <span className="gold-rule mx-auto mt-5" aria-hidden />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-2xl border border-ink/8 bg-white/60 p-7">
                <h3 className="font-serif text-lg text-ink">{L(item.q, lang)}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">{L(item.a, lang)}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
