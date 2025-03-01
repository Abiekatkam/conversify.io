"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ThemeLogo from "../common/theme-logo";

const NewsLetter = () => {
  return (
    <div className="max-w-5xl sm:w-full my-10 bg-neutral-100 p-6 rounded-xl shadow-md border-2 relative overflow-hidden dark:bg-neutral-800 group mx-8">
      <div className="flex flex-col sm:items-start items-center sm:w-[70%] w-[100%] relative z-10">
        <h3 className="text-lg font-semibold text-neutral-500">
          Join Our Community
        </h3>
        <h1 className="my-1 text-2xl font-semibold dark:text-neutral-200">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-md font-medium text-neutral-500 dark:text-neutral-400 text-pretty sm:text-start text-center">
          Get weekly updates, industry news, and valuable insights delivered
          straight to your inbox.
        </p>

        <div className="flex md:flex-row flex-col items-center gap-3 w-full my-5">
          <Input
            type="email"
            className="border-2 border-neutral-200 dark:border-neutral-700 sm:w-[80%] w-full"
            placeholder="Enter your email address to get notification"
          />
          <Button className="sm:w-[20%] w-full">Subscribe</Button>
        </div>
      </div>
      <div className="w-[400px] h-[400px] absolute -top-10 -right-32 transition-all ease-in-out duration-300 group-hover:rotate-90 hidden sm:block">
        <ThemeLogo width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default NewsLetter;
