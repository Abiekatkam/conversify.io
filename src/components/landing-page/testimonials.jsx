"use client";
import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-6xl h-[800px] flex items-center justify-center flex-col min-h-[400px]">
      <div className="max-w-[920px] w-full flex flex-col items-center justify-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight md:max-w-[550px] m-auto text-pretty">
          Trusted by Thousands of Businesses Worldwide
        </h2>
        <div className="flex flex-row items-center justify-center gap-3 mt-1 w-full">
          <div className="w-[33.33%] h-[190px] flex flex-col items-center justify-center p-6 rounded-2xl border-2 bg-neutral-50">
            <h1 className="text-6xl font-black text-neutral-500">5000+</h1>
            <p className="text-lg text-neutral-400 text-pretty text-center capitalize">
              businesses using Conversify
            </p>
          </div>
          <div className="w-[33.33%] h-[190px] flex flex-col items-center justify-center p-6 rounded-2xl border-2 bg-neutral-50">
            <h1 className="text-6xl font-black text-neutral-500">1M+</h1>
            <p className="text-lg text-neutral-400 text-pretty text-center capitalize">
              automated conversations processed
            </p>
          </div>
          <div className="w-[33.33%] h-[190px] flex flex-col items-center justify-center p-6 rounded-2xl border-2 bg-neutral-50">
            <h1 className="text-6xl font-black text-neutral-500">98%</h1>
            <p className="text-lg text-neutral-400 text-pretty text-center capitalize">
              customer satisfaction rate
            </p>
          </div>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
