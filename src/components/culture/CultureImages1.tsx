"use client";

import Image from "next/image";
import { cultureImages } from "@/data/cultureData";
import ScrollAnimation from "../ScrollAnimation";

export default function CultureImages1() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[135px] mb-[317px]">
        <ScrollAnimation direction="up" distance={22} delay={0.24}>
          <div className="flex justify-end items-start gap-[59px]">
            <div className="w-[33%] aspect-[501/635] relative">
              <Image
                src={cultureImages.set1[0]}
                alt="Culture image 4"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="w-[33%] aspect-[501/635] relative">
              <Image
                src={cultureImages.set1[1]}
                alt="Culture image 5"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mx-[52px] mb-[114px]">
        <ScrollAnimation direction="up" distance={18} delay={0.24}>
          <div className="flex gap-[26px] w-full">
            {cultureImages.set1.map((image, index) => (
              <div key={index} className="relative flex-1 aspect-[135/175]">
                <Image
                  src={image}
                  alt={`Culture image ${index + 4}`}
                  fill
                  className="rounded-[12px] object-cover"
                />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
