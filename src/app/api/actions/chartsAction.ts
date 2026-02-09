"use server";

import { cookies } from "next/headers";

export async function setLocale(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
  sparkline_in_7d?: {
    price: number[];
  };
}

export interface ChartData {
  date: string;
  price: number;
}

export async function getCryptoData(): Promise<CryptoData[]> {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=true&price_change_percentage=24h",
      { next: { revalidate: 60 } },
    );
    if (!response.ok) {
      throw new Error("Failed to fetch crypto data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return [];
  }
}

export async function getCryptoChartData(coinId: string): Promise<ChartData[]> {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
      { next: { revalidate: 300 } },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch chart data for ${coinId}`);
    }

    const data = await response.json();

    return data.prices.map(([timestamp, price]: [number, number]) => ({
      date: new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      price: Math.round(price),
    }));
  } catch (error) {
    console.error(`Error fetching chart data for ${coinId}:`, error);
    return [];
  }
}
