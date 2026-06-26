"use client";

import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Logo from "@/components/Logo";
import { loginUrl, registerUrl, accountUrl } from "@/lib/shopConfig";
import { useT } from "@/i18n/dict";

const ICONS = [
  (
    <path d="M6 7h12l-1 13H7L6 7Zm3 0a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  ),
  (
    <>
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 20c0-3.3 3-5.2 6.5-5.2s6.5 1.9 6.5 5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
];

export default function AccountPage() {
  const t = useT().account;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="container-luxe py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="rounded-2xl border border-champagne bg-cream p-8 md:p-10">
              <Logo tone="gold" variant="icon" size={46} className="mb-6 block" />
              <h2 className="font-serif text-2xl text-ink">{t.secure}</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">{t.secureText}</p>

              <div className="mt-8 flex flex-col gap-3">
                <a href={loginUrl} className="btn-primary w-full">{t.login}</a>
                <a href={registerUrl} className="btn-outline w-full">{t.register}</a>
              </div>

              <p className="mt-6 flex items-center gap-2 font-sans text-xs text-warmgray">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gold">
                  <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {t.encrypted}
              </p>
            </div>

            <p className="mt-5 text-center font-sans text-sm text-warmgray">
              {t.already}{" "}
              <a href={accountUrl} className="font-medium text-amber underline-offset-4 hover:underline">
                {t.goOrders}
              </a>
            </p>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7">
            <h2 className="font-serif text-2xl text-ink">{t.universe}</h2>
            <div className="gold-rule mt-5" />
            <div className="mt-8 space-y-4">
              {t.features.map((f, i) => (
                <div key={i} className="flex gap-5 rounded-2xl border border-champagne bg-white p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-amber">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{ICONS[i]}</svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-ink">{f.title}</h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-warmgray">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
