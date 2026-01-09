import ScrollAnimation from "../ScrollAnimation";

export default function StatsMobile() {
  return (
    <div className="md:hidden relative">
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/M6-BG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <ScrollAnimation direction="up" distance={18} delay={0.22}>
          <h2
            className="font-bold text-center mx-[45px] pt-[98px]"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            <span style={{ color: "#8CC63F" }}>35+ Years</span> of Getting Things
            Done.
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={16} delay={0.3}>
          <p
            className="font-normal text-center mt-[60px] mx-[49px]"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#616161",
            }}
          >
            We&apos;re a collective of design specialists, united by a passion
            for problem-solving and a refusal to settle for the ordinary.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={16} delay={0.38}>
          <div className="flex flex-col items-center mt-[60px]">
            <p
              className="font-normal text-center"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "21px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              Projects Delivered
            </p>
            <div
              className="font-normal text-center"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "50px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              10K<span style={{ color: "#8CC63F" }}>+</span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance={16} delay={0.46}>
          <div className="flex flex-col items-center mt-[60px] pb-[136px]">
            <p
              className="font-normal text-center"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "21px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              Team Members
            </p>
            <div
              className="font-normal text-center"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "50px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              20<span style={{ color: "#8CC63F" }}>+</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
