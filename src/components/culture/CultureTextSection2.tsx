import { cultureText } from "@/data/cultureData";

export default function CultureTextSection2() {
  const { section2 } = cultureText;

  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[100px] mb-[186px]">
        {/* Row 1 - "We're driven by a simple truth:" */}
        <div className="mb-[315px]">
          <h2 className="font-bold text-[80px] leading-[100%] tracking-[0%]">
            {section2.row1.text}
            <span className="font-normal">{section2.row1.lightText}</span>
          </h2>
        </div>

        {/* Row 2 - "Great work starts with open conversations." */}
        <div className="mb-[405px] text-left">
          <div className="font-normal text-[64px] leading-[100%] tracking-[0%]">
            {section2.row2.line1}
          </div>
          <div className="font-bold text-[64px] leading-[100%] tracking-[0%]">
            {section2.row2.line2}
          </div>
        </div>

        {/* Row 3 - Paragraph (60% width, right aligned) */}
        <div className="mb-[259px] flex justify-end">
          <p className="w-[60%] font-normal text-[32px] leading-[100%] tracking-[0%] text-right">
            {section2.row3}
          </p>
        </div>

        {/* Row 4 - Paragraph (30% width, left aligned) */}
        <div className="mb-[281px]">
          <p className="w-[30%] font-normal text-[32px] leading-[100%] tracking-[0%] text-left">
            {section2.row4}
          </p>
        </div>

        {/* Row 5 - "Let's make it work !" */}
        <div className="text-left">
          <div className="font-normal text-[64px] leading-[100%] tracking-[0%]">
            {section2.row5.line1}
          </div>
          <div className="font-normal text-[64px] leading-[100%] tracking-[0%]">
            {section2.row5.line2}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden text-center">
        {/* Row 1 */}
        <div className="mb-[114px]">
          <h2 className="font-normal italic text-[25.77px] leading-[100%] tracking-[0%]">
            {section2.row1.text}
            {section2.row1.lightText}
          </h2>
        </div>

        {/* Row 2 */}
        <div className="mb-[114px]">
          <div className="font-normal text-[18px] leading-[100%] tracking-[0%]">
            {section2.row2.line1}
          </div>
          <div className="font-bold text-[18px] leading-[100%] tracking-[0%]">
            {section2.row2.line2}
          </div>
        </div>

        {/* Row 3 */}
        <div className="mb-[114px]">
          <p className="font-normal text-[16px] leading-[100%] tracking-[0%]">
            {section2.row3}
          </p>
        </div>

        {/* Row 4 */}
        <div className="mb-[114px]">
          <p className="font-normal text-[16px] leading-[100%] tracking-[0%]">
            {section2.row4}
          </p>
        </div>

        {/* Row 5 */}
        <div className="mb-[114px]">
          <div className="font-normal text-[30px] leading-[100%] tracking-[0%]">
            {section2.row5.line1}
          </div>
          <div className="font-normal text-[30px] leading-[100%] tracking-[0%]">
            {section2.row5.line2}
          </div>
        </div>
      </div>
    </section>
  );
}
