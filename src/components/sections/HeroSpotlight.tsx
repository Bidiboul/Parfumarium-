"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductBySlug, formatPrice } from "@/data/products";
import { home } from "@/data/homeContent";

/**
 * Petite carte « Parfum du moment » qui surgit dans le hero avec un effet
 * bounce, peu après l'arrivée sur le site. CTA vers le parfum mis en avant.
 * Refermable (croix).
 */
export default function HeroSpotlight() {
  const product = getProductBySlug(home.spotlight.productSlug);
  const [shown, setShown] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 650);
    return () => clearTimeout(t);
  }, []);

  if (!product || closed) return null;

  return (
    <div
      className={`absolute right-3 top-[158px] z-20 w-[13rem] sm:right-8 sm:top-[176px] sm:w-[16rem] md:right-10 ${
        shown ? "animate-spotlight-in" : "opacity-0"
      }`}
    >
      <div className="relative flex items-center gap-3 rounded-2xl border border-gold/40 bg-ivory/95 p-2.5 pr-4 shadow-card-hover backdrop-blur">
        {/* Pastille clignotante */}
        <span className="absolute -left-1.5 -top-1.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
        </span>

        {/* Fermer */}
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Fermer"
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-ink/10 bg-ivory text-ink shadow-soft transition-colors hover:text-amber"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <Link
          href={`/produit/${product.slug}`}
          className="group flex items-center gap-3"
        >
          <span
            className="relative h-16 w-14 shrink-0 overflow-hidden rounded-xl border border-champagne"
            style={{ backgroundColor: `${product.accent}14` }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="56px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-[0.14em] text-gold">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
              </svg>
              {home.spotlight.label}
            </span>
            <span className="mt-0.5 block truncate font-serif text-base text-ink">
              {product.name}
            </span>
            <span className="mt-0.5 flex items-center gap-1.5 font-sans text-xs text-amber">
              dès {formatPrice(product.price)}
              <span className="text-ink transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
