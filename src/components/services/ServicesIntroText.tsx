"use client";

import ScrollAnimation from "../ScrollAnimation";

interface ServicesIntroTextProps {
  text: string;
  alignment: "left" | "right" | "center";
  width: string;
  className: string;
  marginBottom: string;
  textAlign: string;
  mobileWidth: string;
  mobileClassName: string;
  mobileTextAlign: string;
  mobileMarginBottom: string;
  delay?: number;
}

export default function ServicesIntroText({
  text,
  alignment,
  width,
  className,
  marginBottom,
  textAlign,
  mobileWidth,
  mobileClassName,
  mobileTextAlign,
  mobileMarginBottom,
  delay = 0.2,
}: ServicesIntroTextProps) {
  // Determine margin classes for alignment
  const getAlignmentClass = () => {
    if (alignment === "right") return "ml-auto";
    if (alignment === "center") return "mx-auto";
    return "mr-auto"; // left alignment
  };

  return (
    <>
      {/* Desktop Version */}
      <section
        className="hidden md:block w-full"
        style={{
          marginBottom:
            marginBottom
              .replace("mb-", "")
              .replace("[", "")
              .replace("]", "")
              .replace("px", "") + "px",
        }}
      >
        <ScrollAnimation direction="up" distance={24} delay={delay}>
          <div
            className={`mx-[116px] ${getAlignmentClass()}`}
            style={{ width }}
          >
            <p className={`${className} ${textAlign}`}>{text}</p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Mobile Version */}
      <section
        className="md:hidden w-full"
        style={{
          marginBottom:
            mobileMarginBottom
              .replace("mb-", "")
              .replace("[", "")
              .replace("]", "")
              .replace("px", "") + "px",
        }}
      >
        <ScrollAnimation direction="up" distance={18} delay={delay}>
          <div className="mx-auto" style={{ width: mobileWidth }}>
            <p className={`${mobileClassName} ${mobileTextAlign}`}>{text}</p>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}
