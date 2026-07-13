import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";

import CSE from "./pages/Departments/cse/CSE";
import IT from "./pages/Departments/cse/IT";
import AIDS from "./pages/Departments/cse/AIDS";
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