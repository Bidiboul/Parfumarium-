import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import { LAST_UPDATED } from "@/data/legal";

/** Un bloc de contenu : paragraphe (string) ou liste à puces (string[]) */
export type LegalBlock = string | string[];

export interface LegalSection {
  title?: string;
  blocks: LegalBlock[];
}

interface LegalPageProps {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  sections: LegalSection[];
}

/**
 * Gabarit commun aux pages légales (mentions légales, CGV, confidentialité…).
 * Rendu sobre et lisible, cohérent avec l'identité du site.
 */
export default function LegalPage({
  eyebrow = "Informations",
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />

      <section className="container-luxe py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-warmgray">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          {intro && (
            <div className="mt-6 font-sans text-base leading-relaxed text-ink/80">
              {intro}
            </div>
          )}

          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                {section.title && (
                  <h2 className="font-serif text-2xl text-ink">
                    {section.title}
                  </h2>
                )}
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, j) =>
                    Array.isArray(block) ? (
                      <ul
                        key={j}
                        className="list-disc space-y-2 pl-5 font-sans text-[15px] leading-relaxed text-warmgray"
                      >
                        {block.map((li, k) => (
                          <li key={k}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        key={j}
                        className="font-sans text-[15px] leading-relaxed text-warmgray"
                      >
                        {block}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 border-t border-champagne pt-6 font-sans text-xs leading-relaxed text-warmgray/80">
            Ce document est fourni à titre informatif et doit être adapté puis
            validé selon votre situation. Pour toute question, contactez-nous à
            l'adresse indiquée dans les mentions légales.
          </p>
        </div>
      </section>
    </>
  );
}
