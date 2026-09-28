import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import HeroSection from "@/components/sections/HeroSection";
import Models from "@/components/sections/Models";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <HeroSection/>
      <CapabilitiesSection/>
      <Models/>
    </div>
  );
}
