import FadeIn from "@/components/FadeIn";

const NOTES = [
  {
    family: "Notes de tête",
    text: "La première impression. Fraîche et lumineuse, elle vous accueille comme un sourire — bergamote, agrumes, fleur d'oranger.",
  },
  {
    family: "Notes de cœur",
    text: "L'âme du parfum. Elle se déploie au fil des heures et révèle sa personnalité — jasmin, rose, épices délicates.",
  },
  {
    family: "Notes de fond",
    text: "La signature qui demeure. Profonde et enveloppante, elle laisse une trace dans les mémoires — ambre, bois, musc.",
  },
];

/** Section ambiance sensorielle autour des notes olfactives. */
export default function Sensorial() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <span className="eyebrow">L'art olfactif</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-ink sm:text-4xl md:text-[2.75rem]">
              Un parfum se lit comme une histoire, en trois temps.
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-warmgray">
              Chez Parfumarium, chaque création suit une pyramide olfactive
              construite avec patience. Une introduction, un développement, une
              empreinte. Le parfum est une signature invisible — apprenez à la
              reconnaître.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {NOTES.map((note, i) => (
              <FadeIn key={note.family} delay={i * 130}>
                <div className="group flex gap-5 rounded-2xl border border-ink/8 bg-white/60 p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-soft">
                  <span className="mt-1 font-serif text-3xl text-gold/60 transition-colors duration-500 group-hover:text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">
                      {note.family}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-warmgray">
                      {note.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
