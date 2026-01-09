"use client";

import { useState, useEffect } from "react";
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

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    visibleProjects.forEach((project) => {
      if (!isPaused[project.id] && project.frontImage && project.backImage) {
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
  }, [visibleProjects, isPaused]);

  const handleInteraction = (projectId: string, pause: boolean) => {
    setIsPaused((prev) => ({ ...prev, [projectId]: pause }));
  };

  const getCurrentImage = (project: (typeof projects)[0]) => {
    const index = currentImageIndex[project.id] || 0;
    return index === 0 ? project.frontImage : project.backImage;
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
                <ImageCardMobile image={getCurrentImage(project)} />
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
              className="font-normal text-center"
              style={{
                borderRadius: "8px",
                paddingTop: "10px",
                paddingRight: "30px",
                paddingBottom: "10px",
                paddingLeft: "30px",
                background: "#BEE56E",
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
