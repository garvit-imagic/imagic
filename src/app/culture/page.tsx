"use client";

import Navbar from "@/components/Navbar";
import CultureHero from "@/components/culture/CultureHero";
import CultureTextSection1 from "@/components/culture/CultureTextSection1";
import CultureImages1 from "@/components/culture/CultureImages1";
import CulturePointers from "@/components/culture/CulturePointers";
import CultureImages2 from "@/components/culture/CultureImages2";
import CultureTextSection2 from "@/components/culture/CultureTextSection2";
import CultureImages3 from "@/components/culture/CultureImages3";
import ContactSection from "@/components/ContactSection";

export default function CulturePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <CultureHero />

      {/* Text Section 1 */}
      <CultureTextSection1 />

      {/* Images Set 1 */}
      <CultureImages1 />

      {/* Pointers Section */}
      <CulturePointers />

      {/* Images Set 2 */}
      <CultureImages2 />

      {/* Text Section 2 */}
      <CultureTextSection2 />

      {/* Images Set 3 */}
      <CultureImages3 />

      {/* Contact Footer */}
      <ContactSection showHeading={false} />
    </main>
  );
}
