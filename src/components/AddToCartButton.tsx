"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "./CartProvider";

/**
 * Sélecteur de contenance + quantité + bouton d'ajout au panier (page produit).
 */
export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  // Variante par défaut : 30 ML si dispo, sinon la première
  const defaultIndex = Math.max(
    0,
    product.variants.findIndex((v) => v.volume === "30 ML"),
  );
  const [variantIndex, setVariantIndex] = useState(defaultIndex);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const variant = product.variants[variantIndex];

  const handleAdd = () => {
    addItem(product, variant, qty);
    // Suivi e-commerce (Vercel Analytics)
    track("add_to_cart", {
      product: product.name,
      volume: variant.volume,
      price: variant.price,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="space-y-6">
      {/* Contenance */}
      <div>
        <p className="mb-3 font-sans text-xs uppercase tracking-luxe text-ink/70">
          Contenance
        </p>
        <div className="flex flex-wrap gap-2.5">
          {product.variants.map((v, i) => {
            const soldOut = v.available === false;
            return (
              <button
                key={v.sku}
                type="button"
                disabled={soldOut}
                onClick={() => !soldOut && setVariantIndex(i)}
                className={`flex min-w-[5.5rem] flex-col items-center rounded-xl border px-4 py-3 transition-all duration-300 ${
                  soldOut
                    ? "cursor-not-allowed border-ink/10 bg-ink/[0.03] text-warmgray/60"
                    : i === variantIndex
                      ? "border-ink bg-ink text-ivory"
                      : "border-ink/15 text-ink hover:border-gold"
                }`}
              >
                <span
                  className={`font-sans text-sm font-medium ${
                    soldOut ? "line-through" : ""
                  }`}
                >
                  {v.volume}
                </span>
                {soldOut ? (
                  <span className="font-sans text-[10px] uppercase tracking-luxe text-warmgray/70">
                    Rupture
                  </span>
                ) : (
                  <span
                    className={`font-serif text-base ${
                      i === variantIndex ? "text-gold" : "text-amber"
                    }`}
                  >
                    {formatPrice(v.price)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantité + ajout */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center rounded-full border border-ink/15">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Diminuer la quantité"
            className="flex h-12 w-12 items-center justify-center text-lg text-ink transition-colors hover:text-gold"
          >
            −
          </button>
          <span className="w-8 text-center font-sans text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Augmenter la quantité"
            className="flex h-12 w-12 items-center justify-center text-lg text-ink transition-colors hover:text-gold"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="btn-primary flex-1 sm:flex-none sm:min-w-[280px]"
        >
          {added
            ? "✓ Ajouté au panier"
            : `Ajouter — ${formatPrice(variant.price * qty)}`}
        </button>
      </div>
    </div>
  );
}
