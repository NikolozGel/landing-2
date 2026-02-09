import Link from "next/link";

interface PaymentMethodSectionProps {
  locale: string;
  t: (key: string) => string;
}

const MarketTrading = ({ t, locale }: PaymentMethodSectionProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{t("marketTrading.title")}</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href={`/${locale}/account`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("marketTrading.accountTypes")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/payment-methods`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("marketTrading.paymentMethods")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/Trading-news`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("marketTrading.tradingNews")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MarketTrading;
