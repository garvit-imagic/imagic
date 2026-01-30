"use client";

import { serviceHeading } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServiceHeading() {
  return (
    <section className="w-full mb-[150px]">
      {/* Desktop Version */}
      <div className="hidden md:block ">
        <ScrollAnimation direction="up" distance={24} delay={0.24}>
          <div
            style={{
              marginLeft: "97px",
              marginRight: "97px",
              marginBottom: "86px",
            }}
          >
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
          <div
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "50px",
            }}
          >
            <h3
              className="text-center"
              style={{
                fontSize: "26px",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: "130%",
                letterSpacing: "0%",
              }}
            >
              {serviceHeading.mainHeading}
            </h3>
            <h2
              className="text-center mx-auto"
              style={{
                fontSize: "26px",
                fontWeight: 700,
                lineHeight: "140%",
                letterSpacing: "0%",
                width: "50%",
                marginTop: "10px",
              }}
            >
              {serviceHeading.subHeading}
            </h2>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
