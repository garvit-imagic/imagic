import { projects } from "@/data/projects";
import InfoCardDesktop from "./InfoCardDesktop";
import ImageCardDesktop from "./ImageCardDesktop";
import ScrollAnimation from "../ScrollAnimation";

export default function ProjectsDesktop() {
  const cardDelay = (index: number) => 0.22 + index * 0.04;

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
            <ScrollAnimation direction="up" distance={28} delay={0.2}>
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
            </ScrollAnimation>
          </div>

          <ScrollAnimation direction="right" distance={26} delay={0.28}>
            <div
              style={{
                width: "100%",
                height: "401.43px",
                borderRadius: "30px",
                backgroundColor: "#B8E515",
                gridColumn: "3/4",
              }}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="right" distance={26} delay={0.34}>
            <div
              style={{
                width: "100%",
                height: "401.43px",
                borderRadius: "30px",
                gridColumn: "4/4",
              }}
            />
          </ScrollAnimation>

          {/* Row 2: 4 Project Cards */}
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(0)}>
            <InfoCardDesktop
              number={projects[0].number}
              title={projects[0].title}
              description={projects[0].description}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(1)}>
            <ImageCardDesktop
              frontImage={projects[0].frontImage}
              backImage={projects[0].backImage}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(2)}>
            <InfoCardDesktop
              number={projects[1].number}
              title={projects[1].title}
              description={projects[1].description}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(3)}>
            <ImageCardDesktop
              frontImage={projects[1].frontImage}
              backImage={projects[1].backImage}
            />
          </ScrollAnimation>

          {/* Row 3: 4 Project Cards */}
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(4)}>
            <ImageCardDesktop
              frontImage={projects[2].frontImage}
              backImage={projects[2].backImage}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(5)}>
            <InfoCardDesktop
              number={projects[2].number}
              title={projects[2].title}
              description={projects[2].description}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(6)}>
            <ImageCardDesktop
              frontImage={projects[3].frontImage}
              backImage={projects[3].backImage}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(7)}>
            <InfoCardDesktop
              number={projects[3].number}
              title={projects[3].title}
              description={projects[3].description}
            />
          </ScrollAnimation>

          {/* Row 4: 4 Project Cards */}
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(8)}>
            <InfoCardDesktop
              number={projects[4].number}
              title={projects[4].title}
              description={projects[4].description}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(9)}>
            <ImageCardDesktop
              frontImage={projects[4].frontImage}
              backImage={projects[4].backImage}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(10)}>
            <InfoCardDesktop
              number={projects[5].number}
              title={projects[5].title}
              description={projects[5].description}
            />
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={20} delay={cardDelay(11)}>
            <ImageCardDesktop
              frontImage={projects[5].frontImage}
              backImage={projects[5].backImage}
            />
          </ScrollAnimation>

          {/* Row 5: Green Card + Footer Text (spans 3 cols) */}
          <ScrollAnimation direction="left" distance={26} delay={0.3}>
            <div
              style={{
                width: "100%",
                height: "401.43px",
                borderRadius: "30px",
                backgroundColor: "#B8E515",
                gridColumn: "1 / 2",
              }}
            />
          </ScrollAnimation>

          <div style={{ gridColumn: "2 / 5" }}>
            <ScrollAnimation direction="up" distance={24} delay={0.4}>
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
            </ScrollAnimation>
          </div>
        </div>

        <div className="mb-[100px]" />
      </div>
    </div>
  );
}
