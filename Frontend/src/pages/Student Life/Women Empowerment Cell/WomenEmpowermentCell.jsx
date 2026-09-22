import React from 'react';
import './WomenEmpowermentCell.css';
import { FaFilePdf, FaCheckCircle } from 'react-icons/fa';

import handBook from './docs/HAND BOOK.pdf';
import poshAct from './docs/POSH ACT 2013.pdf';
import bannerImg from './banner/WEC.png';

const WomenEmpowermentCell = () => {
  return (
    <div className="common-page-wrapper wec-page">
      
      {/* Banner Placeholder Div */}
      <div className="common-hero-banner">
        <img 
          src={bannerImg} 
          alt="Women Empowerment Cell Banner" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

      <div className="wec-container">
        
        {/* Header / Intro */}
        <section className="intro-section">
          <div className="section-header">
            <h3>About</h3>
            <div className="header-line"></div>
          </div>
          <p className="intro-text">
            The Women Empowerment Cell (WEC) at Nadar Saraswathi College of Engineering & Technology (NSCET) is dedicated to empowering female students and faculty members. It aims to create an environment where women can thrive academically and professionally, while also ensuring their safety and well-being. WEC actively promotes gender equality and provides a platform to address women's issues and rights.
          </p>
        </section>

        {/* Duties & Responsibilities Section */}
        <section className="duties-section">
          <div className="section-header">
            <h3>Duties & Responsibilities</h3>
            <div className="header-line"></div>
          </div>
          <ul className="duties-list">
            <li><FaCheckCircle className="duty-icon"/> <span>Maintain the discipline of female students on college premises</span></li>
            <li><FaCheckCircle className="duty-icon"/> <span>Conduct seminars, training programs, and guest lectures for female faculty and students</span></li>
          </ul>
        </section>

        {/* Members Section */}
        <section className="members-section">
          <div className="section-header">
            <h3>Committee Members</h3>
            <div className="header-line"></div>
          </div>
          <div className="members-grid">
            
            {/* Coordinator Card */}
            <div className="member-card coordinator-card">
              <div className="member-info">
                <h4>Dr. M. Sathya</h4>
                <p>Coordinator</p>
                <span>VP, HOD/IT</span>
              </div>
            </div>

            {/* Member Cards */}
            <div className="member-card">
              <div className="member-info">
                <h4>Ms. M. Mahalakshmi</h4>
                <p>Member</p>
                <span>AP/MAT</span>
              </div>
            </div>

            <div className="member-card">
              <div className="member-info">
                <h4>Ms. T. Tamil Selvi</h4>
                <p>Member</p>
                <span>AP/ECE</span>
              </div>
            </div>

            <div className="member-card">
              <div className="member-info">
                <h4>Dr. C. Chithra</h4>
                <p>Member</p>
                <span>AP - Coordinator/S&H</span>
              </div>
            </div>

            <div className="member-card">
              <div className="member-info">
                <h4>Ms. A. Deepika</h4>
                <p>Member</p>
                <span>AP/CSE</span>
              </div>
            </div>

            <div className="member-card">
              <div className="member-info">
                <h4>Mrs. S. Gayathri</h4>
                <p>Member</p>
                <span>AP/Civil</span>
              </div>
            </div>

          </div>
        </section>

        {/* Documents Section */}
        <section className="documents-section">
          <div className="section-header">
            <h3>Important Documents</h3>
            <div className="header-line"></div>
          </div>
          <div className="docs-grid">
            
            {/* WEC Hand Book */}
            <div className="doc-card">
              <div className="doc-header">
                <FaFilePdf className="doc-icon" />
                <h4>WEC Hand Book</h4>
              </div>
              <div className="pdf-viewer">
                {/* Adding #toolbar=0&navpanes=0 disables download/print buttons in modern browsers while keeping scroll */}
                <iframe 
                  src={`${handBook}#toolbar=0&navpanes=0`} 
                  title="WEC Hand Book"
                  className="pdf-iframe"
                  onContextMenu={(e) => e.preventDefault()}
                ></iframe>
                {/* Overlay to block right click on the iframe border area if needed */}
                <div className="pdf-overlay"></div>
              </div>
            </div>

            {/* POSH ACT 2013 */}
            <div className="doc-card">
              <div className="doc-header">
                <FaFilePdf className="doc-icon" />
                <h4>POSH ACT 2013</h4>
              </div>
              <div className="pdf-viewer">
                <iframe 
                  src={`${poshAct}#toolbar=0&navpanes=0`} 
                  title="POSH ACT 2013"
                  className="pdf-iframe"
                  onContextMenu={(e) => e.preventDefault()}
                ></iframe>
                <div className="pdf-overlay"></div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default WomenEmpowermentCell;
