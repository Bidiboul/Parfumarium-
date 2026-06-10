import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import { home } from "@/data/homeContent";

/** Section institutionnelle « Notre approche » : fond clair, texte centré. */
export default function Approche() {
  const { approche } = home;

  return (
    <section className="bg-white">
      <div className="container-luxe py-20 text-center md:py-28">
        <FadeIn className="mx-auto flex max-w-3xl flex-col items-center">
          <Logo tone="gold" variant="icon" size={48} className="mb-7" />
          <span className="eyebrow">{approche.eyebrow}</span>
          <h2 className="mt-5 font-serif text-[1.7rem] leading-snug text-ink text-balance sm:text-3xl md:text-[2.3rem]">
            {approche.title}
          </h2>
          {approche.subtitle && (
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-warmgray">
              {approche.subtitle}
            </p>
          )}
          <Link href={approche.ctaHref} className="btn-outline mt-9">
            {approche.ctaLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
