import HeroDesktop from "./desktop/HeroDesktop";
import HeroMobile from "./mobile/HeroMobile";

export default function HeroSection() {
  return (
    <section className="w-full relative">
      <HeroDesktop />
      <HeroMobile />
    </section>
  );
}
