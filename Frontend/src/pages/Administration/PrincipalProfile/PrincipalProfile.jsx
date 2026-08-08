import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlassmorphismPortfolio from "../../../components/FacultyPortfolio/GlassmorphismPortfolio";
import defaultPrincipalImg from "../../../assets/administration/images/prinicipal.jpg";
import nscetLogo from "../../../assets/Img/nscet-logo.png";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import "../../../components/FacultyPortfolio/FacultyPortfolio.css";

export default function PrincipalProfile() {
  const navigate = useNavigate();
  const departmentName = "Administration";
  const [isDarkMode, setIsDarkMode] = useState(() => document.body.classList.contains("dark-mode"));

  const defaultMessage = "As a 21st century organization, NSCET desires to set an approach to learning that incorporates inquiry, research, analytical thinking and an ethical approach that becomes a lifetime habit. I strongly believe that education is a collaborative effort that involves professional administrators, committed teachers and motivated students.We dedicate ourselves as professional administrators in creating a dynamic education programme empowering the students in a global perspective. Learning at NSCET is a wholesome package of attitude, challenge and opportunity.";

  const principalData = {
    id: "principal",
    slug: "principal",
    name: "Dr. C. Mathalai Sundaram",
    desig: "Professor & Principal",
    qual: "M.E., M.B.A., Ph.D., MISTE",
    email: "principal@nscet.org",
    image: defaultPrincipalImg,
    spec: "Composite Tool Materials, Manufacturing Engineering",
    objectPosition: "center top",
    linkedin: "", 
    about: defaultMessage,
    experience: [
      "Professor & Principal of NSCET since June 2017",
      "Professor & Vice Principal at NSCET for 4 years",
      "Assistant/Associate Professor at NSCET for 3 years",
      "Assistant Professor at Bharath Niketan Engineering College for 2 years",
      "Lecturer & Head of Department at multiple polytechnic colleges for over 8 years"
    ],
    publications: [
      "Total Publications: 32"
    ],
    patents: [
      "Automation in Portable Oil Seal Assembly Machine (2017)",
      "Flower Garland Making Machine (2022)",
      "Movable Staircase and Lifting Setup in Vehicle (2023)"
    ]
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(`/administration/principal`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Dr. C. Mathalai Sundaram | Principal Portfolio — NSCET`;
    return () => {
      document.title = "NSCET — Nadar Saraswathi College of Engineering & Technology";
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="faculty-portfolio-page shadcn-theme">
      {/* Ambient background glows */}
      <div className="portfolio-ambient-glow portfolio-glow-1" />
      <div className="portfolio-ambient-glow portfolio-glow-2" />

      {/* Minimal Floating Header */}
      <header className="portfolio-header">
        <Link to="/" className="portfolio-header-brand" title="NSCET Home">
          <img src={nscetLogo} alt="NSCET Logo" className="portfolio-header-logo" />
          <div className="portfolio-header-title-group">
            <span className="portfolio-header-title">NSCET</span>
            <span className="portfolio-header-tag">{departmentName}</span>
          </div>
        </Link>

        <div className="portfolio-header-actions">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="portfolio-theme-btn"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button onClick={handleBackClick} className="portfolio-back-btn">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </header>

      {/* Main Standalone Portfolio Component */}
      <main className="relative z-10 pt-20">
        <GlassmorphismPortfolio faculty={principalData} departmentName={departmentName} />
      </main>

      {/* Minimal Footer */}
      <footer className="portfolio-minimal-footer">
        <p>© Nadar Saraswathi College of Engineering & Technology</p>
      </footer>
    </div>
  );
}
