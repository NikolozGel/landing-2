"use client";

import { LandingCompanyInfo } from "@/app/api/types/company";
import { useCompanyStore } from "@/app/stores/company-store";
import React, { useEffect } from "react";

interface CompanyInfoClientProps {
  companyInfo: LandingCompanyInfo;
}

const CompanyInfoClient: React.FC<CompanyInfoClientProps> = ({
  companyInfo,
}) => {
  const setCompanyInfo = useCompanyStore((state) => state.setCompanyInfo);

  useEffect(() => {
    setCompanyInfo(companyInfo);
  }, [companyInfo, setCompanyInfo]);

  return null;
};

export default CompanyInfoClient;
