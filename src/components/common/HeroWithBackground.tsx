import Image from "next/image";

interface HeroWithBackgroundProps {
  backgroundImage: string;
  text: string;
  height?: string;
  textWidth?: string;
  mobileBackgroundImage?: string;
  mobileHeight?: string;
  mobileTextWidth?: string;
}

export default function HeroWithBackground({
  backgroundImage,
  text,
  height = "600px",
  textWidth = "40%",
  mobileBackgroundImage,
  mobileHeight = "400px",
  mobileTextWidth = "80%",
}: HeroWithBackgroundProps) {
  const bgImageMobile = mobileBackgroundImage || backgroundImage;

  return (
    <section className="w-full relative">
      {/* Desktop Hero */}
      <div
        className="hidden md:block relative w-full"
        style={{
          height,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1
              className="font-bold text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "130%",
                letterSpacing: "0%",
                width: textWidth,
                margin: "0 auto",
              }}
            >
              {text}
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div
        className="md:hidden relative w-full"
        style={{
          height: mobileHeight,
          backgroundImage: `url(${bgImageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1
              className="font-bold text-center"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "110%",
                letterSpacing: "0%",
                width: mobileTextWidth,
                margin: "0 auto",
              }}
            >
              {text}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
