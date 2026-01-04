interface InfoCardMobileProps {
  number: string;
  title: string;
  description: string;
}

export default function InfoCardMobile({
  number,
  title,
  description,
}: InfoCardMobileProps) {
  return (
    <div
      className="bg-white flex flex-col h-[255.056px] mb-[71.62px]"
      style={{
        borderRadius: "19px",
        paddingTop: "43.3px",
        paddingRight: "30.8px",
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <p
            className="font-bold"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "17px",
              lineHeight: "100%",
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
              lineHeight: "100%",
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
              lineHeight: "100%",
              letterSpacing: "0.06em",
              marginTop: "40px",
            }}
          >
            {description}
          </p>
        </div>

        <button
          className="font-normal"
          style={{
            width: "140.59px",
            height: "34.33px",
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
    </div>
  );
}


