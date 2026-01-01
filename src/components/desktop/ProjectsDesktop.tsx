import { projects } from "@/data/projects";
import InfoCardDesktop from "./InfoCardDesktop";
import ImageCardDesktop from "./ImageCardDesktop";

export default function ProjectsDesktop() {
  return (
    <div className="hidden md:block bg-white">
      <div className="mt-[200px] mx-[144px]">
        {/* Main Grid Container */}
        <div
          className="grid w-full"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18.72px",
            rowGap: "18.72px",
          }}
        >
          {/* Row 1: Header Text (spans 3 cols) + Green Card */}
          <div style={{ gridColumn: "1 / 3" }}>
            <h2
              className="font-bold"
              style={{
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "80px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Designed
              <br />
              to <span style={{ color: "#8CC63F" }}>Deliver</span>
              <br />— Literally.
            </h2>
          </div>

          <div
            style={{
              width: "100%",
              height: "401.43px",
              borderRadius: "30px",
              backgroundColor: "#B8E515",
              gridColumn: "3/4",
            }}
          />
           <div
            style={{
              width: "100%",
              height: "401.43px",
              borderRadius: "30px",
              gridColumn: "4/4",
            }}
          />

          {/* Row 2: 4 Project Cards */}
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

          {/* Row 3: 4 Project Cards */}
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

          {/* Row 4: 4 Project Cards */}
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

          {/* Row 5: Green Card + Footer Text (spans 3 cols) */}
          <div
            style={{
              width: "100%",
              height: "401.43px",
              borderRadius: "30px",
              backgroundColor: "#B8E515",
              gridColumn: "1 / 2",
            }}
          />

          <div style={{ gridColumn: "2 / 5" }}>
            <h2
              className="font-bold text-center pt-[145px]"
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

        <div className="mb-[100px]" />
      </div>
    </div>
  );
}

