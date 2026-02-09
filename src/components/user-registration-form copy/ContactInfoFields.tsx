"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/components/user-registration-form copy/registrationSchema";

interface ContactInfoFieldsProps {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
  isLoading: boolean;
}

export function ContactInfoFields({
  register,
  errors,
  isLoading,
}: ContactInfoFieldsProps) {
  const t = useTranslations("register");

  return (
    <div className="space-y-2">
      <Label htmlFor="phoneNumber" className="text-white/90 cursor-pointer">
        {t("phoneNumber")}
      </Label>
      <Input
        id="phoneNumber"
        type="text"
        {...register("phoneNumber")}
        placeholder={t("phoneNumber")}
        disabled={isLoading}
        className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
      />
      {errors.phoneNumber && (
        <p className="text-red-400 text-sm">{errors.phoneNumber.message}</p>
      )}
    </div>
  );
}
