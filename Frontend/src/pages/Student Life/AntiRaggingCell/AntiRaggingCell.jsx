import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaShieldAlt, FaBullhorn, FaUsers, FaGavel, FaPhone, FaExclamationTriangle, FaCheckCircle, FaFileAlt, FaExternalLinkAlt, FaHandPaper, FaEye } from 'react-icons/fa';
import './AntiRaggingCell.css';
import minutesPdf from './images/Anti Ragging Committee.pdf';

const committeeMembers = [
  { sno: 1, name: 'Dr. C. Mathalai Sundaram', designation: 'Principal', position: 'Chair Person' },
  { sno: 2, name: 'Dr. M. Sathya', designation: 'Vice Principal / Placement Officer', position: 'Member' },
  { sno: 3, name: 'Dr. N. Mathavan', designation: 'Prof / ECE', position: 'Member / Convener' },
  { sno: 4, name: 'Mr. M. Kannan', designation: 'Police Inspector', position: 'Member' },
  { sno: 5, name: 'Mr. S. Satheesh', designation: 'Tahsildar', position: 'Member' },
  { sno: 6, name: 'Mr. P. Muthupandi', designation: 'NGO Representative', position: 'Member' },
  { sno: 7, name: 'Mr. N. Vignesh', designation: 'Local Media Representative', position: 'Member' },
  { sno: 8, name: 'Mr. A. Karuppasamy', designation: 'Student Parent', position: 'Member' },
  { sno: 9, name: 'Mrs. Palasai Shanthi', designation: 'Student Parent', position: 'Member' },
  { sno: 10, name: 'Dr. C. Chithra', designation: 'Prof-Coordinator / S&H', position: 'Member' },
  { sno: 11, name: 'Mr. M. Santhosh Pandian', designation: 'Non-Teaching', position: 'Member' },
  { sno: 12, name: 'Mr. G. Rajeshwaran', designation: 'III Year Student', position: 'Member' },
  { sno: 13, name: 'Mrs. R. Yavanashree', designation: 'III Year Student', position: 'Member' },
];

const objectives = [
  'Create awareness among students about the importance of a "Ragging Free Campus"',
  'Prohibit any conduct that teases, treats, or handles freshers or any student with rudeness, causing annoyance, hardship, or psychological harm',
  'Take action against those found guilty of ragging or abetting ragging',
];

const mechanisms = [
  'Disseminate anti-ragging policy through admission advertisements and prospectus',
  'Introduce the policy and warnings to seniors through holistic education classes',
  'Conduct regular interaction and counseling to detect early signs of ragging',
  'Perform surprise inspections in hostels, canteens, and other areas',
  'Install CCTV cameras at strategic locations',
  'Conduct orientation and mentoring sessions for freshers',
  'Display updated contact details of Anti-Ragging Committee nodal officers on the college website',
  'Promote the National Anti-Ragging Helpline: 1800-180-5522 (24×7 Toll Free)',
];

const instructions = [
  'Do not comply with any demands that make you feel uncomfortable or unsafe. Ragging is abuse — you have the right to say No.',
  'Stay calm and avoid emotional reactions that may worsen the situation.',
  'If you feel safe, try speaking to the senior(s) and explain how their behaviour is affecting you.',
  'If you do not feel safe or talking does not help, immediately report the incident to the Anti-Ragging Committee (ARC).',
];

