"use client";
import { useToast } from "@/hooks/use-toast";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema } from "@/schema/auth.schema";

export const useSignInForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { signIn, isLoaded, setActive } = useSignIn();
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(async (data) => {
    if (!isLoaded) return;
    try {
      setLoading(true);
      const authenticated = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (authenticated.status === "complete") {
        await setActive({ session: authenticated.createdSessionId });

        toast({
          title: "Success",
          description: "Welcome back!",
          status: "success",
        });

        router.push("/dashboard");
        setLoading(false);
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
    loading,
  };
};
