"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LoginCredentials } from "@/app/api/types/auth";
import { postLogin } from "@/app/api/auth/postLogin";
import { postLoginForRedirect } from "@/app/api/auth/postLoginForRedirect";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useCredentials } from "@/components/hooks/use-credentials";

// Zod schema
const loginSchema = z.object({
  emailOrUsername: z.string().min(1, "Email or username is required"),
  password: z.string().min(1, "Password is required"),
  twoFactorCode: z.string().optional(),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const redirectConfirmAuth = (authKey?: string) => {
  const NEXT_PUBLIC_DASHBOARD_BASE_URL =
    process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL;
  window.location.href = `${NEXT_PUBLIC_DASHBOARD_BASE_URL}/confirm-auth?authkey=${authKey}`;
};

export default function LoginPage() {
  const { storeCredentials } = useCredentials();
  const t = useTranslations("login");
  const locale = useLocale();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
      twoFactorCode: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    const credentials: LoginCredentials = {
      emailOrUsername: data.emailOrUsername,
      password: data.password,
      ...(data.rememberMe && { rememberMe: data.rememberMe }),
    };

    const response = await postLogin(credentials);

    if (!response.success) {
      setError(response.message || "Login failed");
      setIsLoading(false);
      return;
    }

    storeCredentials(credentials);

    const responseForDirect = await postLoginForRedirect();
    if (responseForDirect.success) {
      redirectConfirmAuth(responseForDirect.data);
    } else {
      setError(responseForDirect.message || "Login failed");
      setIsLoading(false);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f121a] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 relative">
      <div className="flex flex-col lg:flex-row w-175 max-w-6xl rounded-2xl overflow-hidden shadow-2xl relative z-10 p-4 sm:p-8 ">
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <Card className=" bg-[#1a2332]/80 backdrop-blur-xl border border-white/10 shadow-xl">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center ml-5 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToHome")}
            </Link>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white">
                {t("signIn")}
              </CardTitle>
              <CardDescription className="text-white/70">
                {t("welcomeBack")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="p-3 mb-4 bg-red-500/20 border border-red-500/50 rounded-lg backdrop-blur-sm">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="emailOrUsername"
                    className="text-white/90 cursor-pointer"
                  >
                    {t("emailOrUsername")}
                  </Label>
                  <Input
                    id="emailOrUsername"
                    {...register("emailOrUsername")}
                    placeholder={t("placemail")}
                    disabled={isLoading}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
                  />
                  {errors.emailOrUsername && (
                    <p className="text-red-400 text-sm">
                      {errors.emailOrUsername.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-white/90 cursor-pointer"
                  >
                    {t("password")}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder={t("placepass")}
                    disabled={isLoading}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1199FA] hover:bg-[#0a5c97] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#1199FA]/25 hover:scale-105"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t("signingIn")}
                    </div>
                  ) : (
                    t("signIn")
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center flex flex-col">
              <p className="text-white/70">
                {t("dontHaveAccount")}{" "}
                <Link
                  href={`/${locale}/register`}
                  className="text-[#f5ca6f] hover:text-[#f7931a] font-bold transition-colors"
                >
                  {t("signUp")}
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
