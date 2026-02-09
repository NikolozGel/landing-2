import Link from "next/link";

interface PaymentMethodSectionProps {
  locale: string;
  t: (key: string) => string;
}

const LegalAgreements = ({ locale, t }: PaymentMethodSectionProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{t("legalAgreements.title")}</h3>
      <ul className="space-y-2">
        <li>
          <Link
            href={`/${locale}/terms`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("legalAgreements.termsAndConditions")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/privacy`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("legalAgreements.privacyPolicy")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/kyc`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("legalAgreements.kycPolicy")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/aml`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {t("legalAgreements.amlPolicy")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalAgreements;
