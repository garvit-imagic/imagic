import Image from "next/image";

interface ImageCardMobileProps {
  image?: string;
}

export default function ImageCardMobile({ image }: ImageCardMobileProps) {
  const cardStyle = {
    width: "305.39px",
    height: "388.96px",
    borderRadius: "30px",
    backgroundColor: "#8DD461",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const renderContent = () => {
    if (image) {
      return (
        <Image
          src={image}
          alt="Project"
          fill
          style={{ objectFit: "cover", borderRadius: "30px" }}
        />
      );
    }
    return null;
  };

  return <div style={cardStyle}>{renderContent()}</div>;
}

