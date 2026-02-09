import { differenceInYears, parseISO, isValid } from "date-fns";
import z from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes",
    ),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes",
    ),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must not exceed 100 characters")
    .toLowerCase()
    .trim(),

  username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must not exceed 30 characters")
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, underscores, and hyphens",
    )
    .regex(/^[a-zA-Z]/, "Username must start with a letter")
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must not exceed 128 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character",
    ),

  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(6, "Phone number must be at least 6 digits")
    .max(20, "Phone number must not exceed 20 characters")
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Please enter a valid phone number",
    ),

  telephone: z
    .string()
    .max(20, "Telephone must not exceed 20 characters")
    .regex(
      /^$|^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Please enter a valid telephone number",
    )
    .optional()
    .or(z.literal("")),

  country: z
    .string()
    .min(1, "Please select your country")
    .max(100, "Country name is too long"),

  language: z
    .string()
    .min(1, "Please select your preferred language")
    .max(50, "Language name is too long"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine(
      (value) => {
        try {
          const date = parseISO(value);
          return isValid(date);
        } catch {
          return false;
        }
      },
      {
        message: "Please enter a valid date",
      },
    )
    .refine(
      (value) => {
        try {
          const date = parseISO(value);
          return date <= new Date();
        } catch {
          return false;
        }
      },
      {
        message: "Date of birth cannot be in the future",
      },
    )
    .refine(
      (value) => {
        try {
          const date = parseISO(value);
          const age = differenceInYears(new Date(), date);
          return age >= 18;
        } catch {
          return false;
        }
      },
      {
        message: "You must be at least 18 years old to register",
      },
    )
    .refine(
      (value) => {
        try {
          const date = parseISO(value);
          const age = differenceInYears(new Date(), date);
          return age <= 120;
        } catch {
          return false;
        }
      },
      {
        message: "Please enter a valid date of birth",
      },
    ),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
