"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";
import { formatPrice } from "@/data/products";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

/** Normalise (minuscules, sans accents) pour une recherche tolérante. */
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/**
 * Recherche instantanée : filtre les parfums par nom, famille, notes,
 * correspondance olfactive… Ouvert depuis la loupe du header.
 */
export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus auto + verrouillage du scroll quand ouvert
  useEffect(() => {
    if (open) {
      setQuery("");
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Fermeture avec Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return [];
    return products
      .filter((p) => {
        const haystack = normalize(
          [
            p.name,
            p.family,
            p.group,
            p.inspiration,
            ...p.notes.head,
            ...p.notes.heart,
            ...p.notes.base,
          ].join(" "),
        );
        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche de parfums"
    >
      {/* Fond */}
      <button
        type="button"
        aria-label="Fermer la recherche"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm"
      />

      {/* Panneau */}
      <div className="relative mt-[10vh] w-full max-w-2xl animate-fade-up px-4">
        <div className="overflow-hidden rounded-2xl border border-champagne bg-white shadow-card-hover">
          {/* Champ */}
          <div className="flex items-center gap-3 border-b border-champagne px-5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gold">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un parfum, une note, une famille…"
              className="w-full bg-transparent py-5 font-sans text-base text-ink placeholder:text-warmgray/70 focus:outline-none"
            />
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 font-sans text-xs uppercase tracking-luxe text-warmgray transition-colors hover:text-amber"
            >
              Échap
            </button>
          </div>

          {/* Résultats */}
          <div className="max-h-[55vh] overflow-y-auto">
            {query.trim().length < 2 ? (
              <p className="px-5 py-8 text-center font-sans text-sm text-warmgray">
                Tapez au moins 2 lettres pour lancer la recherche.
              </p>
            ) : results.length === 0 ? (
              <p className="px-5 py-8 text-center font-sans text-sm text-warmgray">
                Aucun parfum ne correspond à « {query} ».
              </p>
            ) : (
              <ul className="divide-y divide-champagne/60">
                {results.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/produit/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-cream"
                    >
                      <span className="relative h-14 w-12 shrink-0 overflow-hidden rounded-lg border border-champagne">
                        <Image src={p.image} alt={p.name} fill sizes="48px" className="object-cover" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-serif text-lg text-ink">
                          {p.name}
                        </span>
                        <span className="block truncate font-sans text-xs text-warmgray">
                          {p.family}
                        </span>
                      </span>
                      <span className="shrink-0 font-serif text-base text-amber">
                        dès {formatPrice(p.price)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
