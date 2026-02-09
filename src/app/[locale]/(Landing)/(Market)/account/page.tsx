"use client";

import { Check, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const AccountTypesPage = () => {
  const t = useTranslations("accountTypes2");
  const locale = useLocale();

  const accountTiers = [
    "trial",
    "bronze",
    "silver",
    "golden",
    "platinum",
    "vip",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-100 sm:h-125 md:h-150 lg:h-175 w-full">
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {t("hero.title")}
          </h2>
          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl italic text-white max-w-full sm:max-w-xl md:max-w-2xl">
            {t("hero.subtitle")}
          </p>
          <Link
            href={`/${locale}/register`}
            className="rounded-full bg-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 text-sm sm:text-lg font-semibold text-black transition-all hover:bg-gray-200 w-max"
          >
            {t("hero.button")}
          </Link>
        </div>
      </div>

      {/* Table Section */}
      <div className="mx-auto max-w-full px-2 sm:px-4 md:px-6 lg:px-8 py-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-150 table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-2 sm:p-4 text-left text-gray-400"></th>
                {accountTiers.map((tier) => (
                  <th
                    key={tier}
                    className="p-2 sm:p-4 text-center text-sm sm:text-base md:text-lg font-semibold capitalize"
                    style={{
                      color:
                        tier === "trial"
                          ? "#4ade80"
                          : tier === "bronze"
                            ? "#cd7f32"
                            : tier === "silver"
                              ? "#c0c0c0"
                              : tier === "golden"
                                ? "#ffd700"
                                : tier === "platinum"
                                  ? "#e5e4e2"
                                  : "#9333ea",
                    }}
                  >
                    {t(`tiers.${tier}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "tradingTools",
                "spreads",
                "withdrawals",
                "minimumDeposit",
                "customerService",
                "liveSessions",
                "leverage",
                "dailyMarketReviews",
                "tradingAlerts",
                "vipMentorship",
                "bonusPromotions",
                "aiTradingSoftware",
                "nfpTradingSignals",
                "arbitrageTrading",
              ].map((feature) => (
                <tr key={feature} className="border-b border-gray-800">
                  <td className="p-2 sm:p-4 font-medium text-sm sm:text-base">
                    {t(`features.${feature}`)}
                  </td>
                  {accountTiers.map((tier) => (
                    <td
                      key={tier}
                      className="p-2 sm:p-4 text-center text-sm sm:text-base text-gray-300"
                    >
                      {feature === "customerService" && tier === "trial" ? (
                        <Check className="mx-auto h-4 sm:h-5 w-4 sm:w-5 text-green-500" />
                      ) : feature === "dailyMarketReviews" ||
                        feature === "tradingAlerts" ||
                        feature === "vipMentorship" ||
                        feature === "arbitrageTrading" ? (
                        tier === "trial" ||
                        (feature === "vipMentorship" &&
                          ["trial", "bronze", "silver"].includes(tier)) ? (
                          <X className="mx-auto h-4 sm:h-5 w-4 sm:w-5 text-red-500" />
                        ) : (
                          <Check className="mx-auto h-4 sm:h-5 w-4 sm:w-5 text-green-500" />
                        )
                      ) : (
                        t(`values.${feature}.${tier}`)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-2 sm:p-4"></td>
                {accountTiers.map((tier) => (
                  <td key={tier} className="p-2 sm:p-4 text-center">
                    <Link
                      href={`/${locale}/register`}
                      className="block w-full rounded bg-green-600 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-semibold uppercase text-white transition-all hover:bg-green-700"
                    >
                      {t("openAccount")}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountTypesPage;
