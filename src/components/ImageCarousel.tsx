"use client";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Paper } from "@mui/material";

// Carousel items - can be expanded with more project images
const carouselItems = [
  {
    id: 1,
    image: "/D7.jpg",
    mobileImage: "/M7.jpg",
    alt: "Project showcase 1",
  },
  {
    id: 2,
    image: "/D7.jpg",
    mobileImage: "/M7.jpg",
    alt: "Project showcase 1",
  },
  {
    id: 3,
    image: "/D7.jpg",
    mobileImage: "/M7.jpg",
    alt: "Project showcase 1",
  },
  // Add more carousel items here as needed
];

export default function ImageCarousel() {
  return (
    <section className="relative w-full">
      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <Carousel
          autoPlay={true}
          interval={5000}
          animation="slide"
          duration={800}
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={true}
          swipe={true}
          indicatorIconButtonProps={{
            style: {
              padding: "8px",
              color: "#FFFFFF",
              opacity: 0.5,
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#8CC63F",
              opacity: 1,
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "20px",
              position: "absolute",
              bottom: "30px",
              zIndex: 2,
            },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              padding: "10px",
              margin: "0 20px",
            },
          }}
          navButtonsWrapperProps={{
            style: {
              top: "50%",
              transform: "translateY(-50%)",
            },
          }}
        >
          {carouselItems.map((item) => (
            <Paper
              key={item.id}
              elevation={0}
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority={item.id === 1}
                />
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Carousel
          autoPlay={true}
          interval={5000}
          animation="slide"
          duration={800}
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={true}
          swipe={true}
          indicatorIconButtonProps={{
            style: {
              padding: "6px",
              color: "#FFFFFF",
              opacity: 0.5,
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#8CC63F",
              opacity: 1,
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "15px",
              position: "absolute",
              bottom: "20px",
              zIndex: 2,
            },
          }}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              padding: "8px",
            },
          }}
        >
          {carouselItems.map((item) => (
            <Paper
              key={item.id}
              elevation={0}
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={item.mobileImage}
                  alt={item.alt}
                  width={768}
                  height={1024}
                  className="w-full h-auto object-cover"
                  priority={item.id === 1}
                />
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
