import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import React from "react";

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center bg-[url('/images/hero.webp')] bg-cover bg-center bg-no-repeat min-h-[65vh] lg:min-h-screen object-contain ">
      <div className="flex items-center flex-col space-y-4  text-center text-black">
        <p className="font-medium text-[22.3px] uppercase bg-[#F2CB45] px-[35px] py-[32px] rounded-[10.71px] w-[442.46px]">
          welcome to blockfest 2025
        </p>
        <p className="text-[69.65px] leading-[82px] tracking-[-5%] font-[350px]">
          Africa&apos;s biggest web<span className="text-[#F2CB45]">3</span> {""}
          festival
        </p>
        <div className="flex items-center justify-center space-x-2 text-[28px] font-medium text-[#1A63E3]">
          <p>BUIDL</p>
          <GoDotFill />
          <p>BRIDGE</p>
          <GoDotFill />
          <p>BECOME</p>
        </div>
        <div className="flex items-center justify-center space-x-8 text-base font-medium text-black">
          <div className="flex items-center space-x-2 uppercase ">
            <FaLocationDot className="text-[#F34C73]" />
            <span>lagos,nigeria</span>
          </div>
          <div className="flex items-center space-x-2 uppercase">
            <IoCalendarClearOutline className="text-[#F34C73]" />
            <span>October 11th, 2025</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-5">
          <Button className="font-semibold text-[22px]  h-[51px] rounded-[13px] p-[34px]">
            Register Now
          </Button>
          <Button
            variant={"outline"}
            className="font-semibold text-[22px]  h-[51px] rounded-[13px] p-[34px]"
          >
            Become a sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}