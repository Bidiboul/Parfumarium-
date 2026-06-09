import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import BottleVisual from "./BottleVisual";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * Carte produit premium : visuel du flacon, nom, prix, notes et CTA.
 * Animations douces au survol (zoom léger sur le visuel, élévation de la carte).
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produit/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8
        bg-white/70 shadow-card transition-all duration-500 hover:-translate-y-1.5
        hover:border-gold/40 hover:shadow-card-hover focus:outline-none
        focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
        focus-visible:ring-offset-ivory"
    >
      {product.bestSeller && (
        <span
          className="absolute left-4 top-4 z-10 rounded-full bg-ink/85 px-3 py-1 font-sans
            text-[10px] uppercase tracking-luxe text-ivory backdrop-blur"
        >
          Best-seller
        </span>
      )}

      {/* Visuel */}
      <div className="relative overflow-hidden">
        <BottleVisual
          theme={product.theme}
          name={product.name}
          className="aspect-[4/5] w-full transition-transform duration-[1100ms]
            ease-out group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.03]" />
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <span className="eyebrow mb-1.5">{product.family}</span>
        <h3 className="font-serif text-2xl leading-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm text-warmgray">
          {product.notes.join(" · ")}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4">
          <span className="font-serif text-xl text-amber">
            {formatPrice(product.price)}
          </span>
          <span
            className="inline-flex items-center gap-1.5 font-sans text-xs uppercase
              tracking-luxe text-ink transition-colors duration-300 group-hover:text-gold"
          >
            Voir le parfum
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
