import React from "react";
import OTPInput from "./otp-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OTPForm = ({ onOtp, setOtp }) => {
  return (
    <>
      <h2 className="text-lg font-semibold text-neutral-700">
        Enter a 6 digit verification code
      </h2>
      <p className="-my-1 text-sm text-neutral-500 font-medium">
        We have sent a 6 digit verification code to your email. Please enter it
        below.
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOtp} setOtp={setOtp} />
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link href={"/auth/sign-in"} className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default OTPForm;
