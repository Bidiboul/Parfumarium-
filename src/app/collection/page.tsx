import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CollectionGrid from "@/components/CollectionGrid";

export const metadata: Metadata = {
  title: "La Collection — Tous nos parfums",
  description:
    "Explorez la collection Parfumarium : fragrances ambrées, boisées, florales, fraîches et orientales. Des parfums raffinés et accessibles, à découvrir dès maintenant.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="La Collection"
        title="Des fragrances pensées pour marquer les esprits"
        subtitle="Six signatures, autant d'émotions. Trouvez le parfum qui vous ressemble, du plus lumineux au plus intense."
      />
      <CollectionGrid />
    </>
  );
}
