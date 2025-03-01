import { cn } from "@/lib/utils";
import React from "react";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";
import {
  CurlyArrow,
  CurlyArrow2,
  CurlyArrow3,
  CurlyArrow4,
  CurlyArrow5,
  CurlyArrow6,
} from "@/constants/Icons";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-7xl flex items-center justify-center ">
      <span className="hidden lg:block absolute z-10 top-40 text-neutral-600 left-[110px] w-[140px] h-[140px] -rotate-[75deg]">
        {CurlyArrow}
      </span>
      <span className="hidden lg:block absolute z-10 bottom-12 text-neutral-600 left-[310px] w-[110px] h-[110px] -rotate-[75deg]">
        {CurlyArrow2}
      </span>
      <span className="hidden lg:block absolute z-10 bottom-16 text-neutral-600 right-[280px] w-[130px] h-[130px] -rotate-[110deg]">
        {CurlyArrow4}
      </span>
      <span className="hidden lg:block absolute z-10 top-40 text-neutral-600 right-[110px] w-[150px] h-[150px] -rotate-[160deg]">
        {CurlyArrow5}
      </span>
      <span className="hidden lg:block absolute z-10 top-12 text-neutral-600 right-[25%] w-[90px] h-[90px] -rotate-[280deg]">
        {CurlyArrow6}
      </span>
      <span className="hidden lg:block absolute z-10 top-12 text-neutral-600 left-[25%] w-[110px] h-[110px] rotate-[75deg]">
        {CurlyArrow3}
      </span>
      <div className="w-full lg:max-w-[820px] sm:max-w-[600px] sm:h-[560px] h-[500px] flex flex-col items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Conversify.io</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-5xl lg:text-6xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight">
          Seamless AI-Powered Marketing & Messaging
        </h2>
        <p className="text-center text-sm sm:text-md md:text-xl font-medium text-neutral-500 dark:text-neutral-400 px-4 text-pretty">
          Automate interactions, personalize engagement, and drive growth
          effortlessly with AI-driven marketing and messaging solutions.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mt-3"
          as="button"
          className="bg-black dark:bg-white dark:text-black text-white flex items-center space-x-2"
        >
          <Link href={"/auth/sign-up"} className="flex items-center space-x-2">
            <span>Try Conversify now</span>
            <ArrowRightIcon size={16} />
          </Link>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default HeroSection;
