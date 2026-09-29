import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import CTASection from "@/components/sections/CTASection";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import Models from "@/components/sections/Models";
import PreviewSection from "@/components/sections/PreviewSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhyEchoGPT from "@/components/sections/WhyEchoGPT";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col items-center">
      <HeroSection/>
      <CapabilitiesSection/>
      <Models/>
      <PreviewSection/>
      <WhyEchoGPT/>
      <PricingSection/>
      <FaqSection/>
      <TestimonialSection/>
      <CTASection/>
    </main>
  );
}
