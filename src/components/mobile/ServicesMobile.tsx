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

export default function ServicesMobile() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="md:hidden bg-white">
      <div className="pt-[80px]">
        <h2
          className="font-bold text-center ml-[43px] mr-[43px]"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "32px",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          A <span style={{ color: "#8CC63F" }}>little peek</span> into our
          playground.
        </h2>

        <p
          className="font-normal text-center mt-[50px] mx-[36px]"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "14px",
            lineHeight: "22px",
            letterSpacing: "0%",
            color: "#616161",
          }}
        >
          Across sectors it&apos;s the constant — the bridge between vision and
          design, and the people each idea is meant to inspire, ultimately
          driving real-world impact.
        </p>
      </div>

      <div className="mt-[50px] mx-[45px]">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                boxShadow: "none",
                border: "none",
                borderTop: "1px solid #C0C0C0",
                borderRadius: "0 !important",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: "0",
                },
                "&:last-child": {
                  borderBottom: "1px solid #C0C0C0",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Image
                    src="/assets/D9-Plus.svg"
                    alt="Expand"
                    width={26}
                    height={26}
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
                  padding: "20px 10px",
                  minHeight: "unset !important",
                  "& .MuiAccordionSummary-content": {
                    margin: "0 !important",
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
                    fontSize: "19px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {service.title}
                </h3>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0 0 20px 10px",
                }}
              >
                <p
                  className="text-black"
                  style={{
                    fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
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

