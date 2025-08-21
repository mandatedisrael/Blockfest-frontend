import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Menu } from "@/types";
import localFont from "next/font/local";

const Gotham = localFont({
  src: "../../app/fonts/Gotham-Medium.otf",
});

const socialIcons: Menu[] = [
  {
    path: "/",
    icon: <FaXTwitter size={24} />,
  },
  {
    path: "/",
    icon: <FaInstagram size={24} />,
  },
  {
    path: "/",
    icon: <FaYoutube size={24} />,
  },
  {
    path: "/",
    icon: <FaLinkedin size={24} />,
  },
];

const footerMenu: Menu[] = [
  { path: "/", title: "Agenda" },
  { path: "/", title: "About" },
  { path: "/", title: "Sponsors" },
  { path: "/", title: "Blogs" },
  { path: "/", title: "Speakers" },
  { path: "/", title: "Contacts" },
];

const Footer = () => {
  return (
    <footer
      className={`${Gotham.className} bg-black px-5 py-10 pt-14 lg:p-[70px] flex md:flex-row flex-col gap-y-10 md:items-end justify-between`}
    >
      <div className="order-last md:order-first">
        <Image
          src="/images/footer-logo.svg"
          alt="Logo"
          width={150}
          height={49}
          className="xl:w-[150px] w-[124px] h-[42px] xl:h-[49px] aspect-[124/42] xl:aspect-[150/49]"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:gap-x-12.5 gap-y-10">
        {/* Navigation Menu */}
        <nav className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-12.5 gap-y-6">
          {footerMenu.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="text-base xl:text-2xl font-medium cursor-pointer text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-x-3">
          {socialIcons.map((item, index) =>
            item.icon ? (
              <Link
                href={item.path}
                key={index}
                className="cursor-pointer text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
              >
                {item.icon}
              </Link>
            ) : null
          )}
        </div>
      </div>

      <div className="hidden md:block">
        <Button
          type="button"
          variant="ghost"
          className="text-white border-2 px-[38px] py-5 text-lg font-semibold cursor-pointer rounded-[12px]"
        >
          Register
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
