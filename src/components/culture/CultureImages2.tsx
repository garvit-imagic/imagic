import Image from "next/image";
import { cultureImages } from "@/data/cultureData";

export default function CultureImages2() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mx-[157px] mb-[315px]">
        {/* Row 1 - Single image (left aligned) */}
        <div className="mb-[59px]">
          <div className="w-fit">
            <Image
              src={cultureImages.set2[0]}
              alt="Culture image 1"
              width={800}
              height={500}
              className="rounded-[40px] object-cover"
            />
          </div>
        </div>

        {/* Row 2 - Two images (aligned to extremes) */}
        <div className="flex justify-between">
          <div className="w-fit">
            <Image
              src={cultureImages.set2[1]}
              alt="Culture image 2"
              width={600}
              height={400}
              className="rounded-[40px] object-cover"
            />
          </div>
          <div className="w-fit">
            <Image
              src={cultureImages.set2[2]}
              alt="Culture image 3"
              width={600}
              height={400}
              className="rounded-[40px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mx-[45px]">
        {/* Row 1 - Single image */}
        <div className="mb-[38px]">
          <Image
            src={cultureImages.set2[0]}
            alt="Culture image 1"
            width={400}
            height={250}
            className="rounded-[40px] object-cover w-full h-auto"
          />
        </div>

        {/* Row 2 - Two images */}
        <div className="flex justify-between gap-[10px]">
          <div className="flex-1">
            <Image
              src={cultureImages.set2[1]}
              alt="Culture image 2"
              width={200}
              height={150}
              className="rounded-[40px] object-cover w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src={cultureImages.set2[2]}
              alt="Culture image 3"
              width={200}
              height={150}
              className="rounded-[40px] object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
