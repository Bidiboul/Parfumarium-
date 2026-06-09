import FadeIn from "@/components/FadeIn";
import SectionHeading from "./SectionHeading";

const REVIEWS = [
  {
    name: "Camille L.",
    location: "Paris",
    text: "Un sillage incroyable pour ce prix. On me demande sans cesse quel est mon parfum. Creamy Milk est devenu ma signature.",
    product: "Creamy Milk 590",
  },
  {
    name: "Théo M.",
    location: "Lyon",
    text: "Velvet Tobacco tient toute la journée et reste élégant du matin au soir. La qualité n'a rien à envier aux grandes maisons.",
    product: "Velvet Tobacco 196",
  },
  {
    name: "Inès R.",
    location: "Bordeaux",
    text: "Le flacon est superbe, l'odeur sublime et l'emballage soigné. J'ai eu l'impression d'ouvrir un vrai cadeau de luxe.",
    product: "Coffee Rose 562",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Note 5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-luxe">
        <FadeIn>
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title="Ce que disent nos client·e·s"
            subtitle="Des fragrances qui se vivent, et qui se racontent."
          />
        </FadeIn>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <FadeIn key={review.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/8 bg-ivory p-8 shadow-card">
                <Stars />
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                  « {review.text} »
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
