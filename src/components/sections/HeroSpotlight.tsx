"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductBySlug } from "@/data/products";
import { home } from "@/data/homeContent";

/**
 * Sceau rond « Parfum du moment » qui surgit dans le hero (effet bounce).
 * Style cachet/médaillon premium : flacon au centre, fins liserés dorés,
 * texte incurvé sur deux arcs. Cliquable, refermable.
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
      className={`absolute right-4 top-[156px] z-20 sm:right-10 sm:top-[176px] ${
        shown ? "animate-spotlight-in" : "opacity-0"
      }`}
    >
      <div className="relative h-24 w-24 sm:h-[7.5rem] sm:w-[7.5rem]">
        {/* Fermer */}
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Fermer"
          className="absolute -right-1 -top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-ink/10 bg-ivory text-ink shadow-soft transition-colors hover:text-amber"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <Link
          href={`/produit/${product.slug}`}
          aria-label={`${home.spotlight.label} : ${product.name}`}
          className="group relative block h-full w-full rounded-full bg-ivory shadow-card-hover transition-transform duration-500 hover:scale-[1.04]"
        >
          {/* Liserés + texte incurvé */}
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <path id="hs-top" d="M 18,60 A 42,42 0 0 1 102,60" fill="none" />
              <path id="hs-bot" d="M 22,60 A 38,38 0 0 0 98,60" fill="none" />
            </defs>
            {/* Liserés dorés */}
            <circle cx="60" cy="60" r="57" fill="none" stroke="#B9975B" strokeWidth="1" />
            <circle cx="60" cy="60" r="52" fill="none" stroke="#B9975B" strokeOpacity="0.45" strokeWidth="0.6" />
            {/* Texte haut */}
            <text
              fill="#7A4E2D"
              fontSize="9"
              letterSpacing="2.2"
              textAnchor="middle"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              <textPath href="#hs-top" startOffset="50%">
                PARFUM DU MOMENT
              </textPath>
            </text>
            {/* Texte bas */}
            <text
              fill="#B9975B"
              fontSize="7.5"
              letterSpacing="3"
              textAnchor="middle"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <textPath href="#hs-bot" startOffset="50%">
                ✦ DÉCOUVRIR ✦
              </textPath>
            </text>
          </svg>

          {/* Pastille clignotante (sur l'anneau, en haut) */}
          <span className="absolute left-1/2 top-[3px] z-10 flex h-2.5 w-2.5 -translate-x-1/2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
          </span>

          {/* Flacon au centre */}
          <span
            className="absolute inset-[26%] overflow-hidden rounded-full ring-1 ring-gold/60"
            style={{ backgroundColor: `${product.accent}1f` }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="72px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
