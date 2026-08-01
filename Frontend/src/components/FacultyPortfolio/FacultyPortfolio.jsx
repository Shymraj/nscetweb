import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import GlassmorphismPortfolio from "./GlassmorphismPortfolio";
import { getFacultyData, getDepartmentName } from "../../pages/Departments/facultyRegistry";
import nscetLogo from "../../assets/Img/nscet-logo.png";
import { ArrowLeft, Moon, Sun, ChevronLeft } from "lucide-react";
import "./FacultyPortfolio.css";

export default function FacultyPortfolio() {
  const { deptId, facultyId } = useParams();
  const navigate = useNavigate();
  const faculty = getFacultyData(deptId, facultyId);
  const departmentName = getDepartmentName(deptId);
  const [isDarkMode, setIsDarkMode] = useState(() => document.body.classList.contains("dark-mode"));

  if (!faculty) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Faculty Not Found</div>;
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    
    if (window.opener && !window.opener.closed) {
      // Focus parent tab and close the current standalone portfolio tab
      window.opener.focus();
      window.close();
    } else {
      // Fallback: If accessed directly (no opener), navigate back in the same tab
      window.close();
      setTimeout(() => {
        navigate(`/departments/${deptId}`);
      }, 150);
    }
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Update document title for standalone portfolio experience
    if (faculty && faculty.name) {
      document.title = `${faculty.name} | Faculty Portfolio — ${departmentName} (NSCET)`;
    }
    return () => {
      document.title = "NSCET — Nadar Saraswathi College of Engineering & Technology";
    };
  }, [faculty, departmentName]);

  // Sync dark mode state with body class
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
        <GlassmorphismPortfolio faculty={faculty} />
      </main>

      {/* Minimal Footer */}
      <footer className="portfolio-minimal-footer">
        <p>© Nadar Saraswathi College of Engineering & Technology · Department of Civil Engineering</p>
      </footer>
    </div>
  );
}
