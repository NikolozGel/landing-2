"use client";

import { useState, useEffect } from "react";
import { getCountries } from "@/app/api/countries/getCountries";
import { getLanguages } from "@/app/api/languages/getLanguages";
import type { Country } from "@/app/api/types/countries";
import type { Language } from "@/app/api/types/languages";

export function useRegistrationData() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countriesData, languagesData] = await Promise.all([
          getCountries(),
          getLanguages(),
        ]);

        setCountries(countriesData);
        setLanguages(languagesData);
      } catch (error) {
        console.error("Error fetching countries or languages:", error);
      }
    };

    fetchData();
  }, []);

  return { countries, languages };
}
