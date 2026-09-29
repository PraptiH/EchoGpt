import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import HeroSection from "@/components/sections/HeroSection";
import Models from "@/components/sections/Models";
import PreviewSection from "@/components/sections/PreviewSection";
import PricingSection from "@/components/sections/PricingSection";
import WhyEchoGPT from "@/components/sections/WhyEchoGPT";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <HeroSection/>
      <CapabilitiesSection/>
      <Models/>
      <PreviewSection/>
      <WhyEchoGPT/>
      <PricingSection/>
    </div>
  );
}
