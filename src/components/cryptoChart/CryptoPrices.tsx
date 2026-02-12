"use client";
import CryptoCharts from "@/components/cryptoChart/CryptoCharts";
import { useTranslations } from "next-intl";

interface CryptoPrice {
  symbol: string;
  name: string;
  price: string;
  change: number;
  image: string;
}

interface LivePricesProps {
  prices: CryptoPrice[];
}

const CryptoPrices = ({ prices }: LivePricesProps) => {
  const t = useTranslations("cryptoPrices");

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 md:px-15" id="markets">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div>
            <p className="text-sm sm:text-sm text-gray-400 mb-1 sm:mb-2">
              {t("liveMarkets")}
            </p>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight">
              <span className="text-gray-300">
                {t("topAssets").split("_")[0]}
              </span>
              <span className="text-red-500">
                _{t("topAssets").split("_")[1]}
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-sm md:text-sm text-gray-400 border-b border-gray-700">
          <p className="col-span-2 sm:col-span-3 lg:col-span-4">{t("asset")}</p>
          <p className="col-span-1 sm:col-span-2 text-right">{t("price")}</p>
          <p className="col-span-1 sm:col-span-2 text-right">
            {t("change24h")}
          </p>
          <p className="hidden lg:block col-span-2 text-right">{t("volume")}</p>
          <p className="hidden lg:block col-span-2 text-right">
            {t("marketCap")}
          </p>
        </div>
        <CryptoCharts t={t} prices={prices} />
      </div>
    </section>
  );
};

export default CryptoPrices;
