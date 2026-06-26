import type { Product } from "@/data/products";
import { productsEn } from "@/data/productsEn";
import type { Lang } from "./LanguageProvider";

/** Renvoie le produit avec ses textes traduits selon la langue. */
export function localizeProduct(p: Product, lang: Lang): Product {
  if (lang === "fr") return p;
  const en = productsEn[p.slug];
  if (!en) return p;
  return {
    ...p,
    family: en.family,
    mood: en.mood,
    shortDescription: en.shortDescription,
    paragraphs: en.paragraphs,
    notes: en.notes,
  };
}
