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

            <div className="max-w-[700px] min-w-[600px] h-[431px] bg-[#E5E5E5] flex items-center justify-center">
              <div className="relative w-64 h-64">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="planeGradient"
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
                    fill="url(#planeGradient)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="pr-[177px] pl-[144px] pt-[150px] pb-[165px]">
          <div className="flex items-center justify-between">
            <div className="w-[508px] h-[220px] bg-[#D5D5D5]"></div>

            <div className="flex-1 pl-[127px]">
              <span
                className="font-normal leading-[100%] text-black"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "26px",
                  letterSpacing: "0%",
                }}
              >
                Imagic Creatives is an integrated design studio shaping how the
                world experiences brands. We design and position your brand
                through immersive visuals and experiences that bridge
                imagination and influence.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

