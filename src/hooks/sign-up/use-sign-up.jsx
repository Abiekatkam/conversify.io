"use client";
import { useToast } from "@/hooks/use-toast";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegistrationSchema } from "@/schema/auth.schema";
import { onCompleteUserRegistration } from "@/actions/auth";

export const useSignUpForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: "owner",
    },
    mode: "onChange",
  });

  const onGenerateOtp = async (email, password, onNext) => {
    if (!isLoaded || !email || !password) return;
    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      onNext((prev) => prev + 1);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
  };

  const onHandleSubmit = methods.handleSubmit(async (data) => {
    if (!isLoaded) return;
    try {
      setLoading(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.otp,
      });

      if (completeSignUp.status !== "complete") {
        return { message: "Something went wrong!" };
      }

      if (completeSignUp.status === "complete") {
        if (!signUp.createdUserId) return;

        const registeredUser = await onCompleteUserRegistration(
          data.fullname,
          signUp.createdUserId,
          data.type
        );

        if (registeredUser?.status === 200 && registeredUser.user) {
          await setActive({
            session: completeSignUp.createdSessionId,
          });

          setLoading(false);
          router.push("/dashboard");
        }

        if (registeredUser?.status === "400") {
          toast({
            title: "Error",
            description: "Something went wrong!",
            status: "error",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  });

  return {
    methods,
    onHandleSubmit,
    onGenerateOtp,
    loading,
  };
};
