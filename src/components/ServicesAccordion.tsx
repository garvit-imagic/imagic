import ServicesDesktop from "./desktop/ServicesDesktop";
import ServicesMobile from "./mobile/ServicesMobile";

export default function ServicesAccordion() {
  return (
    <section className="w-full relative">
      <ServicesDesktop />
      <ServicesMobile />
    </section>
  );
}
