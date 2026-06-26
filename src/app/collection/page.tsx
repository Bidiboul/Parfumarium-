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
        eyebrow={{ fr: "La Collection", en: "The Collection" }}
        title={{
          fr: "Des parfums raffinés, pensés pour marquer les esprits",
          en: "Refined fragrances, designed to leave a mark",
        }}
        subtitle={{
          fr: "Pour homme, pour femme et mixtes : trouvez la fragrance longue tenue qui deviendra votre signature olfactive.",
          en: "For men, women and unisex: find the long-lasting fragrance that will become your olfactory signature.",
        }}
      />
      <CollectionGrid />
    </>
  );
}
