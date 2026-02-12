"use server";

type Locale = "en" | "de" | "es";

const translations = {
  en: {
    TVL: "TVL",
    VOLUME_24H: "24h Volume",
    USERS: "Users",
    PROTOCOLS: "Protocols",
  },
  de: {
    TVL: "TVL",
    VOLUME_24H: "24h Volumen",
    USERS: "Nutzer",
    PROTOCOLS: "Protokolle",
  },
  es: {
    TVL: "TVL",
    VOLUME_24H: "Volumen 24h",
    USERS: "Usuarios",
    PROTOCOLS: "Protocolos",
  },
};

export const getStats = async (locale: Locale = "en") => {
  const t = translations[locale];

  const stats = [
    { id: 1, volume: "TVL", label: t.TVL, value: "$4.2B", delta: "+12.4%" },
    {
      id: 2,
      volume: "VOLUME_24H",
      label: t.VOLUME_24H,
      value: "$892M",
      delta: "+8.7%",
    },
    { id: 3, volume: "USERS", label: t.USERS, value: "284K", delta: "+2.1%" },
    {
      id: 4,
      volume: "PROTOCOLS",
      label: t.PROTOCOLS,
      value: "47",
      delta: "+3%",
    },
  ];

  return stats;
};
