import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

export default function HeroDesktop() {
  return (
    <div className="hidden md:block relative">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/D2-BG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 md:h-[1050px]">
        <div className="px-[100px] pt-[105px] pb-[10px]">
          <div className="flex items-center justify-between">
            <ScrollAnimation direction="up" distance={24} delay={0.2}>
              <div className="h-[190px] pl-[55px] flex items-center">
                <span
                  className="font-bold leading-[100%]"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "78px",
                    letterSpacing: "0%",
                  }}
                >
                  Where <span style={{ color: "#8CC63F" }}>Ideas</span>
                  <br />
                  Take Flight.
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" distance={32} delay={0.28}>
              <div className="max-w-[700px] min-w-[600px] h-[431px] bg-transparent flex items-center justify-center">
                <Image
                  src="/assets/Images/Hero-desktop1.svg"
                  alt="Hero visual"
                  width={700}
                  height={431}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="pr-[177px] pl-[144px] pt-[150px] pb-[165px]">
          <div className="flex items-center justify-between">
            <ScrollAnimation direction="up" distance={20} delay={0.24}>
              <div className="w-[508px] h-[220px] bg-[#D5D5D5]"></div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" distance={20} delay={0.32}>
              <div className="flex-1 pl-[127px]">
                <span
                  className="font-normal leading-[100%] text-black"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "26px",
                    letterSpacing: "0%",
                  }}
                >
                  Imagic Creatives is an integrated design studio shaping how
                  the world experiences brands. We design and position your
                  brand through immersive visuals and experiences that bridge
                  imagination and influence.
                </span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
