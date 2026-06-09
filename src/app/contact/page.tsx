import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Parlons parfum",
  description:
    "Une question sur nos fragrances, une commande ou un partenariat ? L'équipe Parfumarium vous répond sous 24 heures. Contactez-nous dès maintenant.",
};

const INFOS = [
  { label: "E-mail", value: "bonjour@parfumarium.fr", href: "mailto:bonjour@parfumarium.fr" },
  { label: "Téléphone", value: "+33 1 23 45 67 89", href: "tel:+33123456789" },
  { label: "Adresse", value: "18 rue des Senteurs, 75008 Paris" },
  { label: "Horaires", value: "Lun. – Ven. · 9h – 18h" },
];

const FAQ = [
  {
    q: "Quels sont les délais d'expédition ?",
    a: "Vos commandes sont préparées et expédiées sous 72h en France métropolitaine.",
  },
  {
    q: "Comment choisir ma contenance ?",
    a: "Chaque parfum existe en 15, 30, 50 et 100 ml. Le 15 ml est idéal pour découvrir, le 100 ml pour adopter une signature au quotidien.",
  },
  {
    q: "Vos parfums sont-ils testés sur les animaux ?",
    a: "Jamais. Toutes nos créations sont cruelty-free et formulées dans le respect de normes strictes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons parfum"
        subtitle="Une question, une envie, un conseil olfactif ? Notre équipe est à votre écoute."
      />

      <section className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coordonnées */}
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-ink">Nos coordonnées</h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-8 space-y-6">
              {INFOS.map((info) => (
                <li key={info.label}>
                  <p className="font-sans text-xs uppercase tracking-luxe text-gold">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-1 block font-serif text-lg text-ink transition-colors hover:text-amber"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-serif text-lg text-ink">
                      {info.value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Formulaire */}
          <FadeIn delay={120} className="lg:col-span-8">
            <div className="rounded-2xl border border-ink/8 bg-sand/60 p-8 md:p-10">
              <h2 className="font-serif text-2xl text-ink">
                Écrivez-nous
              </h2>
              <p className="mt-2 font-sans text-sm text-warmgray">
                Réponse garantie sous 24 heures ouvrées.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* FAQ */}
        <FadeIn className="mt-20">
          <h2 className="text-center font-serif text-3xl text-ink">
            Questions fréquentes
          </h2>
          <span className="gold-rule mx-auto mt-5" aria-hidden />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-ink/8 bg-white/60 p-7"
              >
                <h3 className="font-serif text-lg text-ink">{item.q}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
