"use client";

import { Shield, Zap, Globe, Lock, Layers, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: Shield,
    title: "BATTLE_TESTED.title",
    subtitle: "BATTLE_TESTED.subtitle",
    description: "BATTLE_TESTED.description",
    stats: "BATTLE_TESTED.stats",
  },
  {
    icon: Zap,
    title: "SUB_SECOND.title",
    subtitle: "SUB_SECOND.subtitle",
    description: "SUB_SECOND.description",
    stats: "SUB_SECOND.stats",
  },
  {
    icon: Globe,
    title: "PERMISSIONLESS.title",
    subtitle: "PERMISSIONLESS.subtitle",
    description: "PERMISSIONLESS.description",
    stats: "PERMISSIONLESS.stats",
  },
  {
    icon: Lock,
    title: "SELF_CUSTODY.title",
    subtitle: "SELF_CUSTODY.subtitle",
    description: "SELF_CUSTODY.description",
    stats: "SELF_CUSTODY.stats",
  },
  {
    icon: Layers,
    title: "MULTI_CHAIN.title",
    subtitle: "MULTI_CHAIN.subtitle",
    description: "MULTI_CHAIN.description",
    stats: "MULTI_CHAIN.stats",
  },
  {
    icon: Terminal,
    title: "DEVELOPER.title",
    subtitle: "DEVELOPER.subtitle",
    description: "DEVELOPER.description",
    stats: "DEVELOPER.stats",
  },
];

const FeaturesSection = () => {
  const t = useTranslations("Features");

  return (
    <section id="protocol" className="py-16 md:py-20 relative md:px-15">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="text-sm text-gray-400 mb-2 animate-fade-in">
            {"//"} {t("PROTOCOL_SPECS")}
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-slide-left">
            <span className="text-gray-300">{t("WHY")}</span>
            <span className="text-cyan-500">{t("_NEXUS")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="relative brutal-card p-4 sm:p-6 md:p-8 group hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300 animate-fade-in bg-[#1a1a1a]"
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 brutal-card flex items-center justify-center mb-4 md:mb-0 md:mr-4 group-hover:neon-border transition-all shrink-0">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 sm:mb-4">
                      <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-white mt-3">
                        {t(feature.title)}
                      </h3>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {t(feature.subtitle)}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      {t(feature.description)}
                    </p>

                    <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-red-500/10 border border-red-500/30 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-xs sm:text-sm font-mono text-red-500">
                        {t(feature.stats)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
