import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import HightLightBar from "@/components/forms/sign-up/highlight-bar";
import RegistrationFormSteps from "@/components/forms/sign-up/registration-form-step";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex-1 sm:py-4 w-full">
      <div className="flex flex-col h-[400px] gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormSteps />
          </div>
          <HightLightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUpPage;
