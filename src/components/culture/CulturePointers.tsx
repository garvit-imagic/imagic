"use client";

import { culturePointers, cultureText } from "@/data/cultureData";
import ScrollAnimation from "../ScrollAnimation";

export default function CulturePointers() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[100px] mb-[330px]">
        <ScrollAnimation direction="up" distance={24} delay={0.26}>
          <div className="flex gap-[210px]">
            {/* Column 1 - Heading */}
            <div className="self-start">
              <h2 className="font-light text-[48px] leading-[120%] tracking-[0%] whitespace-pre-line">
                {cultureText.pointers.heading}
              </h2>
            </div>

            {/* Column 2 - Pointers */}
            <div className="flex-1 ">
              {culturePointers.map((pointer, index) => (
                <div key={pointer.number}>
                  <div className="px-[15px]">
                    {/* First line - Number and Heading */}
                    <div className="font-normal text-[24px] leading-[100%] tracking-[0%]">
                      <span>{pointer.number}</span> {pointer.heading}
                    </div>
                    {/* Second line - Description */}
                    <div className="font-normal text-[24px] leading-[100%] tracking-[0%] mt-[10px]">
                      {pointer.description}
                    </div>
                  </div>
                  {/* Black line separator */}
                  <div className="my-[40px] border-t border-black" />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mb-[114px] mx-[45px]">
        <ScrollAnimation direction="up" distance={18} delay={0.26}>
          {/* Heading */}
          <div className="mb-[114px] text-center">
            <h2 className="font-light text-[25.77px] leading-[130%] tracking-[0%] whitespace-pre-line">
              {cultureText.pointers.heading}
            </h2>
          </div>

          {/* Pointers */}
          <div className="px-[32px] mb-[100px]">
            {culturePointers.map((pointer, index) => (
              <div key={pointer.number} className="mb-[50px] last:mb-0">
                <div className="flex gap-[15px]">
                  {/* Column 1 - Number */}
                  <div className="self-start">
                    <span className="font-normal text-[16px] leading-[100%] tracking-[0%]">
                      {pointer.number}
                    </span>
                  </div>

                  {/* Column 2 - Heading and Description */}
                  <div className="flex-1">
                    <div className="font-normal text-[16px] leading-[100%] tracking-[0%]">
                      {pointer.heading} {pointer.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
