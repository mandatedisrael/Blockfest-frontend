"use client";
import Image from "next/image";
import React from "react";
import { Menu } from "@/types";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import localFont from "next/font/local";
import Link from "next/link";

const Gotham = localFont({
  src: "../../app/fonts/Gotham-Medium.otf",
});

const navbarMenu: Menu[] = [
  { title: "Home", path: "home" },
  { title: "About", path: "about" },
  { title: "Speakers", path: "speakers" },
  // removed Contact from here
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  return (
    <div
      className={`${Gotham.className} bg-black px-5 lg:px-[70px] py-5 lg:py-10 flex items-center justify-between`}
    >
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={140}
        height={38}
        className="xl:w-[140px] xl:h-[38px] xl:aspect-[140/38] aspect-[124/24] w-[124px] h-[24px] "
      />
      <nav className="hidden md:flex items-center gap-x-[28px]">
        {navbarMenu.map((item) => (
          <button
            key={item.title}
            onClick={() => scrollToSection(item.path)}
            className="text-base font-normal text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
          >
            {item.title}
          </button>
        ))}

        {/* Contact mailto link */}
        <Link
          href="mailto:partnership@blockfestafrica.com"
          className="text-base font-normal text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-x-5">
        <Link
          href="mailto:partnership@blockfestafrica.com"
          className="md:p-5 text-base font-medium text-white w-fit p-3 bg-[#3D7BE8]  shadow-xs hover:bg-[#6597ED] h-9 px-5 py-2 flex items-center justify-center rounded-md transition-colors duration-300 ease-in-out"
        >
          Sponsor
        </Link>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <CiMenuBurger className="cursor-pointer text-white" size={24} />
            </SheetTrigger>
            <SheetContent side="top">
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div
      className={`${Gotham.className} px-6 py-8 flex flex-col h-full bg-black`}
    >
      {/* Close Button */}
      <div className="flex justify-end mb-8">
        <SheetClose asChild>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <AiOutlineClose size={28} className="text-white" />
          </button>
        </SheetClose>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-y-6 flex-grow">
        {navbarMenu.map((item) => (
          <SheetClose asChild key={item.title}>
            <button
              onClick={() => scrollToSection(item.path)}
              className="text-lg font-medium text-[#A4A4A4] hover:text-white hover:underline transition w-fit"
            >
              {item.title}
            </button>
          </SheetClose>
        ))}

        {/* Contact mailto link in mobile */}
        <SheetClose asChild>
          <a
            href="mailto:user@gmail.com"
            className="text-lg font-medium text-[#A4A4A4] hover:text-white hover:underline transition w-fit"
          >
            Contact
          </a>
        </SheetClose>
      </div>
    </div>
  );
};

export default Navbar;
