"use server";

import { EnvCompanyInfo } from "../const/company";
import { LandingCompanyInfo } from "../types/company";
import { apiFetcher } from "../utils/api-fetcher";

const getLandingCompanyInfo = async (): Promise<LandingCompanyInfo> => {
  const TRANSLATOR_X_SECRET_KEY = process.env.TRANSLATOR_X_SECRET_KEY;
  const TRANSLATOR_API_URL = process.env.TRANSLATOR_API_URL;
  if (!TRANSLATOR_X_SECRET_KEY || !TRANSLATOR_API_URL) return EnvCompanyInfo;
  const response = await apiFetcher<{ data: LandingCompanyInfo }>(
    "api/landing-company-info",
    {
      headers: {
        "X-Secret-Key": TRANSLATOR_X_SECRET_KEY!,
      },
    },
    TRANSLATOR_API_URL
  );

  return response.data?.data ?? EnvCompanyInfo;
};

export default getLandingCompanyInfo;
