"use client";

import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntroText from "@/components/services/ServicesIntroText";
import ServiceHeading from "@/components/services/ServiceHeading";
import ServiceDetailCard from "@/components/services/ServiceDetailCard";
import ServicesClosingText from "@/components/services/ServicesClosingText";
import ServicesDetailTable from "@/components/services/ServicesDetailTable";
import ContactSection from "@/components/ContactSection";
import { servicesIntroTexts, serviceDetailCards } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <ServicesHero />

      {/* Intro Text Section 1 */}
      <ServicesIntroText {...servicesIntroTexts[0]} delay={0.4} />

      {/* Intro Text Section 2 */}
      <ServicesIntroText {...servicesIntroTexts[1]} delay={0.5} />

      {/* Intro Text Section 3 */}
      <ServicesIntroText {...servicesIntroTexts[2]} delay={0.6} />

      {/* Service Heading */}
      <ServiceHeading />

      {/* Service Detail Cards with alternating strips */}
      {serviceDetailCards.map((card, index) => (
        <ServiceDetailCard
          key={index}
          {...card}
          isFirstCard={index === 0}
          delay={0.26 + index * 0.02}
        />
      ))}

      {/* Closing Text */}
      <ServicesClosingText />

      {/* Detail Table */}
      <ServicesDetailTable />

      {/* Contact Footer */}
      <ContactSection showHeading={false} />
    </main>
  );
}
