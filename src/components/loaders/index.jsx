import { Spinner } from "@/constants/Icons";
import React from "react";

const Loader = ({ loader, children }) => {
  return loader ? (
    <div className="w-full py-5 flex justify-center">
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loader;
