import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import type { CSSProperties } from "react";

interface ImageCardMobileProps {
  frontImage?: string;
  backImage?: string;
  isFlipped?: boolean;
}

export default function ImageCardMobile({
  frontImage,
  backImage,
  isFlipped = false,
}: ImageCardMobileProps) {
  const cardStyle: CSSProperties = {
    width: "305.39px",
    height: "388.96px",
    borderRadius: "30px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const renderContent = (image?: string) => {
    if (!image) {
      return null;
    }
    return (
      <Image
        src={image}
        alt="Project"
        fill
        style={{ objectFit: "cover", borderRadius: "30px" }}
      />
    );
  };

  if (!backImage) {
    return <div style={cardStyle}>{renderContent(frontImage)}</div>;
  }

  return (
    <div style={cardStyle}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div style={cardStyle}>{renderContent(frontImage)}</div>
        <div style={cardStyle}>{renderContent(backImage)}</div>
      </ReactCardFlip>
    </div>
  );
}
