"use client";

import ScrollAnimation from "../ScrollAnimation";

interface ServiceDetailCardProps {
  stripColor: string;
  stripPosition: "left" | "right";
  column1: {
    heading: string;
    headingClassName: string;
    description: string;
    descriptionClassName: string;
    mobileHeadingClassName: string;
    mobileDescriptionClassName: string;
  };
  column2: {
    heading: string;
    headingClassName: string;
    pointers: string[];
    pointerClassName: string;
    numberTextGap: string;
    mobileHeadingClassName: string;
    mobilePointerClassName: string;
  };
  isFirstCard?: boolean;
  delay?: number;
}

export default function ServiceDetailCard({
  stripColor,
  stripPosition,
  column1,
  column2,
  isFirstCard = false,
  delay = 0.26,
}: ServiceDetailCardProps) {
  return (
    <>
      {/* Desktop Version */}
      <section className="hidden md:block w-full -mt-[100px]">
        <div
          className="mx-[98px] relative"
          style={{ height: "1200px", display: "flex", alignItems: "center" }}
        >
          {/* Vertical Strip - 60px × 1200px - Outside animation so always visible */}
          <div
            className={`absolute ${
              stripPosition === "left" ? "left-0" : "right-0"
            } w-[60px] top-0`}
            style={{ backgroundColor: stripColor, height: "1200px" }}
          />

          <ScrollAnimation direction="up" distance={22} delay={delay}>
            {/* Two Column Layout */}
            <div
              className="flex w-full relative"
              style={{
                gap: "139px",
                paddingLeft: stripPosition === "left" ? "130px" : "0",
                paddingRight: stripPosition === "right" ? "130px" : "0",
              }}
            >
              {/* Column 1 - Heading & Description - 40% width with pt-[20px] offset */}
              <div className="relative z-10 pt-[60px]" style={{ width: "40%" }}>
                <p
                  style={{
                    fontSize: "36px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    fontWeight: 400,
                  }}
                >
                  {column1.heading}
                </p>
                <p
                  className="pl-[62px] mt-[55px]"
                  style={{
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    fontWeight: 400,
                  }}
                >
                  {column1.description}
                </p>
              </div>

              {/* Column 2 - What this includes - 50% width */}
              <div className="relative z-10" style={{ width: "50%" }}>
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    fontWeight: 400,
                  }}
                >
                  {column2.heading}
                </h3>
                <div className="mt-[49px]">
                  {column2.pointers.map((pointer, index) => (
                    <div
                      key={index}
                      className="flex mb-[90px]"
                      style={{ gap: "8px" }}
                    >
                      <span
                        style={{
                          fontSize: "24px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          fontWeight: 400,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontSize: "24px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          fontWeight: 400,
                        }}
                      >
                        {pointer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mobile Version - No strips, stacked layout */}
      <section className="md:hidden w-full mb-[80px]">
        <ScrollAnimation direction="up" distance={18} delay={delay}>
          <div className="mx-[20px]">
            {/* Column 1 */}
            <div className="mb-[40px]">
              <h3 className={column1.mobileHeadingClassName}>
                {column1.heading}
              </h3>
              <p className={`${column1.mobileDescriptionClassName} mt-[15px]`}>
                {column1.description}
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className={column2.mobileHeadingClassName}>
                {column2.heading}
              </h3>
              <div className="mt-[20px]">
                {column2.pointers.map((pointer, index) => (
                  <div key={index} className="mb-[15px]">
                    <div className="flex items-start justify-center gap-[8px]">
                      <span className={column2.mobilePointerClassName}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={column2.mobilePointerClassName}>
                        {pointer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
}
