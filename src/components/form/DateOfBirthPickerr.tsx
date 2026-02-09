"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
type DateOfBirthPickerProps = {
  label: string;
  placeholder: string;
  value?: Date;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (date?: Date) => void;
  error?: string;
  disabled?: boolean;
};

export function DateOfBirthPicker({
  label,
  placeholder,
  value,
  open,
  onOpenChange,
  onSelect,
  error,
  disabled,
}: DateOfBirthPickerProps) {
  return (
    <div className="mb-4">
      <Label
        htmlFor="dateOfBirth"
        className="text-white/90 mb-2 cursor-pointer"
      >
        {label}
      </Label>

      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild className="relative">
          <Button
            type="button"
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00ab7f] focus:ring-[#00ab7f]/40 backdrop-blur-sm",
              !value && "text-gray-500",
            )}
          >
            <CalendarDays className="mr-2 size-5" />

            {value ? format(value, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto absolute -right-35 bottom-0 bg-gray-900/90 backdrop-blur-xl border border-purple-400/30 text-white rounded-xl">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onSelect}
            id="dateOfBirth"
            captionLayout="dropdown"
            className="[&_button]:text-gray-40
              [&_div.rdp-day_selected]:bg-purple-500
              [&_div.rdp-day_selected]:text-white
              [&_select]:bg-gray-800/50
              [&_select]:text-white
              [&_select]:rounded-md"
          />
        </PopoverContent>
      </Popover>

      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
