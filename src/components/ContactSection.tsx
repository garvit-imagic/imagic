import ContactDesktop from "./desktop/ContactDesktop";
import ContactMobile from "./mobile/ContactMobile";

interface ContactSectionProps {
  showHeading?: boolean;
}

export default function ContactSection({
  showHeading = true,
}: ContactSectionProps) {
  return (
    <section className="w-full relative">
      <ContactDesktop showHeading={showHeading} />
      <ContactMobile showHeading={showHeading} />
    </section>
  );
}
