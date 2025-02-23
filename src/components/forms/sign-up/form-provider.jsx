"use client";
import Loader from "@/components/loaders";
import { Form } from "@/components/ui/form";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up";
import React from "react";

const SignUpFormProvider = ({ children }) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();
  return (
    <AuthContextProvider>
      <Form {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </Form>
    </AuthContextProvider>
  );
};

export default SignUpFormProvider;
