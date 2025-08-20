import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { EmblaOptionsType } from "embla-carousel";
import Speakers from "@/components/carousel";

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES = [
    {
      name: "Nduka Blessing",
      title: "CEO SOLUTIONS",
      image: "/images/img.webp",

    },
    {
      name: "John Smith",
      title: "CTO INNOVATIONS",
      image: "/images/img.webp",

    }]
  return (
    <main>
      <section className="relative w-full flex items-center justify-center bg-[url('/images/hero.webp')] bg-cover bg-center bg-no-repeat min-h-[65vh] lg:min-h-screen object-contain ">
        <div className="flex items-center flex-col space-y-4  text-center text-black">
          <p className="font-medium text-[22.3px] uppercase bg-[#F2CB45] px-[35px] py-[32px] rounded-[10.71px] w-[442.46px]">
            welcome to blockfest 2025
          </p>
          <p className="text-[69.65px] leading-[82px] tracking-[-5%] font-[350px]">
            Africa’s biggest web<span className="text-[#F2CB45]">3</span> {""}
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
      <section className="flex items-center justify-evenly  text-center py-[35px] bg-gradient-to-r from-[#1B64E4] to-[#031940] text-white">
        <div className="flex flex-col items-center space-y-2">
          <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
            4,000+
          </p>
          <p className="font-normal text-[19.5px] leading-[17.61px]">
            Attendees
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
            20+
          </p>
          <p className="font-normal text-[19.5px] leading-[17.61px]">
            Exhibitors
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
            20+
          </p>
          <p className="font-normal text-[19.5px] leading-[17.61px]">
            Speakers
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="font-medium text-[30px] leading-[17.61px] tracking-[-5%]">
            54+
          </p>
          <p className="font-normal text-[19.5px] leading-[17.61px]">
            Countries
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center  py-[80px] px-[70px]">
        <div className="flex items-start justify-center border-4 border-[#3870D3] w-fit space-x-5 rounded-[24px] py-[30px] px-[50px]">
          <div className="flex items-center flex-col ">
            <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">84</p>
            <p className="font-[325px] text-[31.98px] leading-[120%] uppercase ">days</p>
          </div>
          <span className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">:</span>
          <div className="flex items-center flex-col ">
            <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">54</p>
            <p className="font-[325px] text-[31.98px] leading-[120%] uppercase ">hours</p>
          </div>
          <span className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">:</span>
          <div className="flex items-center flex-col ">
            <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">36</p>
            <p className="font-[325px] text-[31.98px] leading-[120%] uppercase ">minutes</p>
          </div>
          <span className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">:</span>
          <div className="flex items-center flex-col ">
            <p className="text-[#3870D3] font-normal text-[104.95px] leading-[110px]">06</p>
            <p className="font-[325px] text-[31.98px] leading-[120%] uppercase ">seconds</p>
          </div>
        </div>


        <div className="flex flex-col gap-4 w-full mt-[80px]">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[40%] overflow-hidden">
              <Image
                src="/images/img.webp"
                alt=""
                width={500}
                height={446}
                priority
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
            <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[60%] overflow-hidden">
              <Image
                src="/images/img.webp"
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
                src="/images/img.webp"
                alt=""
                width={700}
                height={446}
                priority
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
            <div className="bg-gray-300 rounded-[24px] h-[300px] lg:h-[446px] flex-1 lg:basis-[40%] overflow-hidden">
              <Image
                src="/images/img.webp"
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
      <section className="flex flex-col items-center justify-center  py-[80px] px-[70px] bg-gradient-to-b from-[#1A3461] to-[#005DFF]">
        <h2 className="font-[350px] text-[69.65px] leading-[82px] tracking-[-5%] mb-[50px] text-white">Why Attend<span className="text-[#F2CB45]">? </span> </h2>
        <FeaturesComp />
      </section>
      <section className="flex flex-col items-center justify-center  py-[80px] px-[70px]">
        <h2 className="font-[350px] text-[69.65px] leading-[82px] tracking-[-5%] mb-[50px] text-black">Our Speakers </h2>
        <Speakers speakers={SLIDES} options={OPTIONS} />
      </section>

    </main>
  );
};

export default HomePage;















function FeaturesComp() {
  const categories = [
    {
      image: "/images/img.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/img.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/img.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/img.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/img.webp",
      header: "Africa's Web3 SuperBowl",
      text: "Blockchain Africa is not just an event – it's a movement. When Africa throws a party, the world tunes in. Get ready for Web3 like never before."
    },
    {
      image: "/images/img.webp",
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