const AntiRaggingCell = () => {
  return (
    <div className="antiraggingcell-page">
      <PageBanner
        title="Anti-Ragging Cell"
        subtitle="Ensuring a Safe & Ragging-Free Campus"
        hideBreadcrumb={false}
      />

      <div className="arc-container">
        {/* About the Cell */}
        <section className="arc-about-section">
          <div className="arc-section-header">
            <FaShieldAlt className="arc-header-icon" />
            <h3>About the Cell</h3>
            <div className="arc-header-line"></div>
          </div>
          <div className="arc-about-content">
            <p>
              NSCET maintains a <strong>Ragging-Free Campus</strong>. The Anti-Ragging Cell works to prevent, prohibit, and address any form of ragging.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={minutesPdf} target="_blank" rel="noopener noreferrer" className="arc-btn-primary" style={{ display: 'inline-flex', padding: '0.8rem 1.8rem', fontSize: '1rem', background: '#3b82f6' }}>
                <FaEye /> View Minutes of Meeting
              </a>
            </div>
          </div>
        </section>

        {/* Main Objectives */}
        <section className="arc-objectives-section">
          <div className="arc-section-header">
            <FaBullhorn className="arc-header-icon" />
            <h3>Main Objectives</h3>
            <div className="arc-header-line"></div>
          </div>
          <div className="arc-objectives-grid">
            {objectives.map((obj, index) => (
              <div key={index} className="arc-objective-card">
                <div className="arc-objective-number">{index + 1}</div>
                <p>{obj}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Anti-Ragging Mechanism */}
        <section className="arc-mechanism-section">
          <div className="arc-section-header">
            <FaGavel className="arc-header-icon" />
            <h3>Anti-Ragging Mechanism</h3>
            <div className="arc-header-line"></div>
          </div>
          <div className="arc-mechanism-list">
            {mechanisms.map((item, index) => (
              <div key={index} className="arc-mechanism-item">
                <FaCheckCircle className="arc-check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Anti-Ragging Committee Table */}
        <section className="arc-committee-section">
          <div className="arc-section-header">
            <FaUsers className="arc-header-icon" />
            <h3>Anti-Ragging Committee</h3>
            <div className="arc-header-line"></div>
          </div>
          <div className="arc-table-wrapper">
            <table className="arc-committee-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member) => (
                  <tr key={member.sno} className={member.position === 'Chair Person' ? 'arc-chair-row' : ''}>
                    <td>{member.sno}</td>
                    <td>{member.name}</td>
                    <td>{member.designation}</td>
                    <td>
                      <span className={`arc-position-badge ${member.position === 'Chair Person' ? 'arc-badge-chair' : member.position === 'Member / Convener' ? 'arc-badge-convener' : 'arc-badge-member'}`}>
                        {member.position}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Procedure for Lodging Complaint */}
        <section className="arc-procedure-section">
          <div className="arc-section-header">
            <FaFileAlt className="arc-header-icon" />
            <h3>Procedure for Lodging Complaint</h3>
            <div className="arc-header-line"></div>
          </div>
          <div className="arc-procedure-content">
            <div className="arc-procedure-card">
              <p>Students can express grievances in writing or via email to the committee coordinator without hesitation.</p>
            </div>
            <div className="arc-procedure-card">
              <p>The Grievance Cell will act on cases submitted with required documents and ensure resolution within the stipulated time frame.</p>
            </div>
          </div>
        </section>

        {/* Instructions to Students */}
        <section className="arc-instructions-section">
          <div className="arc-section-header">
            <FaHandPaper className="arc-header-icon" />
            <h3>Instructions to Students</h3>
            <div className="arc-header-line"></div>
          </div>
          <ul className="arc-instructions-list">
            {instructions.map((item, index) => (
              <li key={index}>
                <FaExclamationTriangle className="arc-instruction-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* File a Complaint */}
        <section className="arc-complaint-section">
          <div className="arc-complaint-card">
            <div className="arc-complaint-header">
              <FaPhone className="arc-complaint-icon" />
              <h3>File a Complaint</h3>
            </div>
            <p className="arc-complaint-text">If you are a victim of ragging or witness ragging, do not hesitate — report immediately.</p>
            <div className="arc-complaint-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTa66gsDl3Fm6blkEUEQZD2TssDdc_5yPL3YLQOEan3NQgQw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="arc-complaint-btn arc-btn-primary"
              >
                <FaExternalLinkAlt /> File a Complaint Online
              </a>
              <div className="arc-helpline-box">
                <FaPhone className="arc-helpline-icon" />
                <div>
                  <span className="arc-helpline-label">National Anti-Ragging Helpline</span>
                  <span className="arc-helpline-number">1800-180-5522</span>
                  <span className="arc-helpline-info">24×7 Toll Free</span>
                </div>
              </div>
            </div>
          </div>
        </section>
       </div>
    </div>
  );
};

export default AntiRaggingCell;
