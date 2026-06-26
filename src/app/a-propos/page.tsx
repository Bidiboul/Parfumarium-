"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import SectionHeading from "@/components/sections/SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import { L } from "@/i18n/dict";

const A = {
  heroEyebrow: { fr: "Notre histoire", en: "Our story" },
  heroTitle: { fr: "L'art de choisir son parfum", en: "The art of choosing your perfume" },
  heroSub: {
    fr: "Parfumarium réunit de belles fragrances, choisies pour leur caractère et leur signature olfactive.",
    en: "Parfumarium brings together beautiful fragrances, chosen for their character and olfactory signature.",
  },
  manifestoTitle: { fr: "Une maison dédiée au beau parfum.", en: "A house dedicated to beautiful perfume." },
  manifesto: [
    {
      fr: "Parfumarium est née d'une passion simple : celle des belles fragrances. Nous sélectionnons chaque parfum pour sa richesse, sa tenue et sa signature olfactive, afin de composer une collection qui a du caractère.",
      en: "Parfumarium was born from a simple passion: that of beautiful fragrances. We select each perfume for its richness, lasting power and olfactory signature, to create a collection with character.",
    },
    {
      fr: "Nous croyons qu'un parfum se choisit pour ce qu'il révèle de vous. C'est pourquoi nous prenons le temps de vous guider à travers différents univers, en boutique comme en ligne, pour trouver celui qui vous ressemble vraiment.",
      en: "We believe a perfume is chosen for what it reveals about you. That's why we take the time to guide you through different worlds, in store and online, to find the one that truly suits you.",
    },
  ],
  quote: { fr: "« L'art de choisir le parfum qui vous ressemble. »", en: "“The art of choosing the perfume that's right for you.”" },
  valuesEyebrow: { fr: "Ce qui nous guide", en: "What guides us" },
  valuesTitle: { fr: "Nos valeurs", en: "Our values" },
  values: [
    { title: { fr: "Élégance", en: "Elegance" }, text: { fr: "Une esthétique sobre et raffinée, dans le flacon comme dans le sillage.", en: "A sober, refined aesthetic, in the bottle as in the trail." } },
    { title: { fr: "Le conseil", en: "Advice" }, text: { fr: "En boutique, nous prenons le temps de vous accompagner pour trouver la fragrance qui vous ressemble.", en: "In store, we take the time to help you find the fragrance that suits you." } },
    { title: { fr: "Émotion", en: "Emotion" }, text: { fr: "Chaque parfum raconte une histoire et réveille un souvenir, une envie, un instant.", en: "Each perfume tells a story and awakens a memory, a desire, a moment." } },
    { title: { fr: "Raffinement", en: "Refinement" }, text: { fr: "Des matières choisies, un travail patient, une finition irréprochable.", en: "Chosen materials, patient work, impeccable finishing." } },
  ],
  craftEyebrow: { fr: "Notre savoir-faire", en: "Our craft" },
  craftTitle: { fr: "De la matière à l'émotion", en: "From raw material to emotion" },
  craftSub: { fr: "Trois étapes, une même exigence : faire naître un parfum dont on se souvient.", en: "Three steps, one same standard: to create a perfume to remember." },
  steps: [
    { title: { fr: "La sélection des matières", en: "Selecting the materials" }, text: { fr: "Nous parcourons les meilleures sources pour réunir des essences nobles, naturelles et durables.", en: "We seek out the best sources to bring together noble, natural and sustainable essences." } },
    { title: { fr: "La composition", en: "The composition" }, text: { fr: "Nos partenaires parfumeurs équilibrent chaque accord avec patience, jusqu'à trouver la note juste.", en: "Our partner perfumers balance every accord patiently, until the right note is found." } },
    { title: { fr: "L'écrin", en: "The case" }, text: { fr: "Un flacon épuré et un coffret soigné, conçus pour prolonger l'émotion dès l'ouverture.", en: "A pure bottle and a refined box, designed to extend the emotion from the moment you open it." } },
  ],
  shopEyebrow: { fr: "Notre boutique", en: "Our boutique" },
  shopTitle: { fr: "Rencontrons-nous à Vaison-la-Romaine", en: "Let's meet in Vaison-la-Romaine" },
  shopText: {
    fr: "Retrouvez Parfumarium dans notre boutique de la Grand Rue, à Vaison-la-Romaine. Nous sommes ravis d'y accueillir nos client·e·s pour un accompagnement personnalisé : prendre le temps de sentir, comparer et choisir, conseillé·e par notre équipe.",
    en: "Find Parfumarium in our boutique on the Grand Rue, in Vaison-la-Romaine. We're delighted to welcome our customers for personalised advice: take the time to smell, compare and choose, guided by our team.",
  },
  shopLine2: { fr: "Accompagnement personnalisé en boutique", en: "Personalised advice in store" },
  findUs: { fr: "Nous trouver", en: "Find us" },
  shopQuote: { fr: "« Le parfum se vit avant de se choisir. »", en: "“A perfume is experienced before it is chosen.”" },
  shopQuoteText: { fr: "Poussez la porte de notre boutique : chaque fragrance s'y découvre au calme, à votre rythme.", en: "Step into our boutique: every fragrance is discovered calmly, at your own pace." },
  ctaTitle: { fr: "Trouvez la fragrance qui deviendra votre signature.", en: "Find the fragrance that will become your signature." },
  explore: { fr: "Explorer la collection", en: "Explore the collection" },
  write: { fr: "Nous écrire", en: "Write to us" },
};

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero eyebrow={A.heroEyebrow} title={A.heroTitle} subtitle={A.heroSub} />

      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <h2 className="font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">{L(A.manifestoTitle, lang)}</h2>
            <div className="gold-rule mt-6" />
          </FadeIn>
          <FadeIn delay={120}>
            <div className="space-y-5 font-sans text-base leading-relaxed text-warmgray">
              {A.manifesto.map((p, i) => <p key={i}>{L(p, lang)}</p>)}
              <p className="font-serif text-xl italic text-amber">{L(A.quote, lang)}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="container-luxe">
          <FadeIn><SectionHeading eyebrow={L(A.valuesEyebrow, lang)} title={L(A.valuesTitle, lang)} /></FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {A.values.map((v, i) => (
              <FadeIn key={i} delay={i * 110}>
                <div className="h-full rounded-2xl border border-ink/8 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="font-serif text-2xl text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{L(v.title, lang)}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">{L(v.text, lang)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-24">
        <FadeIn><SectionHeading eyebrow={L(A.craftEyebrow, lang)} title={L(A.craftTitle, lang)} subtitle={L(A.craftSub, lang)} /></FadeIn>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {A.steps.map((step, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="h-full rounded-2xl border border-ink/8 bg-white/60 p-8">
                <span className="font-serif text-4xl text-gold/50">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl text-ink">{L(step.title, lang)}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">{L(step.text, lang)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-sage-light py-20 md:py-24">
        <div className="container-luxe grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <span className="eyebrow">{L(A.shopEyebrow, lang)}</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">{L(A.shopTitle, lang)}</h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 font-sans text-base leading-relaxed text-warmgray">{L(A.shopText, lang)}</p>
            <div className="mt-8 space-y-2 font-sans text-sm text-ink">
              <p className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" />Grand Rue, 84110 Vaison-la-Romaine</p>
              <p className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{L(A.shopLine2, lang)}</p>
            </div>
            <Link href="/contact" className="btn-outline mt-9">{L(A.findUs, lang)}</Link>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-[2rem] border border-champagne bg-white/70 p-10 text-center md:p-14">
              <Logo tone="gold" variant="icon" size={52} className="mx-auto mb-6" />
              <p className="font-serif text-2xl italic leading-relaxed text-ink">{L(A.shopQuote, lang)}</p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-warmgray">{L(A.shopQuoteText, lang)}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-20 text-center md:py-24">
        <div className="container-luxe">
          <FadeIn className="flex flex-col items-center">
            <Logo tone="gold" variant="icon" size={56} className="mb-8" />
            <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">{L(A.ctaTitle, lang)}</h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/collection" className="btn-primary">{L(A.explore, lang)}</Link>
              <Link href="/contact" className="btn-outline">{L(A.write, lang)}</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
