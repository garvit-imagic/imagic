import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroWithBackground from "@/components/common/HeroWithBackground";
import MarqueeSection from "@/components/MarqueeSection";
import ImageTextSection from "@/components/common/ImageTextSection";
import ContactSection from "@/components/ContactSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import { contactUsData } from "@/data/contactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IMagic Creatives. Let's discuss how we can help bring your brand vision to life through innovative design and creative solutions.",
  openGraph: {
    title: "Contact Us | IMagic Creatives",
    description:
      "Get in touch with IMagic Creatives for your design and branding needs.",
  },
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />

      {/* Hero Section with Background */}
      <ScrollAnimation direction="up" distance={40}>
        <HeroWithBackground
          backgroundImage={contactUsData.hero.desktop.backgroundImage}
          text={contactUsData.hero.desktop.text}
          height={contactUsData.hero.desktop.height}
          textWidth={contactUsData.hero.desktop.textWidth}
          mobileBackgroundImage={contactUsData.hero.mobile.backgroundImage}
          mobileHeight={contactUsData.hero.mobile.height}
          mobileTextWidth={contactUsData.hero.mobile.textWidth}
        />
      </ScrollAnimation>

      {/* Marquee Section */}
      <ScrollAnimation direction="down" distance={24} delay={0.05}>
        <MarqueeSection items={contactUsData.marquee.items} />
      </ScrollAnimation>

      {/* Image Text Section */}
      <ScrollAnimation direction="up" distance={32}>
        <ImageTextSection
          iconSrc={contactUsData.imageTextSection.icon.src}
          iconWidth={contactUsData.imageTextSection.icon.width}
          iconHeight={contactUsData.imageTextSection.icon.height}
          iconAlt={contactUsData.imageTextSection.icon.alt}
          text={contactUsData.imageTextSection.text}
          textWidth={contactUsData.imageTextSection.textWidth}
        />
      </ScrollAnimation>

      {/* Contact Section without heading */}
      <ScrollAnimation direction="up" distance={32}>
        <ContactSection showHeading={false} />
      </ScrollAnimation>
    </main>
  );
}
