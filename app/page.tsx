import React from "react";
import { HeroSection } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stat";
import { CountdownGallerySection } from "@/components/home/countdown-gallery";
import { WhyAttendSection } from "@/components/home/why-attend";
import { SpeakersSection } from "@/components/home/speakers";
import { PartnersSection } from "@/components/home/partners";
import localFont from "next/font/local"

const Gotham = localFont({
  src: "../app/fonts/Gotham-Medium.otf",
});

const HomePage = () => {
  return (
    <main className={`${Gotham.className}`}>
      <HeroSection />
      <StatsSection />
      <CountdownGallerySection />
      <WhyAttendSection />
      <SpeakersSection />
      <PartnersSection />
    </main>
  );
};

export default HomePage;