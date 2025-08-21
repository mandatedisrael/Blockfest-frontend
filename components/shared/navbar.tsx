import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "@/types";
import Link from "next/link";

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
    <div className="bg-black px-[70px] py-10 flex items-center justify-between">
      <Image
        src="/images/Logo.svg"
        alt="Logo"
        width={140}
        height={38}
        className="w-[140px] h-[38px] aspect-[140/38]"
      />
      <nav className="flex items-center gap-x-[28px]">
        {navbarMenu.map((item)=>(
          <Link
            key={item.title}
            href={item.path}
            className="text-base font-normal text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Button
        variant="default"
        className="p-5 text-base font-medium text-white"
      >
        Sponsor
      </Button>
    </div>
  );
};

export default Navbar;
