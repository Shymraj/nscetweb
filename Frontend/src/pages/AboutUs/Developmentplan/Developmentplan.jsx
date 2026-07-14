import React from "react";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import ExecutiveSummary from "./components/ExecutiveSummary";
import InstitutionalProfile from "./components/InstitutionalProfile";
import VisionMission from "./components/VisionMission";
import SWOT from "./components/SWOT";
import DepartmentAccordion from "./components/DepartmentAccordion";
import SummaryTable from "./components/SummaryTable";
import DevelopmentImage from "./components/DevelopmentImage";
import bannerImg from "./assets/images/banner.png";
import "./Developmentplan.css";

const Developmentplan = () => {
  return (
    <div className="dev-plan-page">
      <PageBanner
        title="Institutional Development Plan"
        subtitle="Strategic Roadmap for NSCET (2024–2029)"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
      />
      <div className="dev-container">
        <ExecutiveSummary />
        <InstitutionalProfile />
        <VisionMission />
        <SWOT />
        <DepartmentAccordion />
        <SummaryTable />
        <DevelopmentImage />
      </div>
    </div>
  );
};

export default Developmentplan;