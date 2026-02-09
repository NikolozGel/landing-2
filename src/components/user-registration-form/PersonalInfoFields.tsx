"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/components/user-registration-form/registrationSchema";

interface PersonalInfoFieldsProps {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
  isLoading: boolean;
}

export function PersonalInfoFields({
  register,
  errors,
  isLoading,
}: PersonalInfoFieldsProps) {
  const t = useTranslations("register");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-white/90 cursor-pointer">
          {t("firstName")}
        </Label>
        <Input
          id="firstName"
          type="text"
          {...register("firstName")}
          placeholder={t("pfirstName")}
          disabled={isLoading}
          className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
        />
        {errors.firstName && (
          <p className="text-red-400 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-white/90 cursor-pointer">
          {t("lastName")}
        </Label>
        <Input
          id="lastName"
          type="text"
          {...register("lastName")}
          placeholder={t("plastName")}
          disabled={isLoading}
          className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
        />
        {errors.lastName && (
          <p className="text-red-400 text-sm">{errors.lastName.message}</p>
        )}
      </div>
    </div>
  );
}
