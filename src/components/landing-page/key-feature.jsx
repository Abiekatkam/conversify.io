import React from "react";
import KeyFeatureCard from "./key-feature-card";
import { KEY_FEATURES } from "@/constants/data-imports";

const KeyFeature = () => {
  return (
    <div className="w-full max-w-6xl h-[690px] flex items-center justify-center flex-col min-h-[400px]">
      <div className="max-w-[720px] w-full flex flex-col ite justify-center">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight md:max-w-[550px] m-auto">
          Powerful Features to Automate & Scale Your Conversations
        </h2>
        <p className="text-center text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400 px-4 text-pretty">
          Take your customer engagement to the next level with smart automation,
          real-time interactions, and data-driven insights. Conversify helps you
          streamline communication across multiple platforms effortlessly.
        </p>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-3 mt-5">
        {KEY_FEATURES.map((feature) => (
          <KeyFeatureCard
            key={feature.id}
            index={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeature;
