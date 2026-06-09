"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";
import { products, type OlfactiveFamily } from "@/data/products";

const FAMILIES: (OlfactiveFamily | "Tous")[] = [
  "Tous",
  "Ambré",
  "Boisé",
  "Floral",
  "Frais",
  "Oriental",
];

/** Grille de la collection avec filtres par famille olfactive. */
export default function CollectionGrid() {
  const [active, setActive] = useState<(typeof FAMILIES)[number]>("Tous");

  const filtered = useMemo(
    () =>
      active === "Tous"
        ? products
        : products.filter((p) => p.family === active),
    [active],
  );

  return (
    <div className="container-luxe py-16 md:py-20">
      {/* Filtres */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {FAMILIES.map((family) => (
          <button
            key={family}
            type="button"
            onClick={() => setActive(family)}
            className={`rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-luxe transition-all duration-300 ${
              active === family
                ? "border-ink bg-ink text-ivory"
                : "border-ink/15 text-ink hover:border-gold hover:text-amber"
            }`}
          >
            {family}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <FadeIn key={product.slug} delay={(i % 3) * 100}>
            <ProductCard product={product} />
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
