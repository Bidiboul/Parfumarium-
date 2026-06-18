import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CollectionGrid from "@/components/CollectionGrid";

export const metadata: Metadata = {
  title: "La Collection — Parfums homme & femme",
  description:
    "Découvrez la collection Parfumarium : parfums élégants pour homme et femme, fragrances raffinées et longue tenue. Familles florales, gourmandes, fraîches et boisées (niche).",
};

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="La Collection"
        title="Des parfums raffinés, pensés pour marquer les esprits"
        subtitle="Pour homme, pour femme et mixtes : trouvez la fragrance longue tenue qui deviendra votre signature olfactive."
      />
      <CollectionGrid />
    </>
  );
}
