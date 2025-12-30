import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import FeatureCards from "@/components/FeatureCards";
import StatsSection from "@/components/StatsSection";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesAccordion from "@/components/ServicesAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      <FeatureCards />
      <StatsSection />
      <ImageCarousel />
      <ServicesAccordion />
      <ContactSection />
      <Footer />
    </main>
  );
}
