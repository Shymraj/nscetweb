
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import WhyChoose from "./WhyChoose";
import JourneyTimeline from "./JourneyTimeline";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview-page">
      <HeroSection />
      <StatsSection />
      <WhyChoose />
      <JourneyTimeline />
    </div>
  );
};

export default Overview;