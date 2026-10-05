import React from 'react';
import './WomenEmpowermentCell.css';
import { FaFilePdf, FaCheckCircle, FaUsers, FaInfoCircle, FaTasks, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

import handBook from './docs/HAND BOOK.pdf';
import poshAct from './docs/POSH ACT 2013.pdf';
import bannerImg from './banner/WEC.png';

const wecMembers = [
  { sno: 1, name: 'Dr. M. Sathya', designation: 'VP, HOD/IT', role: 'Coordinator' },
  { sno: 2, name: 'Ms. M. Mahalakshmi', designation: 'AP/MAT', role: 'Member' },
  { sno: 3, name: 'Ms. T. Tamil Selvi', designation: 'AP/ECE', role: 'Member' },
  { sno: 4, name: 'Dr. C. Chithra', designation: 'AP - Coordinator/S&H', role: 'Member' },
  { sno: 5, name: 'Ms. A. Deepika', designation: 'AP/CSE', role: 'Member' },
  { sno: 6, name: 'Mrs. S. Gayathri', designation: 'AP/Civil', role: 'Member' },
];

const wecDuties = [
  'Maintain the discipline of female students on college premises.',
  'Conduct seminars, training programs, and guest lectures for female faculty and students.',
  'Provide guidance, counseling, and a safe grievance redressal platform for women on campus.',
  'Promote gender equity, career growth, leadership skills, and legal rights awareness among female students.'
];

const WomenEmpowermentCell = () => {
  return (
    <div className="common-page-wrapper wec-page">
      
      {/* Banner Div */}
      <div className="common-hero-banner">
        <img 
          src={bannerImg} 
          alt="Women Empowerment Cell Banner" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>

      <div className="wec-container">
        
        {/* Header / Intro */}
        <section className="wec-intro-section">
          <div className="wec-section-header">
            <div className="wec-header-icon-wrap gradient-1">
              <FaInfoCircle />
            </div>
            <div>
              <h3>About the Cell</h3>
              <div className="wec-header-line"></div>
            </div>
          </div>
          <div className="wec-intro-card">
            <div className="wec-intro-accent"></div>
            <p className="wec-intro-text">
              The Women Empowerment Cell (WEC) at Nadar Saraswathi College of Engineering & Technology (NSCET) is dedicated to empowering female students and faculty members. It aims to create an environment where women can thrive academically and professionally, while also ensuring their safety and well-being. WEC actively promotes gender equality and provides a platform to address women's issues and rights.
            </p>
          </div>
        </section>

        {/* Committee Members Section */}
        <section className="wec-members-section">
          <div className="wec-section-header">
            <div className="wec-header-icon-wrap gradient-2">
              <FaUsers />
            </div>
            <div>
              <h3>Committee Members</h3>
              <div className="wec-header-line"></div>
            </div>
          </div>
          <div className="wec-table-wrapper">
            <table className="wec-members-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {wecMembers.map((member) => (
                  <tr key={member.sno} className={member.role === 'Coordinator' ? 'wec-coordinator-row' : ''}>
                    <td>{member.sno}</td>
                    <td><strong>{member.name}</strong></td>
                    <td>{member.designation}</td>
                    <td>
                      <span className={`wec-role-badge ${member.role === 'Coordinator' ? 'coordinator' : 'member'}`}>
                        {member.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Duties & Responsibilities Section */}
        <section className="wec-duties-section">
          <div className="wec-section-header">
            <div className="wec-header-icon-wrap gradient-3">
              <FaTasks />
            </div>
            <div>
              <h3>Duties & Responsibilities</h3>
              <div className="wec-header-line"></div>
            </div>
          </div>
          <div className="wec-duties-grid">
            {wecDuties.map((duty, idx) => (
              <div key={idx} className="wec-duty-card">
                <FaCheckCircle className="wec-duty-icon" />
                <p>{duty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section className="wec-documents-section">
          <div className="wec-section-header">
            <div className="wec-header-icon-wrap gradient-4">
              <FaFilePdf />
            </div>
            <div>
              <h3>Important Documents</h3>
              <div className="wec-header-line"></div>
            </div>
          </div>
          <div className="wec-docs-grid">
            
            {/* WEC Hand Book */}
            <div className="wec-doc-card">
              <div className="wec-doc-header">
                <div className="wec-doc-icon-wrap">
                  <FaFilePdf />
                </div>
                <div>
                  <h4>WEC Hand Book</h4>
                  <p>Comprehensive guidelines & policies</p>
                </div>
              </div>
              <div className="wec-pdf-viewer">
                <iframe 
                  src={`${handBook}#toolbar=0&navpanes=0`} 
                  title="WEC Hand Book"
                  className="wec-pdf-iframe"
                  onContextMenu={(e) => e.preventDefault()}
                ></iframe>
                <div className="wec-pdf-overlay"></div>
              </div>
              <a href={handBook} target="_blank" rel="noopener noreferrer" className="wec-doc-btn">
                <FaEye /> <span>Open Full Document</span>
              </a>
            </div>

            {/* POSH ACT 2013 */}
            <div className="wec-doc-card">
              <div className="wec-doc-header">
                <div className="wec-doc-icon-wrap">
                  <FaFilePdf />
                </div>
                <div>
                  <h4>POSH ACT 2013</h4>
                  <p>Prevention of sexual harassment act</p>
                </div>
              </div>
              <div className="wec-pdf-viewer">
                <iframe 
                  src={`${poshAct}#toolbar=0&navpanes=0`} 
                  title="POSH ACT 2013"
                  className="wec-pdf-iframe"
                  onContextMenu={(e) => e.preventDefault()}
                ></iframe>
                <div className="wec-pdf-overlay"></div>
              </div>
              <a href={poshAct} target="_blank" rel="noopener noreferrer" className="wec-doc-btn">
                <FaEye /> <span>Open Full Document</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default WomenEmpowermentCell;
