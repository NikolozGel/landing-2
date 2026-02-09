import { CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegisterPageHeader() {
  const locale = useLocale();
  const t = useTranslations("register");
  return (
    <>
      <CardHeader>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center hover:text-white text-white/70 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("back")}
        </Link>
        <CardTitle className="text-3xl font-bold text-white text-center">
          {t("createAccount")}
        </CardTitle>
        <p className="text-white/70 text-center">{t("subtitle")}</p>
      </CardHeader>
    </>
  );
}
