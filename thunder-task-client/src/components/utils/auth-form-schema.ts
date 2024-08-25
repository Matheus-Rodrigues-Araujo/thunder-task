import { z } from "zod";

export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must contain at least 3 characters" })
            .max(20, { message: "Cannot exceed 20 characters" }),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must contain at least 3 characters" })
            .max(20, { message: "Cannot exceed 20 characters" }),
    address:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(6, { message: "Address must contain at least 6 characters" })
            .max(30, { message: "Address cannot exceed 30 characters" }),
    city:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must contain at least 3 characters" })
            .max(20, { message: "Cannot exceed 20 characters" }),
    state:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(2, { message: "Must contain exactly 2 characters" })
            .max(2, { message: "Must contain 2 characters" }),
    postalCode:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .min(3, { message: "Must contain at least 3 characters" })
            .max(6, { message: "Cannot exceed 6 characters" }),
    dateOfBirth:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, { message: "Must be a valid date" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must contain at least 6 characters" })
      .max(30, { message: "Password cannot exceed 30 characters" }),
  });
