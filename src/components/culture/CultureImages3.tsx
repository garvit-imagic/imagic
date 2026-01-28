"use client";

import Image from "next/image";
import { cultureImages } from "@/data/cultureData";
import ScrollAnimation from "../ScrollAnimation";

export default function CultureImages3() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[100px] mb-[185px]">
        <ScrollAnimation direction="up" distance={22} delay={0.32}>
          {/* Row 1 - Image right aligned */}
          <div className="mb-[150px] flex justify-end">
            <div className="w-[60%] aspect-[862/635] relative">
              <Image
                src={cultureImages.set3[0]}
                alt="Culture image 6"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Image left aligned */}
          <div className="flex justify-start">
            <div className="w-[30%] aspect-[508/635] relative">
              <Image
                src={cultureImages.set3[1]}
                alt="Culture image 7"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mb-[114px] mx-[52px]">
        <ScrollAnimation direction="up" distance={18} delay={0.32}>
          {/* Row 1 - Image right aligned */}
          <div className="mb-[43px] flex justify-end">
            <div className="w-[85%] aspect-[239/175]">
              <Image
                src={cultureImages.set3[0]}
                alt="Culture image 6"
                width={400}
                height={250}
                className="rounded-[14px] object-cover "
              />
            </div>
          </div>

          {/* Row 2 - Image left aligned */}
          <div className="flex justify-start">
            <div className="w-[60%] aspect-[146/182]">
              <Image
                src={cultureImages.set3[1]}
                alt="Culture image 7"
                width={400}
                height={250}
                className="rounded-[14px] object-cover "
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
