import { Button } from "../ui/button";
import React from "react";

export function PartnersSection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-14 lg:py-[80px] lg:px-[70px] bg-[#1B64E4]">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="font-medium text-5xl lg:text-[69.65px] lg:leading-[82px] tracking-[-5%] md:my-[25px] lg:my-[50px] text-center text-white">
          Our Partners
        </h2>
        <div className="hidden lg:flex md:flex-wrap items-center justify-between space-x-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="2xl:w-[195px] 2xl:h-[116px] 2xl:aspect-[195/116] xl:w-[120px] xl:h-[80px] bg-[#D9D9D9] rounded-[24px]"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-5 mt-12.5 lg:mt-[110px] text-white text-center">
        <h1 className="font-medium text-5xl lg:text-[69.65px] lg:leading-[82.21px] tracking-[-5%] xl:w-[55%] ">
          Be part of Africa&apos;s web3 Revolution
        </h1>
        <p className="font-medium text-lg lg:text-2xl lg:leading-[1.2] xl:w-[65%]">
          Whether you&apos;re ready to attend, showcase your brand, or invest in
          the future — BLOCKFEST offers a front-row seat to innovation, culture,
          and community. Don&apos;t just watch the future happen — help shape
          it.
        </p>

        <div className="flex md:flex-row flex-col gap-y-4 items-center justify-center gap-x-4 mt-[25px] lg:mt-[50px]">
          <Button className="font-semibold text-lg xl:text-[22px] rounded-[13px] p-[34px] md:w-fit w-full border border-[#3D7BE8] bg-[#3D7BE8] text-white">
            Register Now
          </Button>
          <Button
            variant={"secondary"}
            className="font-semibold text-lg xl:text-[22px] rounded-[13px] p-[34px] text-white border border-white md:w-fit w-full"
          >
            Become a sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
