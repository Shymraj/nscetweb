import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SmartLoaderProvider } from "./components/SmartLoader/SmartLoaderProvider";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./components/About/About";
import Academics from "./pages/Academics";
import Departments from "./components/Departments/Departments";

import CSE from "./pages/Departments/cse/CSE";
import IT from "./pages/Departments/cse/it/IT";
import AIDS from "./pages/Departments/cse/aids/AIDS";
import MECSE from "./pages/Departments/cse/MECSE";
import Civil from "./pages/Departments/civil/Civil";
import SharedFacultyPortfolio from "./components/FacultyPortfolio/FacultyPortfolio";
import MEStructural from "./pages/Departments/civil/MEStructural";
import Mechanical from "./pages/Departments/mechanical/Mechanical";
import MEManufacturing from "./pages/Departments/mechanical/MEManufacturing";
import Electrical from "./pages/Departments/electrical/Electrical";
import MEEmbedded from "./pages/Departments/electrical/MEEmbedded";
import Electronics from "./pages/Departments/electronics/Electronics";
import ScienceHumanities from "./pages/Departments/s&h/ScienceHumanities";

import Infrastructure from "./pages/Infrastructure";
import Research from "./pages/Research";
import ResearchDevelopmentCell from "./pages/Research/ResearchDevelopmentCell/ResearchDevelopmentCell";
import ResearchStatistics from "./pages/Research/ResearchStatistics/ResearchStatistics";
import ResearchCentre from "./pages/Research/ResearchCentre/ResearchCentre";
import EntrepreneurshipDevelopmentCell from "./pages/Research/EntrepreneurshipDevelopmentCell/EntrepreneurshipDevelopmentCell";
import Administration from "./pages/Administration/Administration/Administration";
import TMHNUTrust from "./pages/Administration/TMHNUTrust/TMHNUTrust";
import Principal from "./pages/Administration/Principal/Principal";
import PrincipalProfile from "./pages/Administration/PrincipalProfile/PrincipalProfile";
import FinanceOfficer from "./pages/Administration/FinanceOfficer/FinanceOfficer";
import ControllerOfExamination from "./pages/Administration/ControllerOfExamination/ControllerOfExamination";
import Ombudsperson from "./pages/Administration/Ombudsperson/Ombudsperson";
import GoverningCouncil from "./pages/Administration/GoverningCouncil/GoverningCouncil";
import InternalComplaintsCommittee from "./pages/Administration/InternalComplaintsCommittee/InternalComplaintsCommittee";
import AcademicLeadership from "./pages/Administration/AcademicLeadership/AcademicLeadership";
import DetailsOfAcademicPrograms from "./pages/Academics/DetailsOfAcademicPrograms/DetailsOfAcademicPrograms";
import AcademicCalendar from "./pages/Academics/AcademicCalender/AcademicCalender";
import StatutesOrdinancesPertaining from "./pages/Academics/StatuesOrdinancesPertaining/StatuesOrdinancesPertaining";
import TeachingFaculty from "./pages/Academics/TeachingFaculty/TeachingFaculty";
import NonTeachingFaculty from "./pages/Academics/NonTeachingFaculty/NonTeachingFaculty";
import IQAC from "./pages/Academics/iqac/iqac";
import Library from "./pages/Academics/Library/Library";
import AcademicsIndustryCollaboration from "./pages/Academics/IndustryCollaboration/IndustryCollaboration";
import Gallery from "./pages/Gallery";
import ClubsAndChapters from "./pages/Gallery/ClubsAndChapters/ClubsAndChapters";
import Events from "./pages/Gallery/Events/Events";
import EventGallery from "./pages/Gallery/Events/EventGallery";
import NIRF from "./pages/Gallery/NIRF/NIRF";
import RTI from "./pages/Gallery/RTI/RTI";
import Alumni from "./pages/Alumini/Alumni";
import Contact from "./pages/Contacts/Contact";
import Overview from "./pages/AboutUs/Overview/Overview";
import ActStatus from "./pages/AboutUs/Actstatutes/Actstatutes";
import DevelopmentPlan from "./pages/AboutUs/Developmentplan/Developmentplan";
import Affiliation from "./pages/AboutUs/Affiliation/Affiliation";
import AnnualReports from "./pages/AboutUs/AnnualReports/AnnualReports";
import AnnualAccounts from "./pages/AboutUs/AnnualAccounts/AnnualAccounts";

// Student Life
import Sports from "./pages/Student Life/Sports/Sports";
import NSS from "./pages/Student Life/NSS/NSS";
import BoysHostel from "./pages/Student Life/BoysHostel/BoysHostel";
import GirlsHostel from "./pages/Student Life/GirlsHostel/GirlsHostel";
import Placements from "./pages/Student Life/Placements/Placements";
import GrievanceRedressal from "./pages/Student Life/GrievanceRedressal/GrievanceRedressal";
import AntiRaggingCell from "./pages/Student Life/AntiRaggingCell/AntiRaggingCell";
import EqualOpportunityCell from "./pages/Student Life/EqualOpportunityCell/EqualOpportunityCell";
import HealthMedicalFacilities from "./pages/Student Life/HealthMedicalFacilities/HealthMedicalFacilities";
import TransportFacilities from "./pages/Student Life/TransportFacilities/TransportFacilities";
import SEDG from "./pages/Student Life/SEDG/SEDG";

