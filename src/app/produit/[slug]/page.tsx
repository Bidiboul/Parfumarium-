import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/sections/SectionHeading";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
} from "@/data/products";

interface PageProps {
  params: { slug: string };
}

// Génère une page statique par produit
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Parfum introuvable" };
  const allNotes = [
    ...product.notes.head,
    ...product.notes.heart,
    ...product.notes.base,
  ];
  return {
    title: `${product.name} — ${product.family}`,
    description: `${product.shortDescription} Notes : ${allNotes
      .slice(0, 6)
      .join(", ")}. À partir de ${formatPrice(product.price)}.`,
    openGraph: {
      title: `${product.name} · Parfumarium`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

const EXPERIENCE = [
  {
    title: "Un écrin soigné",
    text: "Chaque flacon est livré dans un emballage élégant, prêt à offrir ou à s'offrir.",
  },
  {
    title: "Une tenue longue durée",
    text: "Des concentrations généreuses pour un sillage qui vous accompagne du matin au soir.",
  },
  {
    title: "Paiement 100% sécurisé",
    text: "Vos paiements sont protégés et traités en toute sécurité par Shopify.",
  },
];

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug, 4);

  return (
    <>
      {/* Fil d'ariane + produit */}
      <section className="bg-gradient-to-b from-sand to-ivory pt-[88px]">
        <div className="container-luxe pt-8">
          <nav className="font-sans text-xs uppercase tracking-luxe text-warmgray">
            <Link href="/" className="transition-colors hover:text-amber">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/collection" className="transition-colors hover:text-amber">
              Collection
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <div className="container-luxe grid items-start gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-16">
          {/* Visuel */}
          <FadeIn className="md:sticky md:top-28">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 shadow-card"
              style={{ backgroundColor: `${product.accent}14` }}
            >
              <Image
                src={product.image}
                alt={`${product.name} — ${product.family}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {product.bestSeller && (
                <span className="absolute left-5 top-5 rounded-full bg-ink/85 px-3 py-1 font-sans text-[10px] uppercase tracking-luxe text-ivory backdrop-blur">
                  Best-seller
                </span>
              )}
            </div>
          </FadeIn>

          {/* Informations */}
          <FadeIn delay={120}>
            <span className="eyebrow">{product.family}</span>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-base capitalize text-warmgray">
              {product.mood.replace(/\.$/, "")}
            </p>

            {product.inspiration && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-champagne/40 px-4 py-1.5 font-sans text-xs uppercase tracking-luxe text-amber">
                Correspondance olfactive · {product.inspiration}
              </p>
            )}

            <div className="gold-rule mt-7" />

            <div className="mt-7 space-y-4 font-sans text-base leading-relaxed text-ink/80">
              {product.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Pyramide olfactive */}
            <div className="mt-8 rounded-2xl border border-ink/8 bg-white/70 p-6">
              <h2 className="font-sans text-xs uppercase tracking-luxe text-gold">
                Pyramide olfactive
              </h2>
              <dl className="mt-4 space-y-3">
                {[
                  { label: "Tête", notes: product.notes.head },
                  { label: "Cœur", notes: product.notes.heart },
                  { label: "Fond", notes: product.notes.base },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-ink/5 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <dt className="w-16 shrink-0 font-serif text-lg text-ink">
                      {row.label}
                    </dt>
                    <dd className="font-sans text-sm capitalize text-warmgray">
                      {row.notes.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Ajout panier (avec contenances) */}
            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>

            {/* Réassurance */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {["Expédiée en 72h", "Paiement sécurisé", "Fabriqué avec soin"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 font-sans text-xs uppercase tracking-luxe text-ink/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* L'expérience Parfumarium */}
      <section className="bg-sand py-20 md:py-24">
        <div className="container-luxe">
          <FadeIn>
            <SectionHeading
              eyebrow="L'expérience Parfumarium"
              title="Plus qu'un parfum, un moment d'exception"
              subtitle="Chaque détail est pensé pour faire de votre achat une expérience à la hauteur de la fragrance."
            />
          </FadeIn>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-champagne bg-white p-8 shadow-card">
                  <span className="font-serif text-3xl text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-warmgray">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestions */}
      <section className="container-luxe py-20 md:py-24">
        <FadeIn>
          <SectionHeading eyebrow="Vous aimerez aussi" title="À découvrir également" />
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
