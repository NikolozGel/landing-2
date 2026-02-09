"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRegistrationData } from "@/components/user-registration-form copy/userRegistrationData";
import { useRegistrationForm } from "@/components/user-registration-form copy/userRegistrationForm";
import { RegisterSchema } from "@/components/user-registration-form copy/registrationSchema";
import { ErrorMessage } from "@/components/user-registration-form copy/ErrorMessage";
import { PersonalInfoFields } from "@/components/user-registration-form copy/PersonalInfoFields";
import { AccountCredentialsFields } from "@/components/user-registration-form copy/AccountCredentialsFields";
import { ContactInfoFields } from "@/components/user-registration-form copy/ContactInfoFields";
import { PreferencesFields } from "@/components/user-registration-form copy/PreferencesFields";

interface RegistrationFormProps {
  router: AppRouterInstance;
  locale: string;
}

export function RegistrationForm({ router, locale }: RegistrationFormProps) {
  const t = useTranslations("register");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { countries, languages } = useRegistrationData();
  const { form, handleFormSubmit } = useRegistrationForm();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const onSubmit = async (data: RegisterSchema) => {
    setIsLoading(true);
    setError("");

    const result = await handleFormSubmit(data);

    if (result.success) {
      router.push(`/${locale}/sign-in`);
    } else {
      setError(result.error || "An unknown error occurred");
    }

    setIsLoading(false);
  };

  return (
    <>
      {error && <ErrorMessage message={error} />}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <PersonalInfoFields
          register={register}
          errors={errors}
          isLoading={isLoading}
        />
        <AccountCredentialsFields
          register={register}
          errors={errors}
          isLoading={isLoading}
        />
        <ContactInfoFields
          register={register}
          errors={errors}
          isLoading={isLoading}
        />
        <PreferencesFields
          countries={countries}
          languages={languages}
          watch={watch}
          setValue={setValue}
          errors={errors}
          isLoading={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#1199FA] cursor-pointer hover:bg-[#0a5c97] text-white font-bold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#1199FA]/25 hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {t("loading")}
            </div>
          ) : (
            t("submit")
          )}
        </Button>
      </form>
    </>
  );
}
