import { Button } from "../ui/button";
import React from "react";

export function PartnersSection() {
  return (
    <section className="flex flex-col items-center justify-center  py-[80px] px-[70px] bg-[#1B64E4]">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="font-[350px] text-[69.65px] leading-[82px] tracking-[-5%] my-[50px] text-white">
          Our Partners
        </h2>
        <div className="flex md:flex-wrap items-center justify-between space-x-3">
          <div className="w-[195px] h-[116px] bg-[#D9D9D9] rounded-[24px]" />
          <div className="w-[195px] h-[116px] bg-[#D9D9D9] rounded-[24px]" />
          <div className="w-[195px] h-[116px] bg-[#D9D9D9] rounded-[24px]" />
          <div className="w-[195px] h-[116px] bg-[#D9D9D9] rounded-[24px]" />
          <div className="w-[195px] h-[116px] bg-[#D9D9D9] rounded-[24px]" />
          <div className="w-[195px] h-[116px] bg-[#D9D9D9] rounded-[24px]" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-5 mt-[110px] text-white text-center">
        <h1 className="font-[350px] text-[69.65px] leading-[82.21px] tracking-[-5%] w-[55%] ">
          Be part of Africa&apos;s web3 Revolution
        </h1>
        <p className="font-medium text-2xl leading-[1.2] w-[65%]">
          Whether you&apos;re ready to attend, showcase your brand, or invest in the future — BLOCKFEST offers a front-row seat to innovation, culture, and community. Don&apos;t just watch the future happen — help shape it.
        </p>

        <div className="flex items-center justify-center space-x-4 mt-[50px]">
          <Button className="font-semibold text-[22px]  h-[51px] rounded-[13px] p-[34px]">
            Register Now
          </Button>
          <Button
            variant={"secondary"}
            className="font-semibold text-[22px] h-[51px] rounded-[13px] p-[34px] text-white border border-white"
          >
            Become a sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}