import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import PageTransition from "./components/Preloader/PageTransition";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin-");
  const isStandalonePortfolio = /^\/departments\/[^/]+\/faculty\//.test(location.pathname) || location.pathname === "/administration/principal/profile";
  const hideGlobalNavAndFooter = isAdminRoute || isStandalonePortfolio;

  return (
    <>
      <PageTransition />
      <ScrollToTop />
      {!hideGlobalNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Overview />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/details-of-academic-programs" element={<DetailsOfAcademicPrograms />} />
        <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/academics/statutes-ordinances-pertaining" element={<StatutesOrdinancesPertaining />} />
        <Route path="/academics/teaching-faculty" element={<TeachingFaculty />} />
        <Route path="/academics/non-teaching-faculty" element={<NonTeachingFaculty />} />
        <Route path="/academics/iqac" element={<IQAC />} />
        <Route path="/academics/library" element={<Library />} />
        <Route path="/academics/industry-collaboration" element={<AcademicsIndustryCollaboration />} />
        <Route path="/departments" element={<Departments />} />

        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/it" element={<IT />} />
        <Route path="/departments/aids" element={<AIDS />} />
        <Route path="/departments/me-cse" element={<MECSE />} />
        <Route path="/departments/civil" element={<Civil />} />
        <Route path="/departments/:deptId/faculty/:facultyId" element={<SharedFacultyPortfolio />} />
        <Route path="/departments/me-structural" element={<MEStructural />} />
        <Route path="/departments/mechanical" element={<Mechanical />} />
        <Route path="/departments/me-manufacturing" element={<MEManufacturing />} />
        <Route path="/departments/electrical" element={<Electrical />} />
        <Route path="/departments/me-embedded" element={<MEEmbedded />} />
        <Route path="/departments/electronics" element={<Electronics />} />
        <Route path="/departments/science-humanities" element={<ScienceHumanities />} />

        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/rnd-cell" element={<ResearchDevelopmentCell />} />
        <Route path="/research/statistics" element={<ResearchStatistics />} />
        <Route path="/research/centre" element={<ResearchCentre />} />
        <Route path="/research/entrepreneurship-cell" element={<EntrepreneurshipDevelopmentCell />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/administration/tmhnutrust" element={<TMHNUTrust />} />
        <Route path="/administration/principal" element={<Principal />} />
        <Route path="/administration/principal/profile" element={<PrincipalProfile />} />
        <Route path="/administration/finance-officer" element={<FinanceOfficer />} />
        <Route path="/administration/controller-examination" element={<ControllerOfExamination />} />
        <Route path="/administration/ombudsperson" element={<Ombudsperson />} />
        <Route path="/administration/governing-council" element={<GoverningCouncil />} />
        <Route path="/administration/internal-complaints-committee" element={<InternalComplaintsCommittee />} />
        <Route path="/administration/academic-leadership" element={<AcademicLeadership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/clubs-chapters" element={<ClubsAndChapters />} />
        <Route path="/gallery/events" element={<Events />} />
        <Route path="/gallery/events/:eventSlug" element={<EventGallery />} />
        <Route path="/gallery/nirf" element={<NIRF />} />
        <Route path="/gallery/rti" element={<RTI />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/actstatutes" element={<ActStatus />} />
        <Route path="/about/development-plan" element={<DevelopmentPlan />} />
        <Route path="/about/affiliation" element={<Affiliation />} />
        <Route path="/about/annual-reports" element={<AnnualReports />} />
        <Route path="/about/annual-accounts" element={<AnnualAccounts />} />

        {/* Student Life */}
        <Route path="/student-life/sports" element={<Sports />} />
        <Route path="/student-life/nss" element={<NSS />} />
        <Route path="/student-life/boys-hostel" element={<BoysHostel />} />
        <Route path="/student-life/girls-hostel" element={<GirlsHostel />} />
        <Route path="/student-life/placements" element={<Placements />} />
        <Route path="/student-life/grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="/student-life/anti-ragging-cell" element={<AntiRaggingCell />} />
        <Route path="/student-life/equal-opportunity-cell" element={<EqualOpportunityCell />} />
        <Route path="/student-life/health-medical-facilities" element={<HealthMedicalFacilities />} />
        <Route path="/student-life/transport-facilities" element={<TransportFacilities />} />
        <Route path="/student-life/sedg" element={<SEDG />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      
      {!hideGlobalNavAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <SmartLoaderProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </SmartLoaderProvider>
  );
}

export default App;