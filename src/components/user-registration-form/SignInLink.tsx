"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

interface SignInLinkProps {
  locale: string;
}

export function SignInLink({ locale }: SignInLinkProps) {
  const t = useTranslations("register");

  return (
    <p className="text-center text-white/70 mt-4">
      {t("alreadyHaveAccount")}{" "}
      <Link
        href={`/${locale}/sign-in`}
        className="text-[#f5ca6f] hover:text-[#f7931a] font-semibold transition-colors"
      >
        {t("signIn")}
      </Link>
    </p>
  );
}
