"use client";

import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("terms");
  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || "";

  let companyWebsite = "";
  if (typeof window !== "undefined")
    companyWebsite = `${window.location.protocol}//${window.location.host}`;

  return (
    <>
      <div className="min-h-screen bg-black py-20">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                {t("title")}
              </h2>
            </div>

            <div className="prose prose-sm max-w-none space-y-6 text-gray-300">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-300">
                  {t("section1.title")}
                </h2>
                <p className="text-gray-300">
                  {t("section1.p1", { companyName })}
                </p>
                <p className="text-gray-300">
                  {t("section1.p2", { companyName })}
                </p>
                <p className="text-gray-300">
                  {t("section1.p3", { companyName })}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  {t("section2.title")}
                </h2>
                <p className="">{t("section2.p1", { companyWebsite })}</p>
                <p className="text-gray-300">{t("section2.p2")}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  {t("section3.title")}
                </h2>
                <p className="text-gray-300">{t("section3.p1")}</p>
                <p className="text-gray-300">{t("section3.p2")}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  {t("section4.title")}
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-300">{t("section4.p1")}</p>
                  <p className="text-gray-300">{t("section4.p2")}</p>
                  <p className="text-gray-300">{t("section4.p3")}</p>
                  <p className="text-gray-300">{t("section4.p4")}</p>
                  <p className="text-gray-300">{t("section4.p5")}</p>
                  <p className="text-gray-300">{t("section4.p6")}</p>
                  <p className="text-gray-300">{t("section4.p7")}</p>
                </div>
              </section>

              {[
                5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
              ].map((num) => (
                <section key={num} className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    {t(`section${num}.title`)}
                  </h2>
                  <p className="text-gray-300">{t(`section${num}.p1`)}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
