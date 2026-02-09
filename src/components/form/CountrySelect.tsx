"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Country = {
  id: string;
  name: string;
};

type CountrySelectProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  countries: Country[];
  error?: string;
  disabled?: boolean;
};

export function CountrySelect({
  label,
  placeholder,
  value,
  onChange,
  countries,
  error,
  disabled,
}: CountrySelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="country"
        className={cn("text-white/90 cursor-pointer", disabled && "opacity-50")}
      >
        {label}
      </Label>

      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          id="country"
          aria-invalid={!!error}
          className={cn(
            "w-full bg-white/5 border text-white backdrop-blur-sm transition-all",
            "hover:bg-white/10",
            "focus:ring-2 focus:ring-[#00ab7f]/40 focus:border-[#00ab7f]",
            error
              ? "border-red-500 focus:ring-red-500/40"
              : "border-white/10 hover:border-white/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          className="bg-gray-900/95 border border-white/10 rounded-xl text-white
                     max-h-64 overflow-y-auto backdrop-blur-md"
        >
          <SelectGroup>
            {countries.map((country) => (
              <SelectItem
                key={country.id}
                value={country.id}
                className="cursor-pointer rounded-md px-3 py-2 text-sm focus:bg-gray-600 focus:text-whitehover:bg-white/10 data-[state=checked]:bg-[#00ab7f]/25"
              >
                {country.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {error && (
        <p className="text-red-400 text-sm flex items-center gap-1">{error}</p>
      )}
    </div>
  );
}
