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

// "use client";
// import { useEffect, useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   Tooltip,
//   ReferenceLine,
// } from "recharts";
// import { Activity, Zap } from "lucide-react";
// import { useTranslations } from "next-intl";
// import { getCryptoData } from "@/app/api/actions/chartsAction";

// const formatCompact = (n: number) =>
//   Intl.NumberFormat("en-US", { notation: "compact" }).format(n);

// interface tokens {
//   id: string;
//   symbol: string;
//   name: string;
//   current_price: number;
//   price_change_percentage_24h: number;
//   sparkline_in_7d?: {
//     price: number[];
//   };
// }

// const CryptoCharts = () => {
//   const t = useTranslations("cryptoCharts");
//   const [tokens, setTokens] = useState<tokens[]>([]);
//   const [selectedToken, setSelectedToken] = useState(0);

//   useEffect(() => {
//     getCryptoData().then((res) => setTokens(res.slice(0, 3)));
//   }, []);

//   const currentToken = tokens[selectedToken];
//   console.log(currentToken);
//   const sparklineData = currentToken?.sparkline_in_7d?.price.map(
//     (value: number, idx: number) => ({
//       time: `${idx}`,
//       value,
//     }),
//   );

//   if (!currentToken || !sparklineData) return null;

//   const isPositive = currentToken.price_change_percentage_24h >= 0;

//   return (
//     <section id="terminal" className="py-12 md:py-20 relative bg-[#141414]">
//       <div className="absolute inset-0 bg-linear-to-b from-red-500/5 via-transparent to-transparent" />

//       <div className="container px-4 mx-auto relative">
//         <div className="mb-8 md:mb-12 text-center md:text-left">
//           <div className="text-sm text-gray-400 mb-2">
//             {t("analyticsEngine")}
//           </div>
//           <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
//             <span className="text-gray-300">{t("realTime").split("_")[0]}</span>
//             <span className="text-cyan-500">
//               _{t("realTime").split("_")[1]}
//             </span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           <div className="lg:col-span-1 flex flex-col space-y-2">
//             {tokens.map((token, index) => {
//               const positive = token.price_change_percentage_24h >= 0;

//               return (
//                 <button
//                   key={token.id}
//                   onClick={() => setSelectedToken(index)}
//                   className={`w-full p-4 text-left transition-all rounded-md ${
//                     selectedToken === index
//                       ? "brutal-card neon-border"
//                       : "brutal-card hover:translate-x-1 hover:-translate-y-1"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="font-mono font-bold text-gray-300">
//                       {token.symbol.toUpperCase()}
//                     </span>
//                     <span
//                       className={`text-sm ${
//                         positive ? "text-green-400" : "text-red-500"
//                       }`}
//                     >
//                       {positive ? t("positiveSign") : ""}
//                       {token.price_change_percentage_24h.toFixed(2)}%
//                     </span>
//                   </div>
//                   <div className="text-lg font-display text-white">
//                     {t("currencySymbol")}
//                     {token.current_price.toLocaleString()}
//                   </div>
//                   <div className="text-xs text-gray-400">{token.name}</div>
//                 </button>
//               );
//             })}

//             <div className="flex items-center gap-2 px-4 py-3 mt-4">
//               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               <span className="text-xs text-gray-400">{t("liveData")}</span>
//               <Activity className="w-3 h-3 text-green-400 ml-auto" />
//             </div>
//           </div>

//           <div className="lg:col-span-3 brutal-card p-4 sm:p-6 bg-[#1a1a1a] flex flex-col">
//             <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 brutal-card flex items-center justify-center neon-border">
//                   <Zap className="w-6 h-6 text-red-500" />
//                 </div>
//                 <div>
//                   <div className="font-display text-xl sm:text-2xl text-gray-300">
//                     {currentToken.symbol.toUpperCase()}/USD
//                   </div>
//                   <div className="text-sm text-gray-400">{t("perpetual")}</div>
//                 </div>
//               </div>

//               <div className="text-left md:text-right">
//                 <div className="font-display text-2xl sm:text-3xl text-white">
//                   {t("currencySymbol")}
//                   {currentToken.current_price.toLocaleString()}
//                 </div>
//                 <div
//                   className={`font-mono ${
//                     isPositive ? "text-green-400" : "text-red-500"
//                   }`}
//                 >
//                   {isPositive ? t("positiveSign") : ""}
//                   {currentToken.price_change_percentage_24h.toFixed(2)}%
//                 </div>
//               </div>
//             </div>

//             <div className="w-full h-60 sm:h-72 md:h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={sparklineData}>
//                   <XAxis
//                     dataKey="time"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{
//                       fill: "hsl(1,2%,60%)",
//                       fontSize: 10,
//                       fontFamily: "JetBrains Mono",
//                     }}
//                     interval={Math.floor(sparklineData.length / 8)}
//                   />
//                   <YAxis hide />
//                   <ReferenceLine
//                     y={currentToken.current_price}
//                     stroke="hsl(0,0%,20%)"
//                     strokeDasharray="3 3"
//                   />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: "hsl(0,0%,10%)",
//                       border: "2px solid hsl(0,0%,15%)",
//                       borderRadius: 0,
//                       fontFamily: "JetBrains Mono",
//                     }}
//                     formatter={(value: number) => [
//                       `${t("currencySymbol")}${value.toLocaleString()}`,
//                       t("price"),
//                     ]}
//                     labelFormatter={(label) => `${t("point")}: ${label}`}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke={
//                       isPositive ? "hsl(120,100%,50%)" : "hsl(0,100%,60%)"
//                     }
//                     strokeWidth={3}
//                     fillOpacity={0.25}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700">
//               <Stat
//                 label={t("high24h")}
//                 value={`${t(
//                   "currencySymbol",
//                 )}${currentToken.high_24h.toLocaleString()}`}
//               />
//               <Stat
//                 label={t("low24h")}
//                 value={`${t(
//                   "currencySymbol",
//                 )}${currentToken.low_24h.toLocaleString()}`}
//               />
//               <Stat
//                 label={t("volume")}
//                 value={`${t("currencySymbol")}${formatCompact(
//                   currentToken.total_volume,
//                 )}`}
//               />
//               <Stat
//                 label={t("marketCap")}
//                 value={`${t("currencySymbol")}${formatCompact(
//                   currentToken.market_cap,
//                 )}`}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Stat = ({ label, value }: { label: string; value: string }) => (
//   <div>
//     <div className="text-xs text-gray-400 mb-1">{label}</div>
//     <div className="font-mono font-bold text-white">{value}</div>
//   </div>
// );

// export default CryptoCharts;
