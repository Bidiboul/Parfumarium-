import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { home } from "@/data/homeContent";

/**
 * 4 blocs éditoriaux (image + titre + texte) en grille 2×2 sur desktop,
 * empilés sur mobile. Texte en surimpression sur un léger voile sombre.
 */
export default function FourBlocks() {
  return (
    <section className="container-luxe py-20 md:py-28">
      <div className="grid gap-5 sm:grid-cols-2">
        {home.blocks.map((block, i) => (
          <FadeIn key={block.title} delay={(i % 2) * 120}>
            <article className="group relative h-full min-h-[20rem] overflow-hidden rounded-2xl md:min-h-[24rem]">
              <Image
                src={block.image}
                alt={block.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              {/* Voile sombre pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />

              {/* Contenu */}
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <span className="gold-rule" aria-hidden />
                <h3 className="mt-4 font-serif text-2xl text-ivory md:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-ivory/85">
                  {block.text}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
