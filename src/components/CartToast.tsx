"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

/**
 * Notification discrète affichée en bas à droite à chaque ajout au panier.
 * Disparaît automatiquement après quelques secondes.
 */
export default function CartToast() {
  const { lastAddedAt, count } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (lastAddedAt === null) return;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(t);
  }, [lastAddedAt]);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[60] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-ink/95 px-5 py-4 text-ivory shadow-soft backdrop-blur">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink">
          ✓
        </span>
        <div>
          <p className="font-sans text-sm">Ajouté à votre panier</p>
          <p className="font-sans text-xs text-champagne/70">
            {count} article{count > 1 ? "s" : ""} au total
          </p>
        </div>
        <Link
          href="/panier"
          className="ml-2 font-sans text-xs uppercase tracking-luxe text-gold transition-colors hover:text-gold-soft"
        >
          Voir
        </Link>
      </div>
    </div>
  );
}
