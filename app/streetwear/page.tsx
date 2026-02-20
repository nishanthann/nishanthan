import Hero from "@/components/streetwear/Hero";
import ProductShowcase from "@/components/streetwear/ProductShowcase";
import Metrics from "@/components/streetwear/Metrics";
import Editorial from "@/components/streetwear/Editorial";
import Footer from "@/components/streetwear/Footer";
import Footer2 from "@/components/streetwear/Footer2";
import ShowcaseSection from "@/components/streetwear/ShowcaseSection";

export default function StreetwearPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <ProductShowcase />
      <ShowcaseSection />
      <Metrics />
      <Editorial />
      <Footer2 />
    </main>
  );
}
