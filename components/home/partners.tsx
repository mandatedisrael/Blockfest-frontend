"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";
import { toast } from "sonner";

export function PartnersSection() {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "partnership@blockfestafrica.com";

  return (
    <section className="flex flex-col items-center justify-center px-5 py-14 lg:py-[80px] lg:px-[70px] bg-[#1B64E4]">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h2 className="font-medium text-5xl lg:text-[69.65px] lg:leading-[82px] tracking-[-5%] md:my-[25px] lg:my-[50px] text-center text-white">
          Our Partners
        </h2>

        {/* Revealing Soon Design */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 text-center border border-white/20">
            <div className="mb-6">
              <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-[#F2CB45]/20 rounded-full flex items-center justify-center">
                <div className="text-3xl lg:text-4xl">🤝</div>
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
                <span className="text-[#F2CB45]">Revealing Soon!</span>
              </h3>
              <p className="text-base lg:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                We&apos;re partnering with Africa&apos;s leading blockchain
                companies, innovative startups, and global Web3 organizations to
                bring you an unprecedented festival experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 h-20 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className="w-3 h-3 bg-[#F2CB45] rounded-full animate-pulse"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Original partners grid commented out */}
        {/* <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mt-[30px] place-items-center">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className=" h-[50px] w-[50px] md:aspect-[195/116] bg-[#D9D9D9] 2xl:w-[195px] 2xl:h-[116px] 2xl:aspect-[195/116] xl:w-[120px] xl:h-[80px] md:rounded-[16px] rounded-full flex items-center justify-center"
            />
          ))}
        </div> */}
      </div>

      <div className="flex flex-col items-center justify-center space-y-5 mt-12.5 lg:mt-[110px] text-white text-center">
        <h1 className="font-medium text-4xl lg:text-[69.65px] lg:leading-[82.21px] tracking-[-5%] xl:w-[55%] ">
          Be part of Africa&apos;s web3 Revolution
        </h1>
        <p className="font-medium text-lg lg:text-2xl lg:leading-[1.2] xl:w-[65%]">
          Whether you&apos;re ready to attend, showcase your brand, or invest in
          the future Blockfest Africa offers a front-row seat to innovation,
          culture, and community. Don&apos;t just watch the future happen be
          involved.
        </p>

        <div className="flex md:flex-row flex-col gap-y-4 items-center justify-center gap-x-4 mt-[25px] lg:mt-[50px]">
          <Button
            className="font-semibold text-lg xl:text-[22px] rounded-[13px] p-[34px] md:w-fit w-full border border-[#3D7BE8] bg-[#3D7BE8] text-white"
            onClick={() =>
              toast("🚀 Registration is coming soon!", {
                description: "Get ready for Africa's biggest Web3 festival",
                style: {
                  background:
                    "linear-gradient(135deg, #1B64E4 0%, #3D7BE8 100%)",
                  border: "1px solid #F2CB45",
                  color: "#FFFFFF",
                },
                className: "font-medium text-base",
                duration: 5000,
              })
            }
          >
            Register Now
          </Button>
          <Link
            href={`mailto:${contactEmail}`}
            className="font-semibold text-black text-lg lg:text-[22px] rounded-[13px] p-[18px]  w-full md:w-fit  border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
          >
            Become a sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
