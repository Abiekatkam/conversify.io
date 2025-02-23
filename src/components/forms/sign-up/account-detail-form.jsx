"use client";
import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React from "react";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up";
import { validateUserInput } from "@/lib/utils";
import { useAuthContextHook } from "@/context/use-auth-context";
import { UserRegistrationSchema } from "@/schema/auth.schema";

const AccountsDetailForm = ({ errors, register }) => {
  const { getValues } = useFormContext();
  const { onGenerateOtp } = useSignUpForm();
  const { setCurrentStep } = useAuthContextHook();

  const userRegistrationData = {
    type: "owner",
    fullname: getValues("fullname"),
    email: getValues("email"),
    password: getValues("password"),
    confirmPassword: getValues("confirmPassword"),
    otp: "123456",
  };

  const isValid = validateUserInput(
    userRegistrationData,
    UserRegistrationSchema
  );

  return (
    <>
      <h2 className="text-lg font-semibold text-neutral-700">
        Account Details
      </h2>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
          uniqueId={field.id}
        />
      ))}
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          {...(isValid
            ? {
                onClick: () =>
                  onGenerateOtp(
                    getValues("email"),
                    getValues("password"),
                    setCurrentStep
                  ),
              }
            : { disabled: true })}
        >
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

export default AccountsDetailForm;
