import CommunitySection from "@/components/community/CommunitySection";
import CryptoPriceContainer from "@/components/cryptoChart/CryptoPriceWrapper";
import FeaturesSection from "@/components/features/FeaturesSection";
import HeroSectionContainer from "@/components/hero/HeroSection";
import TickerMarqueeContainer from "@/components/tickerMarquee/LivePriceTickerMarquee";

export default function Home() {
  return (
    <section>
      <HeroSectionContainer />
      <TickerMarqueeContainer />
      <CryptoPriceContainer />
      <FeaturesSection />
      <CommunitySection />
    </section>
  );
}
