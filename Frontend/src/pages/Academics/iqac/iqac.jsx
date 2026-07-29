import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserCheck, 
  FaFileDownload, 
  FaSearch, 
  FaAward, 
  FaCalendarCheck, 
  FaUserTie, 
  FaBuilding, 
  FaGraduationCap, 
  FaCheckCircle, 
  FaFlask,
  FaShieldAlt
} from 'react-icons/fa';
import './iqac.css';

const committeeSections = [
  {
    title: 'Chairperson',
    icon: <FaAward />,
    items: [
      { label: 'Dr. C. Mathalai Sundaram', detail: 'Principal' },
    ],
  },
  {
    title: 'Coordinator of IQAC',
    icon: <FaUserCheck />,
    items: [
      { label: 'Mr. R. Udhaya Kumar', detail: 'AP / CSE / Convenor' },
      { label: 'Dr. N. David Mathan', detail: 'ASP / CHE / Convenor' },
    ],
  },
  {
    title: 'Teachers to Represent All Levels',
    icon: <FaGraduationCap />,
    items: [
      { label: 'Mr. N. Nagarathinam', detail: 'HOD / SE' },
      { label: 'Dr. J. Mathalairaj', detail: 'HOD / CSE' },
      { label: 'Dr. B. Radha Krishnan', detail: 'HOD / MECH' },
      { label: 'Mr. A. VembathuRajesh', detail: 'HOD / MFE' },
      { label: 'Dr. E. Anantha Krishnan', detail: 'HOD / CIVIL' },
      { label: 'Dr. R. Athilingam', detail: 'HOD / EEE' },
      { label: 'Dr. T. Venishkumar', detail: 'HOD / ECE' },
      { label: 'Mr. L.S. Vignesh', detail: 'HOD / AD' },
      { label: 'Dr. M. Sathya', detail: 'VP / HOD / IT' },
      { label: 'Mr. C. Prathap', detail: 'HOD / S&H' },
      { label: 'Dr. C. Chithra', detail: 'Prof. Coordinator / S&H' },
    ],
  },
  {
    title: 'Members from the Management',
    icon: <FaBuilding />,
    items: [
      { label: 'A.S.S.S. Soma Sundaram B.E.', detail: 'Secretary' },
      { label: 'Mr. T. Subramani, BCA., MBA.', detail: 'Joint Secretary' },
    ],
  },
  {
    title: 'Senior Administrative Officer',
    icon: <FaUserTie />,
    items: [
      { label: 'Dr. N. Mathavan', detail: 'VP, HOD / Admin' },
    ],
  },
  {
    title: 'Nominee from Local Society',
    icon: <FaShieldAlt />,
    items: [
      { label: 'Mr. A. S. G. Dharmarajan', detail: 'B.A' },
    ],
  },
  {
    title: 'Nominee from Alumni',
    icon: <FaGraduationCap />,
    items: [
      { label: 'Mr. A. Vennimalai Rajan', detail: 'AP / Mech' },
      { label: 'Ms. M. Kanimozhi', detail: 'AP / Civil' },
    ],
  },
  {
    title: 'Nominee from Industrialists',
    icon: <FaFlask />,
    items: [
      { label: 'Mr. Dhana Vignesh', detail: 'Arcolab, Bangalore, Process Lead & Talent Acquisition' },
    ],
  },
  {
    title: 'Nominee from Employer',
    icon: <FaBuilding />,
    items: [
      { label: 'Mr. T. Lakshmi Chandrakanth', detail: 'Founder, Systima NX' },
    ],
  },
];

const meetingRecords = [
  { label: '2020–2021', color: 'blue' },
  { label: '2021–2022', color: 'green' },
  { label: '2022–2023', color: 'orange' },
  { label: '2023–2024', color: 'purple' },
  { label: '2024–2025', color: 'teal' },
];

const getInitials = (name) => {
  const cleanName = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|A\.S\.S\.S\.)\s+/i, '');
  const parts = cleanName.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0] ? parts[0][0].toUpperCase() : 'IQ';
};

