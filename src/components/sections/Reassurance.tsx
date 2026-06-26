"use client";

import { useT } from "@/i18n/dict";

const ICONS = [
  (
    <>
      <path d="M3 7h11v8H3V7Zm11 3h4l3 3v2h-7v-5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  (
    <path d="M12 3c1.7 3 1.7 5.4 0 8.4-1.7-3-1.7-5.4 0-8.4Zm0 8.4c2.5 1.3 3.6 2.9 3.8 5.7-2.9-.6-4.4-1.9-3.8-5.7Zm0 0c-2.5 1.3-3.6 2.9-3.8 5.7 2.9-.6 4.4-1.9 3.8-5.7Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  ),
  (
    <>
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 20c0-3.3 3-5.2 6.5-5.2s6.5 1.9 6.5 5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
];

/** Barre de réassurance premium : affichée juste sous le hero. */
export default function Reassurance() {
  const t = useT();

  return (
    <section className="border-b border-champagne bg-white">
      <div className="container-luxe grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-8">
        {t.reassurance.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 text-center md:flex-row md:gap-4 md:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-amber">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {ICONS[i]}
              </svg>
            </span>
            <div>
              <p className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-ink">
                {item.title}
              </p>
              <p className="mt-1 font-sans text-xs leading-relaxed text-warmgray">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
