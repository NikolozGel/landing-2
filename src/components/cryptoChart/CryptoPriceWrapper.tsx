"use server";
import { getCryptoData } from "@/app/api/actions/chartsAction";
import CryptoPrices from "@/components/cryptoChart/CryptoPrices";

const CryptoPriceContainer = async () => {
  const rawData = await getCryptoData();

  const formattedData = rawData.map((coin) => ({
    symbol: coin.symbol?.toUpperCase() || "",
    name: coin.name || "",
    price:
      coin.current_price?.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) || "0.00",
    change: coin.price_change_percentage_24h || 0,
    image: coin.image || "",
  }));
  return <CryptoPrices prices={formattedData} />;
};

export default CryptoPriceContainer;
