"use client";
import { ConversifyLogo, ConversifyWhiteLogo } from "@/constants/Icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const NavigationBar = () => {
  const { theme } = useTheme();
  return (
    <div className="relative z-10 w-full md:max-w-7xl p-3 px-10 mt-2 flex items-center justify-between">
      <Link
        href={"/"}
        className="flex flex-row items-center justify-center gap-1 group"
      >
        {theme == "dark" ? (
          <span className="w-[30px] h-[30px] transition-all ease-in-out duration-300 group-hover:rotate-90">
            {ConversifyWhiteLogo}
          </span>
        ) : (
          <span className="w-[30px] h-[30px] transition-all ease-in-out duration-300 group-hover:rotate-90">
            {ConversifyLogo}
          </span>
        )}
        <h5 className="text-2xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
          Conversify.io
        </h5>
      </Link>

      <div className="flex flex-row items-center justify-center gap-3">
        <Link href={"/auth/sign-up"}>
          <Button className="h-8 text-sm" variant="outline">
            Get started now
          </Button>
        </Link>
        <Link href={"/auth/sign-in"}>
          <Button className="h-8 text-sm">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
