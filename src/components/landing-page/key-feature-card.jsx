import React from "react";

const KeyFeatureCard = ({ index, title, description }) => {
  return (
    <div className="md:w-[430px] sm:w-[330px] flex relative">
      <span className="sm:text-[10rem] text-9xl  leading-none absolute -left-6 font-sans tracking-tighter font-black text-neutral-300 dark:text-neutral-700">
        {index}
      </span>
      <div className="relative z-10 flex flex-col items-start p-4 pl-8 md:pl-12 ">
        <h1 className="text-lg font-extrabold text-neutral-700 dark:text-neutral-200">
          {title}
        </h1>
        <p className="text-sm sm:text-md md:text-xl font-medium text-neutral-500 dark:text-neutral-400 text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyFeatureCard;
