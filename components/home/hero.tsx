"use client";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import React from "react";
import Link from "next/link";
import { useUmami } from "@/lib/hooks/use-umami";

export function HeroSection() {
  const { trackButtonClick, trackRegistration } = useUmami();
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "partnership@blockfestafrica.com";

  return (
    <section
      className="relative w-full flex items-center justify-center bg-[url('/images/hero.webp')] bg-cover bg-center bg-no-repeat min-h-[65vh] 2xl:min-h-[65vh] xl:min-h-screen md:min-h-screen lg:min-h-screen object-contain  "
      id="home"
    >
      <div className="flex items-center flex-col space-y-4  text-center text-black mt-50 mb-20 md:my-20 lg:my-30">
        <p className="font-medium text-[10px] lg:text-base lg:text-[22.3px] uppercase bg-[#F2CB45] px-4 py-3.5 lg:px-[35px] lg:py-[26px] rounded-[5px] lg:rounded-[10.71px]">
          welcome to blockfest 2025
        </p>
        <p className="text-[43px] lg:text-5xl leading-13 lg:text-[69.65px] lg:leading-[82px] tracking-[-5%] font-[350px]">
          Africa&apos;s biggest web<span className="text-[#F2CB45]">3</span>{" "}
          {""}
          festival
        </p>
        <div className="flex items-center justify-center lg:space-x-2 text-lg lg:text-[28px] font-medium text-[#1A63E3]">
          <p>BUIDL</p>
          <GoDotFill />
          <p>BRIDGE</p>
          <GoDotFill />
          <p>BECOME</p>
        </div>
        <div className="flex items-center justify-center md:space-x-8 space-x-[18px] text-[10px] lg:text-base font-medium text-black">
          <div className="flex items-center space-x-1 lg:space-x-2 uppercase ">
            <FaLocationDot className="text-[#F34C73]" />
            <span>lagos,nigeria</span>
          </div>
          <div className="flex items-center space-x-1 lg:space-x-2 uppercase">
            <IoCalendarClearOutline className="text-[#F34C73]" />
            <span>October 11th, 2025</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-5 mb-10 lg:mb-0">
          {/* <Link
            href="https://luma.com/gf1ye3cw?tk=AQAG9o"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <Button
            className="font-semibold text-sm lg:text-[22px] rounded-[13px] p-[21px] lg:p-[34px] w-fit"
            onClick={() => {
              trackButtonClick("Register Now", "Hero Section");
              trackRegistration("hero-cta");
            }}
          >
            Register Now
          </Button>
          {/* </Link> */}
          <Link href={`mailto:${contactEmail}`} passHref>
            <Button
              asChild
              className="lg:p-[34px] font-semibold text-sm lg:text-[22px] rounded-[13px] p-[21px] w-fit  border border-[#1B64E4] text-[#1B64E4] bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
              onClick={() => {
                trackButtonClick("Become a sponsor", "Hero Section");
              }}
            >
              <p>Become a sponsor</p>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
