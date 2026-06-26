import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductView from "@/components/ProductView";
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


export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug, 4);

  return <ProductView product={product} related={related} />;
}
