import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "@/types";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import localFont from "next/font/local"

const Gotham = localFont({
  src: "../../app/fonts/Gotham-Medium.otf",
});

const navbarMenu: Menu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Speakers",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

const Navbar = () => {
  return (
    <div className={`${Gotham.className} bg-black px-4 xl:px-[70px] py-5 xl:py-10 flex items-center justify-between`}>
      <Image
        src="/images/Logo.svg"
        alt="Logo"
        width={140}
        height={38}
        className="w-[140px] h-[38px] aspect-[140/38]"
      />
      <nav className="hidden md:flex items-center gap-x-[28px]">
        {navbarMenu.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className="text-base font-normal text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-x-2">
        <Button
          variant="default"
          className="p-5 text-base font-medium text-white"
        >
          Sponsor
        </Button>
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
    <div className={`${Gotham.className} px-6 py-8 flex flex-col h-full bg-black`}>
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
            <Link
              href={item.path}
              className="text-lg font-medium text-[#A4A4A4] hover:text-white hover:underline transition w-fit"
            >
              {item.title}
            </Link>
          </SheetClose>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
