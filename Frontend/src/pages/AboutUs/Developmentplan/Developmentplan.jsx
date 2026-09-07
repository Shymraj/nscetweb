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
    /* 👇 Main container-ku common-page-wrapper add panniyachu 👇 */
    <div className="common-page-wrapper dev-plan-page">
      
      {/* 👇 PageBanner-ku bathila namba pudhu responsive Banner Div 👇 */}
      <div className="common-hero-banner">
        <img 
          src={bannerImg} 
          alt="Development Plan Banner" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

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