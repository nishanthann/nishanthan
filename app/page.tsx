import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";

import ContributionGraph from "@/components/ContributionGraph";
import { MarqueeDemo } from "@/components/Review";
import { generatedContributionData } from "@/data/contributions";
import { Projects } from "@/components/Projects";
import { BadgeFormation } from "@/components/Tools";

import CTA2 from "@/components/GetInTouch";
import AboutSection from "@/components/AboutSection";
import { TitleSection } from "@/components/ui/TitleSection";
import BigBackgroundText from "@/components/Bigtext";

export default function GradientHero() {
  return (
    <>
      <Hero />

      <AboutSection />
      <FeaturesSection />
      <div className="pt-12 pb-4 px-8 md:px-16 z-20 relative">
        <TitleSection
          title="Crafted With Passion"
          description="Explore my latest creations and experiments."
        />
      </div>
      <Projects />
      <BadgeFormation />
      <ContributionGraph data={generatedContributionData} year={2025} />
      <MarqueeDemo />

      <CTA2 />
    </>
  );
}
