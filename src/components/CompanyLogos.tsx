import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function CompanyLogos() {
  return (
    <section className="w-full relative">
      {/* Desktop */}
      <div className="hidden md:block relative">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-[412px] mt-[-9px]"
          style={{
            backgroundImage: "url(/assets/D4-BG.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 pt-[210px] pb-[100px]">
          <ScrollAnimation direction="down" distance={28} delay={0.24}>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/D4.svg"
                alt="Company Logos"
                width={1200}
                height={400}
                className="max-w-full"
                priority
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-white">
        <ScrollAnimation direction="down" distance={22} delay={0.26}>
          <div className="pl-[47px] pt-[49px] pb-[49px]">
            <Image
              src="/assets/M4.svg"
              alt="Company Logos"
              width={600}
              height={300}
              className="max-w-full"
              priority
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
