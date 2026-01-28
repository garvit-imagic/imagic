import Image from "next/image";
import { cultureImages } from "@/data/cultureData";

export default function CultureHero() {
  return (
    <section className="w-full pt-[75px] md:pt-0">
      {/* Desktop Hero */}
      <div className="hidden md:block w-full">
        <div className="relative w-full h-[calc(100vh-80px)]">
          <Image
            src={cultureImages.hero.desktop}
            alt="Culture Hero"
            fill
            className="object-contain pt-[20px]"
            priority
          />
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="md:hidden w-full mb-[114px]">
        <div className="relative w-full aspect-[400/257]">
          <Image
            src={cultureImages.hero.mobile}
            alt="Culture Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
