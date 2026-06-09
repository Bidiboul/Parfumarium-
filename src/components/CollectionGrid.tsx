"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";
import { products, groups } from "@/data/products";

// Libellés courts pour les filtres (le `group` complet reste la valeur)
const SHORT_LABELS: Record<string, string> = {
  "Floraux Féminins / Iconiques": "Floraux iconiques",
  "Floraux Propres / Romantiques": "Floraux romantiques",
  "Gourmands / Sucrés / Addictifs": "Gourmands",
  "Boisés / Niches / Luxe / Séduction": "Boisés & Niche",
  "Frais / Été / Vacances": "Frais & Estivaux",
};

/** Grille de la collection avec filtres par famille olfactive. */
export default function CollectionGrid() {
  const [active, setActive] = useState<string>("Tous");

  const filtered = useMemo(
    () =>
      active === "Tous"
        ? products
        : products.filter((p) => p.group === active),
    [active],
  );

  const filters = ["Tous", ...groups];

  return (
    <div className="container-luxe py-16 md:py-20">
      {/* Filtres */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
        {filters.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setActive(group)}
            className={`rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-luxe transition-all duration-300 ${
              active === group
                ? "border-ink bg-ink text-ivory"
                : "border-ink/15 text-ink hover:border-gold hover:text-amber"
            }`}
          >
            {group === "Tous" ? "Tous" : SHORT_LABELS[group] ?? group}
          </button>
        ))}
      </div>

      <p className="mb-12 text-center font-sans text-xs uppercase tracking-luxe text-warmgray">
        {filtered.length} parfum{filtered.length > 1 ? "s" : ""}
      </p>

      {/* Grille */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product, i) => (
          <FadeIn key={product.slug} delay={(i % 4) * 90}>
            <ProductCard product={product} priority={i < 4} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-serif text-xl text-warmgray">
          Aucun parfum dans cette famille pour le moment.
        </p>
      )}
    </div>
  );
}
