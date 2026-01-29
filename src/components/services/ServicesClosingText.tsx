"use client";

import { servicesClosingText } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServicesClosingText() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <ScrollAnimation direction="up" distance={24} delay={0.3}>
          <div className={servicesClosingText.containerClassName}>
            <p className={servicesClosingText.className}>
              {servicesClosingText.text}
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <ScrollAnimation direction="up" distance={18} delay={0.3}>
          <div className={servicesClosingText.mobileContainerClassName}>
            <p className={servicesClosingText.mobileClassName}>
              {servicesClosingText.text}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
