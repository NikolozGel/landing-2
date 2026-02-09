"use client";

import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { useTranslations } from "next-intl";

export default function AMLPage() {
  const t = useTranslations("aml");

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || "";
  const companyEmail = companyInfo?.email || "";

  return (
    <>
      <div className="min-h-screen bg-black py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            {t("title")}
          </h2>

          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t("section1.title")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("section1.p1", { companyName })}
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("section1.p2", { companyName })}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t("section2.title")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("section2.p1")}
              </p>
              <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-300">
                <li>{t("section2.rule1")}</li>
                <li>{t("section2.rule2")}</li>
                <li>{t("section2.rule3")}</li>
                <li>{t("section2.rule4")}</li>
                <li>{t("section2.rule5")}</li>
                <li>{t("section2.rule6")}</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t("section3.title")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("section3.p1")}
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                {t("section3.p2")}
              </p>
              <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-300">
                <li>{t("section3.stage1")}</li>
                <li>{t("section3.stage2")}</li>
                <li>{t("section3.stage3")}</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t(`section4.title`)}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t(`section4.p1`)}
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t(`section5.title`)}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t(`section5.p1`, { companyName })}
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t(`section6.title`)}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t(`section6.p1`, { companyName })}
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-300">
                {t(`section7.title`)}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {t(`section7.p1`, { companyEmail })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
