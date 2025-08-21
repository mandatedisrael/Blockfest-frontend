import { Montserrat } from "next/font/google";

import Image from "next/image";
import React from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export function WhyAttendSection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-20 lg:py-[80px] lg:px-[70px] bg-gradient-to-b from-[#1A3461] to-[#005DFF]">
      <h2 className="font-[350px] text-5xl lg:text-[69.65px] lg:leading-[82px] tracking-[-5%] my-[40px] lg:my-[50px] text-white">
        Why Attend<span className="text-[#F2CB45]">?</span>
      </h2>
      <FeaturesComp />
    </section>
  );
}

function FeaturesComp() {
  const categories = [
    {
      image: "/images/features.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before.",
    },
    {
      image: "/images/features.webp",
      header: "Live Panels & Masterclasses",
      text: "Hear from the continent's boldest builders, creators, and thinkers. Dive into sessions that go beyond talk — straight into action."
    },
    {
      image: "/images/features.webp",
      header: "Founders, Creators & Communities",
      text: "From your first NFT to your next big Web3 project, BLOCKFEST connects the minds shaping Africa’s digital frontier."
    },
    {
      image: "/images/features.webp",
      header: "Buidl • Bridge • Become",
      text: "These aren't just themes , they're a roadmap to unlocking Africa's blockchain potential."
    },
    {
      image: "/images/features.webp",
      header: "Your Web3 Journey Starts Here",
      text: " Whether you're a curious newcomer or a seasoned pro, BLOCKFEST is your gateway to the future of Africa's digital economy."
    },
    {
      image: "/images/features.webp",
      header: "For Builders, Dreamers & Doers",
      text: "Web3 isn’t for someday. It’s now. Join a community of disruptors turning vision into products, code, and movements."
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={`${category.header}-${index}`}
            className="flex items-center bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="basis-full h-full md:basis-[40%] hidden md:flex  overflow-hidden rounded-[20px] flex-shrink-0">
              <Image
                src={category.image}
                alt={category.header}
                width={160}
                height={112}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-y-2.5 md:gap-y-0 justify-center md:ml-4 flex-1 text-left basis-full md:basis-[60%] p-4">
              <h3 className="text-[#1B64E4] text-center md:text-left font-medium text-2xl xl:text-[41.03px] xl:leading-[42.74px] xl:mb-2 ">
                {category.header}
              </h3>
              <p className={`${montserrat.className} text-[#808080] text-sm xl:text-[17.1px] xl:leading-[1.2] font-medium`}>
                {category.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
