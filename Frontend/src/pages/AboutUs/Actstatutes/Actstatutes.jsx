import VisionMission from "./components/VisionMission";
import QualityPolicy from "./components/QualityPolicy";
import PolicyDocument from "./components/PolicyDocument";
import OrganizationalChart from "./components/OrganizationalChart";
import bannerImg from "./assets/images/act-statutes-hero-banner.png";
import "./Actstatutes.css";

const Actstatutes = () => {
  return (
    <div className="common-page-wrapper act-statutes-page">
      
      {/* Background ku bathila direct image tag use panrom - So cut aagathu! */}
      <div className="common-hero-banner">
        <img 
          src={bannerImg} 
          alt="Act Statutes Banner" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

      <VisionMission />
      <QualityPolicy />
      <PolicyDocument />
      <OrganizationalChart />
    </div>
  );
};

export default Actstatutes;