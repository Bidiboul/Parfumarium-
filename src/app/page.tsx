import FadeIn from "@/components/FadeIn";
import Newsletter from "@/components/Newsletter";
import Hero from "@/components/sections/Hero";
import Editorial from "@/components/sections/Editorial";
import FourBlocks from "@/components/sections/FourBlocks";
import Approche from "@/components/sections/Approche";
import BestSellers from "@/components/sections/BestSellers";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero premium (image + titre + CTA) */}
      <Hero />

      {/* 2. Section éditoriale (phrase de marque) */}
      <Editorial />

      {/* 3. Les 4 blocs : Découverte / Savoir-faire / Personnalisation / Rechargeable */}
      <FourBlocks />

      {/* 4. Notre approche */}
      <Approche />

      {/* 5. Produits mis en avant */}
      <BestSellers />

      {/* 6. Avis clients */}
      <Testimonials />

      {/* 7. Newsletter */}
      <section className="container-luxe py-20 md:py-24">
        <FadeIn>
          <Newsletter />
        </FadeIn>
      </section>
    </>
  );
}
