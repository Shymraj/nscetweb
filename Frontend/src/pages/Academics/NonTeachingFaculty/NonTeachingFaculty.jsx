
import React, { useState } from 'react';
import './NonTeachingFaculty.css';

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

const DepartmentDirectory = () => {
  const [expandedDept, setExpandedDept] = useState("Mech");

  const toggleDept = (dept) => {
    setExpandedDept(expandedDept === dept ? null : dept);
  };

  return (
    <div className="directory-container">
      <h2 className="directory-title">Department Directory</h2>
      {Object.keys(departmentData).map((dept) => (
        <div key={dept} className="accordion-item">
          <div 
            className={`accordion-header ${expandedDept === dept ? 'active' : ''}`} 
            onClick={() => toggleDept(dept)}
          >
            <span>{dept} ({departmentData[dept].length})</span>
            <span className="arrow">{expandedDept === dept ? '▼' : '▶'}</span>
          </div>
          {expandedDept === dept && (
            <div className="accordion-content">
              {departmentData[dept].map((staff, index) => (
                <div key={index} className="staff-card">
                  <div className="staff-info">
                    <p className="staff-name">{staff.name}</p>
                    <p className="staff-pos">{staff.position}</p>
                  </div>
                  <div className="staff-actions">
                    <button className="icon-btn">✉</button>
                    <button className="icon-btn">✆</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentDirectory;
