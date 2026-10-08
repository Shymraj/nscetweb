import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StatuesOrdinancesPertaining.css';
import {
  FaBalanceScale,
  FaArrowRight,
  FaBrain,
  FaCode,
  FaMicrochip,
  FaBolt,
  FaBuilding,
  FaLaptopCode,
  FaCog,
  FaUniversity,
  FaScroll,
  FaChevronDown,
  FaFilePdf,
  FaGraduationCap,
  FaBookOpen,
  FaCheckCircle
} from "react-icons/fa";

// Import PDFs
import ug_ece from './UG REGULATIONS/B.E ECE.pdf';
import ug_civil from './UG REGULATIONS/B.E. Civil Engineering.pdf';
import ug_eee from './UG REGULATIONS/B.E. EEE.pdf';
import ug_mech from './UG REGULATIONS/B.E. Mechanical Engineering.pdf';
import ug_aids from './UG REGULATIONS/B.Tech. AI and DS.pdf';
import ug_it from './UG REGULATIONS/B.Tech. IT.pdf';
import ug_cse from './UG REGULATIONS/BE CSE.pdf';

import pg_mfg from './PG REGULATION/M.E. Manufacturing.pdf';
import pg_structural from './PG REGULATION/M.E. Structural Engg.pdf';
import pg_est from './PG REGULATION/M.E. EST.pdf';
import pg_cse from './PG REGULATION/M.E. CSE.pdf';

import phd_mech from './PH.D REGULATIONS/Ph.d Mechanical.pdf';

const ugDocs = [
  { code: 'AI & DS', title: 'B.Tech. Artificial Intelligence & Data Science', desc: 'Anna University Approved Curriculum & Regulation', file: ug_aids },
  { code: 'CSE', title: 'B.E. Computer Science & Engineering', desc: 'Anna University Approved Curriculum & Regulation', file: ug_cse },
  { code: 'ECE', title: 'B.E. Electronics & Communication Engineering', desc: 'Anna University Approved Curriculum & Regulation', file: ug_ece },
  { code: 'EEE', title: 'B.E. Electrical & Electronics Engineering', desc: 'Anna University Approved Curriculum & Regulation', file: ug_eee },
  { code: 'CIVIL', title: 'B.E. Civil Engineering', desc: 'Anna University Approved Curriculum & Regulation', file: ug_civil },
  { code: 'IT', title: 'B.Tech. Information Technology', desc: 'Anna University Approved Curriculum & Regulation', file: ug_it },
  { code: 'MECH', title: 'B.E. Mechanical Engineering', desc: 'Anna University Approved Curriculum & Regulation', file: ug_mech },
];

const pgDocs = [
  { code: 'STR', title: 'M.E. Structural Engineering', desc: 'Postgraduate Regulation & Degree Requirements', file: pg_structural },
  { code: 'MFG', title: 'M.E. Manufacturing Engineering', desc: 'Postgraduate Regulation & Degree Requirements', file: pg_mfg },
  { code: 'EST', title: 'M.E. Embedded System & Technologies', desc: 'Postgraduate Regulation & Degree Requirements', file: pg_est },
  { code: 'CSE', title: 'M.E. Computer Science & Engineering', desc: 'Postgraduate Regulation & Degree Requirements', file: pg_cse },
];

const phdDocs = [
  { code: 'PH.D', title: 'Ph.D. Mechanical Engineering', desc: 'Doctoral Research Guidelines & Academic Statutes', file: phd_mech },
];

const ugProgrammes = [
  { name: 'AI & DS', full: 'Artificial Intelligence & Data Science', path: '/departments/aids', icon: <FaBrain /> },
  { name: 'CSE', full: 'Computer Science & Engineering', path: '/departments/cse', icon: <FaCode /> },
  { name: 'ECE', full: 'Electronics & Communication Engineering', path: '/departments/electronics', icon: <FaMicrochip /> },
  { name: 'EEE', full: 'Electrical & Electronics Engineering', path: '/departments/electrical', icon: <FaBolt /> },
  { name: 'CIVIL', full: 'Civil Engineering', path: '/departments/civil', icon: <FaBuilding /> },
  { name: 'IT', full: 'Information Technology', path: '/departments/it', icon: <FaLaptopCode /> },
  { name: 'MECH', full: 'Mechanical Engineering', path: '/departments/mechanical', icon: <FaCog /> },
];

const pgProgrammes = [
  { name: 'Structural Engineering', full: 'M.E. Structural Engineering', path: '/departments/me-structural', icon: <FaBuilding /> },
  { name: 'Manufacturing Engineering', full: 'M.E. Manufacturing Engineering', path: '/departments/me-manufacturing', icon: <FaCog /> },
  { name: 'Embedded System & Tech', full: 'M.E. Embedded System & Technology', path: '/departments/me-embedded', icon: <FaMicrochip /> },
  { name: 'Computer Science & Engg', full: 'M.E. Computer Science & Engineering', path: '/departments/me-cse', icon: <FaLaptopCode /> },
];

