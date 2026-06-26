"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/sections/SectionHeading";
import type { Product } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";
import { useT } from "@/i18n/dict";
import { localizeProduct } from "@/i18n/localizeProduct";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductView({ product: raw, related }: Props) {
  const { lang } = useLang();
  const t = useT();
  const tp = t.product;
  const product = localizeProduct(raw, lang);

  const rows = [
    { label: tp.head, notes: product.notes.head },
    { label: tp.heart, notes: product.notes.heart },
    { label: tp.base, notes: product.notes.base },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-sand to-ivory pt-[152px]">
        <div className="container-luxe pt-8">
          <nav className="font-sans text-xs uppercase tracking-luxe text-warmgray">
            <Link href="/" className="transition-colors hover:text-amber">{tp.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/collection" className="transition-colors hover:text-amber">{tp.collection}</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <div className="container-luxe grid items-start gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-16">
          <FadeIn className="md:sticky md:top-40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 shadow-card" style={{ backgroundColor: `${product.accent}14` }}>
              <Image src={product.image} alt={`${product.name} — ${product.family}`} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              {product.bestSeller && (
                <span className="absolute left-5 top-5 rounded-full bg-ink/85 px-3 py-1 font-sans text-[10px] uppercase tracking-luxe text-ivory backdrop-blur">
                  {t.card.bestSeller}
                </span>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <span className="eyebrow">{product.family}</span>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{product.name}</h1>
            <p className="mt-3 font-sans text-base capitalize text-warmgray">{product.mood.replace(/\.$/, "")}</p>

            {product.inspiration && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-champagne/40 px-4 py-1.5 font-sans text-xs uppercase tracking-luxe text-amber">
                {tp.correspondance} · {product.inspiration}
              </p>
            )}

            <div className="gold-rule mt-7" />

            <div className="mt-7 space-y-4 font-sans text-base leading-relaxed text-ink/80">
              {product.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-ink/8 bg-white/70 p-6">
              <h2 className="font-sans text-xs uppercase tracking-luxe text-gold">{tp.pyramid}</h2>
              <dl className="mt-4 space-y-3">
                {rows.map((row) => (
                  <div key={row.label} className="flex flex-col gap-1 border-b border-ink/5 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4">
                    <dt className="w-16 shrink-0 font-serif text-lg text-ink">{row.label}</dt>
                    <dd className="font-sans text-sm capitalize text-warmgray">{row.notes.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8">
              <AddToCartButton product={raw} />
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {tp.reassure.map((item) => (
                <span key={item} className="flex items-center gap-2 font-sans text-xs uppercase tracking-luxe text-ink/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <div className="container-luxe">
          <FadeIn>
            <SectionHeading eyebrow={tp.expEyebrow} title={tp.expTitle} subtitle={tp.expSubtitle} />
          </FadeIn>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {tp.experience.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-champagne bg-white p-8 shadow-card">
                  <span className="font-serif text-3xl text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-24">
        <FadeIn>
          <SectionHeading eyebrow={tp.relatedEyebrow} title={tp.relatedTitle} />
        </FadeIn>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 100}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
