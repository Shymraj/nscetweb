import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./components/About/About";
import Academics from "./pages/Academics";
import Departments from "./components/Departments/Departments";

import CSE from "./pages/Departments/cse/CSE";
import IT from "./pages/Departments/cse/it/IT";
import AIDS from "./pages/Departments/cse/aids/AIDS";
import MECSE from "./pages/Departments/cse/MECSE";
import Civil from "./pages/Departments/civil/Civil";
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
import IndustryCollaboration from "./pages/Research/IndustryCollaboration/IndustryCollaboration";
import Administration from "./pages/Administration/Administration/Administration";
import TMHNUTrust from "./pages/Administration/TMHNUTrust/TMHNUTrust";
import Principal from "./pages/Administration/Principal/Principal";
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
import Alumni from "./pages/Alumini/Alumni";
import Contact from "./pages/Contacts/Contact";
import Overview from "./pages/Aboutus/Overview/Overview";
import ActStatus from "./pages/Aboutus/Actstatutes/Actstatutes";
import DevelopmentPlan from "./pages/Aboutus/Developmentplan/Developmentplan";
import Affiliation from "./pages/Aboutus/Affiliation/Affiliation";
import AnnualReports from "./pages/Aboutus/AnnualReports/AnnualReports";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
        <Route path="/research/industry-collaboration" element={<IndustryCollaboration />} />
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
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/actstatutes" element={<ActStatus />} />
        <Route path="/about/development-plan" element={<DevelopmentPlan />} />
        <Route path="/about/affiliation" element={<Affiliation />} />
        <Route path="/about/annual-reports" element={<AnnualReports />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;