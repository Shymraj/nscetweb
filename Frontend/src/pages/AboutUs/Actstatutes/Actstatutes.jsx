import PageBanner from "../../../components/common/PageBanner/PageBanner";
import VisionMission from "./components/VisionMission";
import QualityPolicy from "./components/QualityPolicy";
import PolicyDocument from "./components/PolicyDocument";
import OrganizationalChart from "./components/OrganizationalChart";
import bannerImg from "./assets/images/act-statutes-banner.jpg";
import "./Actstatutes.css";

const Actstatutes = () => {
  return (
    <div className="act-statutes-page">
      <PageBanner
        title="Act & Statutes"
        subtitle="Building Excellence Through Vision, Quality and Governance."
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
      />
      
      <VisionMission />
      <QualityPolicy />
      <PolicyDocument />
      <OrganizationalChart />
    </div>
  );
};

export default Actstatutes;
