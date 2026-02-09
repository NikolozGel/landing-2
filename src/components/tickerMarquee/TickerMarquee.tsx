"use client";
import { TrendingUp, TrendingDown } from "lucide-react";

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

const TickerMarquee = ({ prices }: LivePricesProps) => {
  return (
    <section className="border-y-2 border-foreground/10 overflow-hidden py-3">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...prices, ...prices].map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="flex items-center gap-6 px-8 border-r border-foreground/10 shrink-0"
            >
              <span className="text-white font-mono font-bold">
                {item.symbol}
              </span>

              <span className="text-gray-400 font-mono">
                ${item.price.toLocaleString()}
              </span>

              <span
                className={`flex items-center gap-1 font-mono text-sm ${
                  item.change >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >
                {item.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {item.change >= 0 && "+"}
                {item.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TickerMarquee;
