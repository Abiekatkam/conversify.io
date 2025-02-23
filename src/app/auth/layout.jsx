import { ConversifyLogo } from "@/constants/Icons";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }) => {
  const user = await currentUser(); 

  if (user) redirect("/");

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="md:w-[480px] w-full md:h-[650px] flex flex-col items-center justify-center m-auto p-6">
        <span className="w-[50px] h-[50px] transition-all ease-in-out duration-300">{ConversifyLogo}</span>
        <h5 className="m-0 mt-1 text-2xl md:text-3xl font-bold">Conversify.io</h5>
        <p className="text-medium text-neutral-500 font-semibold">AI-powered sales assistant</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
