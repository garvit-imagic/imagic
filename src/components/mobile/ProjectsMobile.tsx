"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import InfoCardMobile from "./InfoCardMobile";
import ImageCardMobile from "./ImageCardMobile";

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

  return (
    <div className="md:hidden bg-white">
      <div className="mx-[42.31px] mt-[80.68px]">
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

        {visibleProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => handleInteraction(project.id, true)}
            onMouseLeave={() => handleInteraction(project.id, false)}
            onTouchStart={() => handleInteraction(project.id, true)}
            onTouchEnd={() => handleInteraction(project.id, false)}
          >
            <div
              style={{
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <ImageCardMobile image={getCurrentImage(project)} />
            </div>

            <InfoCardMobile
              number={project.number}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}

        <div className="flex justify-center mb-[71.62px]">
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
        </div>
      </div>
    </div>
  );
}
