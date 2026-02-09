"use server";

export const getTickerMarque = async () => {
  const tickerData = [
    { symbol: "BTC", price: 67234.89, change: 2.34 },
    { symbol: "ETH", price: 3456.12, change: -1.23 },
    { symbol: "SOL", price: 178.45, change: 5.67 },
    { symbol: "AVAX", price: 42.56, change: 3.21 },
    { symbol: "ARB", price: 1.89, change: -0.89 },
    { symbol: "OP", price: 3.45, change: 4.12 },
    { symbol: "MATIC", price: 0.89, change: 1.56 },
    { symbol: "LINK", price: 18.34, change: 2.78 },
  ];
  return tickerData;
};
