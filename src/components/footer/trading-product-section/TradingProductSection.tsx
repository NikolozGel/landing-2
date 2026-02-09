import Link from "next/link";
interface PaymentMethodSectionProps {
  locale: string;
  t: (key: string) => string;
}

const TradingProductSection = ({ locale, t }: PaymentMethodSectionProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{t("tradingProducts.title")}</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href={`/${locale}/digital-currencies`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("tradingProducts.digitalCurrencies")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/forex`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("tradingProducts.forex")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/indices`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("tradingProducts.indices")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/shares`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("tradingProducts.shares")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/goods`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("tradingProducts.goods")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TradingProductSection;
