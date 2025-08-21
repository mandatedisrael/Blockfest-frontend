import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

interface FooterMenu {
  path: string;
  title?: string;
  icon?: React.ReactNode; // change to React.ReactNode instead of string
}

const socialIcons: FooterMenu[] = [
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

const footerMenu: FooterMenu[] = [
  { path: "/", title: "Agenda" },
  { path: "/", title: "About" },
  { path: "/", title: "Sponsors" },
  { path: "/", title: "Blogs" },
  { path: "/", title: "Speakers" },
  { path: "/", title: "Contacts" },
];

const Footer = () => {
  return (
    <footer className="bg-black p-[70px] flex items-end justify-between">
      <div>
        <Image
          src="/images/footer-logo.svg"
          alt="Logo"
          width={150}
          height={49}
          className="w-[150px] h-[49px] aspect-[150/49]"
        />
      </div>

      <div className="flex items-end gap-x-12.5">
        {/* Navigation Menu */}
        <nav className="grid grid-cols-3 gap-x-12.5 gap-y-6">
          {footerMenu.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="text-2xl font-medium cursor-pointer text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
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

      <div>
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
