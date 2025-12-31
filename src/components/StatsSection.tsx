import StatsDesktop from "./desktop/StatsDesktop";
import StatsMobile from "./mobile/StatsMobile";

export default function StatsSection() {
  return (
    <section className="w-full relative">
      <StatsDesktop />
      <StatsMobile />
    </section>
  );
}
