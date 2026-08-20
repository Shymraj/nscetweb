import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCogs, 
  FaDraftingCompass, 
  FaMicrochip, 
  FaBolt, 
  FaLaptopCode, 
  FaBrain, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaUsers,
  FaSearch,
  FaUserCog,
  FaCheckCircle,
  FaTools,
  FaThList
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

const getInitials = (name) => {
  const cleanName = name.replace(/^(Mr\.|Mrs\.|Ms\.)\s+/i, '');
  const parts = cleanName.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0] ? parts[0][0].toUpperCase() : 'ST';
};

const NonTeachingFaculty = () => {
  const [activeDept, setActiveDept] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Flatten staff list for "All" view or filter by active department & search term
  const allStaff = Object.entries(departmentData).flatMap(([deptKey, staffList]) => 
    staffList.map(s => ({ ...s, deptKey }))
  );

  const filteredStaff = allStaff.filter(staff => {
    const matchesDept = activeDept === "All" || staff.deptKey === activeDept;
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          staff.dept.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const totalStaffCount = allStaff.length;

  return (
    <div className="non-teaching-page">
      <div className="ntf-container">
        
        {/* R&D CELL STYLE HEADER SHOWCASE */}
        <motion.div 
          className="ntf-header-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="ntf-badge">Technical & Administrative Support</span>
          <h1 className="ntf-title">Non-Teaching Faculty Directory</h1>
          <p className="ntf-lead">
            Meet the dedicated technical assistants, workshop instructors, and system administrators who maintain our laboratories, manage workshops, and ensure smooth academic operations across NSCET.
          </p>
        </motion.div>

        {/* EXECUTIVE SUMMARY PLAIN */}
        <motion.div 
          className="ntf-exec-plain"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="ntf-exec-plain-grid">
            <div className="ntf-exec-plain-left">
              <div className="exec-badge-wrap">
                <span className="ntf-exec-badge-plain">
                  <FaUsers /> {totalStaffCount} Dedicated Staff Members
                </span>
                <span className="ntf-exec-badge-plain gold">
                  <FaTools /> 6 Engineering Laboratories & Workshops
                </span>
              </div>
              <h3 className="ntf-exec-plain-heading">Technical Backbone of Practical Education</h3>
              <p className="ntf-exec-plain-desc">
                Our non-teaching technical staff play a vital role in providing hands-on laboratory experiences, maintaining advanced testing equipment, ensuring workshop safety compliance, and assisting students during practical sessions.
              </p>
            </div>
            <div className="ntf-exec-plain-right">
              <div className="ntf-principal-strip">
                <div className="ntf-principal-avatar">
                  <FaUserCog />
                </div>
                <div className="ntf-principal-info">
                  <h4>Technical Operations</h4>
                  <p className="p-deg">NSCET Campus</p>
                  <p className="p-role">Vadapudupatti, Theni</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* INTERACTIVE CONTROLS: SEARCH & DEPARTMENT TABS */}
        <div className="ntf-controls-wrapper">
          {/* SEARCH BAR */}
          <div className="ntf-search-wrapper">
            <FaSearch className="ntf-search-icon" />
            <input 
              type="text" 
              placeholder="Search staff name, designation, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ntf-search-input"
            />
          </div>

          {/* DEPARTMENT TABS */}
          <div className="ntf-tabs-row">
            {["All", ...Object.keys(departmentData)].map((dept) => (
              <button
                key={dept}
                className={`ntf-tab-chip ${activeDept === dept ? 'active' : ''}`}
                onClick={() => setActiveDept(dept)}
              >
                <span className="tab-icon">{deptIcons[dept]}</span>
                <span className="tab-name">{dept === "All" ? "All Departments" : dept}</span>
                <span className="tab-count">
                  {dept === "All" ? totalStaffCount : departmentData[dept].length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* STAFF CARDS GRID */}
        <motion.div 
          className="ntf-staff-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
        >
          {filteredStaff.length > 0 ? (
            filteredStaff.map((staff, index) => (
              <motion.div 
                key={`${staff.name}-${index}`} 
                className="ntf-staff-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(2, 132, 199, 0.12)" }}
              >
                {/* Avatar */}
                <div className="ntf-avatar-circle">
                  {getInitials(staff.name)}
                </div>

                {/* Staff Details */}
                <div className="ntf-staff-details">
                  <h3 className="ntf-staff-name">{staff.name}</h3>
                  <div className="ntf-meta-row">
                    <span className="ntf-pos-chip">{staff.position}</span>
                    <span className="ntf-dept-tag">{staff.dept}</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="ntf-verified-badge" title="Technical Staff Member">
                  <FaCheckCircle />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="ntf-no-results">
              <FaUserCog className="no-res-icon" />
              <h3>No matching staff records found</h3>
              <p>Try clearing your search or selecting a different department tab.</p>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default NonTeachingFaculty;
