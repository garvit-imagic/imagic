import { cultureText } from "@/data/cultureData";

export default function CultureTextSection1() {
  const { section1 } = cultureText;

  return (
    <section className="w-full mb-[114px]">
      {/* Desktop Version */}
      <div className="hidden md:block ml-[100px] mr-[70px] mt-[145px]">
        {/* Row 1 - "Serious about design" */}
        <div className="mb-[189px] text-left">
          <div className="leading-[100%]">
            <span className="font-bold text-[80px] tracking-[0%]">
              {section1.row1.line1}
            </span>
          </div>
          <div className="leading-[100%] pt-[50px]">
            <span className="font-normal text-[80px] tracking-[0%] ml-[20px]">
              {section1.row1.line2.normal}
            </span>
            <span className="font-bold text-[80px] tracking-[0%]">
              {section1.row1.line2.bold}
            </span>
          </div>
        </div>

        {/* Row 2 - Paragraphs */}
        <div className="mb-[334px] flex justify-end">
          <p className="font-normal text-[32px] leading-[120%] tracking-[0%] w-[65%]">
            {section1.row2.paragraph1}
            <span className="italic">{section1.row2.italicText}</span>
            <br />
            <br />
            {section1.row2.paragraph2}
          </p>
        </div>

        {/* Row 3 - "But not about ourselves !" */}
        <div className="text-left">
          <div className="leading-[100%]">
            <span className="font-bold text-[80px] tracking-[0%]">
              {section1.row3.text}
            </span>
            <span className="font-normal text-[80px] tracking-[0%]">
              {section1.row3.normalWeight}
            </span>
            <span className="font-bold text-[80px] tracking-[0%]">
              {section1.row3.boldText}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden text-center">
        {/* Row 1 - "Serious about design" */}
        <div className="mb-[144px]">
          <div className="leading-[100%]">
            <span className="font-bold text-[25.77px] tracking-[0%]">
              Serious{" "}
            </span>
            <span className="font-normal text-[25.77px] tracking-[0%]">
              about
            </span>
          </div>
          <div className="leading-[100%] mt-[15px]">
            <span className="font-bold text-[25.77px] tracking-[0%] ">
              design
            </span>
          </div>
        </div>

        {/* Row 2 - Paragraphs */}
        <div className="mb-[144px] mx-[52px]">
          <p className="font-normal text-[16px] leading-[130%] tracking-[0%]">
            {section1.row2.paragraph1}
            <span className="italic">{section1.row2.italicText}</span>
          </p>
          <p className="font-normal text-[16px] leading-[130%] tracking-[0%] mt-5">
            {section1.row2.paragraph2}
          </p>
        </div>

        {/* Row 3 - "But not about ourselves !" */}
        <div className="mb-[144px]">
          <div className="leading-[100%]">
            <span className="font-bold text-[25.77px] tracking-[0%]">
              But not{" "}
            </span>
            <span className="font-normal text-[25.77px] tracking-[0%]">
              about
            </span>
          </div>
          <div className="leading-[100%]  mt-4">
            <span className="font-bold text-[25.77px] tracking-[0%]">
              ourselves !
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
