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
  FaChevronUp
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

const StatutesLayout = () => {
  const [isUgOpen, setIsUgOpen] = useState(false);
  const [isPgOpen, setIsPgOpen] = useState(false);

  // Ensure the page scrolls to top on load since it's a long scroll page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="statutes-page-wrapper">
      {/* 1. Page Header */}
      <div className="statutes-portal-header fade-up">
        <div className="portal-icon-wrapper">
          <FaBalanceScale className="portal-icon" />
        </div>
        <h1 className="portal-title">STATUTES / ORDINANCES<br/>PERTAINING</h1>
        <div className="portal-divider"></div>
        <p className="portal-subtitle">
          Access academic regulations, programmes and institutional documents governing academic standards and student progression at NSCET.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="statutes-portal-content">
        
        {/* 2. Academic Regulations */}
        <section className="portal-section fade-up delay-1">
          <div className="statutes-section-header">
            <div className="statutes-section-icon-box">
              <FaScroll className="statutes-section-icon" />
            </div>
            <div className="statutes-section-header-text">
              <h2 className="statutes-section-title">ACADEMIC REGULATIONS</h2>
              <p className="statutes-section-desc">Official regulations and academic guidelines</p>
            </div>
          </div>

          <div className="programmes-container" style={{ marginBottom: '40px', gap: '20px' }}>
            
            {/* UNDERGRADUATE ACCORDION */}
            <div className={`programme-group accordion-group ${isUgOpen ? 'open' : ''}`}>
              <div className="accordion-header" onClick={() => setIsUgOpen(!isUgOpen)}>
                <div className="accordion-title-box">
                  <span className="accordion-number">01</span>
                  <div>
                    <h3 className="group-title" style={{margin:0}}>UNDERGRADUATE REGULATIONS</h3>
                    <p className="doc-meta">View regulation guidelines for all 7 UG departments</p>
                  </div>
                </div>
                {isUgOpen ? <FaChevronUp className="accordion-icon" /> : <FaChevronDown className="accordion-icon" />}
              </div>
              
              <div className="accordion-content">
                <div className="document-list">
                  <a href={ug_aids} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>AI&DS</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.Tech. AI & DS</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={ug_cse} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>CSE</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.E. CSE</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={ug_ece} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>ECE</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.E. ECE</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={ug_eee} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>EEE</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.E. EEE</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={ug_civil} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>CIVIL</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.E. Civil Engineering</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={ug_it} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>IT</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.Tech. IT</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={ug_mech} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>MECH</span>
                      <div className="doc-info">
                        <h3 className="doc-title">B.E. Mechanical Engineering</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* POSTGRADUATE ACCORDION */}
            <div className={`programme-group accordion-group ${isPgOpen ? 'open' : ''}`}>
              <div className="accordion-header" onClick={() => setIsPgOpen(!isPgOpen)}>
                <div className="accordion-title-box">
                  <span className="accordion-number">02</span>
                  <div>
                    <h3 className="group-title" style={{margin:0}}>POSTGRADUATE REGULATIONS</h3>
                    <p className="doc-meta">View regulation guidelines for PG departments</p>
                  </div>
                </div>
                {isPgOpen ? <FaChevronUp className="accordion-icon" /> : <FaChevronDown className="accordion-icon" />}
              </div>

              <div className="accordion-content">
                <div className="document-list">
                  <a href={pg_structural} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>STR</span>
                      <div className="doc-info">
                        <h3 className="doc-title">M.E. Structural Engineering</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>

                  <a href={pg_mfg} target="_blank" rel="noopener noreferrer" className="document-row">
                    <div className="doc-left">
                      <span className="doc-number" style={{fontSize: '1.5rem'}}>MFG</span>
                      <div className="doc-info">
                        <h3 className="doc-title">M.E. Manufacturing Engineering</h3>
                        <p className="doc-meta">Regulation Guidelines</p>
                      </div>
                    </div>
                    <div className="doc-right">
                      <span className="doc-action">VIEW</span>
                      <FaArrowRight className="doc-arrow" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* PHD REGULATION (Static Row) */}
            <a href="./IMAGE/Ph.D-Regulation-2025.pdf" target="_blank" rel="noopener noreferrer" className="document-row phd-row">
              <div className="doc-left">
                <span className="doc-number">03</span>
                <div className="doc-info">
                  <h3 className="doc-title">Ph.D Regulations</h3>
                  <p className="doc-meta">Regulations and guidelines for doctoral studies</p>
                </div>
              </div>
              <div className="doc-right">
                <span className="doc-action">VIEW</span>
                <FaArrowRight className="doc-arrow" />
              </div>
            </a>

          </div>
        </section>

        {/* 3. Programmes Offered */}
        <section className="portal-section fade-up delay-2">
          <div className="statutes-section-header">
            <div className="statutes-section-icon-box">
              <FaUniversity className="statutes-section-icon" />
            </div>
            <div className="statutes-section-header-text">
              <h2 className="statutes-section-title">PROGRAMMES OFFERED</h2>
              <p className="statutes-section-desc">Explore undergraduate and postgraduate programmes at NSCET</p>
            </div>
          </div>

          <div className="programmes-container">
            {/* Undergraduate */}
            <div className="programme-group">
              <h3 className="group-title">UNDERGRADUATE</h3>
              <div className="group-divider"></div>
              
              <div className="chip-grid">
                <Link to="/departments/aids" className="prog-chip">
                  <FaBrain className="chip-icon"/> <span>AI & DS</span>
                </Link>
                <Link to="/departments/cse" className="prog-chip">
                  <FaCode className="chip-icon"/> <span>CSE</span>
                </Link>
                <Link to="/departments/electronics" className="prog-chip">
                  <FaMicrochip className="chip-icon"/> <span>ECE</span>
                </Link>
                <Link to="/departments/electrical" className="prog-chip">
                  <FaBolt className="chip-icon"/> <span>EEE</span>
                </Link>
                <Link to="/departments/civil" className="prog-chip">
                  <FaBuilding className="chip-icon"/> <span>CIVIL</span>
                </Link>
                <Link to="/departments/it" className="prog-chip">
                  <FaLaptopCode className="chip-icon"/> <span>IT</span>
                </Link>
                <Link to="/departments/mechanical" className="prog-chip">
                  <FaCog className="chip-icon"/> <span>MECH</span>
                </Link>
              </div>
            </div>

            {/* Postgraduate */}
            <div className="programme-group">
              <h3 className="group-title">POSTGRADUATE</h3>
              <div className="group-divider"></div>
              
              <div className="chip-grid">
                <Link to="/departments/me-structural" className="prog-chip">
                  <FaBuilding className="chip-icon"/> <span>STRUCTURAL ENGINEERING</span>
                </Link>
                <Link to="/departments/me-manufacturing" className="prog-chip">
                  <FaCog className="chip-icon"/> <span>MANUFACTURING ENGINEERING</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StatutesLayout;
