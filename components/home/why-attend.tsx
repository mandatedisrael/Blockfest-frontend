import Image from "next/image";
import React from "react";
export function WhyAttendSection() {
  return (
    <section className="flex flex-col items-center justify-center  py-[80px] px-[70px] bg-gradient-to-b from-[#1A3461] to-[#005DFF]">
      <h2 className="font-[350px] text-[69.65px] leading-[82px] tracking-[-5%] my-[50px] text-white">
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
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/features.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/features.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/features.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/features.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/features.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={`${category.header}-${index}`}
            className="flex items-center bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="basis-full h-full md:basis-[40%]  overflow-hidden rounded-[20px] flex-shrink-0">
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
            <div className="flex flex-col justify-center ml-4 flex-1 text-left basis-full md:basis-[60%] p-4">
              <h3 className="text-[#1B64E4] font-[350px] text-[41.03px] leading-[42.74px] mb-2 ">
                {category.header}
              </h3>
              <p className="text-[#808080] text-[17.1px] leading-[1.2] font-medium">
                {category.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}