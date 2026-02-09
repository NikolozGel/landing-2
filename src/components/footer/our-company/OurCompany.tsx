import Link from "next/link";
interface PaymentMethodSectionProps {
  locale: string;
  t: (key: string) => string;
}

const OurCompany = ({ locale, t }: PaymentMethodSectionProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{t("ourCompany.title")}</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href={`/${locale}/about-us`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("ourCompany.aboutUs")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/our-support`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("ourCompany.ourSupport")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default OurCompany;
