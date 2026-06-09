import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "À propos — La maison Parfumarium",
  description:
    "Découvrez l'histoire et les valeurs de Parfumarium : élégance, accessibilité et raffinement. Une maison qui rend le luxe olfactif accessible à toutes et à tous.",
};

const VALUES = [
  {
    title: "Élégance",
    text: "Une esthétique sobre et raffinée, dans le flacon comme dans le sillage.",
  },
  {
    title: "Accessibilité",
    text: "Le beau pour tous. Des prix justes, sans jamais transiger sur la qualité.",
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
    text: "Nos parfumeurs équilibrent chaque accord avec patience, jusqu'à trouver la note juste.",
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
        title="Le luxe, repensé pour le quotidien"
        subtitle="Parfumarium est née d'une conviction simple : l'élégance n'a pas besoin d'être inaccessible."
      />

      {/* Manifeste */}
      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <h2 className="font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl">
              Une maison fondée sur une idée juste.
            </h2>
            <div className="gold-rule mt-6" />
          </FadeIn>
          <FadeIn delay={120}>
            <div className="space-y-5 font-sans text-base leading-relaxed text-warmgray">
              <p>
                Pendant trop longtemps, le parfum d'exception a rimé avec prix
                inaccessible. Nous avons voulu briser cette équation. Pourquoi
                l'émotion d'une belle fragrance devrait-elle être réservée à
                quelques-uns ?
              </p>
              <p>
                Parfumarium compose des parfums à la hauteur des grandes
                maisons, en supprimant ce qui ne se sent pas : marges
                excessives, intermédiaires, publicité tapageuse. Ne reste que
                l'essentiel — la qualité du jus et la beauté du geste.
              </p>
              <p className="font-serif text-xl italic text-amber">
                « Un luxe discret, conçu pour le quotidien. »
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

      {/* CTA */}
      <section className="bg-ink py-20 text-center text-ivory md:py-24">
        <div className="container-luxe">
          <FadeIn>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-balance sm:text-4xl">
              Trouvez la fragrance qui deviendra votre signature.
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/collection" className="btn-gold">
                Explorer la collection
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-champagne/30 text-ivory hover:text-gold"
              >
                Nous écrire
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
