import React from "react";

const KeyFeatureCard = ({ index, title, description }) => {
  return (
    <div className="w-[480px] flex relative">
      <span className="text-9xl font-sans tracking-tighter font-black text-neutral-300">
        {index}
      </span>
      <div className="flex flex-col items-start absolute top-0 left-12 p-4">
        <h1 className="text-lg font-extrabold text-neutral-700">{title}</h1>
        <p className="text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default KeyFeatureCard;
