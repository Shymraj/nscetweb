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
  const initialFaculty = getFacultyData(deptId, facultyId);
  const [faculty, setFaculty] = useState(initialFaculty);
  const [loading, setLoading] = useState(!initialFaculty);
  const departmentName = getDepartmentName(deptId, faculty);
  const [isDarkMode, setIsDarkMode] = useState(() => document.body.classList.contains("dark-mode"));

  useEffect(() => {
    if (initialFaculty) {
      setFaculty(initialFaculty);
      setLoading(false);
    } else {
      setLoading(true);
    }

    // Dynamic API fetch from database staff
    fetch("http://localhost:5000/api/admin/staff")
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          const cleanedId = (facultyId || "").toLowerCase().trim();
          const normalize = (str) => (str || "").replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
          const targetNorm = normalize(cleanedId);

          const matchedStaff = data.data.find(s => 
            s.id?.toString() === cleanedId ||
            (s.name && s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === cleanedId) ||
            normalize(s.name) === targetNorm ||
            (targetNorm.length >= 6 && normalize(s.name).includes(targetNorm))
          );

          if (matchedStaff) {
            const parseList = (val, fallback = []) => {
              if (!val) return fallback;
              if (Array.isArray(val)) return val;
              try {
                const p = JSON.parse(val);
                if (Array.isArray(p)) return p;
              } catch (e) {}
              return String(val).split('\n').filter(Boolean);
            };

            const isSamePerson = initialFaculty && normalize(initialFaculty.name) === normalize(matchedStaff.name);
            const base = isSamePerson ? initialFaculty : {};

            setFaculty({
              id: matchedStaff.id.toString(),
              slug: base.slug || matchedStaff.id.toString(),
              name: matchedStaff.name,
              department: matchedStaff.department || base.department || "",
              desig: matchedStaff.designation || (isSamePerson ? (base.desig || "Faculty Member") : "Faculty Member"),
              qual: matchedStaff.qualifications || (isSamePerson ? (base.qual || "") : ""),
              email: matchedStaff.email || (isSamePerson ? (base.email || "") : ""),
              image: matchedStaff.photo_url 
                ? (matchedStaff.photo_url.startsWith('http') ? matchedStaff.photo_url : `http://localhost:5000${matchedStaff.photo_url}`) 
                : (isSamePerson ? (base.image || "") : ""),
              spec: (matchedStaff.spec !== undefined && matchedStaff.spec !== null && matchedStaff.spec !== '') 
                ? matchedStaff.spec 
                : (matchedStaff.research || (isSamePerson ? (base.spec || "") : "") || ""),
              objectPosition: isSamePerson ? (base.objectPosition || "center 15%") : "center 15%",
              linkedin: (matchedStaff.linkedin !== undefined && matchedStaff.linkedin !== null && matchedStaff.linkedin !== '') 
                ? matchedStaff.linkedin 
                : (isSamePerson ? (base.linkedin || "") : ""),
              about: (matchedStaff.about !== undefined && matchedStaff.about !== null && matchedStaff.about !== '') 
                ? matchedStaff.about 
                : (isSamePerson ? (base.about || "") : ""),
              publications: parseList(matchedStaff.publications, isSamePerson ? (base.publications || []) : []),
              projects: parseList(matchedStaff.projects, isSamePerson ? (base.projects || []) : []),
              patents: parseList(matchedStaff.patents, isSamePerson ? (base.patents || []) : []),
              awards: parseList(matchedStaff.awards, isSamePerson ? (base.awards || []) : []),
              experience: parseList(matchedStaff.experience, isSamePerson ? (base.experience || []) : []),
              profile_pdf: matchedStaff.profile_pdf 
                ? (matchedStaff.profile_pdf.startsWith('http') ? matchedStaff.profile_pdf : `http://localhost:5000${matchedStaff.profile_pdf}`) 
                : (isSamePerson ? (base.profile_pdf || null) : null),
              profile_url: matchedStaff.profile_url || (isSamePerson ? (base.profile_url || null) : null),
              _detectedDept: deptId
            });
          }
        }
      })
      .catch(err => console.error("Error fetching staff portfolio:", err))
      .finally(() => setLoading(false));
  }, [deptId, facultyId, initialFaculty]);

  // Scroll to top on mount and update document title
  useEffect(() => {
    window.scrollTo(0, 0);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium text-foreground/70">Loading Academic Profile...</p>
        </div>
      </div>
    );
  }

  if (!faculty) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-4">
        <h2 className="text-2xl font-bold">Faculty Member Profile</h2>
        <p className="text-foreground/70">Academic Profile details are currently being processed.</p>
        <button onClick={() => window.close()} className="px-5 py-2 rounded-xl bg-primary text-primary-foreground font-semibold">Close</button>
      </div>
    );
  }

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
      <main className="relative z-10 pt-20 flex-1">
        <GlassmorphismPortfolio faculty={faculty} departmentName={departmentName} />
      </main>

      {/* Minimal Footer */}
      <footer className="portfolio-minimal-footer">
        <p>© Nadar Saraswathi College of Engineering & Technology · {departmentName ? `Department of ${departmentName}` : ""}</p>
      </footer>
    </div>
  );
}
