import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Layout & Core (Eagerly Loaded)
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Academics from "./pages/Academics";
import Contact from "./pages/Contacts/Contact";
import AdminLogin from "./pages/Admin/Login";

// Smart Loader Context & Fallback
import { SmartLoaderProvider } from "./components/SmartLoader/SmartLoaderProvider";
import SmartLoaderFallback from "./components/SmartLoader/SmartLoaderFallback";

// Heavy Modules & Subpages (Lazy Loaded)
const Overview = React.lazy(() => import("./pages/AboutUs/Overview/Overview"));
const Departments = React.lazy(() => import("./components/Departments/Departments"));

const CSE = React.lazy(() => import("./pages/Departments/cse/CSE"));
const IT = React.lazy(() => import("./pages/Departments/cse/it/IT"));
const AIDS = React.lazy(() => import("./pages/Departments/cse/aids/AIDS"));
const MECSE = React.lazy(() => import("./pages/Departments/cse/MECSE"));
const Civil = React.lazy(() => import("./pages/Departments/civil/Civil"));
const SharedFacultyPortfolio = React.lazy(() => import("./components/FacultyPortfolio/FacultyPortfolio"));
const MEStructural = React.lazy(() => import("./pages/Departments/civil/MEStructural"));
const Mechanical = React.lazy(() => import("./pages/Departments/mechanical/Mechanical"));
const MEManufacturing = React.lazy(() => import("./pages/Departments/mechanical/MEManufacturing"));
const Electrical = React.lazy(() => import("./pages/Departments/electrical/Electrical"));
const MEEmbedded = React.lazy(() => import("./pages/Departments/electrical/MEEmbedded"));
const Electronics = React.lazy(() => import("./pages/Departments/electronics/Electronics"));
const ScienceHumanities = React.lazy(() => import("./pages/Departments/s&h/ScienceHumanities"));

const Infrastructure = React.lazy(() => import("./pages/Infrastructure"));
const Research = React.lazy(() => import("./pages/Research"));
const ResearchDevelopmentCell = React.lazy(() => import("./pages/Research/ResearchDevelopmentCell/ResearchDevelopmentCell"));
const ResearchStatistics = React.lazy(() => import("./pages/Research/ResearchStatistics/ResearchStatistics"));
const ResearchCentre = React.lazy(() => import("./pages/Research/ResearchCentre/ResearchCentre"));
const EntrepreneurshipDevelopmentCell = React.lazy(() => import("./pages/Research/EntrepreneurshipDevelopmentCell/EntrepreneurshipDevelopmentCell"));

const Administration = React.lazy(() => import("./pages/Administration/Administration/Administration"));
const TMHNUTrust = React.lazy(() => import("./pages/Administration/TMHNUTrust/TMHNUTrust"));
const Principal = React.lazy(() => import("./pages/Administration/Principal/Principal"));
const FinanceOfficer = React.lazy(() => import("./pages/Administration/FinanceOfficer/FinanceOfficer"));
const ControllerOfExamination = React.lazy(() => import("./pages/Administration/ControllerOfExamination/ControllerOfExamination"));
const Ombudsperson = React.lazy(() => import("./pages/Administration/Ombudsperson/Ombudsperson"));
const GoverningCouncil = React.lazy(() => import("./pages/Administration/GoverningCouncil/GoverningCouncil"));
const InternalComplaintsCommittee = React.lazy(() => import("./pages/Administration/InternalComplaintsCommittee/InternalComplaintsCommittee"));
const AcademicLeadership = React.lazy(() => import("./pages/Administration/AcademicLeadership/AcademicLeadership"));

const DetailsOfAcademicPrograms = React.lazy(() => import("./pages/Academics/DetailsOfAcademicPrograms/DetailsOfAcademicPrograms"));
const AcademicCalendar = React.lazy(() => import("./pages/Academics/AcademicCalender/AcademicCalender"));
const StatutesOrdinancesPertaining = React.lazy(() => import("./pages/Academics/StatuesOrdinancesPertaining/StatuesOrdinancesPertaining"));
const TeachingFaculty = React.lazy(() => import("./pages/Academics/TeachingFaculty/TeachingFaculty"));
const NonTeachingFaculty = React.lazy(() => import("./pages/Academics/NonTeachingFaculty/NonTeachingFaculty"));
const IQAC = React.lazy(() => import("./pages/Academics/iqac/iqac"));
const Library = React.lazy(() => import("./pages/Academics/Library/Library"));
const AcademicsIndustryCollaboration = React.lazy(() => import("./pages/Academics/IndustryCollaboration/IndustryCollaboration"));

const Gallery = React.lazy(() => import("./pages/Gallery"));
const ClubsAndChapters = React.lazy(() => import("./pages/Gallery/ClubsAndChapters/ClubsAndChapters"));
const Events = React.lazy(() => import("./pages/Gallery/Events/Events"));
const EventGallery = React.lazy(() => import("./pages/Gallery/Events/EventGallery"));
const NIRF = React.lazy(() => import("./pages/Gallery/NIRF/NIRF"));
const RTI = React.lazy(() => import("./pages/Gallery/RTI/RTI"));

const Alumni = React.lazy(() => import("./pages/Alumini/Alumni"));

const ActStatus = React.lazy(() => import("./pages/AboutUs/Actstatutes/Actstatutes"));
const DevelopmentPlan = React.lazy(() => import("./pages/AboutUs/Developmentplan/Developmentplan"));
const Affiliation = React.lazy(() => import("./pages/AboutUs/Affiliation/Affiliation"));
const AnnualReports = React.lazy(() => import("./pages/AboutUs/AnnualReports/AnnualReports"));
const AnnualAccounts = React.lazy(() => import("./pages/AboutUs/AnnualAccounts/AnnualAccounts"));

const Sports = React.lazy(() => import("./pages/Student Life/Sports/Sports"));
const NSS = React.lazy(() => import("./pages/Student Life/NSS/NSS"));
const BoysHostel = React.lazy(() => import("./pages/Student Life/BoysHostel/BoysHostel"));
const GirlsHostel = React.lazy(() => import("./pages/Student Life/GirlsHostel/GirlsHostel"));
const Placements = React.lazy(() => import("./pages/Student Life/Placements/Placements"));
const GrievanceRedressal = React.lazy(() => import("./pages/Student Life/GrievanceRedressal/GrievanceRedressal"));
const AntiRaggingCell = React.lazy(() => import("./pages/Student Life/AntiRaggingCell/AntiRaggingCell"));
const EqualOpportunityCell = React.lazy(() => import("./pages/Student Life/EqualOpportunityCell/EqualOpportunityCell"));
const HealthMedicalFacilities = React.lazy(() => import("./pages/Student Life/HealthMedicalFacilities/HealthMedicalFacilities"));
const TransportFacilities = React.lazy(() => import("./pages/Student Life/TransportFacilities/TransportFacilities"));
const SEDG = React.lazy(() => import("./pages/Student Life/SEDG/SEDG"));

const AdminDashboard = React.lazy(() => import("./pages/Admin/Dashboard"));

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin-");
  const isStandalonePortfolio = /^\/departments\/[^/]+\/faculty\//.test(location.pathname);
  const hideGlobalNavAndFooter = isAdminRoute || isStandalonePortfolio;

  return (
    <>
      <ScrollToTop />
      {!hideGlobalNavAndFooter && <Navbar />}

      <Suspense fallback={<SmartLoaderFallback />}>
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
      </Suspense>
      
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