const IQAC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Flatten committee members for search
  const allMembers = committeeSections.flatMap(section => 
    section.items.map(item => ({ ...item, category: section.title }))
  );

  const filteredMembers = allMembers.filter(m => 
    m.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.detail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="iqac-page">
      <div className="iqac-container">

        {/* R&D CELL STYLE HEADER SHOWCASE */}
        <motion.div 
          className="iqac-header-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="iqac-badge">Internal Quality Assurance Cell</span>
          <h1 className="iqac-title">IQAC Committee & Quality Initiatives</h1>
          <p className="iqac-lead">
            Established on 2nd July 2017 to develop a conscious, consistent, and catalytic system for continuous improvement in academic, administrative, and institutional performance in accordance with NAAC guidelines.
          </p>
        </motion.div>

        {/* EXECUTIVE SUMMARY CARD (R&D CELL STYLE) */}
        <motion.div 
          className="iqac-exec-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="exec-badge-wrap">
            <span className="exec-badge">
              <FaAward /> NAAC Quality Benchmarks
            </span>
            <span className="exec-badge gold">
              <FaCalendarCheck /> Established 2nd July 2017
            </span>
          </div>

          <div className="exec-grid">
            <div className="exec-main-text">
              <h3>Catalytic Institutional Enhancement</h3>
              <p>
                The primary objective of IQAC is to promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best academic practices.
              </p>
            </div>
            <div className="exec-principal-card">
              <div className="principal-avatar">
                <FaUserCheck />
              </div>
              <div className="principal-info">
                <h4>Dr. C. Mathalai Sundaram</h4>
                <p className="p-deg">Principal & IQAC Chairperson</p>
                <p className="p-role">NSCET, Vadapudupatti, Theni</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SEARCH CONTROLS */}
        <div className="iqac-search-wrapper">
          <FaSearch className="iqac-search-icon" />
          <input 
            type="text" 
            placeholder="Search committee member, designation, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="iqac-search-input"
          />
        </div>

        {/* COMMITTEE SECTIONS (R&D STYLE SHOWCASE) */}
        {searchTerm ? (
          /* SEARCH RESULTS VIEW */
          <div className="iqac-search-results">
            <h2 className="iqac-section-title">Search Results ({filteredMembers.length})</h2>
            <div className="iqac-member-grid">
              {filteredMembers.map((member, idx) => (
                <div key={idx} className="iqac-member-card">
                  <div className="iqac-avatar-circle">{getInitials(member.label)}</div>
                  <div className="iqac-member-info">
                    <h4>{member.label}</h4>
                    <span className="iqac-detail-badge">{member.detail}</span>
                    <span className="iqac-category-tag">{member.category}</span>
                  </div>
                  <FaCheckCircle className="iqac-check-icon" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* CATEGORIZED COMMITTEE SECTIONS */
          <div className="iqac-committee-grid">
            {committeeSections.map((section, sIdx) => (
              <motion.div 
                key={section.title}
                className="iqac-category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.05 }}
              >
                <div className="category-header">
                  <div className="category-icon-bg">{section.icon}</div>
                  <div>
                    <h3>{section.title}</h3>
                    <span className="count-pill">{section.items.length} Member{section.items.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="category-members-list">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="category-member-item">
                      <div className="iqac-avatar-circle sm">{getInitials(item.label)}</div>
                      <div className="item-text">
                        <strong>{item.label}</strong>
                        <span>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* IQAC MEETING RECORDS SECTION */}
        <motion.div 
          className="iqac-records-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="records-header">
            <h2>IQAC Annual Meeting Records</h2>
            <p>Access official minutes, action taken reports, and quality audit documentation by academic year.</p>
          </div>

          <div className="iqac-records-grid">
            {meetingRecords.map((record) => (
              <motion.button 
                key={record.label} 
                type="button" 
                className={`iqac-record-card iqac-record-${record.color}`}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="record-card-icon">
                  <FaFileDownload />
                </div>
                <div className="record-card-info">
                  <span className="record-year">{record.label}</span>
                  <span className="record-action">View / Download Report</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default IQAC;
