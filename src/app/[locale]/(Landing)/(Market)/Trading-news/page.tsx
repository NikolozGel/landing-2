"use client";

import { useTranslations } from "next-intl";

const TradingNewsPage = () => {
  const t = useTranslations("tradingNews");

  const newsArticles = [
    {
      category: "model3",
      timestamp: "2daysAgo",
      headline: "gbpUsd",
    },
    {
      category: "existAtAll",
      timestamp: "2daysAgo",
      headline: "ixic",
    },
    {
      category: "projections",
      timestamp: "2daysAgo",
      headline: "amdStock",
    },
    {
      category: "model3",
      timestamp: "3daysAgo",
      headline: "usdJpy",
    },
    {
      category: "existAtAll",
      timestamp: "3daysAgo",
      headline: "xauUsd",
    },
    {
      category: "projections",
      timestamp: "4daysAgo",
      headline: "btcUsd",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-5xl font-bold text-white">{t("title")}</h2>
          <div className="text-2xl font-bold text-gray-300">TV</div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-300">
              {t("categories.model3")}
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-300">
              {t("categories.existAtAll")}
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-300">
              {t("categories.projections")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200  p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex gap-2">
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-blue-600"></div>
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-500 to-green-600"></div>
              </div>

              <p className="mb-3 text-sm text-gray-300">
                {t(`timestamps.${article.timestamp}`)}
              </p>

              <h3 className="text-lg font-semibold leading-tight text-gray-300">
                {t(`headlines.${article.headline}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingNewsPage;
