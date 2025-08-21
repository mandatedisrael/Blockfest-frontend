import Image from "next/image";
import { Countdown } from "@/components/countdown";
import React from "react";

export function CountdownGallerySection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-10 xl:py-[80px] xl:px-[70px]">
      <Countdown targetDate={"2025-10-11T23:59:59"} />

      <div className="flex flex-col gap-4 w-full mt-10 xl:mt-[80px]">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[40%] overflow-hidden">
            <Image
              src="/images/img-4.webp"
              alt=""
              width={500}
              height={446}
              priority
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
          <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[60%] overflow-hidden">
            <Image
              src="/images/img2.webp"
              alt=""
              width={700}
              height={446}
              priority
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[60%] overflow-hidden">
            <Image
              src="/images/img-3.webp"
              alt=""
              width={700}
              height={446}
              priority
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
          <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[40%] overflow-hidden">
            <Image
              src="/images/img1.webp"
              alt=""
              width={500}
              height={446}
              priority
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
