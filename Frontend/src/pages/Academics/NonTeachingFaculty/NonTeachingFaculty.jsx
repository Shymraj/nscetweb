import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, 
  FaDraftingCompass, 
  FaMicrochip, 
  FaBolt, 
  FaLaptopCode, 
  FaBrain, 
  FaUserCog,
  FaThList,
  FaTools,
  FaShieldAlt,
  FaNetworkWired,
  FaCheckCircle,
  FaUsers,
  FaUniversity,
  FaIdCardAlt
} from 'react-icons/fa';
import './NonTeachingFaculty.css';

const departmentData = {
  "Mech": [
    { name: "Mr. J. Narayanasamy", position: "Lab Assistant", dept: "Mechanical" },
    { name: "Mr. M. Santhosh Pandian", position: "Lab Assistant", dept: "Mechanical" },
    { name: "Mr. M. Vijayakumar", position: "Lab Assistant", dept: "Mechanical" },
    { name: "Mr. M. Ananth", position: "Workshop Instructor", dept: "Mechanical" },
    { name: "Mr. Edison Anandaraj", position: "Lab Assistant", dept: "Mechanical" },
    { name: "Mr. S. Ambarish", position: "Lab Assistant", dept: "Mechanical" }
  ],
  "Civil": [
    { name: "Mr. T. Balakrishnan", position: "Lab Assistant", dept: "Civil" },
    { name: "Mr. G. Parthiban", position: "Lab Assistant", dept: "Civil" },
    { name: "Mr. M. Pravin", position: "Lab Assistant", dept: "Civil" }
  ],
  "ECE": [
    { name: "Mr. K. Samundeeswaran", position: "Lab Assistant", dept: "ECE" },
    { name: "Mr. P. Gopinathan", position: "Lab Assistant", dept: "ECE" },
    { name: "Ms. A. Mala", position: "Lab Assistant", dept: "ECE" }
  ],
  "EEE": [
    { name: "Mr. K.M. Senthil Kumar", position: "Lab Assistant", dept: "EEE" },
    { name: "Mr. N. Naresh Krishnan", position: "Lab Assistant", dept: "EEE" }
  ],
  "CSE": [
    { name: "Mr. P. Kumaravel", position: "Lab Assistant", dept: "CSE" },
    { name: "Mr. S. Lawrence", position: "Lab Assistant", dept: "CSE" },
    { name: "Mrs. M. Shobana", position: "Lab Assistant", dept: "CSE" },
    { name: "Mr. T. Muthuraj", position: "System Admin", dept: "CSE" },
    { name: "Mrs. P. Amutha", position: "Lab Assistant", dept: "CSE" }
  ],
  "AI & DS": [
    { name: "Mrs. S. Kavitha", position: "Lab Assistant", dept: "AI & DS" }
  ]
};

const deptIcons = {
  "All": <FaThList />,
  "Mech": <FaCogs />,
  "Civil": <FaDraftingCompass />,
  "ECE": <FaMicrochip />,
  "EEE": <FaBolt />,
  "CSE": <FaLaptopCode />,
  "AI & DS": <FaBrain />
};

const deptShortCodes = {
  "Mechanical": "ME",
  "Civil": "CE",
  "ECE": "EC",
  "EEE": "EE",
  "CSE": "CS",
  "AI & DS": "AD"
};

