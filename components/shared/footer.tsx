"use client";
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
import { toast } from "sonner";

const Gotham = localFont({
  src: "../../app/fonts/Gotham-Medium.otf",
});

// Footer menu (removed "Contacts" and "Sponsors" for special handling)
const footerMenu: Menu[] = [
  { path: "agenda", title: "Agenda" },
  { path: "about", title: "About" },
  { path: "/blogs", title: "Blogs" },
  { path: "speakers", title: "Speakers" },
];

// Smooth scroll helper
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Footer = () => {
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "partnership@blockfestafrica.com";
  const twitterHandle = (
    process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@blockfestafrica"
  ).replace("@", "");
  const instagramHandle =
    process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "blockfestafrica";
  const youtubeChannel =
    process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL || "@blockfestafrica";
  const linkedinPage =
    process.env.NEXT_PUBLIC_LINKEDIN_PAGE || "company/blockfest-africa";

  const socialIcons: Menu[] = [
    {
      path: `https://x.com/${twitterHandle}`,
      icon: <FaXTwitter size={24} />,
    },
    {
      path: `https://www.instagram.com/${instagramHandle}`,
      icon: <FaInstagram size={24} />,
    },
    {
      path: `https://youtube.com/${youtubeChannel}`,
      icon: <FaYoutube size={24} />,
    },
    {
      path: `https://www.linkedin.com/${linkedinPage}`,
      icon: <FaLinkedin size={24} />,
    },
  ];
  return (
    <footer
      className={`${Gotham.className} bg-black px-10 py-10 pt-14 lg:p-[70px] flex gap-y-10  items-center md:items-end justify-between`}
      id="contact"
    >
      <div className="">
        <Image
          src="/images/footer-logo.svg"
          alt="Blockfest Africa Footer Logo"
          width={150}
          height={49}
          sizes="(max-width: 768px) 124px, 150px"
          loading="lazy"
          className="xl:w-[150px] w-[124px] h-[42px] xl:h-[49px] aspect-[124/42] xl:aspect-[150/49]"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-end md:gap-x-12.5 gap-y-10">
        {/* Navigation Menu */}
        <nav className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 md:gap-x-12.5 md:gap-y-6">
          {footerMenu.map((item) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.path)}
              className="text-base xl:text-2xl font-medium cursor-pointer text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out text-left"
            >
              {item.title}
            </button>
          ))}

          {/* Sponsors mailto link */}
          <Link
            href={`mailto:${contactEmail}`}
            className="text-base xl:text-2xl font-medium cursor-pointer text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
          >
            Sponsors
          </Link>

          {/* Contact mailto link */}
          <Link
            href={`mailto:${contactEmail}`}
            className="text-base xl:text-2xl font-medium cursor-pointer text-[#A4A4A4] hover:text-white transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-x-3">
          {socialIcons.map((item, index) =>
            item.icon ? (
              <Link
                href={item.path}
                key={index}
                target="_blank"
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
          onClick={() =>
            toast("� Registration is coming soon!", {
              description: "Stay tuned for the biggest Web3 event in Africa",
              style: {
                background: "linear-gradient(145deg, #000000 0%, #1A3461 100%)",
                border: "1px solid #F2CB45",
                color: "#FFFFFF",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
              },
              className: "font-medium text-base",
              duration: 4500,
            })
          }
          className="text-white border-2 px-[38px] py-5 text-lg font-semibold cursor-pointer rounded-[12px]"
        >
          Register
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
