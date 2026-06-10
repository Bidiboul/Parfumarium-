import FadeIn from "@/components/FadeIn";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    title: "Fragrances raffinées",
    text: "Des compositions travaillées avec des matières nobles, pour un sillage qui dure et qui se remarque.",
    icon: (
      <path
        d="M12 3c1.8 3.2 1.8 5.6 0 9-1.8-3.4-1.8-5.8 0-9Zm0 9c2.6 1.4 3.8 3 4 6-3-.6-4.6-2-4-6Zm0 0c-2.6 1.4-3.8 3-4 6 3-.6 4.6-2 4-6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Conseil en boutique",
    text: "À Vaison-la-Romaine, notre équipe vous accompagne pour trouver la fragrance qui vous ressemble.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M12 7.5v9M14.5 9.5c-.5-1-1.5-1.4-2.6-1.4-1.4 0-2.4.7-2.4 1.9 0 2.6 5 1.3 5 4 0 1.3-1.1 2-2.6 2-1.2 0-2.2-.5-2.7-1.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Design élégant",
    text: "Des flacons épurés et raffinés, pensés comme des objets que l'on aime exposer et offrir.",
    icon: (
      <path
        d="M9 3h6v3l2 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-3V3Zm-2 8h10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Expédition soignée",
    text: "Votre commande est préparée et expédiée sous 72h, dans un écrin élégant digne de la maison.",
    icon: (
      <>
        <path
          d="M3 7h11v8H3V7Zm11 3h4l3 3v2h-7v-5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="17" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      </>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-luxe">
        <FadeIn>
          <SectionHeading
            eyebrow="Nos engagements"
            title="Pourquoi choisir Parfumarium ?"
            subtitle="Quatre promesses qui guident chacune de nos créations."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 110}>
              <div className="group h-full rounded-2xl border border-ink/8 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne/50 text-amber transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-6 font-serif text-xl text-ink">{f.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">
                  {f.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
