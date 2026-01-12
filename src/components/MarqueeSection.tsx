"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function MarqueeSection() {
  const marqueeItems = [
    { number: "01", label: "Brand Strategy" },
    { number: "02", label: "Visual Design" },
    { number: "03", label: "Web Development" },
    { number: "04", label: "Digital Marketing" },
    { number: "05", label: "Content Creation" },
  ];

  return (
    <section className="w-full relative z-20">
      {/* Desktop Marquee */}
      <ScrollAnimation direction="up" distance={16} delay={0.2}>
        <div className="hidden md:block">
        {/* Marquee Container with 2px border */}
        <div className="w-full h-[56px] border-b-2 border-black overflow-hidden relative bg-white">
          <div className="marquee-content-desktop flex items-center h-full">
            {Array(8)
              .fill(marqueeItems)
              .flat()
              .map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center font-semibold flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-manrope), Manrope, sans-serif",
                    fontSize: "19px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    marginRight: "276px",
                  }}
                >
                  <span>{item.number}</span>
                  <span className="ml-[24px]">{item.label}</span>
                </span>
              ))}
          </div>
        </div>

        {/* 12px height strip with 40px padding on both sides */}
        <div className="w-full px-[40px] bg-transparent">
          <div className="h-[9px] bg-black w-full"></div>
        </div>
        </div>
      </ScrollAnimation>

      {/* Mobile Marquee */}
      <ScrollAnimation direction="up" distance={12} delay={0.24}>
        <div className="md:hidden">
        {/* Marquee Container with 1px border */}
        <div className="w-full h-[46px] border-b border-black overflow-hidden relative bg-white">
          <div className="marquee-content-mobile flex items-center h-full">
            {Array(12)
              .fill(marqueeItems)
              .flat()
              .map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center font-semibold flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-manrope), Manrope, sans-serif",
                    fontSize: "12px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    marginRight: "108px",
                  }}
                >
                  <span>{item.number}</span>
                  <span className="ml-[16px]">{item.label}</span>
                </span>
              ))}
          </div>
        </div>

        {/* 4px height strip with 20px padding on both sides */}
        <div className="w-full px-[20px] bg-transparent">
          <div className="h-[3px] bg-black w-full"></div>
        </div>
        </div>
      </ScrollAnimation>

      <style jsx>{`
        .marquee-content-desktop {
          display: flex;
          white-space: nowrap;
          animation: scroll-desktop 20s linear infinite !important;
        }

        .marquee-content-mobile {
          display: flex;
          white-space: nowrap;
          animation: scroll-mobile 10s linear infinite !important;
        }

        @keyframes scroll-desktop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-mobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
