"use client";

import Link from "next/link";
import { useLang } from "@/i18n/LanguageProvider";
import { L } from "@/i18n/dict";

const N = {
  eyebrow: { fr: "Erreur 404", en: "Error 404" },
  title: { fr: "Cette fragrance s'est évaporée", en: "This fragrance has evaporated" },
  text: {
    fr: "La page que vous cherchez n'existe pas ou a été déplacée. Laissez-vous plutôt guider par nos créations.",
    en: "The page you're looking for doesn't exist or has moved. Let our creations guide you instead.",
  },
  home: { fr: "Retour à l'accueil", en: "Back to home" },
  collection: { fr: "Voir la collection", en: "View the collection" },
};

export default function NotFound() {
  const { lang } = useLang();
  return (
    <section className="container-luxe flex min-h-[80vh] flex-col items-center justify-center pt-[152px] text-center">
      <span className="eyebrow">{L(N.eyebrow, lang)}</span>
      <h1 className="mt-4 font-serif text-5xl text-ink sm:text-6xl">{L(N.title, lang)}</h1>
      <p className="mt-5 max-w-md font-sans text-warmgray">{L(N.text, lang)}</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">{L(N.home, lang)}</Link>
        <Link href="/collection" className="btn-outline">{L(N.collection, lang)}</Link>
      </div>
    </section>
  );
}
