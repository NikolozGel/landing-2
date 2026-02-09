"use client";

import { formatCompactPrice } from "@/lib/utils/format";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

interface CryptoPrice {
  symbol: string;
  name: string;
  price: string;
  change: number;
  image: string;
}

interface LivePricesProps {
  prices: CryptoPrice[];
  t: (key: string) => string;
}

const CryptoCharts = ({ t, prices }: LivePricesProps) => {
  return (
    <div className="divide-y divide-gray-700/50 cursor-pointer">
      {prices.map((crypto) => (
        <div
          key={crypto.name}
          className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 py-3 md:py-4 hover:bg-gray-300/5 transition-colors"
        >
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex items-center gap-2 md:gap-3 min-w-0">
            <Image
              src={crypto.image}
              width={32}
              height={32}
              alt={crypto.name}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full"
            />
            <div className="min-w-0 flex-1">
              <div className="font-mono font-bold text-sm sm:text-sm md:text-base text-gray-300 truncate">
                {crypto.name}
              </div>
              <div className="text-sm text-gray-400 truncate">
                {crypto.symbol.toUpperCase()}
              </div>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 flex justify-end items-center font-mono text-sm sm:text-sm md:text-base text-white">
            <span className="truncate">
              {t("currencySymbol")}
              {crypto.price.toLocaleString()}
            </span>
          </div>

          <div
            className={`col-span-1 sm:col-span-2 flex justify-end items-center gap-0.5 sm:gap-1 font-mono text-sm sm:text-sm md:text-base ${
              crypto.change >= 0 ? "text-green-400" : "text-red-500"
            }`}
          >
            {crypto.change >= 0 ? (
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
            ) : (
              <TrendingDown className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
            )}
            <span className="truncate">
              {crypto.change >= 0 ? t("positiveSign") : ""}
              {crypto.change.toFixed(2)}%
            </span>
          </div>

          <div className="hidden lg:flex col-span-2 justify-end items-center font-mono text-sm text-gray-400">
            <span className="truncate">
              {t("currencySymbol")}
              {formatCompactPrice(Number(crypto.price))}
            </span>
          </div>

          <div className="hidden lg:flex col-span-2 justify-end items-center font-mono text-sm text-gray-400">
            <span className="truncate">
              {t("currencySymbol")}
              {formatCompactPrice(Number(crypto.price))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoCharts;
