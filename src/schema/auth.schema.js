import { z } from "zod";

export const UserRegistrationSchema = z
  .object({
    type: z.string().min(1).max(255),
    fullname: z
      .string()
      .min(4, { message: "Fullname must be at least 4 characters long." })
      .max(50, { message: "Fullname must be at most 50 characters long." }),
    email: z.string().email({ message: "Invalid email address format." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(34, { message: "Password must be at most 34 characters long." })
      .refine((value) => /^[a-zA-Z0-9_.-]*$/.test(value), {
        message: "Password must contain only letters and numbers.",
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirm  password must be at least 8 characters long.",
      })
      .max(34, {
        message: "Confirm psassword must be at most 34 characters long.",
      })
      .refine((value) => /^[a-zA-Z0-9_.-]*$/.test(value), {
        message: "Password must contain only letters and numbers.",
      }),
    otp: z
      .string()
      .min(6, { message: "You must enter a 6 digit code." })
      .max(6),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const UserLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address format." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(34, { message: "Password must be at most 34 characters long." }),
});
