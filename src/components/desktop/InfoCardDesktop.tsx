interface InfoCardDesktopProps {
  number: string;
  title: string;
  description: string;
}

export default function InfoCardDesktop({
  number,
  title,
  description,
}: InfoCardDesktopProps) {
  return (
    <div
      className="bg-white flex flex-col justify-between w-full"
      style={{
        borderRadius: "19px",
        height: "100%",
        padding: "32.2px 14.55px 31.2px 33.27px",
      }}
    >
      <div>
        <p
          className="font-bold"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "17px",
            lineHeight: "22px",
            letterSpacing: "0%",
          }}
        >
          {number}
        </p>
        <div style={{ height: "1em" }} />
        <h3
          className="font-bold"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "17px",
            lineHeight: "22px",
            letterSpacing: "0%",
          }}
        >
          {title}
        </h3>
        <p
          className="font-light"
          style={{
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.06em",
            marginTop: "58.24px",
          }}
        >
          {description}
        </p>
      </div>

      <button
        className="font-normal"
        style={{
          width: "136.27px",
          height: "33.28px",
          borderRadius: "19px",
          paddingRight: "10px",
          paddingLeft: "10px",
          border: "0.6px solid #000000",
          fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
          fontSize: "14px",
          backgroundColor: "transparent",
        }}
      >
        Read More
      </button>
    </div>
  );
}
