"use client";

import PageHero from "@/components/PageHero";
import { LAST_UPDATED } from "@/data/legal";
import { useLang } from "@/i18n/LanguageProvider";
import { useT } from "@/i18n/dict";

export interface Bi {
  fr: string;
  en: string;
}
/** Un bloc : paragraphe (Bi) ou liste à puces (Bi[]) */
export type LegalBlock = Bi | Bi[];

export interface LegalSection {
  title?: Bi;
  blocks: LegalBlock[];
}

interface LegalPageProps {
  title: Bi;
  intro?: Bi;
  sections: LegalSection[];
}

/** Gabarit bilingue commun aux pages légales. */
export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  const { lang } = useLang();
  const tl = useT().legal;

  return (
    <>
      <PageHero eyebrow={tl.eyebrow} title={title} />

      <section className="container-luxe py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-luxe text-warmgray">
            {tl.updated} {LAST_UPDATED}
          </p>

          {intro && (
            <div className="mt-6 font-sans text-base leading-relaxed text-ink/80">
              {intro[lang]}
            </div>
          )}

          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                {section.title && (
                  <h2 className="font-serif text-2xl text-ink">{section.title[lang]}</h2>
                )}
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, j) =>
                    Array.isArray(block) ? (
                      <ul key={j} className="list-disc space-y-2 pl-5 font-sans text-[15px] leading-relaxed text-warmgray">
                        {block.map((li, k) => (
                          <li key={k}>{li[lang]}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="font-sans text-[15px] leading-relaxed text-warmgray">
                        {block[lang]}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 border-t border-champagne pt-6 font-sans text-xs leading-relaxed text-warmgray/80">
            {tl.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
