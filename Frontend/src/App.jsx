import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import Infrastructure from "./pages/Infrastructure";
import Research from "./pages/Research";
import ResearchDevelopmentCell from "./pages/Research/ResearchDevelopmentCell";
import ResearchStatistics from "./pages/Research/ResearchStatistics";
import ResearchCentre from "./pages/Research/ResearchCentre";
import EntrepreneurshipDevelopmentCell from "./pages/Research/EntrepreneurshipDevelopmentCell";
import IndustryCollaboration from "./pages/Research/IndustryCollaboration";
import Administration from "./pages/Administration/Administration";
import TMHNUTrust from "./pages/Administration/Tmhnutrust";
import Principal from "./pages/Administration/Principal";
import FinanceOfficer from "./pages/Administration/FinanceOfficer";
import ControllerOfExamination from "./pages/Administration/ControllerOfExamination";
import Ombudsperson from "./pages/Administration/Ombudsperson";
import GoverningCouncil from "./pages/Administration/GoverningCouncil";
import InternalComplaintsCommittee from "./pages/Administration/InternalComplaintsCommittee";
import AcademicLeadership from "./pages/Administration/AcademicLeadership";
import DetailsOfAcademicPrograms from "./pages/Academics/DetailsOfAcademicPrograms";
import AcademicCalendar from "./pages/Academics/AcademicCalendar";
import StatutesOrdinancesPertaining from "./pages/Academics/StatutesOrdinancesPertaining";
import TeachingFaculty from "./pages/Academics/TeachingFaculty";
import NonTeachingFaculty from "./pages/Academics/NonTeachingFaculty";
import IQAC from "./pages/Academics/Iqac";
import Library from "./pages/Academics/Library";
import AcademicsIndustryCollaboration from "./pages/Academics/IndustryCollaboration";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Overview from "./pages/Overview";
import ActStatus from "./pages/ActStatus";
import DevelopmentPlan from "./pages/DevelopmentPlan";
import Affiliation from "./pages/Affiliation";
import AnnualReports from "./pages/AnnualReports";
import AnnualAccounts from "./pages/AnnualAccounts";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/events" element={<Events />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/act-status" element={<ActStatus />} />
        <Route path="/development-plan" element={<DevelopmentPlan />} />
        <Route path="/affiliation" element={<Affiliation />} />
        <Route path="/annual-reports" element={<AnnualReports />} />
        <Route path="/annual-accounts" element={<AnnualAccounts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;