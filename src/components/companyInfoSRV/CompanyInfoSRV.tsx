import getLandingCompanyInfo from "@/app/api/company/getLandingCompanyInfo";
import CompanyInfoClient from "@/components/companyInfoSRV/CompanyInfoClient";

const CompanyInfoSRV = async () => {
  const companyInfo = await getLandingCompanyInfo();

  return <CompanyInfoClient companyInfo={companyInfo} />;
};

export default CompanyInfoSRV;
