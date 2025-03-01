import { ConversifyWhiteLogo } from "@/constants/Icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

const FollowUpOnLinks = [
  {
    id: 1,
    name: "Twitter",
    link: "https://twitter.com",
    Icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://facebook.com",
    Icon: FaSquareFacebook,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://instagram.com",
    Icon: FaInstagram,
  },
  {
    id: 4,
    name: "Linkedin",
    link: "https://linkedin.com",
    Icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "GitHub",
    link: "https://github.com",
    Icon: FaGithub,
  },
  {
    id: 6,
    name: "Reddit",
    link: "https://reddit.com",
    Icon: FaReddit,
  },
  {
    id: 7,
    name: "Medium",
    link: "https://medium.com",
    Icon: FaMedium,
  },
];
const TermsOfServivceLinks = [
    {
        id: 1,
        name: "Privacy Policy",
        link: "https://privacy.com",
    },
    {
        id: 2,
        name: "Terms of Service",
        link: "https://terms.com",
    },
    {
        id: 3,
        name: "Cookie Policy",
        link: "https://cookie.com",
    },
    {
        id: 4,
        name: "Security",
        link: "https://security.com",
    },
]

const Footer = () => {
  return (
    <div className="w-full mt-4 relative flex flex-col items-center bg-black text-white">
      <div className="max-w-7xl py-12 px-10 w-full flex sm:flex-row flex-col items-start justify-between">
        <div className="flex flex-col items-start group">
          <span className="w-[50px] h-[50px] transition-all ease-in-out duration-300 group-hover:rotate-90">
            {ConversifyWhiteLogo}
          </span>
          <h5 className="text-2xl md:text-3xl font-bold text-neutral-200 mt-1">
            Conversify.io
          </h5>
          <p className="text-sm text-neutral-400">
            Made with love by Abhishek Katkam ❤️
          </p>
        </div>
        <div className="w-fit flex items-start gap-4 sm:m-0 mt-10">
          <div className="w-[190px] flex flex-col items-start">
            <h4 className="text-md font-semibold capitalize text-neutral-400 mb-2">
              Follow up on
            </h4>
            {FollowUpOnLinks.map((link) => (
              <Link
                href={link.link}
                className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-300 mb-1"
                target="_blank"
                key={link.id}
              >
                <link.Icon />
                {link.name}
                <ArrowRight
                  size={16}
                  className="hidden group-hover:block transition-all ease-in duration-200"
                />
              </Link>
            ))}
          </div>
          <div className="w-[190px] flex flex-col items-start">
            <h4 className="text-md font-semibold capitalize text-neutral-400 mb-2">
              Terms of service
            </h4>
            {TermsOfServivceLinks.map((link) => (
              <Link
                href={link.link}
                className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-300 mb-1"
                target="_blank"
                key={link.id}
              >
                <FaLink />
                {link.name}
                <ArrowRight
                  size={16}
                  className="hidden group-hover:block transition-all ease-in duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
