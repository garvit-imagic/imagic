import { projects } from "@/data/projects";
import InfoCardDesktop from "./InfoCardDesktop";
import ImageCardDesktop from "./ImageCardDesktop";

export default function ProjectsDesktop() {
  return (
    <div className="hidden md:block bg-white">
      <div className="mt-[200px] mx-[144px]">
        <div className="flex justify-between items-start mb-[38.6px]">
          <h2
            className="font-bold"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "80px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "626px",
            }}
          >
            Designed
            <br />
            to <span style={{ color: "#8CC63F" }}>Deliver</span>
            <br />— Literally.
          </h2>

          <div
            style={{
              width: "313.96px",
              height: "401.43px",
              borderRadius: "30px",
              backgroundColor: "#B8E515",
            }}
          />
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18.72px",
            rowGap: "18.72px",
          }}
        >
          <InfoCardDesktop
            number={projects[0].number}
            title={projects[0].title}
            description={projects[0].description}
          />
          <ImageCardDesktop
            frontImage={projects[0].frontImage}
            backImage={projects[0].backImage}
          />
          <InfoCardDesktop
            number={projects[1].number}
            title={projects[1].title}
            description={projects[1].description}
          />
          <ImageCardDesktop
            frontImage={projects[1].frontImage}
            backImage={projects[1].backImage}
          />

          <ImageCardDesktop
            frontImage={projects[2].frontImage}
            backImage={projects[2].backImage}
          />
          <InfoCardDesktop
            number={projects[2].number}
            title={projects[2].title}
            description={projects[2].description}
          />
          <ImageCardDesktop
            frontImage={projects[3].frontImage}
            backImage={projects[3].backImage}
          />
          <InfoCardDesktop
            number={projects[3].number}
            title={projects[3].title}
            description={projects[3].description}
          />

          <InfoCardDesktop
            number={projects[4].number}
            title={projects[4].title}
            description={projects[4].description}
          />
          <ImageCardDesktop
            frontImage={projects[4].frontImage}
            backImage={projects[4].backImage}
          />
          <InfoCardDesktop
            number={projects[5].number}
            title={projects[5].title}
            description={projects[5].description}
          />
          <ImageCardDesktop
            frontImage={projects[5].frontImage}
            backImage={projects[5].backImage}
          />
        </div>

        <div
          className="flex justify-between items-center mt-[18.72px] mb-[100px]"
          style={{ gap: "18.72px" }}
        >
          <div
            style={{
              width: "313.96px",
              height: "401.43px",
              borderRadius: "30px",
              backgroundColor: "#B8E515",
            }}
          />

          <h2
            className="font-bold flex-1 text-center pt-[55px]"
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "80px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Start Your
            <br />
            <span style={{ color: "#8CC63F" }}>Project</span> Today!
          </h2>
        </div>
      </div>
    </div>
  );
}

