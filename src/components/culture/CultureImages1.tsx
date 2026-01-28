import Image from "next/image";
import { cultureImages } from "@/data/cultureData";

export default function CultureImages1() {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:block mr-[135px] mb-[317px]">
        <div className="flex justify-end gap-[59px]">
          {cultureImages.set1.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Culture image ${index + 4}`}
                width={600}
                height={400}
                className="rounded-[40px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden mx-[52px] mb-[113px]">
        <div className="flex gap-[20px] w-full">
          {cultureImages.set1.map((image, index) => (
            <div key={index} className="relative flex-1">
              <Image
                src={image}
                alt={`Culture image ${index + 4}`}
                width={300}
                height={200}
                className="rounded-[40px] object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
