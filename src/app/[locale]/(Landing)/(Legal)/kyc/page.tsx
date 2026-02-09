"use client";

import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { useTranslations } from "next-intl";

export default function KYCPage() {
  const t = useTranslations("kyc");

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || "";

  return (
    <>
      <div className="min-h-screen py-20 bg-black">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-4xl font-bold text-white">{t("title")}</h2>

          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl  font-semibold text-gray-300">
                {t("section1.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed ">
                {t("section1.p1")}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t("section1.p2", { companyName })}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t("section1.p3")}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl  font-semibold text-gray-300">
                {t("section2.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed ">
                {t("section2.p1", { companyName })}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t("section3.title")}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t("section3.p1")}</li>
                <li>{t("section3.p2")}</li>
                <li>{t("section3.p3")}</li>
                <li>{t("section3.p4")}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t("section4.title")}
              </h2>
              <p className="text-gray-300">
                {t("section4.p1", { companyName })}
              </p>
              <p className="text-gray-300">{t("section4.p2")}</p>
              <p className="text-gray-300">{t("section4.p3")}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-gray-300">{t(`section5.title`)}</h2>
              <p className="text-gray-300">{t(`section5.p1`)}</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl text-gray-300">{t(`section6.title`)}</h2>
              <p className="text-gray-300">
                {t(`section6.p1`, { companyName })}
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl text-gray-300">{t(`section7.title`)}</h2>
              <p className="text-gray-300">
                {t(`section7.p1`, { companyName })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
