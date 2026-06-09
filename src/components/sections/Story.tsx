import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/** Section storytelling de marque (accueil). */
export default function Story() {
  return (
    <section className="bg-ink py-20 text-ivory md:py-28">
      <div className="container-luxe grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Visuel typographique */}
        <FadeIn className="relative order-2 md:order-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-gradient-to-br from-amber/30 via-ink to-ink p-12 md:p-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
            <p className="font-serif text-2xl italic leading-relaxed text-champagne md:text-3xl">
              « Chaque note raconte une émotion. »
            </p>
            <div className="gold-rule mt-8" />
            <p className="mt-8 font-sans text-sm leading-relaxed text-champagne/70">
              De la sélection des matières à la dernière touche du flacon, nous
              cultivons une exigence simple : faire du beau, à hauteur de
              chacun.
            </p>
          </div>
        </FadeIn>

        {/* Texte */}
        <FadeIn className="order-1 md:order-2">
          <span className="eyebrow">Notre histoire</span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-balance sm:text-4xl md:text-[2.75rem]">
            Le luxe, repensé pour celles et ceux qui l'aiment vrai.
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 font-sans text-base leading-relaxed text-champagne/80">
            Parfumarium est née d'une conviction : l'élégance n'a pas besoin
            d'être inaccessible. Nous composons des fragrances à la hauteur des
            grandes maisons, sans les marges qui les éloignent du quotidien.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-champagne/80">
            Des matières sélectionnées avec soin, un travail olfactif patient,
            et l'envie de transmettre une émotion à chaque vaporisation. Voilà
            notre signature.
          </p>
          <Link href="/a-propos" className="btn-gold mt-9">
            Découvrir la maison
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
