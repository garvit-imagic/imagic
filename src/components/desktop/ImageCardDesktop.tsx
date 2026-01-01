"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

interface ImageCardDesktopProps {
  frontImage?: string;
  backImage?: string;
}

export default function ImageCardDesktop({
  frontImage,
  backImage,
}: ImageCardDesktopProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (backImage) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (backImage) {
      setIsFlipped(false);
    }
  };

  const cardStyle = {
    width: "313.96px",
    height: "401.43px",
    borderRadius: "30px",
    backgroundColor: "#8DD461",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const renderContent = (imageSrc?: string) => {
    if (imageSrc) {
      return (
        <Image
          src={imageSrc}
          alt="Project"
          fill
          style={{ objectFit: "cover", borderRadius: "30px" }}
        />
      );
    }
    return null;
  };

  if (!backImage) {
    return <div style={cardStyle}>{renderContent(frontImage)}</div>;
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div style={cardStyle}>{renderContent(frontImage)}</div>
        <div style={cardStyle}>{renderContent(backImage)}</div>
      </ReactCardFlip>
    </div>
  );
}