const StatutesLayout = () => {
  const [isUgOpen, setIsUgOpen] = useState(true);
  const [isPgOpen, setIsPgOpen] = useState(false);
  const [isPhdOpen, setIsPhdOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="statutes-page-wrapper">
      {/* 1. Modern Hero Banner Section */}
      <section className="statutes-hero-section">
        <div className="statutes-hero-glow"></div>
        <div className="statutes-hero-inner">
          <div className="statutes-badge-pill">
            <FaBalanceScale className="statutes-badge-icon" />
            <span>Academic Governance & Regulations</span>
          </div>

          <h1 className="statutes-hero-title">
            STATUTES & ORDINANCES
            <span className="statutes-title-highlight">PERTAINING</span>
          </h1>

          <div className="statutes-hero-divider"></div>

          <p className="statutes-hero-subtitle">
            Official academic regulations, curriculum framework, and institutional ordinances governing degree requirements, assessment policies, and student progression at Nadar Saraswathi College of Engineering and Technology.
          </p>

          <div className="statutes-quick-stats">
            <div className="stat-pill">
              <div className="stat-pill-icon-box">
                <FaGraduationCap className="stat-pill-icon" />
              </div>
              <div className="stat-pill-text">
                <span className="stat-num">7</span>
                <span className="stat-label">UG Programmes</span>
              </div>
            </div>

            <div className="stat-pill">
              <div className="stat-pill-icon-box">
                <FaBookOpen className="stat-pill-icon" />
              </div>
              <div className="stat-pill-text">
                <span className="stat-num">4</span>
                <span className="stat-label">PG Programmes</span>
              </div>
            </div>

            <div className="stat-pill">
              <div className="stat-pill-icon-box">
                <FaCheckCircle className="stat-pill-icon check-icon" />
              </div>
              <div className="stat-pill-text">
                <span className="stat-label-full">Anna University Affiliated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="statutes-content-container">
        
        {/* 2. Academic Regulations Section */}
        <section className="statutes-portal-card" id="academic-regulations">
          <div className="statutes-card-header">
            <div className="statutes-card-icon-box">
              <FaScroll className="statutes-card-icon" />
            </div>
            <div className="statutes-card-header-text">
              <h2 className="statutes-card-title">ACADEMIC REGULATIONS</h2>
              <p className="statutes-card-desc">Approved regulation handbooks and degree curricula for all departments</p>
            </div>
          </div>

          <div className="statutes-accordions-list">
            
            {/* UNDERGRADUATE ACCORDION */}
            <div className={`statutes-accordion-card ${isUgOpen ? 'open' : ''}`}>
              <button 
                type="button"
                className="statutes-acc-btn" 
                onClick={() => setIsUgOpen(!isUgOpen)}
                aria-expanded={isUgOpen}
              >
                <div className="statutes-acc-btn-left">
                  <span className="statutes-acc-index">01</span>
                  <div className="statutes-acc-title-wrap">
                    <h3 className="statutes-acc-heading">Undergraduate Regulations</h3>
                    <p className="statutes-acc-subtext">Curriculum & regulations for 7 B.E. / B.Tech. departments</p>
                  </div>
                </div>
                <div className="statutes-acc-btn-right">
                  <span className="statutes-count-badge">7 Handbooks</span>
                  <FaChevronDown className={`statutes-chevron ${isUgOpen ? 'rotated' : ''}`} />
                </div>
              </button>
              
              <div className={`statutes-acc-collapse ${isUgOpen ? 'show' : ''}`}>
                <div className="statutes-docs-grid">
                  {ugDocs.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={`${doc.file}#toolbar=0`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="statutes-doc-item"
                    >
                      <div className="statutes-doc-left">
                        <div className="statutes-dept-badge">{doc.code}</div>
                        <div className="statutes-doc-details">
                          <h4 className="statutes-doc-title">{doc.title}</h4>
                          <span className="statutes-doc-sub">{doc.desc}</span>
                        </div>
                      </div>
                      <div className="statutes-doc-action">
                        <span className="action-label"><FaFilePdf className="pdf-icon" /> View PDF</span>
                        <FaArrowRight className="action-arrow" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* POSTGRADUATE ACCORDION */}
            <div className={`statutes-accordion-card ${isPgOpen ? 'open' : ''}`}>
              <button 
                type="button"
                className="statutes-acc-btn" 
                onClick={() => setIsPgOpen(!isPgOpen)}
                aria-expanded={isPgOpen}
              >
                <div className="statutes-acc-btn-left">
                  <span className="statutes-acc-index">02</span>
                  <div className="statutes-acc-title-wrap">
                    <h3 className="statutes-acc-heading">Postgraduate Regulations</h3>
                    <p className="statutes-acc-subtext">Curriculum & regulations for 4 M.E. disciplines</p>
                  </div>
                </div>
                <div className="statutes-acc-btn-right">
                  <span className="statutes-count-badge">4 Handbooks</span>
                  <FaChevronDown className={`statutes-chevron ${isPgOpen ? 'rotated' : ''}`} />
                </div>
              </button>

              <div className={`statutes-acc-collapse ${isPgOpen ? 'show' : ''}`}>
                <div className="statutes-docs-grid">
                  {pgDocs.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={`${doc.file}#toolbar=0`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="statutes-doc-item"
                    >
                      <div className="statutes-doc-left">
                        <div className="statutes-dept-badge pg-badge">{doc.code}</div>
                        <div className="statutes-doc-details">
                          <h4 className="statutes-doc-title">{doc.title}</h4>
                          <span className="statutes-doc-sub">{doc.desc}</span>
                        </div>
                      </div>
                      <div className="statutes-doc-action">
                        <span className="action-label"><FaFilePdf className="pdf-icon" /> View PDF</span>
                        <FaArrowRight className="action-arrow" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* PHD REGULATION ACCORDION */}
            <div className={`statutes-accordion-card ${isPhdOpen ? 'open' : ''}`}>
              <button 
                type="button"
                className="statutes-acc-btn" 
                onClick={() => setIsPhdOpen(!isPhdOpen)}
                aria-expanded={isPhdOpen}
              >
                <div className="statutes-acc-btn-left">
                  <span className="statutes-acc-index">03</span>
                  <div className="statutes-acc-title-wrap">
                    <h3 className="statutes-acc-heading">Ph.D. Research Regulations</h3>
                    <p className="statutes-acc-subtext">Doctoral research statutes and guidelines</p>
                  </div>
                </div>
                <div className="statutes-acc-btn-right">
                  <span className="statutes-count-badge">1 Handbook</span>
                  <FaChevronDown className={`statutes-chevron ${isPhdOpen ? 'rotated' : ''}`} />
                </div>
              </button>

              <div className={`statutes-acc-collapse ${isPhdOpen ? 'show' : ''}`}>
                <div className="statutes-docs-grid">
                  {phdDocs.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={`${doc.file}#toolbar=0`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="statutes-doc-item phd-doc-item"
                    >
                      <div className="statutes-doc-left">
                        <div className="statutes-dept-badge phd-badge">{doc.code}</div>
                        <div className="statutes-doc-details">
                          <h4 className="statutes-doc-title">{doc.title}</h4>
                          <span className="statutes-doc-sub">{doc.desc}</span>
                        </div>
                      </div>
                      <div className="statutes-doc-action">
                        <span className="action-label"><FaFilePdf className="pdf-icon" /> View PDF</span>
                        <FaArrowRight className="action-arrow" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Programmes Offered Section */}
        <section className="statutes-portal-card" id="programmes-offered">
          <div className="statutes-card-header">
            <div className="statutes-card-icon-box prog-icon-box">
              <FaUniversity className="statutes-card-icon" />
            </div>
            <div className="statutes-card-header-text">
              <h2 className="statutes-card-title">PROGRAMMES OFFERED</h2>
              <p className="statutes-card-desc">Explore department profiles, faculty, and facilities across NSCET</p>
            </div>
          </div>

          <div className="programmes-main-wrapper">
            {/* Undergraduate Block */}
            <div className="prog-block">
              <div className="prog-block-header">
                <span className="prog-level-tag">Undergraduate</span>
                <h3 className="prog-block-title">B.E. / B.Tech. Degrees</h3>
              </div>
              
              <div className="programmes-cards-grid">
                {ugProgrammes.map((prog, idx) => (
                  <Link key={idx} to={prog.path} className="programme-card">
                    <div className="prog-card-icon-wrap">
                      {prog.icon}
                    </div>
                    <div className="prog-card-content">
                      <div className="prog-card-code">{prog.name}</div>
                      <div className="prog-card-full">{prog.full}</div>
                    </div>
                    <FaArrowRight className="prog-card-arrow" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Postgraduate Block */}
            <div className="prog-block">
              <div className="prog-block-header">
                <span className="prog-level-tag pg-tag">Postgraduate</span>
                <h3 className="prog-block-title">M.E. Degrees</h3>
              </div>
              
              <div className="programmes-cards-grid pg-grid">
                {pgProgrammes.map((prog, idx) => (
                  <Link key={idx} to={prog.path} className="programme-card">
                    <div className="prog-card-icon-wrap pg-icon-wrap">
                      {prog.icon}
                    </div>
                    <div className="prog-card-content">
                      <div className="prog-card-code">{prog.name}</div>
                      <div className="prog-card-full">{prog.full}</div>
                    </div>
                    <FaArrowRight className="prog-card-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default StatutesLayout;

