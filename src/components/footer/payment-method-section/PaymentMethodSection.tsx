import Image from "next/image";
import Link from "next/link";
import listIcon from "@/../public/list_icon-2.png";

interface PaymentMethodSectionProps {
  locale: string;
  t: (key: string) => string;
}

const PaymentMethodSection = ({ locale, t }: PaymentMethodSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-gray-800">
      <div className="flex flex-wrap gap-6 text-sm">
        <Link
          href={`/${locale}/aml`}
          className="text-gray-400 hover:text-white transition-colors uppercase"
        >
          {t("bottomLinks.amlPolicy")}
        </Link>
        <Link
          href={`/${locale}/privacy`}
          className="text-gray-400 hover:text-white transition-colors uppercase"
        >
          {t("bottomLinks.privacyPolicy")}
        </Link>
        <Link
          href={`/${locale}/terms`}
          className="text-gray-400 hover:text-white transition-colors uppercase"
        >
          {t("bottomLinks.termsAndConditions")}
        </Link>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <Image src={listIcon} alt="Bank Transfer" width={600} height={300} />
      </div>
    </div>
  );
};

export default PaymentMethodSection;
