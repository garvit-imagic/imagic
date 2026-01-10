"use client";

import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";
import type { AccordionItem } from "@/types";
import ScrollAnimation from "../ScrollAnimation";

const services: AccordionItem[] = [
  {
    title: "SPACE",
    content:
      "Our journey into outer space began with ISRO. In the late 1980s, we created ISRO's official logo mark, shaping a visual identity for India's aspirations beyond Earth. Since then, we've contributed to some of the most complex missions ever, from Mangalyaan's historic journey to Mars to the Chandrayaan series that captivated India and reshaped lunar science. We've even reached for the stars with the Aditya-L1 mission to observe the Sun. Across these milestones, we crafted visual narratives and technical interfaces that turned scientific achievement into a source of collective pride. This was never just about missions and design--it was about celebrating moments that captured the imagination of the people.",
  },
  {
    title: "TECHNOLOGY",
    content:
      "Our work in technology spans IT and electrical systems that sustain modern infrastructure. Over the years, we've collaborated with leading technology organisations to shape identities, platforms, and interfaces for intricate software, hardware, and large-scale electrical ecosystems. From enterprise IT solutions to mission-critical electrical networks, our work focused on reducing complexity and bringing clarity to innovation at scale. Throughout our work, we translated advanced engineering into intuitive visual systems that enabled trust and long-term growth. Our focus was never limited to technology--it was about making progress clear, accessible, and human.",
  },
  {
    title: "DEFENSE",
    content:
      "In close collaboration with organisations such as DRDO, ADA, and Bharat Electronics, our work in the defense sector has taken shape. Over the years, we've contributed to identities, communication systems, and interfaces supporting advanced research, aerospace programs, and high-stakes engineering. Defined by confidentiality and sophistication, these environments demand designs focused on clarity, accuracy, and long-term usability. Across each project, we translate highly specialised engineering and strategic intent into structured visual systems that reinforce trust and operational excellence. Beyond defense, this work defines capability grounded in responsibility and purpose.",
  },
  {
    title: "MEDICINE",
    content:
      "Partnering with healthcare innovators, we transform detailed medical knowledge into clear, human-centered communication. From digital platforms to patient-facing interfaces, our designs make advanced research, treatments, and healthcare systems accessible and trustworthy. Every project translates scientific rigor into visual clarity, helping both professionals and patients engage with critical information effortlessly. This work is about making health, knowledge, and care understandable and accessible.",
  },
  {
    title: "LIFESTYLE",
    content:
      "In lifestyle and consumer brands, we focus on crafting identities that resonate emotionally and live naturally in everyday life. From fashion to wellness, we design experiences that capture culture, aspiration, and individuality. Across every initiative, we transform ideas into stories that feel authentic and lived-in, connecting products to people in meaningful ways. Beyond aesthetics, it was about crafting experiences people genuinely want to join.",
  },
  {
    title: "ARTS & CULTURE",
    content:
      "Working with designers, artists, cultural institutions, and creative communities, we bring stories to life--stories meant to be felt as much as seen. From exhibitions to distinctively designed photo journals, our work connects heritage and contemporary expression, crafting experiences that honour the past while engaging the present. Every collaboration transforms creativity and tradition into narratives that inspire, provoke, and connect audiences. Intuitively, this work is about cultivating dialogue, evoking emotion, and creating cultural resonance.",
  },
];

export default function ServicesDesktop() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="hidden md:block bg-white">
      <div className="pt-[165px]">
        <div className="flex-row items-start justify-between">
          <ScrollAnimation direction="up" distance={26} delay={0.2}>
            <h2
              className="font-bold ml-[144px]"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "80px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              A <span style={{ color: "#8CC63F" }}>little peek</span> into
              <br />
              our playground.
            </h2>
          </ScrollAnimation>

          <div />
        </div>
      </div>

      <div className="mt-[165px] ml-[144px] mr-[144px] pb-[100px] w-[50%]">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ScrollAnimation
              key={service.title}
              direction="up"
              distance={18}
              delay={0.24 + index * 0.05}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  boxShadow: "none",
                  border: "none",
                  borderTop: `${index === 0 ? "2px solid #C0C0C0" : "none"}`,
                  borderRadius: "0 !important",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                  "&:last-child": {
                    borderBottom: "2px solid #C0C0C0",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Image
                      src="/assets/D9-Plus.svg"
                      alt="Expand"
                      width={38}
                      height={38}
                      style={{
                        transform:
                          expanded === `panel${index}`
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  }
                  sx={{
                    padding: "30px 10px",
                    minHeight: "unset !important",
                    "& .MuiAccordionSummary-content": {
                      margin: "0 !important",
                      color: "#000000",
                    },
                    "& .MuiAccordionSummary-content.Mui-expanded": {
                      margin: "0 !important",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#BEE56E",
                    },
                  }}
                >
                  <h3
                    className="font-normal"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "51px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {service.title}
                  </h3>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "0 0 40px 10px",
                  }}
                >
                  <p
                    className="text-black"
                    style={{
                      fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                      fontSize: "20px",
                      lineHeight: "30px",
                    }}
                  >
                    {service.content}
                  </p>
                </AccordionDetails>
              </Accordion>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
