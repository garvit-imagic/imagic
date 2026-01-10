"use client";

import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/projects";
import InfoCardMobile from "./InfoCardMobile";
import ImageCardMobile from "./ImageCardMobile";
import ScrollAnimation from "../ScrollAnimation";

export default function ProjectsMobile() {
  const [showAll, setShowAll] = useState(false);
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      const allVisible = new Set(visibleProjects.map((project) => project.id));
      setVisibleIds(allVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const target = entry.target as HTMLDivElement;
            const projectId = target.dataset.projectId;
            if (!projectId) {
              return;
            }
            if (entry.isIntersecting) {
              next.add(projectId);
            } else {
              next.delete(projectId);
            }
          });
          return next;
        });
      },
      { threshold: 0.5, rootMargin: "0px" }
    );

    visibleProjects.forEach((project) => {
      const ref = itemRefs.current[project.id];
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleProjects]);

  const isFlipped = (project: (typeof projects)[0]) =>
    visibleIds.has(project.id);

  const itemDelay = (index: number) => 0.24 + index * 0.08;

  return (
    <div className="md:hidden bg-white">
      <div className="mx-[42.31px] mt-[80.68px]">
        <ScrollAnimation direction="up" distance={20} delay={0.22}>
          <h2
            className="font-bold text-center mb-[90px]"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Designed to <span style={{ color: "#8CC63F" }}>Deliver</span> —
            Literally.
          </h2>
        </ScrollAnimation>

        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(node) => {
              itemRefs.current[project.id] = node;
            }}
            data-project-id={project.id}
          >
            <ScrollAnimation
              direction="up"
              distance={18}
              delay={itemDelay(index)}
            >
              <div
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <ImageCardMobile
                  frontImage={project.frontImage}
                  backImage={project.backImage}
                  isFlipped={isFlipped(project)}
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              direction="up"
              distance={16}
              delay={itemDelay(index) + 0.06}
            >
              <InfoCardMobile
                number={project.number}
                title={project.title}
                description={project.description}
              />
            </ScrollAnimation>
          </div>
        ))}

        <div className="flex justify-center mb-[71.62px]">
          <ScrollAnimation direction="up" distance={16} delay={0.4}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-normal text-center bg-[#BEE56E] transition-colors hover:bg-[#BAED50]"
              style={{
                borderRadius: "8px",
                paddingTop: "10px",
                paddingRight: "30px",
                paddingBottom: "10px",
                paddingLeft: "30px",
                boxShadow: "5px 5px 0px 0px #81A733",
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
