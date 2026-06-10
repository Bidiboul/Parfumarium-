import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import SectionHeading from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "À propos — La maison Parfumarium",
  description:
    "Parfumarium sélectionne de beaux parfums pour leur caractère et leur signature olfactive. Découvrez notre univers et notre boutique à Vaison-la-Romaine.",
};

const VALUES = [
  {
    title: "Élégance",
    text: "Une esthétique sobre et raffinée, dans le flacon comme dans le sillage.",
  },
  {
    title: "Le conseil",
    text: "En boutique, nous prenons le temps de vous accompagner pour trouver la fragrance qui vous ressemble.",
  },
  {
    title: "Émotion",
    text: "Chaque parfum raconte une histoire et réveille un souvenir, une envie, un instant.",
  },
  {
    title: "Raffinement",
    text: "Des matières choisies, un travail patient, une finition irréprochable.",
  },
];

const STEPS = [
  {
    year: "01",
    title: "La sélection des matières",
    text: "Nous parcourons les meilleures sources pour réunir des essences nobles, naturelles et durables.",
  },
  {
    year: "02",
    title: "La composition",
    text: "Nos partenaires parfumeurs équilibrent chaque accord avec patience, jusqu'à trouver la note juste.",
  },
  {
    year: "03",
    title: "L'écrin",
    text: "Un flacon épuré et un coffret soigné, conçus pour prolonger l'émotion dès l'ouverture.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre histoire"
        title="L'art de choisir son parfum"
        subtitle="Parfumarium réunit de belles fragrances, choisies pour leur caractère et leur signature olfactive."
      />

      {/* Manifeste */}
      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <h2 className="font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">
              Une maison dédiée au beau parfum.
            </h2>
            <div className="gold-rule mt-6" />
          </FadeIn>
          <FadeIn delay={120}>
            <div className="space-y-5 font-sans text-base leading-relaxed text-warmgray">
              <p>
                Parfumarium est née d'une passion simple : celle des belles
                fragrances. Nous sélectionnons chaque parfum pour sa richesse,
                sa tenue et sa signature olfactive, afin de composer une
                collection qui a du caractère.
              </p>
              <p>
                Nous croyons qu'un parfum se choisit pour ce qu'il révèle de
                vous. C'est pourquoi nous prenons le temps de vous guider à
                travers différents univers, en boutique comme en ligne, pour
                trouver celui qui vous ressemble vraiment.
              </p>
              <p className="font-serif text-xl italic text-amber">
                « L'art de choisir le parfum qui vous ressemble. »
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-sand py-20 md:py-24">
        <div className="container-luxe">
          <FadeIn>
            <SectionHeading
              eyebrow="Ce qui nous guide"
              title="Nos valeurs"
            />
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 110}>
                <div className="h-full rounded-2xl border border-ink/8 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="font-serif text-2xl text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{v.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">
                    {v.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="container-luxe py-20 md:py-24">
        <FadeIn>
          <SectionHeading
            eyebrow="Notre savoir-faire"
            title="De la matière à l'émotion"
            subtitle="Trois étapes, une même exigence : faire naître un parfum dont on se souvient."
          />
        </FadeIn>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <FadeIn key={step.year} delay={i * 120}>
              <div className="h-full rounded-2xl border border-ink/8 bg-white/60 p-8">
                <span className="font-serif text-4xl text-gold/50">
                  {step.year}
                </span>
                <h3 className="mt-4 font-serif text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Boutique */}
      <section className="bg-sage-light py-20 md:py-24">
        <div className="container-luxe grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <span className="eyebrow">Notre boutique</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">
              Rencontrons-nous à Vaison-la-Romaine
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 font-sans text-base leading-relaxed text-warmgray">
              Retrouvez Parfumarium dans notre boutique de la Grand Rue, à
              Vaison-la-Romaine. Nous sommes ravis d'y accueillir nos client·e·s
              pour un accompagnement personnalisé : prendre le temps de sentir,
              comparer et choisir, conseillé·e par notre équipe.
            </p>
            <div className="mt-8 space-y-2 font-sans text-sm text-ink">
              <p className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Grand Rue, 84110 Vaison-la-Romaine
              </p>
              <p className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Accompagnement personnalisé en boutique
              </p>
            </div>
            <Link href="/contact" className="btn-outline mt-9">
              Nous trouver
            </Link>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-[2rem] border border-champagne bg-white/70 p-10 text-center md:p-14">
              <Logo tone="gold" variant="icon" size={52} className="mx-auto mb-6" />
              <p className="font-serif text-2xl italic leading-relaxed text-ink">
                « Le parfum se vit avant de se choisir. »
              </p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-warmgray">
                Poussez la porte de notre boutique : chaque fragrance s'y
                découvre au calme, à votre rythme.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 text-center md:py-24">
        <div className="container-luxe">
          <FadeIn className="flex flex-col items-center">
            <Logo tone="gold" variant="icon" size={56} className="mb-8" />
            <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">
              Trouvez la fragrance qui deviendra votre signature.
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/collection" className="btn-primary">
                Explorer la collection
              </Link>
              <Link href="/contact" className="btn-outline">
                Nous écrire
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
