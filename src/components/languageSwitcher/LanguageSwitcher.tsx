"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import germanFlag from "@/../public/flags/german-flag.svg";
import englishFlag from "@/../public/flags/english-flag.svg";
import spainFlag from "@/../public/flags/spanish-flag.svg";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { label: "English", flag: englishFlag, code: "EN" },
    es: { label: "Spanish", flag: spainFlag, code: "ES" },
    de: { label: "Germany", flag: germanFlag, code: "DE" },
  };

  const changeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const currentLanguage = languages[locale as keyof typeof languages];

  return (
    <div className="text-white border-2 border-gray-500 rounded-lg">
      <DropdownMenu modal={false} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="
                  md:inline-flex
                  items-center gap-2 
                  px-3 py-2
                  text-sm font-medium
                  text-foreground
                  rounded-md
                  hover:bg-muted/60 cursor-pointer
                  transition-colors
                  "
          >
            <Image
              width={20}
              height={20}
              src={currentLanguage.flag.src}
              alt={currentLanguage.label}
              className="w-8 h-8 rounded-sm"
            />
            <span className="font-semibold">{currentLanguage.code}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform text-gray-500 duration-200",
                isOpen && "rotate-180",
              )}
            />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="
                  min-w-37.5 text-gray-300
                  rounded-md
                  border border-gray-500
                  bg-card/95  
                  backdrop-blur-xl
                  p-1
                  "
        >
          {Object.entries(languages).map(([code, { label, flag }]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => changeLanguage(code)}
              className={cn(
                "cursor-pointer hover:bg-gray-500 rounded-sm px-4 py-2 text-sm",
                locale === code && "bg-gray-500 font-medium",
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  width={10}
                  height={10}
                  src={flag.src}
                  alt={label}
                  className="w-10 h-10 rounded-sm"
                />
                <span>{label}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
