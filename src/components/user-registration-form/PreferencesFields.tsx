"use client";

import { useState, useEffect } from "react";
import { UseFormSetValue, UseFormWatch, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";
import { format, parseISO } from "date-fns";
import type { Country } from "@/app/api/types/countries";
import type { Language } from "@/app/api/types/languages";
import { RegisterSchema } from "@/components/user-registration-form copy/registrationSchema";
import { CountrySelect } from "@/components/form/CountrySelect";
import { LanguageSelect } from "@/components/form/LanguageSelect";
import { DateOfBirthPicker } from "@/components/form/DateOfBirthPickerr";
// import { DateOfBirthPicker } from "@/components/form/DateOfBirthPicker";

interface PreferencesFieldsProps {
  countries: Country[];
  languages: Language[];
  watch: UseFormWatch<RegisterSchema>;
  setValue: UseFormSetValue<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
  isLoading: boolean;
}

export function PreferencesFields({
  countries,
  languages,
  watch,
  setValue,
  errors,
  isLoading,
}: PreferencesFieldsProps) {
  const t = useTranslations("register");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  useEffect(() => {
    const subscription = watch((data) => {
      setDateOfBirth(data.dateOfBirth || "");
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleDateSelect = (date: Date | undefined) => {
    setValue("dateOfBirth", date ? format(date, "yyy-MM-dd") : "", {
      shouldValidate: true,
    });
    setShowDatePicker(false);
  };

  const dateOfBirthDate = dateOfBirth ? parseISO(dateOfBirth) : undefined;

  // Filter and sort languages
  const selectInputLanguages = languages
    .sort((a, b) => {
      const priorityOrder = ["en", "de"];
      const indexA = priorityOrder.indexOf(a.code);
      const indexB = priorityOrder.indexOf(b.code);
      if (indexA !== -1 || indexB !== -1) {
        return (
          (indexA === -1 ? Number.POSITIVE_INFINITY : indexA) -
          (indexB === -1 ? Number.POSITIVE_INFINITY : indexB)
        );
      }
      return a.name.localeCompare(b.name);
    })
    .map((lang) => ({
      id: lang.code,
      name: lang.name,
    }));

  return (
    <>
      <CountrySelect
        label={t("country")}
        placeholder={t("selectCountry")}
        value={watch("country") || ""}
        onChange={(val) => {
          setValue("country", val, { shouldValidate: true });
        }}
        countries={countries}
        error={errors.country?.message}
        disabled={isLoading}
      />
      <LanguageSelect
        label={t("language")}
        placeholder={t("selectLanguage")}
        value={watch("language") || ""}
        onChange={(code) => {
          setValue("language", code, { shouldValidate: true });
        }}
        languages={selectInputLanguages}
        error={errors.language?.message}
        disabled={isLoading}
      />
      <DateOfBirthPicker
        label={t("dateOfBirth")}
        placeholder={t("pickDate")}
        value={dateOfBirthDate}
        open={showDatePicker}
        onOpenChange={setShowDatePicker}
        onSelect={handleDateSelect}
        error={errors.dateOfBirth?.message}
        disabled={isLoading}
      />
    </>
  );
}
