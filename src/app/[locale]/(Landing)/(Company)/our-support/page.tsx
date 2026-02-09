"use client";

import { Button } from "@/components/ui/button";
import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const SupportPage = () => {
  const t = useTranslations("support");
  const locale = useLocale();

  const companyInfo = useCompanyInfo();
  const companyEmail = companyInfo?.email || "";
  const companyPhone = companyInfo?.phone || "";
  const companyAddress = companyInfo?.address || "";

  return (
    <>
      <div className="min-h-125 bg-black text-white">
        <div className="mx-auto flex min-h-125 max-w-7xl flex-col items-start justify-center px-6 py-24 md:px-8">
          <h2 className="mb-8 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h2>
          <p className="mb-12 max-w-3xl text-pretty text-lg leading-relaxed text-gray-200 md:text-xl">
            {t("hero.description")}
          </p>
          <Link href={`/${locale}/register`}>
            <Button className="rounded-full hover:opacity-50 cursor-pointer bg-white px-8 py-4 text-base font-semibold uppercase text-black transition-all hover:bg-gray-100">
              {t("hero.button")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center">
              <Mail className="mb-4 h-12 w-12 text-green-600" />
              <a
                href={`mailto:${companyEmail}`}
                className="text-2xl font-semibold text-gray-300 transition-colors hover:text-green-600 md:text-3xl"
              >
                {companyEmail}
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <Phone className="mb-4 h-12 w-12 text-green-600" />
              <a
                href={`tel:${companyPhone}`}
                className="text-2xl font-semibold text-gray-300 transition-colors hover:text-green-600 md:text-3xl"
              >
                {companyPhone}
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <MapPin className="mb-4 h-12 w-12 text-green-600" />
              <p className="text-2xl font-semibold text-gray-300 md:text-3xl">
                {companyAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
