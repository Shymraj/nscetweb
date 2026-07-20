import React, { useState } from 'react';
import './NonTeachingFaculty.css';
import { 
  FaCogs, 
  FaDraftingCompass, 
  FaMicrochip, 
  FaBolt, 
  FaLaptopCode, 
  FaBrain, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaUsers 
} from 'react-icons/fa';

const departmentData = {
  "Mech": [
    { name: "Mr. J. Narayanasamy", position: "Lab Assistant" },
    { name: "Mr. M. Santhosh Pandian", position: "Lab Assistant" },
    { name: "Mr. M. Vijayakumar", position: "Lab Assistant" },
    { name: "Mr. M. Ananth", position: "Workshop Instructor" },
    { name: "Mr. Edison Anandaraj", position: "Lab Assistant" },
    { name: "Mr. S. Ambarish", position: "Lab Assistant" }
  ],
  "Civil": [
    { name: "Mr. T. Balakrishnan", position: "Lab Assistant" },
    { name: "Mr. G. Parthiban", position: "Lab Assistant" },
    { name: "Mr. M. Pravin", position: "Lab Assistant" }
  ],
  "ECE": [
    { name: "Mr. K. Samundeeswaran", position: "Lab Assistant" },
    { name: "Mr. P. Gopinathan", position: "Lab Assistant" },
    { name: "Ms. A. Mala", position: "Lab Assistant" }
  ],
  "EEE": [
    { name: "Mr. K.M. Senthil Kumar", position: "Lab Assistant" },
    { name: "Mr. N. Naresh Krishnan", position: "Lab Assistant" }
  ],
  "CSE": [
    { name: "Mr. P. Kumaravel", position: "Lab Assistant" },
    { name: "Mr. S. Lawrence", position: "Lab Assistant" },
    { name: "Mrs. M. Shobana", position: "Lab Assistant" },
    { name: "Mr. T. Muthuraj", position: "System Admin" },
    { name: "Mrs. P. Amutha", position: "Lab Assistant" }
  ],
  "AI & DS": [
    { name: "Mrs. S. Kavitha", position: "Lab Assistant" }
  ]
};

const deptIcons = {
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

const DepartmentDirectory = () => {
  const [activeDept, setActiveDept] = useState("Mech");

  return (
    <div className="non-teaching-container">
      {/* Page Header */}
      <header className="non-teaching-header">
        <div className="non-teaching-header-icon">
          <FaUsers />
        </div>
        <h1>Non-Teaching Faculty</h1>
        <div className="non-teaching-header-divider"></div>
        <p>
          Meet the dedicated technical and administrative staff members who maintain our laboratories, 
          manage workshops, and ensure smooth academic operations across various departments.
        </p>
      </header>

      {/* Department Tabs Grid */}
      <div className="non-teaching-dept-grid">
        {Object.keys(departmentData).map((dept) => (
          <div
            key={dept}
            className={`non-teaching-dept-card ${activeDept === dept ? 'active' : ''}`}
            onClick={() => setActiveDept(dept)}
          >
            <span className="non-teaching-dept-icon">
              {deptIcons[dept] || <FaUsers />}
            </span>
            <span className="non-teaching-dept-name">{dept}</span>
            <span className="non-teaching-dept-count">
              {departmentData[dept].length} Staff {departmentData[dept].length === 1 ? 'Member' : 'Members'}
            </span>
          </div>
        ))}
      </div>

      {/* Staff Grid for Selected Department */}
      <div className="non-teaching-staff-grid" key={activeDept}>
        {departmentData[activeDept].map((staff, index) => (
          <div key={index} className="non-teaching-staff-card">
            {/* Avatar Circle with Initials */}
            <div className="non-teaching-avatar">
              {getInitials(staff.name)}
            </div>

            {/* Info details */}
            <div className="non-teaching-staff-info">
              <h3 className="non-teaching-staff-name">{staff.name}</h3>
              <span className="non-teaching-staff-pos">{staff.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDirectory;
