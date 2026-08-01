import { useState } from "react";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import OfficeBearers from "./components/OfficeBearers";
import AlumniMeets from "./components/AlumniMeets";
import DistinguishedAlumni from "./components/DistinguishedAlumni";
import Certificate from "./components/Certificate";
import { AnimatePresence, motion } from "framer-motion";

import defaultBannerImg from "./assets/banner/alumniassociation.png";
import "./Alumni.css";

// Automatically load any image manually placed inside src/pages/Alumini/assets/banner/
const bannerGlobs = import.meta.glob("./assets/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const customBanner = Object.values(bannerGlobs)[0] || defaultBannerImg;

const Alumni = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "office-bearers":
        return <OfficeBearers />;
      case "alumni-meets":
        return <AlumniMeets />;
      case "distinguished-alumni":
        return <DistinguishedAlumni />;
      case "certificate":
        return <Certificate />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="alumni-page">
      <PageBanner
        title=""
        subtitle=""
        hideBreadcrumb={true}
        backgroundImage={customBanner}
        showOverlay={false}
      />

      <div className="alumni-container">
        <div className="alumni-layout">
          <div className="alumni-sidebar-wrapper">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          <div className="alumni-content-wrapper">
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

export default Alumni;
