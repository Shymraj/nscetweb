import React, { useState } from "react";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import Sidebar from "./components/Sidebar";
import VisionMission from "./components/VisionMission";
import QualityPolicy from "./components/QualityPolicy";
import PolicyDocument from "./components/PolicyDocument";
import OrganizationalChart from "./components/OrganizationalChart";
import { AnimatePresence, motion } from "framer-motion";
import bannerImg from "./assets/images/act-statutes-banner.jpg";
import "./Actstatutes.css";

const Actstatutes = () => {
  const [activeSection, setActiveSection] = useState("vision-mission");

  const renderContent = () => {
    switch (activeSection) {
      case "vision-mission":
        return <VisionMission />;
      case "quality-policy":
        return <QualityPolicy />;
      case "policy-document":
        return <PolicyDocument />;
      case "organizational-chart":
        return <OrganizationalChart />;
      default:
        return <VisionMission />;
    }
  };

  return (
    <div className="act-statutes-page">
      <PageBanner
        title="Act & Statutes"
        subtitle="Building Excellence Through Vision, Quality and Governance."
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
      />
      
      <div className="act-container">
        <div className="act-layout">
          <div className="act-sidebar-wrapper">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          
          <div className="act-content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actstatutes;
