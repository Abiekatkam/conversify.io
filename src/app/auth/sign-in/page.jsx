"use client";
import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex-1 sm:py-4 w-full">
      <div className="flex flex-col gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
