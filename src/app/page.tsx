import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { NotSoftwareHouseSection } from "@/components/NotSoftwareHouseSection";
import { SuccessTogetherSection } from "@/components/SuccessTogetherSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-page">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <NotSoftwareHouseSection />
      <SuccessTogetherSection />
      <Footer />
    </div>
  );
}
