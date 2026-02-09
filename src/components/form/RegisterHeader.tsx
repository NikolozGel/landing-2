import { CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegisterHeader() {
  const locale = useLocale();
  const t = useTranslations("register");
  return (
    <>
      <CardHeader className="pb-4 mt-20">
        <Link
          href={`/${locale}`}
          className="flex items-center text-gray-700 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {t("back")}
        </Link>
        <CardTitle className="text-3xl font-black text-black text-center tracking-wide">
          {t("createAccount")}
        </CardTitle>
        <p className="text-gray-800 text-center">{t("subtitle")}</p>
      </CardHeader>
    </>
  );
}
