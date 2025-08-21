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
    <section className="flex flex-col items-center justify-center  py-[80px] px-[70px]">
      <h2 className="font-[350px] text-[69.65px] leading-[82px] tracking-[-5%] my-[50px] text-black">
        Our Speakers
      </h2>
      <Speakers speakers={SLIDES} options={OPTIONS} />
    </section>
  );
}