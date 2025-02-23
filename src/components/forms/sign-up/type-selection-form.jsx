"use client";
import React from "react";
import UserTypeCard from "./user-type-card";
import { useAuthContextHook } from "@/context/use-auth-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TypeSelectionForm = ({ register, userType, setUserType }) => {
  const { setCurrentStep } = useAuthContextHook();
  return (
    <>
      <h2 className="text-lg font-semibold text-neutral-700">
        Create an account
      </h2>
      <p className="-my-1 text-sm text-neutral-500 font-medium">
        We&rsquo;d love to get to know you! Tell us what you do, and we&rsquo;ll
        personalize your experience to suit your needs.
      </p>
      <UserTypeCard
        register={register}
        userType={userType}
        setUserType={setUserType}
        value={"owner"}
        title={"I own a business"}
        text={
          "I want to create a business account to manage my business and sell products."
        }
        iconType="owner"
      />
      <UserTypeCard
        register={register}
        userType={userType}
        setUserType={setUserType}
        value={"student"}
        title={"I am a student"}
        text={
          "I want to create a student account to learn about Conversify and its features."
        }
        iconType="student"
      />

      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          onClick={() => setCurrentStep((prev) => prev + 1)}
        >
          Continue
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

export default TypeSelectionForm;
