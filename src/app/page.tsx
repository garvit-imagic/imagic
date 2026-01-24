import dynamic from "next/dynamic";

// Import components that should load immediately
const Navbar = dynamic(() => import("@/components/Navbar"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));

// Lazy load non-critical components with loading states
const MarqueeSection = dynamic(() => import("@/components/MarqueeSection"), {
  loading: () => <div className="h-20 bg-gray-50 animate-pulse" />,
});

const CompanyLogos = dynamic(() => import("@/components/CompanyLogos"), {
  loading: () => <div className=" bg-gray-50 animate-pulse" />,
});

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="min-h-screen bg-gray-50 animate-pulse" />,
});

const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const ImageCarousel = dynamic(() => import("@/components/ImageCarousel"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const ServicesAccordion = dynamic(
  () => import("@/components/ServicesAccordion"),
  {
    loading: () => <div className="min-h-screen bg-gray-50 animate-pulse" />,
  },
);

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

export default function Home() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <CompanyLogos />
      <ProjectsSection />
      <StatsSection />
      <ImageCarousel />
      <ServicesAccordion />
      <ContactSection />
    </main>
  );
}
