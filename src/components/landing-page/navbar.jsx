import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";
import ThemeLogo from "../common/theme-logo";

const NavigationBar = () => {
  return (
    <div className="relative z-10 w-full md:max-w-7xl p-3 sm:px-10 px-4 mt-2 flex items-center justify-between">
      <Link
        href={"/"}
        className="flex flex-row items-center justify-center gap-1 group"
        suppressHydrationWarning
      >
        <ThemeLogo width={"30px"} height={"30px"} />
        <h5 className="text-lg sm:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
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
