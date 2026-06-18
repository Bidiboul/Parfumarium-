import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "./SectionHeading";
import { getBestSellers } from "@/data/products";

export default function BestSellers() {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section
      id="best-sellers"
      className="container-luxe scroll-mt-[160px] py-20 md:py-28"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Les plus convoités"
          title="Nos best-sellers"
          subtitle="Les fragrances raffinées qui ont conquis nos client·e·s — des parfums longue tenue, pensés pour marquer les esprits."
        />
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellers.map((product, i) => (
          <FadeIn key={product.slug} delay={(i % 4) * 100}>
            <ProductCard product={product} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 flex justify-center">
        <Link href="/collection" className="btn-outline">
          Voir toute la collection
        </Link>
      </FadeIn>
    </section>
  );
}
