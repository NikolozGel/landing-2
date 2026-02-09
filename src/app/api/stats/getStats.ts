"use server";

export const getStats = async () => {
  const stats = [
    { key: "TVL", value: "$4.2B", delta: "+12.4%" },
    { key: "VOLUME_24H", value: "$892M", delta: "+8.7%" },
    { key: "USERS", value: "284K", delta: "+2.1%" },
    { key: "PROTOCOLS", value: "47", delta: "+3%" },
  ];

  return stats;
};
