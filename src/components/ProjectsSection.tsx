import ProjectsDesktop from "./desktop/ProjectsDesktop";
import ProjectsMobile from "./mobile/ProjectsMobile";

export default function ProjectsSection() {
  return (
    <section className="w-full relative">
      <ProjectsDesktop />
      <ProjectsMobile />
    </section>
  );
}

