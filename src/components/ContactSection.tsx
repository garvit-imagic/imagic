import ContactDesktop from "./desktop/ContactDesktop";
import ContactMobile from "./mobile/ContactMobile";

export default function ContactSection() {
  return (
    <section className="w-full relative">
      <ContactDesktop />
      <ContactMobile />
    </section>
  );
}
