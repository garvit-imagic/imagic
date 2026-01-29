"use client";

import { servicesClosingText } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServicesClosingText() {
  return (
    <section className="w-full mt-[518px] mb-[592px]">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <ScrollAnimation direction="up" distance={24} delay={0.3}>
          <div style={{ width: "85%", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
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
