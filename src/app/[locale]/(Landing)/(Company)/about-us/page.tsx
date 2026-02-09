"use client";

import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { useTranslations } from "next-intl";

const AboutUsPage = () => {
  const t = useTranslations("aboutUs");

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || "";
  const companyEmail = companyInfo?.email || "";
  const companyAddress = companyInfo?.address || "";
  return (
    <>
      <div className="min-h-150 bg-black text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <h2 className="mb-8 text-5xl  font-bold text-white md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h2>
          <p className="max-w-4xl text-pretty text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl">
            {t("hero.description")}
          </p>
        </div>
      </div>

      <div className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-gray-300">
            {t("howItWorks.label")}
          </p>
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-300 md:text-4xl lg:text-5xl">
            {t("howItWorks.title")}
          </h2>
          <p className="text-center text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
            {t("howItWorks.description", { companyName })}
          </p>
        </div>
      </div>

      <div className="bg-black py-16 md:py-">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-300 md:text-5xl lg:text-6xl">
            {t("whatWeOffer.title")}
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-300 md:text-3xl">
                {t("whatWeOffer.latestTechnologies.title")}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
                {t("whatWeOffer.latestTechnologies.description")}
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                {t("whatWeOffer.tradingGuidance.title")}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
                {t("whatWeOffer.tradingGuidance.description")}
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                {t("whatWeOffer.security.title")}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
                {t("whatWeOffer.security.description")}
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                {t("whatWeOffer.integrity.title")}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
                {t("whatWeOffer.integrity.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-6 text-center text-4xl font-bold text-gray-300 md:text-5xl">
            {t("expertise.title")}
          </h2>
          <p className="mb-16 text-center text-lg text-gray-300 md:text-xl">
            {t("expertise.subtitle")}
          </p>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="mb-3 text-2xl font-bold text-gray-300">
                {t("expertise.office.title")}
              </h3>
              <p className="text-lg text-gray-300">{companyAddress}</p>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-2xl font-bold text-gray-300">
                {t("expertise.email.title")}
              </h3>
              <a
                href={`mailto:${companyEmail}`}
                className="text-lg text-blue-600 hover:text-blue-700 transition-colors"
              >
                {companyEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
