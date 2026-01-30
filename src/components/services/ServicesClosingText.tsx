"use client";

import { servicesClosingText } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServicesClosingText() {
  return (
    <section className="w-full ">
      {/* Desktop Version */}
      <div className="hidden md:block mt-[518px] mb-[592px]">
        <ScrollAnimation direction="up" distance={24} delay={0.3}>
          <div style={{ width: "85%", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "130%",
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
      <div className="md:hidden my-[160px] mx-[26px]">
        <ScrollAnimation direction="up" distance={18} delay={0.3}>
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "130%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              {servicesClosingText.text}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
