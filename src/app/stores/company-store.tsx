import { create } from "zustand";
import { LandingCompanyInfo } from "@/app/api/types/company";

export type CompanyState = {
  companyInfo: LandingCompanyInfo | null;
};

export type CompanyActions = {
  setCompanyInfo: (info: LandingCompanyInfo | null) => void;
};

export type CompanyStore = CompanyState & CompanyActions;

export const useCompanyStore = create<CompanyStore>((set) => ({
  companyInfo: null,

  setCompanyInfo: (info) => set({ companyInfo: info }),
}));
