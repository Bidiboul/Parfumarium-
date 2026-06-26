"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "parfumarium-lang";

/**
 * Fournit la langue courante (fr/en).
 * - 1ère visite : détecte la langue du navigateur (anglais → "en", sinon "fr").
 * - Choix mémorisé dans localStorage.
 * - Met à jour l'attribut <html lang>.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    let initial: Lang = "fr";
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "fr" || saved === "en") {
        initial = saved;
      } else {
        const nav = (navigator.language || "fr").toLowerCase();
        initial = nav.startsWith("fr") ? "fr" : "en";
      }
    } catch {
      /* ignore */
    }
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang doit être utilisé dans <LanguageProvider>");
  }
  return ctx;
}
