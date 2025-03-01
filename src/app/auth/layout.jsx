import ThemeLogo from "@/components/common/theme-logo";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[480px] max-h-[650px] h-fit flex flex-col items-center justify-center m-auto p-6">
        <Link href={"/"} className="flex flex-col items-center justify-center group">
          <ThemeLogo width={"50px"} height={"50px"} />
          <h5 className="m-0 mt-1 text-2xl md:text-3xl font-bold">
            Conversify.io
          </h5>
        </Link>
        <p className="text-medium text-neutral-500 font-semibold">
          AI-powered sales assistant
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
