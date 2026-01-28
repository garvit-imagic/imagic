"use client";

import Image from "next/image";
import { cultureImages } from "@/data/cultureData";
import ScrollAnimation from "../ScrollAnimation";

export default function CultureHero() {
  return (
    <section className="w-full pt-[75px] md:pt-0">
      {/* Desktop Hero */}
      <div className="hidden md:block w-full">
        <ScrollAnimation direction="up" distance={20} delay={0.1}>
          <div className="relative w-full h-[calc(100vh-80px)]">
            <Image
              src={cultureImages.hero.desktop}
              alt="Culture Hero"
              fill
              className="object-contain pt-[20px]"
              priority
            />
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Hero */}
      <div className="md:hidden w-full mb-[114px]">
        <ScrollAnimation direction="up" distance={16} delay={0.1}>
          <div className="relative w-full aspect-[400/257]">
            <Image
              src={cultureImages.hero.mobile}
              alt="Culture Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
