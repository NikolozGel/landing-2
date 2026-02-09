"use client";

import { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterSchema } from "@/components/user-registration-form copy/registrationSchema";

interface AccountCredentialsFieldsProps {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
  isLoading: boolean;
}

export function AccountCredentialsFields({
  register,
  errors,
  isLoading,
}: AccountCredentialsFieldsProps) {
  const t = useTranslations("register");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/90 cursor-pointer">
          {t("email")}
        </Label>
        <Input
          id="email"
          type="text"
          {...register("email")}
          placeholder={t("email")}
          disabled={isLoading}
          className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="username" className="text-white/90 cursor-pointer">
          {t("username")}
        </Label>
        <Input
          id="username"
          type="text"
          {...register("username")}
          placeholder={t("username")}
          disabled={isLoading}
          className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
        />
        {errors.username && (
          <p className="text-red-400 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div className="relative space-y-2">
        <Label htmlFor="password" className="text-white/90 cursor-pointer">
          {t("password")}
        </Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder={t("password")}
          disabled={isLoading}
          className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
        />
        <Button
          className="absolute top-5 right-1 cursor-pointer h-10 px-3 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          size="icon"
          type="button"
          variant="ghost"
        >
          {showPassword ? (
            <Eye className="h-4 w-4 bg-red-200 text-white/60" />
          ) : (
            <EyeOff className="h-4 w-4 text-white/60" />
          )}
        </Button>
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>
    </>
  );
}
