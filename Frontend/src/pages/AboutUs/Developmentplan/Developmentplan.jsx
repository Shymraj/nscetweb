import PageBanner from "../../../components/common/PageBanner/PageBanner";
import ExecutiveSummary from "./components/ExecutiveSummary";
import InstitutionalProfile from "./components/InstitutionalProfile";
import InstitutionalStrength from "./components/InstitutionalStrength";
import VisionMission from "./components/VisionMission";
import KeyEnablers from "./components/KeyEnablers";
import DepartmentAccordion from "./components/DepartmentAccordion";
import SummaryTable from "./components/SummaryTable";
import DevelopmentImage from "./components/DevelopmentImage";
import bannerImg from "./assets/images/dev-plan-hero-banner.png";
import "./Developmentplan.css";

const Developmentplan = () => {
  return (
    <div className="dev-plan-page">
      <PageBanner
        title="Institutional Development Plan"
        subtitle="Strategic Roadmap for NSCET (2024–2029)"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
        imageFit="cover"
      />
      <ExecutiveSummary />
      <InstitutionalProfile />
      <InstitutionalStrength />
      <VisionMission />
      <KeyEnablers />
      <DepartmentAccordion />
      <SummaryTable />
      <DevelopmentImage />
    </div>
  );
};

export default Developmentplan;
