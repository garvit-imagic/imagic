"use client";

import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

interface ImageTextSectionProps {
  iconSrc: string;
  iconWidth?: number;
  iconHeight?: number;
  iconAlt?: string;
  text: string;
  textWidth?: string;
  mobileTextWidth?: string;
}

export default function ImageTextSection({
  iconSrc,
  iconWidth = 68,
  iconHeight = 68,
  iconAlt = "Section Icon",
  text,
  textWidth = "60%",
  mobileTextWidth = "90%",
}: ImageTextSectionProps) {
  return (
    <section className="w-full bg-white">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="flex flex-col items-center">
          {/* Icon */}
          <ScrollAnimation direction="up" distance={24} delay={0.4}>
            <div
              className="flex items-center justify-center"
              style={{ marginTop: "189px" }}
            >
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={iconWidth}
                height={iconHeight}
                className="object-contain"
              />
            </div>
          </ScrollAnimation>

          {/* Text */}
          <ScrollAnimation direction="up" distance={24} delay={0.5}>
            <div
              className="flex items-center justify-center"
              style={{ marginTop: "115px" }}
            >
              <p
                className="text-center font-normal"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "35px",
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  width: textWidth,
                }}
              >
                {text}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="flex flex-col items-center px-4">
          {/* Icon */}
          <ScrollAnimation direction="up" distance={20} delay={0.2}>
            <div
              className="flex items-center justify-center"
              style={{ marginTop: "80px" }}
            >
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={iconWidth * 0.7}
                height={iconHeight * 0.7}
                className="object-contain"
              />
            </div>
          </ScrollAnimation>

          {/* Text */}
          <ScrollAnimation direction="up" distance={18} delay={0.28}>
            <div
              className="flex items-center justify-center"
              style={{ marginTop: "60px" }}
            >
              <p
                className="text-center font-normal"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "22px",
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  width: mobileTextWidth,
                }}
              >
                {text}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
