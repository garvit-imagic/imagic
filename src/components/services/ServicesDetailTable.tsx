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
            <div className={servicesDetailTable.topBorderClassName} />

            {/* Table Rows */}
            {servicesDetailTable.rows.map((row, index) => (
              <div key={index} className={servicesDetailTable.rowClassName}>
                <span className="font-semibold">{row.label}</span>
                <span className="mx-[20px]">:</span>
                <span>{row.values}</span>
              </div>
            ))}

            {/* Bottom Border (Marquee style) */}
            <div className={servicesDetailTable.bottomBorderClassName} />
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <ScrollAnimation direction="up" distance={18} delay={0.32}>
          <div className={servicesDetailTable.mobileContainerClassName}>
            {/* Top Border */}
            <div className="border-t-2 border-black" />

            {/* Table Rows - Stacked Layout */}
            {servicesDetailTable.rows.map((row, index) => (
              <div key={index} className={servicesDetailTable.mobileRowClassName}>
                <div className="font-semibold mb-[10px]">{row.label}</div>
                <div>{row.values}</div>
              </div>
            ))}

            {/* Bottom Border (Marquee style) */}
            <div className="h-[9px] bg-black w-full mt-[20px]" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
