"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../form-generator";
import { USER_LOGIN_FORM } from "@/constants/forms";
import { validateUserInput } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserLoginSchema } from "@/schema/auth.schema";

const LoginForm = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const userLoginData = {
    email: getValues("email"),
    password: getValues("password"),
  };

  const isValid = validateUserInput(userLoginData, UserLoginSchema);
  return (
    <>
      <h2 className="text-lg font-semibold text-neutral-700">
        Account Details
      </h2>
      {USER_LOGIN_FORM.map((field) => (
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
          {...(!isValid && { disabled: true })}
        >
          Submit
        </Button>
        <p className="text-sm">
          Don&rsquo;t have an account?{" "}
          <Link href={"/auth/sign-up"} className="font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
