"use client";

import Image from "next/image";
import { cultureImages } from "@/data/cultureData";
import ScrollAnimation from "../ScrollAnimation";

export default function CultureImages2() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[157px] mb-[315px]">
        <ScrollAnimation direction="up" distance={22} delay={0.28}>
          {/* Row 1 - Single image (left aligned) */}
          <div className="mb-[59px]">
            <div className="w-[65%] aspect-[785/635] relative">
              <Image
                src={cultureImages.set2[0]}
                alt="Culture image 1"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>

          {/* Row 2 - Two images (aligned to extremes) */}
          <div className="flex justify-between gap-[59px]">
            <div className="w-[30%] aspect-[441/635] relative mx-[40px]">
              <Image
                src={cultureImages.set2[1]}
                alt="Culture image 2"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
            <div className="w-[30%] aspect-[441/635] relative">
              <Image
                src={cultureImages.set2[2]}
                alt="Culture image 3"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mx-[52px] mb-[114px]">
        <ScrollAnimation direction="up" distance={18} delay={0.28}>
          {/* Row 1 - Single image */}
          <div className="flex justify-start mb-[38px] w-[80%] aspect-[233/175]">
            <Image
              src={cultureImages.set2[0]}
              alt="Culture image 1"
              width={300}
              height={200}
              className="rounded-[14px] object-cover"
            />
          </div>

          {/* Row 2 - Two images */}
          <div className="flex justify-between gap-[41px] mb-[114px]">
            <div className="flex-1 w-[25%] aspect-[133/175]">
              <Image
                src={cultureImages.set2[1]}
                alt="Culture image 2"
                width={200}
                height={150}
                className="rounded-[14px] object-cover"
              />
            </div>
            <div className="flex-1 w-[25%] aspect-[133/175]">
              <Image
                src={cultureImages.set2[2]}
                alt="Culture image 3"
                width={200}
                height={150}
                className="rounded-[14px] object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
