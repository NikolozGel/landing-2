"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseISO } from "date-fns";
import { toast } from "sonner";
import { useLocale } from "next-intl";
import { postRegistration } from "@/app/api/auth/postRegistration";
import {
  createRegisterSchema,
  RegisterSchema,
} from "@/components/user-registration-form/registrationSchema";

interface SubmitResult {
  success: boolean;
  error?: string;
}

export function useRegistrationForm() {
  const locale = useLocale() as "en" | "de" | "es";
  const schema = createRegisterSchema(locale);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
      telephone: "",
      country: "",
      language: "",
      dateOfBirth: "",
    },
  });
  const handleFormSubmit = async (
    data: RegisterSchema,
  ): Promise<SubmitResult> => {
    if (data.dateOfBirth) {
      const birthDate = parseISO(data.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        return {
          success: false,
          error: "You must be at least 18 years old to register.",
        };
      }
    } else {
      return {
        success: false,
        error: "Please select your date of birth.",
      };
    }

    const response = await postRegistration(data);

    if (response?.errors) {
      return {
        success: false,
        error: response.message ?? "An unknown error occurred",
      };
    }

    toast.success("Account successfully created");
    return { success: true };
  };

  return {
    form,
    handleFormSubmit,
  };
}
