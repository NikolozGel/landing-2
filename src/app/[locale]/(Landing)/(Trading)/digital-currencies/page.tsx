"use client";
import digitalCurrencyImage from "@/../public/digital-currency-blockchain-cryptocurrency-network.jpg";

import { useTranslations } from "next-intl";
import Image from "next/image";

const DigitalCurrenciesPage = () => {
  const t = useTranslations("digitalCurrencies");

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-12 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
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
                src={digitalCurrencyImage}
                alt="Digital Currency Blockchain Network"
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

export default DigitalCurrenciesPage;
