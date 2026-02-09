"use server";

import type {
  TradingPair as BinanceTradingPair,
  Ticker as BinanceTicker,
} from "@/app/api/types/binance";
import { getTradingPairs, getTicker } from "@/app/api/binance/getBinance";

export type MarketData = {
  symbol: string;
  price: number;
  change: number;
  volume: string;
  logoUrl: string;
  name: string;
};

export type TradingPair = {
  base: string;
  quote: string;
  volume: string;
  name: string;
};

const coinLogoMap: { [key: string]: string } = {
  BTC: "/assets/images/btc.png",
  ETH: "/assets/images/eth.png",
};

const getCoinLogoUrl = (symbol: string): string => {
  return (
    coinLogoMap[symbol.toUpperCase()] ||
    `/placeholder.svg?height=36&width=36&query=${symbol}+cryptocurrency+logo`
  );
};

const formatVolume = (volume: number) => {
  if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`;
  if (volume >= 1e6) return `${(volume / 1e6).toFixed(1)}M`;
  if (volume >= 1e3) return `${(volume / 1e3).toFixed(1)}K`;
  return volume.toFixed(0);
};

export async function getHeroMarketData() {
  try {
    const symbols = ["BTCUSDT", "ETHUSDT"];
    const tickerPromises = symbols.map(async (symbol) => {
      try {
        const response = await getTicker(symbol);
        return response.success ? response.data : null;
      } catch (err) {
        console.warn(`Failed to fetch ticker for ${symbol}:`, err);
        return null;
      }
    });

    const tickers = await Promise.all(tickerPromises);
    const validTickers = tickers.filter(
      (ticker): ticker is BinanceTicker =>
        ticker !== null && ticker !== undefined,
    );

    const heroData = validTickers.map((ticker) => {
      const symbol = ticker.symbol.replace("USDT", "");
      return {
        symbol,
        name: symbol === "BTC" ? "Bitcoin" : "Ethereum",
        logoUrl: getCoinLogoUrl(symbol),
        price: Number.parseFloat(ticker.lastPrice),
        change: Number.parseFloat(ticker.priceChangePercent),
        volume: formatVolume(Number.parseFloat(ticker.quoteVolume)),
      };
    });

    return { success: true, data: heroData };
  } catch (error) {
    console.error("Failed to fetch hero market data:", error);
    return { success: false, error: "Failed to load market data" };
  }
}

export async function getMarketData() {
  try {
    const popularSymbols = [
      "BTCUSDT",
      "ETHUSDT",
      "ADAUSDT",
      "DOTUSDT",
      "BNBUSDT",
      "SOLUSDT",
      "AVAXUSDT",
      "MATICUSDT",
    ];

    const coinNames = {
      BTC: "Bitcoin",
      ETH: "Ethereum",
      ADA: "Cardano",
      DOT: "Polkadot",
      BNB: "Binance",
      SOL: "Solana",
      AVAX: "Avalanche",
      MATIC: "Polygon",
    };

    const tickerPromises = popularSymbols.map(async (symbol) => {
      try {
        const response = await getTicker(symbol);
        return response.success ? response.data : null;
      } catch (err) {
        console.warn(`Failed to fetch ticker for ${symbol}:`, err);
        return null;
      }
    });

    const tickers = await Promise.all(tickerPromises);
    const validTickers = tickers.filter(
      (ticker): ticker is BinanceTicker =>
        ticker !== null && ticker !== undefined,
    );

    const marketData = validTickers.map((ticker) => {
      const symbol = ticker.symbol.replace("USDT", "");
      return {
        symbol,
        name: coinNames[symbol as keyof typeof coinNames] || symbol,
        logoUrl: getCoinLogoUrl(symbol),
        price: Number.parseFloat(ticker.lastPrice),
        change: Number.parseFloat(ticker.priceChangePercent),
        volume: formatVolume(Number.parseFloat(ticker.quoteVolume)),
      };
    });

    return { success: true, data: marketData };
  } catch (error) {
    console.error("Failed to fetch market data:", error);
    return { success: false, error: "Failed to load market data" };
  }
}

export async function getTradingPairsData() {
  try {
    const pairsResponse = await getTradingPairs("", 6, 0);
    const pairs = pairsResponse.success ? pairsResponse.data || [] : [];

    const transformedPairs = pairs
      .slice(0, 6)
      .map((pair: BinanceTradingPair, index: number) => {
        const seed = index * 98765;
        const volume = (((seed * 9301 + 49297) % 233280) / 233280) * 1000000000;
        return {
          base: pair.baseAsset,
          quote: pair.quoteAsset,
          volume: formatVolume(volume),
          name: `${pair.baseAsset}/${pair.quoteAsset}`,
        };
      });

    return { success: true, data: transformedPairs };
  } catch (error) {
    console.error("Failed to fetch trading pairs:", error);
    return { success: false, error: "Failed to load trading pairs" };
  }
}

export async function getLiveTicker(symbol: string) {
  try {
    const response = await getTicker(symbol);
    if (response.success && response.data) {
      const baseSymbol = response.data.symbol.replace("USDT", "");
      return {
        success: true,
        data: {
          symbol: baseSymbol,
          price: Number.parseFloat(response.data.lastPrice),
          change: Number.parseFloat(response.data.priceChangePercent),
          volume: formatVolume(Number.parseFloat(response.data.quoteVolume)),
          logoUrl: getCoinLogoUrl(baseSymbol),
        },
      };
    }
    return { success: false, error: "Failed to fetch ticker" };
  } catch (error) {
    console.error(`Failed to fetch ticker for ${symbol}:`, error);
    return { success: false, error: "Failed to fetch ticker" };
  }
}
