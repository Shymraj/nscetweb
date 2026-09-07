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
            normalize(s.name) === targetNorm ||
            (targetNorm.length >= 4 && (normalize(s.name).includes(targetNorm) || targetNorm.includes(normalize(s.name))))
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

            const base = initialFaculty || {};
            setFaculty({
              ...base,
              id: matchedStaff.id.toString(),
              slug: base.slug || matchedStaff.id.toString(),
              name: matchedStaff.name || base.name,
              desig: matchedStaff.designation || base.desig || "Assistant Professor",
              qual: matchedStaff.qualifications || base.qual || "M.E.",
              email: matchedStaff.email || base.email || "staff@nscet.org",
              image: matchedStaff.photo_url 
                ? (matchedStaff.photo_url.startsWith('http') ? matchedStaff.photo_url : `http://localhost:5000${matchedStaff.photo_url}`) 
                : (base.image || ""),
              spec: matchedStaff.spec || matchedStaff.research || base.spec || "Engineering & Technology",
              objectPosition: base.objectPosition || "center 15%",
              linkedin: (matchedStaff.linkedin !== undefined && matchedStaff.linkedin !== null && matchedStaff.linkedin !== '') ? matchedStaff.linkedin : (base.linkedin || ""),
              about: (matchedStaff.about !== undefined && matchedStaff.about !== null && matchedStaff.about !== '') ? matchedStaff.about : (base.about || `${matchedStaff.name} is a dedicated faculty member at Nadar Saraswathi College of Engineering & Technology, committed to academic excellence and student mentorship.`),
              publications: parseList(matchedStaff.publications, base.publications || []),
              projects: parseList(matchedStaff.projects, base.projects || []),
              patents: parseList(matchedStaff.patents, base.patents || []),
              awards: parseList(matchedStaff.awards, base.awards || []),
              experience: parseList(matchedStaff.experience, base.experience || []),
              profile_pdf: matchedStaff.profile_pdf ? (matchedStaff.profile_pdf.startsWith('http') ? matchedStaff.profile_pdf : `http://localhost:5000${matchedStaff.profile_pdf}`) : (base.profile_pdf || null),
              profile_url: matchedStaff.profile_url || base.profile_url || null,
              _detectedDept: deptId
            });
          }
        }
      })
      .catch(err => console.error("Error fetching staff portfolio:", err))
      .finally(() => setLoading(false));
  }, [deptId, facultyId, initialFaculty]);

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
