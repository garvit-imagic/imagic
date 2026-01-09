"use client";

import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "../ScrollAnimation";

export default function StatsDesktop() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [projectsCount, setProjectsCount] = useState(1);
  const [teamCount, setTeamCount] = useState(1);

  useEffect(() => {
    if (!metricsRef.current || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
    );

    observer.observe(metricsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    const durationMs = 1400;
    const startTime = performance.now();
    const startProjects = 1;
    const endProjects = 10;
    const startTeam = 1;
    const endTeam = 20;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const nextProjects = Math.round(
        startProjects + (endProjects - startProjects) * eased
      );
      const nextTeam = Math.round(
        startTeam + (endTeam - startTeam) * eased
      );

      setProjectsCount(Math.min(nextProjects, endProjects));
      setTeamCount(Math.min(nextTeam, endTeam));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasAnimated]);

  return (
    <div className="hidden md:block relative">
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[489px]"
        style={{
          backgroundImage: "url(/assets/D6-BG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 pl-[100px] py-[172px] pr-[150px]">
        <div className="w-full">
          <div className="flex flex-col gap-[60px] w-full">
            <ScrollAnimation direction="up" distance={24} delay={0.2}>
              <h2
                className="font-bold w-[874px]"
                style={{
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "80px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                <span style={{ color: "#8CC63F" }}>35+ Years</span> of Getting
                <br />
                Things Done.
              </h2>
            </ScrollAnimation>

            <div
              ref={metricsRef}
              className="flex items-center justify-between w-full"
            >
              <ScrollAnimation direction="up" distance={20} delay={0.26}>
                <span
                  className="font-normal text-black"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "28px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    display: "inline-block",
                    width: "518px",
                    color: "#636363",
                    fontWeight: 350,
                  }}
                >
                  We&apos;re a collective of design specialists, united by a
                  passion for problem-solving and a refusal to settle for the
                  ordinary.
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance={18} delay={0.32}>
                <div className="flex flex-col gap-[10px] items-center w-[210px]">
                  <p
                    className="font-normal text-center text-black"
                    style={{
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      fontSize: "24px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Projects Delivered
                  </p>
                  <div
                    className="font-normal text-center"
                    style={{
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      fontSize: "88px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {projectsCount}K<span style={{ color: "#8CC63F" }}>+</span>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" distance={18} delay={0.38}>
                <div className="flex flex-col gap-[10px] items-center w-[190px]">
                  <p
                    className="font-normal text-center text-black"
                    style={{
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      fontSize: "24px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Team Members
                  </p>
                  <div
                    className="font-normal text-center"
                    style={{
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      fontSize: "88px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {teamCount}
                    <span style={{ color: "#8CC63F" }}>+</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation direction="up" distance={16} delay={0.44}>
              <button
                className="font-normal text-center"
                style={{
                  width: "408px",
                  height: "78px",
                  borderRadius: "8px",
                  paddingTop: "16px",
                  paddingRight: "60px",
                  paddingBottom: "16px",
                  paddingLeft: "60px",
                  background: "#BEE56E",
                  boxShadow: "7px 7px 0px 0px #81A733",
                  fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                  fontSize: "34px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                Start Your Project!
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
