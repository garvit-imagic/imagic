"use client";

import { servicesDetailTable } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServicesDetailTable() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <ScrollAnimation direction="up" distance={24} delay={0.32}>
          <div className={servicesDetailTable.containerClassName}>
            {/* Top Border */}
            <div
              className={`mb-[51px]  ${servicesDetailTable.topBorderClassName}`}
            />

            {/* Table Rows */}
            {servicesDetailTable.rows.map((row, index) => (
              <div
                key={index}
                className="pb-[22px] ml-[369px] flex"
                style={{
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  fontWeight: 400,
                }}
              >
                <span style={{ minWidth: "250px" }}>{row.label}</span>
                <span>{row.values}</span>
              </div>
            ))}

            {/* Bottom Border (Marquee style) */}
            <div className="h-[1px] bg-black w-full mt-[17px]" />
            <div
              className="h-[15px] w-[98%] mx-auto"
              style={{ backgroundColor: "#0000004D" }}
            />
          </div>
        </ScrollAnimation>
        <div
          className="text-center"
          style={{ marginTop: "148px", marginBottom: "200px" }}
        >
          <h2
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontWeight: 700,
              fontSize: "100px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Let&apos;s Collaborate !
          </h2>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <ScrollAnimation direction="up" distance={18} delay={0.32}>
          <div>
            {/* Top Border */}
            <div className="h-[1px] bg-black w-full mb-[72px]" />

            {/* Table Rows - Stacked Layout */}
            <div className="px-[42px]">
              {servicesDetailTable.rows.map((row, index) => (
                <div
                  key={index}
                  className="mb-[44px]"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "16px",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    fontWeight: 400,
                  }}
                >
                  <div className="mb-[5px]">{row.label}</div>
                  <div>{row.values}</div>
                </div>
              ))}
            </div>

            {/* Bottom Border (Marquee style) */}
            <div className="h-[1px] bg-black w-full mt-[52px]" />
            <div
              className="h-[15px] w-[90%] mx-auto"
              style={{ backgroundColor: "#0000004D" }}
            />
          </div>
        </ScrollAnimation>

        <div
          className="text-center px-[42px]"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <h2
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Let&apos;s Collaborate !
          </h2>
        </div>
      </div>
    </section>
  );
}
