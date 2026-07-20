import React from 'react';
import './StatuesOrdinancesPertaining.css';
import {
  FaBalanceScale,
  FaGraduationCap,
  FaRegFileAlt,
  FaChevronRight,
  FaBrain,
  FaCode,
  FaMicrochip,
  FaBolt,
  FaBuilding,
  FaLaptopCode,
  FaCog,
  FaFileSignature,
  FaBookOpen,
  FaDownload,
  FaSearch,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

const StatutesLayout = () => {
  return (
    <div className="statutes-container">
      {/* Top Header */}
      <header className="statutes-header">
        <div className="statutes-header-icon">
          <FaBalanceScale />
        </div>
        <h1>Statutes / Ordinances Pertaining</h1>
        <div className="statutes-header-divide"></div>
        <p>The NSCET website provides access to statutes and ordinances that govern academic regulations, student conduct, faculty responsibilities, and institutional policies, ensuring transparency and adherence to educational standards.</p>
      </header>

      {/* Grid of 4 cards */}
      <div className="statutes-grid">

        {/* Card 1: REGULATIONS (Blue Gradient) */}
        <div className="statutes-card blue">
          <div className="statutes-card-header">
            <div className="statutes-card-title-group">
              <div className="statutes-card-icon-wrapper">
                <FaFileSignature />
              </div>
              <h2>REGULATIONS</h2>
            </div>
            {/* 3D-like SVG Document Stack */}
            <div className="statutes-card-illustration-container">
              <svg className="statutes-3d-illustration" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="docGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8ab4f8" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="docShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="60" cy="95" rx="45" ry="12" fill="url(#docShadow)" />
                <path d="M25 85 L60 95 L95 85 L60 75 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
                <path d="M40 30 L75 40 L75 80 L40 70 Z" fill="url(#docGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <path d="M45 25 L80 35 L80 75 L45 65 Z" fill="url(#docGrad)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                <path d="M50 20 L85 30 L85 70 L50 60 Z" fill="url(#docGrad)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <path d="M58 35 L77 42" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
                <path d="M58 43 L77 50" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
                <path d="M58 51 L70 56" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="statutes-card-desc">Access and download academic regulations for undergraduate and postgraduate programs.</p>
          <div className="statutes-card-actions">
            <button className="statutes-btn-translucent">
              <span className="statutes-btn-left">
                <span className="statutes-btn-circle">
                  <FaGraduationCap />
                </span>
                UNDERGRADUATE REGULATIONS
              </span>
              <FaChevronRight className="statutes-btn-arrow" />
            </button>
            <button className="statutes-btn-translucent">
              <span className="statutes-btn-left">
                <span className="statutes-btn-circle">
                  <FaGraduationCap />
                </span>
                POSTGRADUATE REGULATIONS
              </span>
              <FaChevronRight className="statutes-btn-arrow" />
            </button>
          </div>
        </div>

        {/* Card 2: UG COURSES (Green/Teal Gradient) */}
        <div className="statutes-card green">
          <div className="statutes-card-header">
            <div className="statutes-card-title-group">
              <div className="statutes-card-icon-wrapper">
                <FaGraduationCap />
              </div>
              <h2>UG COURSES</h2>
            </div>
            {/* 3D-like SVG Open Book */}
            <div className="statutes-card-illustration-container">
              <svg className="statutes-3d-illustration" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bookGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="bookShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="60" cy="95" rx="45" ry="12" fill="url(#bookShadow)" />
                <path d="M15 50 Q35 45 55 55 L55 85 Q35 75 15 80 Z" fill="url(#bookGrad)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                <path d="M55 55 Q75 45 105 50 L105 80 Q75 75 55 85 Z" fill="url(#bookGrad)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                <path d="M55 55 L55 85" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                <path d="M22 62 Q35 57 48 64" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M22 70 Q35 65 48 72" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M62 64 Q75 57 98 62" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M62 72 Q75 65 98 70" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <p className="statutes-card-desc">Explore the undergraduate programs offered by NSCET.</p>
          <div className="statutes-course-grid">
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaBrain /></span>
              <span>AI & DS</span>
            </div>
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaCode /></span>
              <span>CSE</span>
            </div>
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaMicrochip /></span>
              <span>ECE</span>
            </div>
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaBolt /></span>
              <span>EEE</span>
            </div>
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaBuilding /></span>
              <span>CIVIL</span>
            </div>
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaLaptopCode /></span>
              <span>IT</span>
            </div>
            <div className="statutes-course-capsule">
              <span className="statutes-course-icon"><FaCog /></span>
              <span>MECH</span>
            </div>
          </div>
        </div>

        {/* Card 3: PG RULES (Purple Gradient) */}
        <div className="statutes-card purple">
          <div className="statutes-card-header">
            <div className="statutes-card-title-group">
              <div className="statutes-card-icon-wrapper">
                <FaBalanceScale />
              </div>
              <h2>PG RULES</h2>
            </div>
            {/* 3D-like SVG Scales */}
            <div className="statutes-card-illustration-container">
              <svg className="statutes-3d-illustration" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="scalesGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="scalesShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="60" cy="98" rx="45" ry="10" fill="url(#scalesShadow)" />
                <path d="M40 92 L80 92 L75 88 L45 88 Z" fill="url(#scalesGrad)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <path d="M58 88 L58 40 L62 40 L62 88 Z" fill="url(#scalesGrad)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <path d="M25 45 Q60 40 95 45" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" />
                <path d="M25 46 L15 70" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <path d="M25 46 L35 70" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <path d="M12 70 C12 76 38 76 38 70 Z" fill="url(#scalesGrad)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <path d="M95 46 L85 70" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <path d="M95 46 L105 70" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <path d="M82 70 C82 76 108 76 108 70 Z" fill="url(#scalesGrad)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
              </svg>
            </div>
          </div>
          <p className="statutes-card-desc">Access postgraduate and Ph.D. regulations and guidelines.</p>
          <div className="statutes-card-actions">
            <button className="statutes-btn-translucent">
              <span className="statutes-btn-left">
                <span className="statutes-btn-circle">
                  <FaRegFileAlt />
                </span>
                POSTGRADUATE REGULATIONS
              </span>
              <FaChevronRight className="statutes-btn-arrow" />
            </button>
            <button className="statutes-btn-translucent">
              <span className="statutes-btn-left">
                <span className="statutes-btn-circle">
                  <FaRegFileAlt />
                </span>
                PHD REGULATIONS
              </span>
              <FaChevronRight className="statutes-btn-arrow" />
            </button>
          </div>
        </div>

        {/* Card 4: PG COURSES (Orange/Amber Gradient) */}
        <div className="statutes-card orange">
          <div className="statutes-card-header">
            <div className="statutes-card-title-group">
              <div className="statutes-card-icon-wrapper">
                <FaBookOpen />
              </div>
              <h2>PG COURSES</h2>
            </div>
            {/* 3D-like SVG Graduation Cap */}
            <div className="statutes-card-illustration-container">
              <svg className="statutes-3d-illustration" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="capShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="60" cy="95" rx="45" ry="12" fill="url(#capShadow)" />
                <path d="M40 70 C40 78 80 78 80 70 L80 58 C80 66 40 66 40 58 Z" fill="url(#capGrad)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <path d="M60 30 L105 45 L60 60 L15 45 Z" fill="url(#capGrad)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <path d="M60 45 L30 52 L28 68" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <ellipse cx="28" cy="70" rx="3" ry="5" fill="rgba(255,255,255,0.8)" />
              </svg>
            </div>
          </div>
          <p className="statutes-card-desc">Discover postgraduate programs offered by NSCET.</p>
          <div className="statutes-card-actions">
            <button className="statutes-btn-solid">
              <span className="statutes-btn-left">
                <span className="statutes-btn-circle">
                  <FaBuilding />
                </span>
                STRUCTURAL ENGINEERING
              </span>
              <FaChevronRight className="statutes-btn-arrow" />
            </button>
            <button className="statutes-btn-solid">
              <span className="statutes-btn-left">
                <span className="statutes-btn-circle">
                  <FaCog />
                </span>
                MANUFACTURING ENGINEERING
              </span>
              <FaChevronRight className="statutes-btn-arrow" />
            </button>
          </div>
        </div>

      </div>

      {/* Footer bar */}
      <footer className="statutes-footer">
        <div className="statutes-footer-item blue">
          <div className="statutes-footer-icon-wrapper">
            <FaCheckCircle />
          </div>
          <div className="statutes-footer-text">
            <h4>Updated & Verified</h4>
            <p>All documents are regularly updated and verified.</p>
          </div>
        </div>

        <div className="statutes-footer-item green">
          <div className="statutes-footer-icon-wrapper">
            <FaDownload />
          </div>
          <div className="statutes-footer-text">
            <h4>Easy Access</h4>
            <p>Download or view documents with a single click.</p>
          </div>
        </div>

        <div className="statutes-footer-item purple">
          <div className="statutes-footer-icon-wrapper">
            <FaSearch />
          </div>
          <div className="statutes-footer-text">
            <h4>Transparency</h4>
            <p>Ensuring clarity in academic policies and procedures.</p>
          </div>
        </div>

        <div className="statutes-footer-item orange">
          <div className="statutes-footer-icon-wrapper">
            <FaHeadset />
          </div>
          <div className="statutes-footer-text">
            <h4>Support</h4>
            <p>For any queries, contact the academic office.</p>
          </div>
        </div>

        <div className="statutes-footer-item teal">
          <div className="statutes-footer-icon-wrapper">
            <FaRegFileAlt />
          </div>
          <div className="statutes-footer-text">
            <h4>Official & Reliable</h4>
            <p>Trusted source for all statutes and ordinances of NSCET.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StatutesLayout;