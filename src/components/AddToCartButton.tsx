"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "./CartProvider";

/**
 * Sélecteur de quantité + bouton d'ajout au panier (page produit).
 */
export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Quantité */}
      <div className="flex items-center rounded-full border border-ink/15">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Diminuer la quantité"
          className="flex h-12 w-12 items-center justify-center text-lg text-ink
            transition-colors hover:text-gold"
        >
          −
        </button>
        <span className="w-8 text-center font-sans text-sm">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Augmenter la quantité"
          className="flex h-12 w-12 items-center justify-center text-lg text-ink
            transition-colors hover:text-gold"
        >
          +
        </button>
      </div>

      {/* Ajouter */}
      <button
        type="button"
        onClick={handleAdd}
        className="btn-primary flex-1 sm:flex-none sm:min-w-[260px]"
      >
        {added ? "✓ Ajouté au panier" : "Ajouter au panier"}
      </button>
    </div>
  );
}
