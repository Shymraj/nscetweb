import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaFlask,
  FaBuilding,
  FaUserGraduate,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
  FaUserTie,
  FaAward,
  FaCalendarAlt,
  FaHandshake,
  FaBook,
  FaDesktop,
  FaLaptop,
  FaChevronDown,
  FaChevronUp,
  FaFileAlt
} from 'react-icons/fa';

const sectionsData = [
  {
    id: 'curricular',
    num: '01',
    title: 'Curricular Aspects',
    icon: <FaBookOpen className="sec-icon" />,
    color: '#1e40af',
    summary: 'Undergraduate & Postgraduate academic programs, Value Added Courses and 4-tier stakeholder feedback system.',
    details: [
      {
        title: 'Courses Offered',
        type: 'grid',
        items: [
          { label: 'Undergraduate Programmes (UG)', value: '07' },
          { label: 'Postgraduate Programmes (PG)', value: '04' }
        ]
      },
      {
        title: 'Academic Calendar',
        type: 'text',
        content: 'The academic calendar was prepared and implemented as per IQAC guidelines for both odd and even semesters.'
      },
      {
        title: 'Value Added Courses',
        type: 'grid',
        items: [
          { label: 'Total Courses Conducted', value: '10' },
          { label: 'Students Benefited', value: '596' }
        ]
      },
      {
        title: 'Stakeholder Feedback System',
        type: 'list',
        content: 'Feedback was systematically collected from Students, Teachers, Parents and Employers. The collected feedback was analyzed and appropriate actions were implemented.'
      }
    ]
  },
  {
    id: 'teaching',
    num: '02',
    title: 'Teaching, Learning and Evaluation',
    icon: <FaChalkboardTeacher className="sec-icon" />,
    color: '#0284c7',
    summary: 'Sanctioned strength, admissions, outcome-based education (OBE) and end-semester pass percentage of 94.79%.',
    details: [
      {
        title: 'Admissions Overview',
        type: 'grid',
        items: [
          { label: 'Sanctioned Strength', value: '387' },
          { label: 'Students Admitted', value: '224' },
          { label: 'Admission Percentage', value: '57.88%' }
        ]
      },
      {
        title: 'Faculty Details',
        type: 'grid',
        items: [
          { label: 'Student–Teacher Ratio', value: '10.3 : 1' },
          { label: 'Full-Time Faculty Members', value: '81' },
          { label: 'NET / SET / SLET / Ph.D Qualified Faculty', value: '16' }
        ]
      },
      {
        title: 'Student-Centric Learning Approaches',
        type: 'pills',
        pills: ['Field Visits', 'Industrial Visits', 'Participative Learning', 'Internship Programmes', 'Workshops', 'Training Programmes', 'Seminars']
      },
      {
        title: 'Examination Results',
        type: 'grid',
        highlight: true,
        items: [
          { label: 'Students Appeared', value: '173' },
          { label: 'Students Passed', value: '164' },
          { label: 'Pass Percentage', value: '94.79%' }
        ]
      },
      {
        title: 'Outcome-Based Education (OBE)',
        type: 'text',
        content: 'Course Outcomes (CO), Programme Outcomes (PO) and Programme Specific Outcomes (PSO) were rigorously assessed during the academic year.'
      }
    ]
  },
  {
    id: 'research',
    num: '03',
    title: 'Research, Innovations and Extension',
    icon: <FaFlask className="sec-icon" />,
    color: '#7c3aed',
    summary: 'Research grants, journal publications, books published, NSS extension activities and active MoUs.',
    details: [
      {
        title: 'Research Projects',
        type: 'grid',
        items: [
          { label: 'Research Projects', value: '1' },
          { label: 'Research Grant Received', value: '₹7,500' }
        ]
      },
      {
        title: 'Academic & Skill Programs',
        type: 'grid',
        items: [
          { label: 'Research Methodology Programmes', value: '5' },
          { label: 'Intellectual Property Rights (IPR)', value: '2' },
          { label: 'Entrepreneurship Development', value: '10' }
        ]
      },
      {
        title: 'Publications & NSS Extension',
        type: 'grid',
        items: [
          { label: 'Journal Publications', value: '18' },
          { label: 'Books Published', value: '8' },
          { label: 'Total NSS Activities Conducted', value: '16' }
        ]
      },
      {
        title: 'MoUs and Collaborations',
        type: 'grid',
        items: [
          { label: 'Memoranda of Understanding (MoUs)', value: '13' }
        ]
      }
    ]
  },
  {
    id: 'infrastructure',
    num: '04',
    title: 'Infrastructure and Learning Resources',
    icon: <FaBuilding className="sec-icon" />,
    color: '#059669',
    summary: 'Infrastructure expenditure, library investments, 1 GB internet bandwidth and 418 computer facilities.',
    details: [
      {
        title: 'Classroom Facilities',
        type: 'grid',
        items: [
          { label: 'Total Classrooms', value: '29' }
        ]
      },
      {
        title: 'Financial Investments',
        type: 'grid',
        items: [
          { label: 'Total Infrastructure Expenditure (excl. salary)', value: '₹259.01 Lakhs' },
          { label: 'Library Resources Expenditure', value: '₹7,99,356' }
        ]
      },
      {
        title: 'IT & Computing Resources',
        type: 'grid',
        items: [
          { label: 'Internet Bandwidth', value: '1 GB (BSNL Provider)' },
          { label: 'Total Computers Available', value: '418' }
        ]
      }
    ]
  },
  {
    id: 'progression',
    num: '05',
    title: 'Student Support and Progression',
    icon: <FaUserGraduate className="sec-icon" />,
    color: '#d97706',
    summary: 'Government & institutional scholarships totaling ₹2.46+ Crores, sports events and cultural awards.',
    details: [
      {
        title: 'Scholarship Disbursal',
        type: 'grid',
        highlight: true,
        items: [
          { label: 'Government Scholarships (Beneficiaries)', value: '936 Students' },
          { label: 'Institutional Scholarships (Beneficiaries)', value: '666 Students' },
          { label: 'Total Scholarship Amount', value: '₹2,46,69,475' }
        ]
      },
      {
        title: 'Co-Curricular & Extra-Curricular Activities',
        type: 'grid',
        items: [
          { label: 'Capacity Building Programmes', value: '3' },
          { label: 'Sports Events Conducted', value: '27' },
          { label: 'Cultural Events Conducted', value: '12' },
          { label: 'Total Awards & Medals Won', value: '3' }
        ]
      }
    ]
  },
  {
    id: 'governance',
    num: '06',
    title: 'Governance, Leadership and Management',
    icon: <FaShieldAlt className="sec-icon" />,
    color: '#4f46e5',
    summary: 'Statutory committees, ERP e-governance, faculty financial assistance and IQAC governing meetings.',
    details: [
      {
        title: 'Institutional Committees',
        type: 'pills',
        pills: ['Anti-Ragging Committee', 'POSHE Committee', 'Grievance Redressal Committee']
      },
      {
        title: 'ERP / CMS E-Governance Modules',
        type: 'pills',
        pills: ['Student Administration', 'Academics Management', 'Finance & Accounts', 'Institutional Administration']
      },
      {
        title: 'Faculty Development Support',
        type: 'grid',
        items: [
          { label: 'Teaching Staff Supported', value: '69' },
          { label: 'Financial Assistance Provided', value: '₹4,77,000' },
          { label: 'Non-Teaching Staff Participated', value: '37' }
        ]
      },
      {
        title: 'IQAC Governance Meetings',
        type: 'timeline',
        items: [
          { date: '20 May 2023', label: 'Governing Council Meeting' },
          { date: '25 May 2023', label: 'IQAC Meeting (Odd Semester)' },
          { date: '18 January 2024', label: 'IQAC Meeting (Even Semester)' }
        ]
      },
      {
        title: 'Academic and Administrative Audit',
        type: 'grid',
        items: [
          { label: 'Internal Audits Conducted', value: '1' }
        ]
      }
    ]
  },
  {
    id: 'values',
    num: '07',
    title: 'Institutional Values and Best Practices',
    icon: <FaLeaf className="sec-icon" />,
    color: '#16a34a',
    summary: '9 Environmental activities, ISO 9001 certification, Green/Energy audits and Principal’s message.',
    details: [
      {
        title: 'Environmental Initiatives',
        type: 'grid',
        items: [
          { label: 'Environmental Awareness Activities', value: '9 Conducted' }
        ]
      },
      {
        title: 'Institutional Certifications',
        type: 'pills',
        pills: ['ISO Certification', 'Green Audit Certification', 'Environment Audit Certification', 'Energy Audit Certification']
      }
    ]
  }
];

