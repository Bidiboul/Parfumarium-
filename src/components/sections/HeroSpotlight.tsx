"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductBySlug } from "@/data/products";
import { home } from "@/data/homeContent";
import { useT } from "@/i18n/dict";

/**
 * Médaillon rond « Parfum du moment » qui surgit dans le hero (effet bounce).
 * Photo du flacon dans un cercle à liseré doré + label en bas sur un léger
 * voile sombre. Cliquable, refermable.
 */
export default function HeroSpotlight() {
  const t = useT();
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
      className={`absolute right-4 top-[156px] z-20 sm:right-10 sm:top-[176px] ${
        shown ? "animate-spotlight-in" : "opacity-0"
      }`}
    >
      <div className="relative h-[6.5rem] w-[6.5rem] sm:h-[7.5rem] sm:w-[7.5rem]">
        {/* Fermer */}
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Fermer"
          className="absolute -right-1.5 -top-1.5 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-ink/10 bg-ivory text-ink shadow-soft transition-colors hover:text-amber"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Pastille clignotante */}
        <span className="absolute right-1 top-1 z-20 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
        </span>

        <Link
          href={`/produit/${product.slug}`}
          aria-label={`${t.spotlight.label} : ${product.name}`}
          className="group block h-full w-full rounded-full bg-gradient-to-br from-gold-soft via-gold to-amber p-[2.5px] shadow-card-hover transition-transform duration-500 hover:scale-[1.05]"
        >
          <span className="relative block h-full w-full overflow-hidden rounded-full ring-1 ring-ivory/70">
            {/* Photo du flacon */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="120px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Voile sombre en bas pour le label */}
            <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent" />
            {/* Label */}
            <span className="absolute inset-x-0 bottom-2.5 flex flex-col items-center px-2 text-center leading-tight text-ivory">
              <span className="text-[8px] tracking-[0.22em] text-gold">✦</span>
              <span className="mt-1 font-sans text-[8px] font-medium uppercase tracking-[0.14em]">
                {t.spotlight.label}
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
