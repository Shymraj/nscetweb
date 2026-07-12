import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Aboutus/Overview";
import Actstatutes from "./pages/Aboutus/Actstatutes";
import Developmentplan from "./pages/Aboutus/Developmentplan";
import Affiliation from "./pages/Aboutus/Affiliation";
import AnnualReports from "./pages/Aboutus/AnnualReports";
import AnnualAccounts from "./pages/Aboutus/AnnualAccounts";


import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import CSE from "./pages/Departments/CSE";
import Civil from "./pages/Departments/Civil";
import Mechanical from "./pages/Departments/Mechanical";
import Electrical from "./pages/Departments/Electrical";
import Electronics from "./pages/Departments/Electronics";
import ScienceHumanities from "./pages/Departments/ScienceHumanities";
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
        <Route path="/departments/civil" element={<Civil />} />
        <Route path="/departments/mechanical" element={<Mechanical />} />
        <Route path="/departments/electrical" element={<Electrical />} />
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


        <Route path="/about/overview" element={<Overview />} />

        <Route path="/about/actstatutes" element={<Actstatutes />} />

        <Route
          path="/about/development-plan"
          element={<Developmentplan />}
        />

        <Route
          path="/about/affiliation"
          element={<Affiliation />}
        />

        <Route
          path="/about/annual-reports"
          element={<AnnualReports />}
        />

        <Route
          path="/about/Annual-Accounts"
          element={<AnnualAccounts />}
        />




      </Routes>
    </BrowserRouter>
  );
}

export default App;