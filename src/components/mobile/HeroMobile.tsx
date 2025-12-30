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

          <div className="w-[81.86px] h-[81.86px] mx-auto">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="planeGradientMobile"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#FFE135", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#FFC107", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#FF9800", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M100 20 L180 100 L100 120 L100 180 L90 180 L90 120 L20 100 Z"
                fill="url(#planeGradientMobile)"
              />
            </svg>
          </div>
        </div>

        <div className="px-[49px] pt-[60px] pb-[54px] flex flex-col gap-[61px]">
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
              through immersive visuals and experiences that bridge imagination
              and influence.
            </p>
          </div>

          <div className="w-[148px] h-[64px] bg-[#D5D5D5] rounded-2xl mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
