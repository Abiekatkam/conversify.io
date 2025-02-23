"use client";

import Loader from "@/components/loaders";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignInForm } from "@/hooks/sign-in/use-sign-in";
import React from "react";
import { FormProvider } from "react-hook-form";

const SignInFormProvider = ({ children }) => {
  const { methods, onHandleSubmit, loading } = useSignInForm();
  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignInFormProvider;
