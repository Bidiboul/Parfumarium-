import FadeIn from "@/components/FadeIn";
import Newsletter from "@/components/Newsletter";
import Hero from "@/components/sections/Hero";
import BestSellers from "@/components/sections/BestSellers";
import Story from "@/components/sections/Story";
import WhyChoose from "@/components/sections/WhyChoose";
import Sensorial from "@/components/sections/Sensorial";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Story />
      <WhyChoose />
      <Sensorial />
      <Testimonials />

      <section className="container-luxe py-20 md:py-24">
        <FadeIn>
          <Newsletter />
        </FadeIn>
      </section>
    </>
  );
}
