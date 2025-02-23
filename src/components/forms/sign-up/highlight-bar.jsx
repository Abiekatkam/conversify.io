"use client";
import { useAuthContextHook } from "@/context/use-auth-context";
import { cn } from "@/lib/utils";
import React from "react";

const HightLightBar = () => {
  const { currentStep } = useAuthContextHook();
  return (
    <div className="grid grid-cols-3 gap-3">
      <div
        className={cn(
          "rounded-full h-1 col-span-1",
          currentStep == 1 ? "bg-purple-700" : "bg-zinc-400"
        )}
      ></div>
      <div
        className={cn(
          "rounded-full h-1 col-span-1",
          currentStep == 2 ? "bg-purple-700" : "bg-zinc-400"
        )}
      ></div>
      <div
        className={cn(
          "rounded-full h-1 col-span-1",
          currentStep == 3 ? "bg-purple-700" : "bg-zinc-400"
        )}
      ></div>
    </div>
  );
};

export default HightLightBar;
