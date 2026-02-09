"use client";

import { useTranslations } from "next-intl";

const testimonials = [
  {
    handle: "@defi_whale",
    content: "TESTIMONIAL_1.content",
    platform: "twitter",
    verified: true,
  },
  {
    handle: "@0xbuilder",
    content: "TESTIMONIAL_2.content",
    platform: "discord",
    verified: true,
  },
  {
    handle: "@crypto_native",
    content: "TESTIMONIAL_3.content",
    platform: "twitter",
    verified: true,
  },
  {
    handle: "@anon_trader",
    content: "TESTIMONIAL_4.content",
    platform: "discord",
    verified: false,
  },
];

const stats = [
  { value: "284K", label: "ACTIVE_WALLETS" },
  { value: "$4.2B", label: "TVL" },
  { value: "47", label: "INTEGRATIONS" },
  { value: "12", label: "CHAINS" },
];

const CommunitySection = () => {
  const t = useTranslations("Community");

  return (
    <section id="docs" className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex-1">
            <div className="text-xs sm:text-sm text-gray-400 mb-2 animate-fade-in">
              {"//"} {t("COMMUNITY_PULSE")}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-slide-left leading-tight">
              <span className="text-gray-300">{t("THE")} </span>
              <span className="text-cyan-500">{t("_NETWORK")}</span>
            </h2>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.handle}
              className={`brutal-card p-4 sm:p-5 md:p-6 group hover:translate-x-1 hover:-translate-y-1 transition-all animate-fade-in bg-[#1a1a1a] relative ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <p
                className={`text-gray-300/90 leading-relaxed ${
                  index === 0
                    ? "text-base sm:text-lg md:text-xl"
                    : "text-sm sm:text-base"
                }`}
              >
                {t(testimonial.content)}
              </p>

              <div className="absolute top-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t border-r border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors" />
            </div>
          ))}
        </div>

        <div className=" bg-[#1a1a1a] w-full py-10">
          <div className="flex justify-evenly w-full">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center lg:text-left relative"
              >
                <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-1 sm:mb-2 leading-tight">
                  {stat.value}
                </div>

                <div className="text-xs sm:text-sm text-gray-400 font-mono wrap-break-words">
                  {t(stat.label)}
                </div>

                {index < stats.length - 1 && (
                  <>
                    {index % 2 === 0 && (
                      <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 sm:h-16 bg-gray-600/20" />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-12 sm:mt-16 text-center animate-fade-in delay-600 px-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-4 flex-wrap justify-center">
            <span className="text-red-500 text-sm sm:text-base">$</span>
            <span className="text-gray-400 text-sm sm:text-base">
              {t("JOIN")}
            </span>
            <span className="text-gray-300 text-sm sm:text-base">
              --community
            </span>
            <span className="terminal-cursor text-red-500 text-sm sm:text-base">
              █
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mb-6 sm:mb-8 px-4">
            {t("CTA_DESCRIPTION")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
