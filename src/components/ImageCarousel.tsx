'use client';

import { useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const carouselItems = [
  {
    title: 'Space Exploration',
    description: 'Discover the universe with cutting-edge technology',
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries of what\'s possible',
  },
  {
    title: 'Future Technology',
    description: 'Building tomorrow\'s solutions today',
  },
];

export default function ImageCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselItems.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {carouselItems[activeStep].title}
                </h3>
                <p className="text-lg text-white/80">
                  {carouselItems[activeStep].description}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '8px 16px',
                '& .MuiMobileStepper-dot': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
                '& .MuiMobileStepper-dotActive': {
                  backgroundColor: '#CDFF3C',
                },
              }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  sx={{ color: 'white' }}
                >
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ color: 'white' }}
                >
                  <KeyboardArrowLeft />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

