import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BottleVisual from "@/components/BottleVisual";
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
  return {
    title: `${product.name} — ${product.family}`,
    description: `${product.shortDescription} Notes : ${product.notes.join(
      ", ",
    )}. ${formatPrice(product.price)} — ${product.volume}. Livraison rapide.`,
    openGraph: {
      title: `${product.name} · Parfumarium`,
      description: product.shortDescription,
    },
  };
}

const EXPERIENCE = [
  {
    title: "Un écrin soigné",
    text: "Chaque flacon est livré dans un coffret élégant, prêt à offrir ou à s'offrir.",
  },
  {
    title: "Une tenue longue durée",
    text: "Des concentrations généreuses pour un sillage qui vous accompagne du matin au soir.",
  },
  {
    title: "Satisfait ou remboursé",
    text: "30 jours pour changer d'avis. Retours simples et sans frais cachés.",
  },
];

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug, 3);

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
            <Link
              href="/collection"
              className="transition-colors hover:text-amber"
            >
              Collection
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <div className="container-luxe grid items-start gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-16">
          {/* Visuel */}
          <FadeIn className="md:sticky md:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 shadow-card">
              <BottleVisual
                theme={product.theme}
                name={product.name}
                variant="hero"
                className="aspect-square w-full"
              />
            </div>
          </FadeIn>

          {/* Informations */}
          <FadeIn delay={120}>
            <span className="eyebrow">{product.family}</span>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-base text-warmgray">
              {product.tagline}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-amber">
                {formatPrice(product.price)}
              </span>
              <span className="font-sans text-sm text-warmgray">
                · {product.volume} · Eau de parfum
              </span>
            </div>

            <div className="gold-rule mt-7" />

            <p className="mt-7 font-sans text-base leading-relaxed text-ink/80">
              {product.description}
            </p>

            {/* Pyramide olfactive */}
            <div className="mt-8 rounded-2xl border border-ink/8 bg-white/60 p-6">
              <h2 className="font-sans text-xs uppercase tracking-luxe text-gold">
                Pyramide olfactive
              </h2>
              <dl className="mt-4 space-y-3">
                {[
                  { label: "Tête", notes: product.pyramid.head },
                  { label: "Cœur", notes: product.pyramid.heart },
                  { label: "Fond", notes: product.pyramid.base },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-ink/5 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <dt className="w-16 shrink-0 font-serif text-lg text-ink">
                      {row.label}
                    </dt>
                    <dd className="font-sans text-sm text-warmgray">
                      {row.notes.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Ajout panier */}
            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>

            {/* Réassurance */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {["Livraison 48h", "Retours offerts", "Paiement sécurisé"].map(
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
      <section className="bg-ink py-20 text-ivory md:py-24">
        <div className="container-luxe">
          <FadeIn>
            <SectionHeading
              eyebrow="L'expérience Parfumarium"
              title="Plus qu'un parfum, un moment d'exception"
              subtitle="Chaque détail est pensé pour faire de votre achat une expérience à la hauteur de la fragrance."
              light
            />
          </FadeIn>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-champagne/15 bg-white/5 p-8">
                  <span className="font-serif text-3xl text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-champagne/75">
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
          <SectionHeading
            eyebrow="Vous aimerez aussi"
            title="À découvrir également"
          />
        </FadeIn>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 120}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
