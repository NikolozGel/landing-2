// components/hero/HeroSectionClient.tsx
"use client";

import { useTranslations } from "next-intl";

type Stat = {
  key: string;
  value: string;
  delta: string;
};

type HeroSectionClientProps = {
  stats: Stat[];
};

const HeroSection = ({ stats }: HeroSectionClientProps) => {
  const t = useTranslations("heroSection");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 scanlines">
      <div className="container relative z-10 px-4 mt-5">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <p className="text-red-500">{t("terminalPrompt")}</p>
            <p className="text-gray-500">{t("terminalCommand")}</p>
            <p className="text-white">{t("terminalTarget")}</p>
            <p className="terminal-cursor text-white">█</p>
          </div>

          <div className="font-display flex flex-col items-center text-[clamp(2rem,8vw,10rem)] leading-[0.85] mb-4 sm:mb-6 lg:mb-8 animate-slide-left px-4">
            <p className="block text-gray-300">{t("headingLine1")}</p>
            <p className="block text-gray-300">{t("headingLine2")}</p>
            <p className="block text-gray-300">{t("headingLine3")}</p>
          </div>

          <div className="max-w-2xl mb-12 animate-fade-in delay-200">
            <p className="text-lg text-gray-400 border-l-2 border-primary pl-4">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 mb-10 animate-fade-in delay-400">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="brutal-card p-4 hover:translate-x-1 hover:-translate-y-1 transition-transform"
              >
                <div className="text-xs text-gray-400 mb-1">{stat.key}</div>
                <div className="text-2xl md:text-3xl font-display text-white">
                  {stat.value}
                </div>
                <div
                  className={`text-xs ${
                    stat.delta.startsWith("+")
                      ? "text-green-400"
                      : "text-red-500"
                  }`}
                >
                  {stat.delta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
