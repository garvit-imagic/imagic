"use client";

import Image from "next/image";
import { servicesImages } from "@/data/servicesData";
import ScrollAnimation from "../ScrollAnimation";

export default function ServicesHero() {
  return (
    <>
      {/* Desktop Hero */}
      <section className="hidden md:block w-full mt-[75px] mb-[175px]">
        <ScrollAnimation direction="up" distance={20} delay={0.1}>
          <div className="relative w-full aspect-[8/3] ">
            <Image
              src={servicesImages.hero.desktop}
              alt="Services Hero"
              fill
              className="object-contain"
              priority
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* Mobile Hero */}
      <section className="md:hidden w-full pt-[75px] mb-[60px]">
        <ScrollAnimation direction="up" distance={16} delay={0.1}>
          <div className="relative w-full" style={{ aspectRatio: "400/257" }}>
            <Image
              src={servicesImages.hero.mobile}
              alt="Services Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}
