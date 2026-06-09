"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";

const SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 4.9;

export default function CartPage() {
  const { items, total, count, setQuantity, removeItem, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  const shipping = total >= SHIPPING_THRESHOLD || total === 0 ? 0 : SHIPPING_COST;
  const grandTotal = total + shipping;
  const remaining = Math.max(0, SHIPPING_THRESHOLD - total);

  // Écran de confirmation (simulation de commande)
  if (ordered) {
    return (
      <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center pt-[88px] text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-3xl text-ink">
          ✓
        </span>
        <h1 className="mt-6 font-serif text-4xl text-ink">
          Merci pour votre commande
        </h1>
        <p className="mt-4 max-w-md font-sans text-warmgray">
          Ceci est une démonstration : aucun paiement n'a été effectué. Votre
          sélection arriverait sous 48h, dans un écrin soigné.
        </p>
        <Link href="/collection" className="btn-primary mt-9">
          Continuer mes découvertes
        </Link>
      </section>
    );
  }

  // Panier vide
  if (count === 0) {
    return (
      <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center pt-[88px] text-center">
        <span className="eyebrow">Votre panier</span>
        <h1 className="mt-4 font-serif text-4xl text-ink">
          Votre panier est vide
        </h1>
        <p className="mt-4 max-w-md font-sans text-warmgray">
          Laissez-vous tenter par l'une de nos fragrances. L'élégance n'attend
          que vous.
        </p>
        <Link href="/collection" className="btn-primary mt-9">
          Découvrir la collection
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-sand to-ivory pt-[88px]">
      <div className="container-luxe py-14 md:py-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">Votre sélection</span>
            <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Panier</h1>
          </div>
          <button
            type="button"
            onClick={clear}
            className="font-sans text-xs uppercase tracking-luxe text-warmgray transition-colors hover:text-amber"
          >
            Vider le panier
          </button>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Articles */}
          <div className="lg:col-span-8">
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.sku}
                  className="flex gap-5 rounded-2xl border border-ink/8 bg-white/80 p-4 sm:p-5"
                >
                  <Link
                    href={`/produit/${item.slug}`}
                    className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl border border-ink/8 sm:w-28"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/produit/${item.slug}`}
                          className="font-serif text-xl text-ink transition-colors hover:text-amber"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 font-sans text-xs uppercase tracking-luxe text-warmgray">
                          {item.volume} · Eau de parfum
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.sku)}
                        aria-label={`Retirer ${item.name}`}
                        className="font-sans text-xs uppercase tracking-luxe text-warmgray transition-colors hover:text-amber"
                      >
                        Retirer
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center rounded-full border border-ink/15">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.sku, item.quantity - 1)}
                          aria-label="Diminuer"
                          className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-gold"
                        >
                          −
                        </button>
                        <span className="w-7 text-center font-sans text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.sku, item.quantity + 1)}
                          aria-label="Augmenter"
                          className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-gold"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-serif text-lg text-amber">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/collection"
              className="mt-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-luxe text-ink transition-colors hover:text-amber"
            >
              ← Continuer mes achats
            </Link>
          </div>

          {/* Récapitulatif */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl border border-ink/8 bg-ink p-7 text-ivory">
              <h2 className="font-serif text-2xl">Récapitulatif</h2>
              <div className="gold-rule mt-4" />

              {remaining > 0 && (
                <p className="mt-5 rounded-xl bg-white/5 px-4 py-3 font-sans text-xs text-champagne/80">
                  Plus que{" "}
                  <span className="text-gold">{formatPrice(remaining)}</span> pour
                  la livraison offerte.
                </p>
              )}

              <dl className="mt-6 space-y-3 font-sans text-sm">
                <div className="flex justify-between text-champagne/80">
                  <dt>
                    Sous-total ({count} article{count > 1 ? "s" : ""})
                  </dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between text-champagne/80">
                  <dt>Livraison</dt>
                  <dd>{shipping === 0 ? "Offerte" : formatPrice(shipping)}</dd>
                </div>
                <div className="my-4 h-px bg-champagne/15" />
                <div className="flex justify-between font-serif text-xl text-ivory">
                  <dt>Total</dt>
                  <dd className="text-gold">{formatPrice(grandTotal)}</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={() => setOrdered(true)}
                className="btn-gold mt-7 w-full"
              >
                Passer la commande
              </button>
              <p className="mt-4 text-center font-sans text-[11px] text-champagne/50">
                Paiement 100% sécurisé · Démonstration sans transaction réelle
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
