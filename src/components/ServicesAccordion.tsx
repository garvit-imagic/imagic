'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { AccordionItem } from '@/types';

const services: AccordionItem[] = [
  {
    title: 'SPACE',
    content: 'Advanced space technology solutions including satellite systems, orbital mechanics, and space exploration tools. We provide cutting-edge solutions for aerospace and defense industries.',
  },
  {
    title: 'TECHNOLOGY',
    content: 'Comprehensive technology solutions spanning AI, ML, cloud computing, and enterprise software development. Transform your business with our innovative tech stack.',
  },
  {
    title: 'DEFENSE',
    content: 'Secure and robust defense systems with advanced encryption, threat detection, and mission-critical applications designed for the highest security standards.',
  },
  {
    title: 'MEDICINE',
    content: 'Healthcare technology solutions including telemedicine platforms, medical imaging AI, patient management systems, and clinical decision support tools.',
  },
  {
    title: 'LIFESTYLE',
    content: 'Consumer-focused applications and platforms that enhance daily life, from fitness tracking to smart home integration and personal productivity tools.',
  },
  {
    title: 'ARTS & CULTURE',
    content: 'Digital solutions for museums, galleries, and cultural institutions. Virtual exhibitions, digital archives, and interactive experiences that bring art to life.',
  },
];

export default function ServicesAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A <span className="text-primary">little peek</span> into
            <br />
            our playground.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {services.map((service, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                boxShadow: 'none',
                border: '1px solid #e5e5e5',
                borderRadius: '12px !important',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <RemoveIcon sx={{ color: '#000' }} />
                  ) : (
                    <AddIcon sx={{ color: '#000' }} />
                  )
                }
                sx={{
                  padding: '16px 24px',
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                <h3 className="text-lg md:text-xl font-bold text-text-primary">
                  {service.title}
                </h3>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: '0 24px 24px 24px',
                }}
              >
                <p className="text-text-secondary">{service.content}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

