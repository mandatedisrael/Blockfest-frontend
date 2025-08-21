import { EmblaOptionsType } from "embla-carousel";
import Speakers from "../carousel";
import React from "react";

export function SpeakersSection() {
   const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDES = [
      {
        name: "Nduka Blessing",
        title: "CEO SOLUTIONS",
        image: "/images/speaker.webp",
  
      },
      {
        name: "John Smith",
        title: "CTO INNOVATIONS",
        image: "/images/speaker.webp",
  
      }]
  return (
    <section className="flex flex-col items-center justify-center  xl:py-[80px] xl:px-[70px] py-14 px-5">
      <h2 className="font-medium text-5xl xl:text-[69.65px] xl:leading-[82px] tracking-[-5%] my-[25px] xl:my-[50px] text-black">
        Our Speakers
      </h2>
      <Speakers speakers={SLIDES} options={OPTIONS} />
    </section>
  );
}