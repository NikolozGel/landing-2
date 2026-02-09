"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const SharesPage = () => {
  const t = useTranslations("shares");

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {t("title")}
              </h2>
              <div className="space-y-8 text-pretty text-lg leading-relaxed text-gray-300 md:text-xl">
                <p>{t("paragraph1")}</p>
                <p>{t("paragraph2")}</p>
                <p>{t("paragraph3")}</p>
              </div>
            </div>

            <div className="relative h-100 lg:h-150 rounded-2xl overflow-hidden">
              <Image
                src="/shares-stock-trading.jpg"
                alt="Shares Stock Trading"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharesPage;