const NonTeachingFaculty = () => {
  const [activeDept, setActiveDept] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Flatten staff list for "All" view or filter by active department
  const allStaff = Object.entries(departmentData).flatMap(([deptKey, staffList]) => 
    staffList.map(s => ({ ...s, deptKey }))
  );

  const filteredStaff = allStaff.filter(staff => {
    return activeDept === "All" || staff.deptKey === activeDept;
  });

  return (
    <div className="non-teaching-page">
      <div className="ntf-container">
        
        {/* 1. HERO HEADER CARD */}
        <section className="ntf-hero-card">
          <div className="ntf-hero-glow"></div>
          <div className="ntf-hero-inner">
            <div className="ntf-badge-pill">
              <FaUserCog className="ntf-badge-icon" />
              <span>Technical & Administrative Support</span>
            </div>

            <h1 className="ntf-title">
              NON-TEACHING FACULTY
              <span className="ntf-title-highlight">DIRECTORY</span>
            </h1>

            <div className="ntf-hero-divider"></div>

            <p className="ntf-lead">
              Meet the dedicated technical assistants, workshop instructors, and system administrators who maintain our laboratories, manage workshops, and ensure smooth academic operations across NSCET.
            </p>

            {/* Quick Stats Grid */}
            <div className="ntf-stats-grid">
              <div className="ntf-stat-card">
                <div className="stat-card-icon-box">
                  <FaUsers className="stat-card-icon" />
                </div>
                <div className="stat-card-info">
                  <span className="stat-card-number">20</span>
                  <span className="stat-card-label">Technical Staff</span>
                </div>
              </div>

              <div className="ntf-stat-card">
                <div className="stat-card-icon-box">
                  <FaUniversity className="stat-card-icon" />
                </div>
                <div className="stat-card-info">
                  <span className="stat-card-number">6</span>
                  <span className="stat-card-label">Departments</span>
                </div>
              </div>

              <div className="ntf-stat-card">
                <div className="stat-card-icon-box">
                  <FaTools className="stat-card-icon" />
                </div>
                <div className="stat-card-info">
                  <span className="stat-card-number">100%</span>
                  <span className="stat-card-label">Lab Uptime</span>
                </div>
              </div>

              <div className="ntf-stat-card">
                <div className="stat-card-icon-box">
                  <FaCheckCircle className="stat-card-icon check" />
                </div>
                <div className="stat-card-info">
                  <span className="stat-card-number">Active</span>
                  <span className="stat-card-label">Hands-on Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXECUTIVE OVERVIEW CARD */}
        <section className="ntf-overview-card">
          <div className="ntf-overview-grid">
            <div className="ntf-overview-left">
              <span className="ntf-section-tag">Role & Responsibilities</span>
              <h2 className="ntf-overview-heading">Technical Backbone of Practical Education</h2>
              <p className="ntf-overview-desc">
                Our non-teaching technical staff play a vital role in providing hands-on laboratory experiences, maintaining advanced testing equipment, ensuring workshop safety compliance, and assisting students during practical sessions.
              </p>

              <div className="ntf-pillars-list">
                <div className="ntf-pillar-item">
                  <FaShieldAlt className="pillar-icon" />
                  <span>Lab Safety & Calibration</span>
                </div>
                <div className="ntf-pillar-item">
                  <FaTools className="pillar-icon" />
                  <span>Workshop Tooling Support</span>
                </div>
                <div className="ntf-pillar-item">
                  <FaNetworkWired className="pillar-icon" />
                  <span>System Administration</span>
                </div>
              </div>
            </div>

            <div className="ntf-overview-right">
              <div className="ntf-location-box">
                <div className="location-icon-box">
                  <FaUniversity className="location-icon" />
                </div>
                <div className="location-text">
                  <h3>Technical Operations</h3>
                  <p className="loc-sub">Central Laboratories & Workshops</p>
                  <span className="loc-campus">NSCET Campus, Theni</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DIRECTORY & STAFF GRID CARD */}
        <section className="ntf-directory-card">
          <div className="ntf-dir-header">
            <div className="ntf-dir-icon-box">
              <FaIdCardAlt className="ntf-dir-icon" />
            </div>
            <div className="ntf-dir-header-text">
              <h2 className="ntf-dir-title">STAFF DIRECTORY</h2>
              <p className="ntf-dir-desc">Select a department to filter laboratory and technical staff members</p>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="ntf-tabs-wrapper">
            <div className="ntf-tabs-row">
              {["All", ...Object.keys(departmentData)].map((dept) => {
                const count = dept === "All" ? allStaff.length : departmentData[dept]?.length;
                return (
                  <button
                    key={dept}
                    type="button"
                    className={`ntf-tab-chip ${activeDept === dept ? 'active' : ''}`}
                    onClick={() => setActiveDept(dept)}
                  >
                    <span className="tab-icon">{deptIcons[dept]}</span>
                    <span className="tab-name">{dept === "All" ? "All Departments" : dept}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Staff Cards Grid */}
          <motion.div 
            className="ntf-staff-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
            }}
          >
            {filteredStaff.length > 0 ? (
              filteredStaff.map((staff, index) => {
                const shortCode = deptShortCodes[staff.dept] || "TS";
                return (
                  <motion.div 
                    key={`${staff.name}-${index}`} 
                    className="ntf-staff-card"
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    {/* Staff Avatar Initials Badge */}
                    <div className="ntf-avatar-circle">
                      <span>{shortCode}</span>
                    </div>

                    {/* Staff Details */}
                    <div className="ntf-staff-details">
                      <h3 className="ntf-staff-name">{staff.name}</h3>
                      <div className="ntf-meta-row">
                        <span className={`ntf-pos-chip ${staff.position === "System Admin" ? 'admin' : staff.position === "Workshop Instructor" ? 'instructor' : ''}`}>
                          {staff.position}
                        </span>
                        <span className="ntf-dept-tag">{staff.dept}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="ntf-no-results">
                <FaUserCog className="no-res-icon" />
                <h3>No matching staff records found</h3>
                <p>Try selecting a different department tab.</p>
              </div>
            )}
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default NonTeachingFaculty;

