"use client";

import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/projects";
import InfoCardMobile from "./InfoCardMobile";
import ImageCardMobile from "./ImageCardMobile";
import ScrollAnimation from "../ScrollAnimation";

export default function ProjectsMobile() {
  const [showAll, setShowAll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});
  const [isPaused, setIsPaused] = useState<{ [key: string]: boolean }>({});
  const [inView, setInView] = useState<{ [key: string]: boolean }>({});
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      const fallback: { [key: string]: boolean } = {};
      visibleProjects.forEach((project) => {
        fallback[project.id] = true;
      });
      setInView((prev) => ({ ...prev, ...fallback }));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const projectId = target.dataset.projectId;
          if (!projectId) {
            return;
          }
          setInView((prev) => ({ ...prev, [projectId]: entry.isIntersecting }));
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" }
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

  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    visibleProjects.forEach((project) => {
      if (
        inView[project.id] &&
        !isPaused[project.id] &&
        project.frontImage &&
        project.backImage
      ) {
        intervals[project.id] = setInterval(() => {
          setCurrentImageIndex((prev) => ({
            ...prev,
            [project.id]: prev[project.id] === 0 ? 1 : 0,
          }));
        }, 2000);
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [visibleProjects, isPaused, inView]);

  const handleInteraction = (projectId: string, pause: boolean) => {
    setIsPaused((prev) => ({ ...prev, [projectId]: pause }));
  };

  const isFlipped = (project: (typeof projects)[0]) => {
    const index = currentImageIndex[project.id] || 0;
    return index === 1;
  };

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
            onMouseEnter={() => handleInteraction(project.id, true)}
            onMouseLeave={() => handleInteraction(project.id, false)}
            onTouchStart={() => handleInteraction(project.id, true)}
            onTouchEnd={() => handleInteraction(project.id, false)}
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
