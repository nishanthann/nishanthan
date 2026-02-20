import Hero from "@/components/streetwear/Hero";
import ProductShowcase from "@/components/streetwear/ProductShowcase";

import Editorial from "@/components/streetwear/Editorial";

import Footer2 from "@/components/streetwear/Footer2";
import ShowcaseSection from "@/components/streetwear/ShowcaseSection";

export default function StreetwearPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <ProductShowcase />
      <ShowcaseSection />

      <Editorial />
      <Footer2 />
    </main>
  );
}
