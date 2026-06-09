"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

/**
 * Notification discrète affichée en bas à droite à chaque ajout au panier.
 * Disparaît automatiquement après quelques secondes.
 */
export default function CartToast() {
  const { lastAddedAt, lastAdded, count } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (lastAddedAt === null) return;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 3400);
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
      <div className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-ink/95 p-3 pr-5 text-ivory shadow-soft backdrop-blur">
        {lastAdded && (
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/10">
            <Image
              src={lastAdded.image}
              alt={lastAdded.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </span>
        )}
        <div>
          <p className="font-sans text-sm">
            {lastAdded ? lastAdded.name : "Ajouté au panier"}
          </p>
          <p className="font-sans text-xs text-champagne/70">
            {lastAdded ? `${lastAdded.volume} · ` : ""}
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
