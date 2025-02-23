"use client";
import { useAuthContextHook } from "@/context/use-auth-context";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";
import dynamic from "next/dynamic";
import { Spinner } from "@/constants/Icons";

const DetailForm = dynamic(() => import("./account-detail-form"), {
  ssr: false,
  loading: Spinner,
});
const OTPForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: Spinner,
});

const RegistrationFormSteps = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { currentStep } = useAuthContextHook();
  const [onOtp, setOnOtp] = useState("");
  const [onUserType, setOnUserType] = useState("owner");

  setValue("otp", onOtp);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <DetailForm errors={errors} register={register} />;
    case 3:
      return <OTPForm onOtp={onOtp} setOtp={setOnOtp} />;
  }

  return <div>RegistrationSteps</div>;
};

export default RegistrationFormSteps;
