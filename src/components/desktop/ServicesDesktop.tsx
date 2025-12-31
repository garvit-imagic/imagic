"use client";

import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";
import type { AccordionItem } from "@/types";

const services: AccordionItem[] = [
  {
    title: "SPACE",
    content:
      "Advanced space technology solutions including satellite systems, orbital mechanics, and space exploration tools.",
  },
  {
    title: "TECHNOLOGY",
    content:
      "Comprehensive technology solutions spanning AI, ML, cloud computing, and enterprise software development.",
  },
  {
    title: "DEFENSE",
    content:
      "Secure and robust defense systems with advanced encryption, threat detection, and mission-critical applications.",
  },
  {
    title: "MEDICINE",
    content:
      "Healthcare technology solutions including telemedicine platforms, medical imaging AI, and patient management systems.",
  },
  {
    title: "LIFESTYLE",
    content:
      "Consumer-focused applications and platforms that enhance daily life, from fitness tracking to smart home integration.",
  },
  {
    title: "ARTS & CULTURE",
    content:
      "Digital solutions for museums, galleries, and cultural institutions. Virtual exhibitions and interactive experiences.",
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

          <p
            className="font-light text-black mt-[200px] mr-[144px] max-w-[45%]"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "32px",
              lineHeight: "120%",
              letterSpacing: "0%",
              justifySelf: "flex-end",
            }}
          >
            Across sectors it&apos;s the constant — the bridge between vision
            and design, and the people each idea is meant to inspire, ultimately
            driving real-world impact.
          </p>
        </div>
      </div>

      <div className="mt-[244px] ml-[144px] mr-[144px] pb-[100px] w-[50%]">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                boxShadow: "none",
                border: "none",
                borderTop: "2px solid #C0C0C0",
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
                      transform: expanded === `panel${index}` ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                }
                sx={{
                  padding: "30px 10px",
                  "& .MuiAccordionSummary-content": {
                    margin: "0",
                    color: "#000000",
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
                    fontSize: "24px",
                    lineHeight: "140%",
                  }}
                >
                  {service.content}
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
