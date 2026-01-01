import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import CompanyLogos from "@/components/CompanyLogos";
import FeatureCards from "@/components/FeatureCards";
import StatsSection from "@/components/StatsSection";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesAccordion from "@/components/ServicesAccordion";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <CompanyLogos />
      <FeatureCards />
      <StatsSection />
      <ImageCarousel />
      <ServicesAccordion />
      <ContactSection />
    </main>
  );
}
