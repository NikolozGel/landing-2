"use client";
import { useCompanyInfo } from "@/components/hooks/use-company-info";
import { useTranslations } from "next-intl";

export default function CompanyPage() {
  const t = useTranslations("company");

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || "";

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <h2 className="mb-8 text-center text-2xl md:text-3xl  lg:text-4xl font-bold text-white">
          {t("title")}
        </h2>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t("section1.title")}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("section1.p1", { companyName })}
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("section1.p2")}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t("section2.title")}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("section2.p1")}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t("section3.title")}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("section3.p1")}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t("section4.title")}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {t("section4.p1")}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t(`section5.title`)}
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {t(`section5.p1`, { companyName })}
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t(`section6.title`)}
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {t(`section6.p1`)}
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t(`section7.title`)}
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {t(`section7.p1`, { companyName })}
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            {t(`section8.title`)}
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {t(`section8.p1`, { companyName })}
          </p>
        </section>
      </div>
    </main>
  );
}
