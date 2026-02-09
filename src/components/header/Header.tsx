"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCompanyInfo } from "@/components/hooks/use-company-info";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher";

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const companyInfo = useCompanyInfo();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    closeMenu();
  };

  const navItems = [
    { key: "protocol", label: t("navigation.protocol") },
    { key: "markets", label: t("navigation.markets") },
    { key: "terminal", label: t("navigation.terminal") },
    { key: "docs", label: t("navigation.docs") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm border-b-2 border-foreground/10">
      <div>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 px-4">
            <div className="relative">
              <Terminal className="w-8 h-8 text-red-700" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/30 blur-lg" />
            </div>

            <Link href={`/${locale}/#protocol`} onClick={scrollToTop}>
              <h1 className="font-display text-2xl text-white tracking-wider">
                {companyInfo?.name}
                <span className="text-red-700">_</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}/#${item.key}`}
                className="px-4 py-3 text-gray-400 hover:text-gray-200 hover:bg-primary/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 px-10">
            <div className="hidden xl:block">
              <LanguageSwitcher />
            </div>

            <Link href={`/${locale}/register`}>
              <Button
                variant="ghost"
                className="text-white hover:opacity-60 cursor-pointer border-2 border-foreground/20 hover:border-accent hover:text-accent text-lg px-8 py-2"
              >
                {t("buttons.signIn")}
              </Button>
            </Link>

            <Link href={`/${locale}/sign-in`}>
              <Button className="text-white hover:opacity-60 cursor-pointer border-2 border-foreground/20 hover:border-accent hover:text-accent text-lg px-8 py-2">
                {t("buttons.signUp")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden p-4 border-t border-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={closeMenu}
                  className="px-4 py-3 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center justify-center gap-3 pt-4 px-4">
                <Link href={`/${locale}/register`} onClick={closeMenu}>
                  <Button
                    variant="ghost"
                    className="border-2 text-white hover:opacity-60 cursor-pointer border-foreground/20 hover:border-accent hover:text-accent text-lg px-8 py-2"
                  >
                    {t("buttons.signIn")}
                  </Button>
                </Link>

                <Link href={`/${locale}/sign-in`} onClick={closeMenu}>
                  <Button className="border-2 text-white hover:opacity-60 cursor-pointer border-foreground/20 hover:border-accent hover:text-accent text-lg px-8 py-2">
                    {t("buttons.signUp")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
