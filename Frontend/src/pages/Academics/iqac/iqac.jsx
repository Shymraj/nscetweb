import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserCheck, 
  FaFilePdf, 
  FaSearch, 
  FaAward, 
  FaCalendarCheck, 
  FaUserTie, 
  FaBuilding, 
  FaGraduationCap, 
  FaCheckCircle, 
  FaFlask,
  FaShieldAlt,
  FaClipboardCheck
} from 'react-icons/fa';
import './iqac.css';

import pdf2021 from './images/2021-22.pdf';
import pdf2022 from './images/2022-23.pdf';
import pdf2023 from './images/2023-24.pdf';
import pdf2025 from './images/2025-26.pdf';
import udhayakumarImg from './images/udhayakumar.jpg';
import davidmathanImg from './images/davidmathan.jpg';

const committeeSections = [
  {
    title: 'Senior Faculty Members',
    icon: <FaUserTie />,
    items: [
      { label: 'Dr. C. Chithra', detail: 'Prof. Coordinator / S&H' },
    ],
  },
  {
    title: 'IQAC Coordinators',
    icon: <FaClipboardCheck />,
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
  { label: '2021-2022', color: 'blue', link: pdf2021 },
  { label: '2022-2023', color: 'green', link: pdf2022 },
  { label: '2023-2024', color: 'orange', link: pdf2023 },
  { label: '2024-2025', color: 'purple', link: null },
  { label: '2025-2026', color: 'teal', link: pdf2025 },
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

        {/* EXECUTIVE SUMMARY PLAIN */}
        <motion.div 
          className="iqac-exec-plain"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="iqac-exec-plain-grid">
            <div className="iqac-exec-plain-left">
              <div className="exec-badge-wrap">
                <span className="iqac-exec-badge-plain">
                  <FaAward /> NAAC Quality Benchmarks
                </span>
                <span className="iqac-exec-badge-plain gold">
                  <FaCalendarCheck /> Established 2nd July 2017
                </span>
              </div>
              <h3 className="iqac-exec-plain-heading">Catalytic Institutional Enhancement</h3>
              <p className="iqac-exec-plain-desc">
                The primary objective of IQAC is to promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best academic practices.
              </p>
            </div>
            <div className="iqac-exec-plain-right">
              <div className="iqac-principal-strip">
                <div className="iqac-principal-avatar">
                  <img src={udhayakumarImg} alt="Mr. R. Udhaya Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }} />
                </div>
                <div className="iqac-principal-info">
                  <h4>Mr. R. Udhaya Kumar</h4>
                  <p className="p-deg">Assistant Professor M.E (CSE), MBA (ITM), (Ph.D)</p>
                  <p className="p-role">NSCET, Vadapudupatti, Theni</p>
                </div>
              </div>

              {/* Box 2 - IQAC Coordinator */}
              <div className="iqac-principal-strip iqac-coordinator-strip">
                <div className="iqac-principal-avatar iqac-coordinator-avatar">
                  <img src={davidmathanImg} alt="Dr. N. David Mathan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }} />
                </div>
                <div className="iqac-principal-info">
                  <h4>Dr. N. David Mathan</h4>
                  <p className="p-deg">Professor M.Sc., Ph.D.</p>
                  <p className="p-role"></p>
                  <p className="p-loc">NSCET, Vadapudupatti, Theni</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COMMITTEE SECTIONS (R&D STYLE SHOWCASE) */}
          <div className="iqac-committee-grid">
            {committeeSections.map((section, sIdx) => {
              const isWideCard = ['Senior Faculty Members', 'IQAC Coordinators', 'Teachers to Represent All Levels'].includes(section.title);
              return (
              <motion.div 
                key={section.title}
                className={`iqac-category-card ${isWideCard ? 'wide-category-card' : ''}`}
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
            )})}
          </div>

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
              <motion.a 
                key={record.label} 
                href={record.link ? `${record.link}#toolbar=0` : '#'}
                target={record.link ? '_blank' : '_self'}
                rel={record.link ? 'noopener noreferrer' : ''}
                className={`iqac-record-card iqac-record-${record.color}`}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  if (!record.link) {
                    e.preventDefault();
                    alert('PDF for this academic year is not available yet.');
                  }
                }}
              >
                <div className="record-card-icon">
                  <FaFilePdf />
                </div>
                <div className="record-card-info">
                  <span className="record-year">{record.label}</span>
                  <span className="record-action">{record.link ? 'View Report' : 'Coming Soon'}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default IQAC;
