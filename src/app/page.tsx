import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import CompanyLogos from "@/components/CompanyLogos";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesAccordion from "@/components/ServicesAccordion";
import ContactSection from "@/components/ContactSection";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      <ScrollAnimation direction="up" distance={40}>
        <HeroSection />
      </ScrollAnimation>
      <ScrollAnimation direction="down" distance={24} delay={0.05}>
        <MarqueeSection />
      </ScrollAnimation>
      <ScrollAnimation direction="up" distance={36}>
        <CompanyLogos />
      </ScrollAnimation>
      <ScrollAnimation direction="up" distance={32}>
        <ProjectsSection />
      </ScrollAnimation>
      <ScrollAnimation direction="up" distance={28}>
        <StatsSection />
      </ScrollAnimation>
      <ScrollAnimation direction="right" distance={40}>
        <ImageCarousel />
      </ScrollAnimation>
      <ScrollAnimation direction="left" distance={40}>
        <ServicesAccordion />
      </ScrollAnimation>
      <ScrollAnimation direction="up" distance={32}>
        <ContactSection />
      </ScrollAnimation>
    </main>
  );
}