const DetailedAnnualReport = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedSection, setExpandedSection] = useState('curricular');

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section className="about-section-wrapper bg-light-1" id="detailed-report">
      <div className="about-inner-container ar-section">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ar-report-header"
        >
          <span className="ar-report-subtitle">INTERNAL QUALITY ASSURANCE CELL (IQAC)</span>
          <h2 className="ar-section-title">Annual Report (Academic Year 2023–24)</h2>
          <div className="ar-underline"></div>
          <p className="ar-report-lead">
            Explore the detailed institutional report outlining academic achievements, research output, student progression, infrastructure investments and governance quality standards.
          </p>
        </motion.div>

        {/* Executive Overview — Two Column Layout */}
        <motion.div
          className="ar-exec-plain"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="exec-plain-grid">
            {/* Left: Badges + Heading + Description */}
            <div className="exec-plain-left">
              <div className="exec-badge-wrap">
                <span className="exec-badge-plain"><FaFileAlt /> OFFICIAL IQAC REPORT</span>
                <span className="exec-badge-plain gold"><FaAward /> NAAC QUALITY ALIGNED</span>
              </div>
              <h3 className="exec-plain-heading">Institutional Quality Overview</h3>
              <p className="exec-plain-desc">
                The Internal Quality Assurance Cell (IQAC) plays a vital role in improving academic and administrative quality in accordance with NAAC guidelines. This report highlights the major activities and achievements of Nadar Saraswathi College of Engineering &amp; Technology during the Academic Year 2023–24.
              </p>
            </div>

            {/* Right: Principal Info */}
            <div className="exec-plain-right">
              <div className="ar-principal-strip">
                <div className="principal-avatar">
                  <FaUserTie />
                </div>
                <div className="principal-info">
                  <h4>Dr. C. Mathalai Sundaram</h4>
                  <p className="p-deg">M.E., M.B.A., Ph.D., MISTE</p>
                  <p className="p-role">Principal, NSCET</p>
                  <p className="p-loc">Vadapudupatti, Theni – 625531</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>



        {/* 7 Report Sections Accordion / Grid */}
        <div className="ar-sections-accordion">
          {sectionsData.map((sec, index) => {
            const isOpen = expandedSection === sec.id;

            return (
              <motion.div
                key={sec.id}
                className={`ar-sec-accordion-card ${isOpen ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Accordion Header */}
                <div
                  className="ar-sec-header"
                  onClick={() => toggleSection(sec.id)}
                  style={{ '--sec-color': sec.color }}
                >
                  <div className="ar-sec-header-left">
                    <span className="sec-num">{sec.num}</span>
                    <div className="sec-icon-bg">{sec.icon}</div>
                    <div className="sec-title-box">
                      <h3 className="sec-title">{sec.title}</h3>
                      <p className="sec-summary">{sec.summary}</p>
                    </div>
                  </div>

                  <div className="ar-sec-header-right">
                    <button className="sec-toggle-btn" aria-label="Toggle details">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                </div>

                {/* Accordion Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="ar-sec-body"
                    >
                      <div className="ar-sec-content-wrapper">
                        {sec.details.map((detail, dIdx) => (
                          <div key={dIdx} className={`detail-block ${detail.highlight ? 'highlight-block' : ''}`}>
                            <h4 className="detail-title">
                              <FaCheckCircle className="detail-check-icon" /> {detail.title}
                            </h4>

                            {detail.type === 'grid' && (
                              <div className="detail-grid">
                                {detail.items.map((item, iIdx) => (
                                  <div key={iIdx} className="detail-grid-item">
                                    <span className="grid-item-label">{item.label}</span>
                                    <span className="grid-item-val">{item.value}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {detail.type === 'text' && (
                              <p className="detail-text">{detail.content}</p>
                            )}

                            {detail.type === 'list' && (
                              <p className="detail-text">{detail.content}</p>
                            )}

                            {detail.type === 'pills' && (
                              <div className="detail-pills-row">
                                {detail.pills.map((pill, pIdx) => (
                                  <span key={pIdx} className="detail-pill-chip">
                                    {pill}
                                  </span>
                                ))}
                              </div>
                            )}

                            {detail.type === 'timeline' && (
                              <div className="detail-timeline-list">
                                {detail.items.map((tItem, tIdx) => (
                                  <div key={tIdx} className="timeline-row">
                                    <span className="timeline-date"><FaCalendarAlt /> {tItem.date}</span>
                                    <span className="timeline-label">{tItem.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DetailedAnnualReport;
