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
      className="bg-white flex flex-col"
      style={{
        width: "266.14px",
        height: "337.99px",
        borderRadius: "19px",
        marginLeft: "33.27px",
        marginTop: "32.2px",
        marginBottom: "31.2px",
        marginRight: "14.55px",
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
    </div>
  );
}

