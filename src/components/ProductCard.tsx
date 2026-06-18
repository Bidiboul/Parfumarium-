"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

// Parfums récemment ajoutés à la collection (badge « Nouveauté »)
const NEW_CODES = new Set(["7000", "7001", "7007", "7015", "7016"]);

/**
 * Carte produit premium : photo du flacon, nom, famille, notes, prix.
 * Léger effet 3D (tilt) qui suit la souris + reflet doré + zoom de l'image.
 */
export default function ProductCard({ product, priority }: ProductCardProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 0, on: false });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    // Inclinaison max ~6°
    setTilt({ rx: (0.5 - py) * 6, ry: (px - 0.5) * 6 });
    setGlare({ x: px * 100, y: py * 100, on: true });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setGlare((g) => ({ ...g, on: false }));
  };

  return (
    <Link
      ref={ref}
      href={`/produit/${product.slug}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="tilt-card group relative flex flex-col overflow-hidden rounded-2xl border
        border-champagne bg-white shadow-card transition-shadow duration-500 hover:border-gold
        hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold
        focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
    >
      {product.bestSeller ? (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-ink/85 px-3 py-1 font-sans text-[10px] uppercase tracking-luxe text-ivory backdrop-blur">
          Best-seller
        </span>
      ) : NEW_CODES.has(product.code) ? (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-gold px-3 py-1 font-sans text-[10px] uppercase tracking-luxe text-ink backdrop-blur">
          Nouveauté
        </span>
      ) : null}

      {/* Reflet doré qui suit la souris */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: glare.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${glare.x}% ${glare.y}%, rgba(185,151,91,0.16), transparent 45%)`,
        }}
      />

      {/* Visuel */}
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ backgroundColor: `${product.accent}14` }}
      >
        <Image
          src={product.image}
          alt={`${product.name} — ${product.family}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
        />
        {/* Bouton flottant qui apparaît au survol */}
        <span className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-ink/80 to-transparent p-4 text-center transition-transform duration-500 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-2 font-sans text-xs uppercase tracking-luxe text-ink">
            Voir le parfum
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <span className="eyebrow mb-1.5">{product.family}</span>
        <h3 className="font-serif text-2xl leading-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-1 font-sans text-sm text-warmgray">
          {[...product.notes.head, ...product.notes.heart]
            .slice(0, 3)
            .join(" · ")}
        </p>

        <div className="mt-5 -mx-6 -mb-6 flex items-center justify-between border-t border-champagne bg-cream px-6 py-4">
          <span className="font-serif text-xl text-amber">
            <span className="font-sans text-[11px] uppercase tracking-luxe text-warmgray">
              dès{" "}
            </span>
            {formatPrice(product.price)}
          </span>
          <span className="font-sans text-xs uppercase tracking-luxe text-ink transition-colors duration-300 group-hover:text-gold">
            {product.variants.length} formats
          </span>
        </div>
      </div>
    </Link>
  );
}
