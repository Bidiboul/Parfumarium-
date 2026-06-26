"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { track } from "@vercel/analytics";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";
import { useT } from "@/i18n/dict";

const SHIPPING_THRESHOLD = 60;
const SHIPPING_COST = 4.9;

export default function CartPage() {
  const { items, total, count, setQuantity, removeItem, clear } = useCart();
  const t = useT().cart;
  const tp = useT().product;
  const [ordered, setOrdered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shipping = total >= SHIPPING_THRESHOLD || total === 0 ? 0 : SHIPPING_COST;
  const grandTotal = total + shipping;
  const remaining = Math.max(0, SHIPPING_THRESHOLD - total);

  /**
   * Passage de commande :
   * - Si Shopify est branché → redirige vers le paiement sécurisé Shopify.
   * - Sinon → affiche l'écran de confirmation de démonstration.
   */
  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    // Suivi e-commerce (Vercel Analytics)
    track("begin_checkout", {
      items: count,
      total: Number(grandTotal.toFixed(2)),
    });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            handle: i.slug,
            volume: i.volume,
            sku: i.sku,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();

      if (data.url) {
        // Redirection vers le checkout Shopify (paiement réel)
        track("checkout_redirect", { total: Number(grandTotal.toFixed(2)) });
        window.location.href = data.url;
        return;
      }
      if (data.error) {
        setError(data.error);
        return;
      }
      // Mode démonstration (Shopify non configuré)
      setOrdered(true);
    } catch {
      setError(t.genericError);
    } finally {
      setLoading(false);
    }
  };

  // Écran de confirmation (simulation de commande)
  if (ordered) {
    return (
      <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center pt-[152px] text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-3xl text-ink">
          ✓
        </span>
        <h1 className="mt-6 font-serif text-4xl text-ink">
          {t.thanksTitle}
        </h1>
        <p className="mt-4 max-w-md font-sans text-warmgray">
          {t.thanksText}
        </p>
        <Link href="/collection" className="btn-primary mt-9">
          {t.continueDiscover}
        </Link>
      </section>
    );
  }

  // Panier vide
  if (count === 0) {
    return (
      <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center pt-[152px] text-center">
        <span className="eyebrow">{t.title}</span>
        <h1 className="mt-4 font-serif text-4xl text-ink">
          {t.emptyTitle}
        </h1>
        <p className="mt-4 max-w-md font-sans text-warmgray">
          {t.emptyText}
        </p>
        <Link href="/collection" className="btn-primary mt-9">
          {t.discoverCollection}
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-sand to-ivory pt-[152px]">
      <div className="container-luxe py-14 md:py-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">{t.sel}</span>
            <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">{t.title}</h1>
          </div>
          <button
            type="button"
            onClick={clear}
            className="font-sans text-xs uppercase tracking-luxe text-warmgray transition-colors hover:text-amber"
          >
            {t.clear}
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
                          {item.volume} · {tp.edp}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.sku)}
                        aria-label={`${t.remove} ${item.name}`}
                        className="font-sans text-xs uppercase tracking-luxe text-warmgray transition-colors hover:text-amber"
                      >
                        {t.remove}
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
              ← {t.continueShopping}
            </Link>
          </div>

          {/* Récapitulatif */}
          <aside className="lg:col-span-4">
            <div className="sticky top-40 rounded-2xl border border-champagne bg-white p-7 shadow-card">
              <h2 className="font-serif text-2xl text-ink">{t.summary}</h2>
              <div className="gold-rule mt-4" />

              {remaining > 0 && (
                <p className="mt-5 rounded-xl bg-cream px-4 py-3 font-sans text-xs text-warmgray">
                  {t.remainingA}{" "}
                  <span className="font-medium text-amber">
                    {formatPrice(remaining)}
                  </span>{" "}
                  {" "}{t.remainingB}
                </p>
              )}

              <dl className="mt-6 space-y-3 font-sans text-sm">
                <div className="flex justify-between text-warmgray">
                  <dt>
                    {t.subtotal} ({count} {count > 1 ? t.articles : t.article})
                  </dt>
                  <dd className="text-ink">{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between text-warmgray">
                  <dt>{t.shipping}</dt>
                  <dd className="text-ink">
                    {shipping === 0 ? t.offered : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="my-4 h-px bg-champagne" />
                <div className="flex justify-between font-serif text-xl text-ink">
                  <dt>{t.total}</dt>
                  <dd className="text-amber">{formatPrice(grandTotal)}</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? t.redirecting : t.placeOrder}
              </button>
              {error && (
                <p className="mt-3 text-center font-sans text-xs text-amber">
                  {error}
                </p>
              )}
              <p className="mt-4 text-center font-sans text-[11px] text-warmgray/70">
                {t.securePay}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
