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
        <Route path="/departments" element={<Departments />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/rnd-cell" element={<ResearchDevelopmentCell />} />
        <Route path="/research/statistics" element={<ResearchStatistics />} />
        <Route path="/research/centre" element={<ResearchCentre />} />
        <Route path="/research/entrepreneurship-cell" element={<EntrepreneurshipDevelopmentCell />} />
        <Route path="/research/industry-collaboration" element={<IndustryCollaboration />} />
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