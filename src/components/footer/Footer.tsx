"use client";

import LegalAgreements from "@/components/footer/legal-agreements/LegalAgreements";
import MarketTrading from "@/components/footer/market-trading/MarketTrading";
import OurCompany from "@/components/footer/our-company/OurCompany";
import PaymentMethodSection from "@/components/footer/payment-method-section/PaymentMethodSection";
import TradingProductSection from "@/components/footer/trading-product-section/TradingProductSection";
import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const companyInfo = useCompanyInfo();
  const locale = useLocale();
  const t = useTranslations("footer");
  const projectName = companyInfo?.name;
  const projectAddress = companyInfo?.address;
  const projectEmail = companyInfo?.email;
  const projectPhone = companyInfo?.phone;

  return (
    <footer className="text-white bg-[#141414] lg:px-15">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <Link href={`/${locale}`} className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-bold bg-linear-to-r from-white via-emerald-200 to-violet-200 bg-clip-text text-transparent">
                {projectName}
              </h2>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href={`/${locale}/sign-in`} className="w-full sm:w-auto">
              <Button className="text-white hover:opacity-60 cursor-pointer border-2 border-foreground/20 hover:border-accent hover:text-accent text-lg px-8 py-2">
                {t("userLogin")}
              </Button>
            </Link>

            <Link href={`/${locale}/register`} className="w-full sm:w-auto">
              <Button className="text-white hover:opacity-60 cursor-pointer border-2 border-foreground/20 hover:border-accent hover:text-accent text-lg px-8 py-2">
                {t("createAccount")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <TradingProductSection locale={locale} t={t} />
          <MarketTrading locale={locale} t={t} />
          <OurCompany locale={locale} t={t} />
          <LegalAgreements locale={locale} t={t} />
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/company`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {projectName}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <PaymentMethodSection locale={locale} t={t} />
        <div className="text-center space-y-2 pt-6 border-t border-gray-800">
          <p className="text-pink-500">{t("bottomText.register")}</p>
          <p className="text-gray-500 text-sm">{projectAddress}</p>
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} {projectName}
          </p>
          {projectEmail && (
            <p className="text-gray-500 text-sm">Email: {projectEmail}</p>
          )}
          <p className="text-gray-500 text-sm">Phone: {projectPhone}</p>
        </div>
      </div>
    </footer>
  );
}
