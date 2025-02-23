"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { FaRegCircleCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const Plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      features: ["1 Domain", "10 contacts", "10 emails per month"],
    },
    {
      name: "Pro",
      monthlyPrice: 17,
      features: ["5 domain", "50 contacts", "50 emails per month"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 34,
      features: ["Unlimited domain", "500 contacts", "500 emails per month"],
    },
  ];

  const calculateYearlyPrice = (monthlyPrice) => {
    const yearlyPrice = monthlyPrice * 12;
    const discount = yearlyPrice * 0.2; // 20% discount for yearly
    return (yearlyPrice - discount).toFixed(0);
  };

  return (
    <div className="w-full max-w-7xl h-[800px] flex items-center justify-center flex-col min-h-[400px]">
      <div className="max-w-[720px] w-full flex flex-col ite justify-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight md:max-w-[550px] m-auto">
          Flexible & Scalable Pricing for Every Business
        </h2>
        <p className="text-center text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400 px-4 text-pretty">
          Choose a plan that fits your needs—whether you're just starting out or
          scaling to the next level. Get started for free and upgrade as you
          grow!
        </p>
        <div className="flex items-center justify-center gap-3 p-1 bg-neutral-100 rounded-full w-fit mx-auto mt-2 border">
          <span
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all rounded-full ${
              !isYearly
                ? "bg-neutral-600 text-white shadow-md"
                : "text-neutral-600"
            }`}
            onClick={handleToggle}
          >
            Monthly
          </span>
          <span
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all rounded-full ${
              isYearly
                ? "bg-neutral-600 text-white shadow-md"
                : "text-neutral-600"
            }`}
            onClick={handleToggle}
          >
            Yearly <span className="text-xs">(Save 20%)</span>
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-5 mt-5">
        {Plans.map((plannings) => (
          <div
            key={plannings.name}
            className={cn(
              "flex flex-col items-start w-[25%] p-4 border-2 h-[350px] bg-neutral-100 rounded-xl shadow-md",
              plannings.highlighted && "border-neutral-800"
            )}
          >
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-semibold text-neutral-700">
                {plannings.name} Plan
              </h1>
              {plannings.highlighted && (
                <Badge className="bg-neutral-800">Most popular</Badge>
              )}
            </div>
            <div className="flex items-end">
              <p className="text-5xl font-extrabold text-neutral-600">
                $
                {isYearly
                  ? calculateYearlyPrice(plannings.monthlyPrice)
                  : plannings.monthlyPrice}
              </p>
              <span className="text-neutral-600 font-medium">
                / {!isYearly ? "month" : "year"}
              </span>
            </div>
            <div className="flex flex-col items-start gap-2 mt-6">
              {plannings.features.map((feature) => (
                <div
                  key={plannings.features[feature]}
                  className="flex items-center gap-2"
                >
                  <FaRegCircleCheck size={18} className="text-green-700" />
                  <span className="text-md text-neutral-600">{feature}</span>
                </div>
              ))}
            </div>
            <Link href={`/dashboard/settings`} className="w-full mt-auto">
              <Button className="w-full bg-neutral-800">Get Started</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
