import { getStats } from "@/app/api/stats/getStats";
import HeroSection from "@/components/hero/HeroSectionClient";

const HeroSectionContainer = async () => {
  const stats = await getStats();

  return <HeroSection stats={stats} />;
};

export default HeroSectionContainer;
