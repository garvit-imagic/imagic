export default function StatsDesktop() {
  return (
    <div className="hidden md:block relative">
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[489px]"
        style={{
          backgroundImage: "url(/assets/D6-BG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 pl-[100px] py-[172px] pr-[150px]">
        <div className="w-full">
          <div className="flex flex-col gap-[60px] w-full">
            <h2
              className="font-bold w-[874px]"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "80px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              <span style={{ color: "#8CC63F" }}>35+ Years</span> of Getting
              <br />
              Things Done.
            </h2>

            <div className="flex items-center justify-between w-full">
              <span
                className="font-normal text-black"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "28px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  width: "518px",
                  color: "#636363",
                  fontWeight: 350,
                }}
              >
                We&apos;re a collective of design specialists, united by a
                passion for problem-solving and a refusal to settle for the
                ordinary.
              </span>
              <div className="flex flex-col gap-[10px] items-center w-[210px]">
                <p
                  className="font-normal text-center text-black"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Projects Delivered
                </p>
                <div
                  className="font-normal text-center"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "88px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  10K<span style={{ color: "#8CC63F" }}>+</span>
                </div>
              </div>

              <div className="flex flex-col gap-[10px] items-center w-[190px]">
                <p
                  className="font-normal text-center text-black"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Team Members
                </p>
                <div
                  className="font-normal text-center"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "88px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  20<span style={{ color: "#8CC63F" }}>+</span>
                </div>
              </div>
            </div>

            <button
              className="font-normal text-center"
              style={{
                width: "408px",
                height: "78px",
                borderRadius: "8px",
                paddingTop: "16px",
                paddingRight: "60px",
                paddingBottom: "16px",
                paddingLeft: "60px",
                background: "#BEE56E",
                boxShadow: "7px 7px 0px 0px #81A733",
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "34px",
                lineHeight: "100%",
                letterSpacing: "0%",
                cursor: "pointer",
                border: "none",
              }}
            >
              Start Your Project!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
