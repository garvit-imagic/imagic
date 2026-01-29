"use client";

import { serviceHeading } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServiceHeading() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <ScrollAnimation direction="up" distance={24} delay={0.24}>
          <div style={{ marginLeft: '97px', marginRight: '97px', marginBottom: '86px' }}>
            <h3 className={serviceHeading.mainHeadingClassName}>
              {serviceHeading.mainHeading}
            </h3>
            <h2 className={serviceHeading.subHeadingClassName}>
              {serviceHeading.subHeading}
            </h2>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <ScrollAnimation direction="up" distance={18} delay={0.24}>
          <div style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '50px' }}>
            <h3 className={serviceHeading.mobileMainClassName}>
              {serviceHeading.mainHeading}
            </h3>
            <h2 className={serviceHeading.mobileSubClassName}>
              {serviceHeading.subHeading}
            </h2>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
