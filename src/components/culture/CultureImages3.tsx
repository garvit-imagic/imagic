import Image from "next/image";
import { cultureImages } from "@/data/cultureData";

export default function CultureImages3() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[100px] mb-[185px]">
        {/* Row 1 - Image right aligned */}
        <div className="mb-[150px] flex justify-end">
          <div className="w-fit">
            <Image
              src={cultureImages.set3[0]}
              alt="Culture image 6"
              width={800}
              height={500}
              className="rounded-[40px] object-cover"
            />
          </div>
        </div>

        {/* Row 2 - Image left aligned */}
        <div className="flex justify-start">
          <div className="w-fit">
            <Image
              src={cultureImages.set3[1]}
              alt="Culture image 7"
              width={800}
              height={500}
              className="rounded-[40px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mx-[50px] mb-[113px]">
        {/* Row 1 - Image right aligned */}
        <div className="mb-[43px] flex justify-end">
          <div className="w-[80%]">
            <Image
              src={cultureImages.set3[0]}
              alt="Culture image 6"
              width={400}
              height={250}
              className="rounded-[40px] object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Row 2 - Image left aligned */}
        <div className="flex justify-start">
          <div className="w-[80%]">
            <Image
              src={cultureImages.set3[1]}
              alt="Culture image 7"
              width={400}
              height={250}
              className="rounded-[40px] object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
