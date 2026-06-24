"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductBySlug } from "@/data/products";
import { home } from "@/data/homeContent";

/**
 * Pastille ronde « Parfum du moment » qui surgit dans le hero (effet bounce).
 * Flacon au centre + texte incurvé qui tourne lentement autour. Cliquable,
 * refermable. Parfum mis en avant configurable dans homeContent (spotlight).
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

  const ring = ` ${home.spotlight.label} · `.toUpperCase().repeat(2);

  return (
    <div
      className={`absolute right-4 top-[156px] z-20 sm:right-10 sm:top-[176px] ${
        shown ? "animate-spotlight-in" : "opacity-0"
      }`}
    >
      <div className="relative h-[5.5rem] w-[5.5rem] sm:h-28 sm:w-28">
        {/* Pastille clignotante */}
        <span className="absolute right-1 top-1 z-10 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
        </span>

        {/* Fermer */}
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Fermer"
          className="absolute -left-1 -top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-ink/10 bg-ivory text-ink shadow-soft transition-colors hover:text-amber"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <Link
          href={`/produit/${product.slug}`}
          aria-label={`${home.spotlight.label} : ${product.name}`}
          className="group block h-full w-full rounded-full bg-ivory/90 shadow-card-hover backdrop-blur transition-transform duration-500 hover:scale-105"
        >
          {/* Texte incurvé qui tourne */}
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite] text-amber"
          >
            <defs>
              <path
                id="spotlight-ring"
                d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
                fill="none"
              />
            </defs>
            <text className="fill-current font-sans" fontSize="8.5" letterSpacing="1.5">
              <textPath href="#spotlight-ring" startOffset="0">
                {ring}
              </textPath>
            </text>
          </svg>

          {/* Flacon au centre */}
          <span
            className="absolute inset-[19%] overflow-hidden rounded-full border border-gold/50"
            style={{ backgroundColor: `${product.accent}1f` }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="80px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
