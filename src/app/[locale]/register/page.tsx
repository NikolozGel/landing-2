"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import RegisterPageHeader from "@/components/form/RegisterPageHeader";
import { RegistrationForm } from "@/components/user-registration-form copy/RegistrationForm";
import { SignInLink } from "@/components/user-registration-form copy/SignInLink";

export default function UserRegistrationForm() {
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#0f121a] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 relative pb-20">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto relative z-10">
        <Card className="w-full max-w-md bg-[#1a2332]/80 backdrop-blur-xl border border-white/10 shadow-xl">
          <RegisterPageHeader />
          <CardContent>
            <RegistrationForm router={router} locale={locale} />
            <SignInLink locale={locale} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
