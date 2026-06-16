"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";
import Drawer from "./Drawer";
import { products, groups } from "@/data/products";

// Libellés courts pour les filtres (le `group` complet reste la valeur)
const SHORT_LABELS: Record<string, string> = {
  "Floraux / Fruités / Chyprés": "Floraux & Fruités",
  "Gourmands / Sucrés / Addictifs": "Gourmands",
  "Boisés / Cuir / Oud / Musqués": "Boisés & Cuir",
  "Frais / Agrumes / Aromatiques": "Frais & Agrumes",
};

const labelFor = (group: string) =>
  group === "Tous" ? "Toutes les familles" : SHORT_LABELS[group] ?? group;

/** Grille de la collection avec filtres par famille (pills + tiroir mobile). */
export default function CollectionGrid() {
  const [active, setActive] = useState<string>("Tous");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filters = ["Tous", ...groups];

  // Nombre de parfums par famille (pour les badges)
  const counts = useMemo(() => {
    const map: Record<string, number> = { Tous: products.length };
    for (const g of groups) map[g] = products.filter((p) => p.group === g).length;
    return map;
  }, []);

  const filtered = useMemo(
    () => (active === "Tous" ? products : products.filter((p) => p.group === active)),
    [active],
  );

  const choose = (group: string) => {
    setActive(group);
    setDrawerOpen(false);
  };

  return (
    <div className="container-luxe py-12 md:py-20">
      {/* Filtres desktop : pills */}
      <div className="mb-4 hidden flex-wrap items-center justify-center gap-3 md:flex">
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

      {/* Filtre mobile : barre + bouton ouvrant le tiroir */}
      <div className="mb-6 flex items-center justify-between gap-3 md:hidden">
        <p className="font-sans text-xs uppercase tracking-luxe text-warmgray">
          {filtered.length} parfum{filtered.length > 1 ? "s" : ""}
        </p>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-2.5 font-sans text-xs uppercase tracking-luxe text-ivory"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          {labelFor(active)}
        </button>
      </div>

      {/* Compteur desktop */}
      <p className="mb-12 hidden text-center font-sans text-xs uppercase tracking-luxe text-warmgray md:block">
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

      {/* Tiroir latéral des familles (mobile) */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        side="left"
        title="Familles olfactives"
      >
        <ul className="px-2 py-2">
          {filters.map((group) => {
            const isActive = active === group;
            return (
              <li key={group}>
                <button
                  type="button"
                  onClick={() => choose(group)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-4 text-left transition-colors ${
                    isActive ? "bg-cream" : "hover:bg-sand"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        isActive ? "border-gold bg-gold text-ink" : "border-ink/25"
                      }`}
                    >
                      {isActive && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span className={`font-serif text-lg ${isActive ? "text-amber" : "text-ink"}`}>
                      {labelFor(group)}
                    </span>
                  </span>
                  <span className="font-sans text-xs text-warmgray">
                    {counts[group] ?? 0}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
}
