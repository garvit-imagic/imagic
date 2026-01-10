import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

export default function HeroMobile() {
  return (
    <div className="md:hidden relative">
      {/* <div className="h-[153px] bg-white w-full" /> */}
      <div
        className="absolute top-[153px] left-0 right-0 bottom-0 w-full"
        style={{
          backgroundImage: "url(/assets/M2-BG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          height: "calc(100% - 153px)",
        }}
      />

      <div className="relative z-10 h-[622px]">
        <div className="px-[24px] pt-[55px] flex flex-col gap-[45px]">
          <ScrollAnimation direction="up" distance={18} delay={0.2}>
            <div className="w-[342px] h-[87px] mx-auto flex items-center justify-center">
              <h1
                className="font-bold text-center"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "32px",
                  letterSpacing: "0%",
                }}
              >
                Where <span style={{ color: "#8CC63F" }}>Ideas</span>
                <br />
                Take Flight.
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance={14} delay={0.28}>
            <div className="w-[140px] h-[140px] mx-auto">
              <Image
                src="/assets/images/Hero-desktop1.svg"
                alt="Hero visual"
                width={140}
                height={140}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </ScrollAnimation>
        </div>

        <div className="px-[49px] pt-[60px] pb-[54px] flex flex-col gap-[61px]">
          <ScrollAnimation direction="up" distance={16} delay={0.32}>
            <div className="mx-auto">
              <p
                className="font-normal text-center flex items-center justify-center"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0%",
                  color: "#616161",
                }}
              >
                Imagic Creatives is an integrated design studio shaping how the
                world experiences brands. We design and position your brand
                through immersive visuals and experiences that bridge
                imagination and influence.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance={16} delay={0.4}>
            <div className="w-[148px] h-[64px] bg-[#D5D5D5] rounded-2xl mx-auto"></div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
