import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaMicrochip, FaCogs, FaBolt, FaFlask, FaBuilding, FaArrowRight } from 'react-icons/fa';
import './Labs.css';

const labData = [
  {
    id: 1,
    title: "Advanced Computing Labs",
    department: "CSE, IT & AI&DS",
    icon: <FaLaptopCode />,
    description: "Equipped with high-end workstations and modern software development tools to foster innovation in AI, Machine Learning, and Cloud Computing.",
    color: "#3b82f6",
    laboratories: [
      { name: "Mobile Application Development Laboratory", incharge: "Dr. K. Velkumar & Mrs. B. Sai Suganya" },
      { name: "Machine Learning Laboratory", incharge: "Mr. J. Vinoth Kumar & Mrs. M. Pavithra" },
      { name: "Database Programming Laboratory", incharge: "Mr. N. Kesavamoorthy & Mrs. Anusuya Vairamuthu" }
    ]
  },
  {
    id: 2,
    title: "VLSI & Embedded Systems Lab",
    department: "Electronics & Comm",
    icon: <FaMicrochip />,
    description: "State-of-the-art facilities for chip design, IoT research, and embedded system programming using industry-standard simulation tools.",
    color: "#8b5cf6",
    laboratories: [
      { name: "Moore Laboratory", incharge: "Mr. K. Bharathi Kannan" },
      { name: "Marconi Laboratory", incharge: "Mr. R. Pradeep Kumar" },
      { name: "Fourier Laboratory", incharge: "Mrs. T. Tamilselvi" },
      { name: "Shockley Laboratory", incharge: "Mrs. P. Shantha Devi" }
    ]
  },
  {
    id: 3,
    title: "CNC & Advanced Manufacturing",
    department: "Mechanical Engg",
    icon: <FaCogs />,
    description: "Features modern CNC machines, 3D printers, and CAD/CAM software to train students in smart manufacturing and Industry 4.0 concepts.",
    color: "#f59e0b",
    laboratories: [
      { name: "Manufacturing Technology Laboratory", incharge: "Mr. S. Harikishore" },
      { name: "Engineering Practices Laboratory", incharge: "Dr. B. Nagarajan" },
      { name: "Metrology and Measurements Laboratory", incharge: "Mr. P. Surulimani" },
      { name: "Dynamics Laboratory", incharge: "Mr. G. Arunkumar" },
      { name: "Mechatronics Laboratory", incharge: "Mr. R. Nagaraja" },
      { name: "CAD/CAM Laboratory", incharge: "Dr. A. Vennimalai Rajan" },
      { name: "Thermal Engineering Laboratory", incharge: "Mr. V. Sivaganesan" }
    ]
  },
  {
    id: 4,
    title: "Power Systems & Drives Lab",
    department: "Electrical & Elex",
    icon: <FaBolt />,
    description: "Comprehensive testing environments for electric machines, renewable energy systems, and modern power electronics applications.",
    color: "#ef4444",
    laboratories: [
      { name: "Engineering Practices Laboratory", incharge: "Mrs. R. Chitra" },
      { name: "Machine Laboratory - 1, 2", incharge: "Mr. K. Ganesh" },
      { name: "Power Electronics Laboratory", incharge: "Mrs. A. Nishetha Jeflin Nixon" }
    ]
  },
  {
    id: 5,
    title: "NABL Accredited Material Testing & Civil Engineering Laboratories",
    department: "Civil Engineering",
    icon: <FaBuilding />,
    description: "Industry-grade testing equipment for concrete, soil, and structural analysis, providing consultancy services and hands-on training.",
    color: "#10b981",
    laboratories: [
      { name: "Civil CAD laboratory", incharge: "Mrs. M. Sindhu" },
      { name: "Fluid Mechanics Laboratory", incharge: "Mrs. S. Gayathri" },
      { name: "Environmental Engineering Laboratory", incharge: "Mrs. R. Nathirun Sabinash" },
      { 
        name: "Civil Work Shop", 
        subLabs: [
          { name: "Soil Mechanics Laboratory", incharge: "Mr. Arul Jebaraj" },
          { name: "Strength of Materials Laboratory", incharge: "Mrs. M. Kanimozhi" },
          { name: "Surveying Laboratory", incharge: "Mr. R. Shanmugapriyan" },
          { name: "Highway Engineering Laboratory", incharge: "Mr. T. Hariprasath" }
        ]
      },
      { 
        name: "Structural Work Shop", 
        subLabs: [
          { name: "Advanced Structural Laboratory", incharge: "Mrs. K. Benita Merlin Isabella" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Science & Language Labs",
    department: "Science & Humanities",
    icon: <FaFlask />,
    description: "Foundational laboratories equipped for advanced physics and chemistry experiments, alongside interactive language labs for communication skills.",
    color: "#ec4899",
    laboratories: [
      { name: "Physics Laboratory", incharge: "Mrs. R. Bhuvaneshwari" },
      { name: "Chemistry Laboratory", incharge: "Dr. S. Srinithi" },
      { name: "Language Laboratory", incharge: "Mr. R. C. Richard Britto" }
    ]
  }
];

const Labs = () => {
  const [activeTab, setActiveTab] = useState(labData[0].id);

  // Find the currently selected lab data
  const activeLab = labData.find(lab => lab.id === activeTab);

  return (
    <div className="labs-page-container">
      {/* =========================================
          HERO SECTION (UPDATED) 
          ========================================= */}
      <section className="labs-hero">
      </section>

      {/* =========================================
          PREMIUM DYNAMIC TABBED SHOWCASE SECTION 
          ========================================= */}
      <section className="labs-showcase-section">
        <div className="labs-showcase-wrapper">
          
          {/* Dynamic Tabs Navigation */}
          <div className="tabs-container">
            {labData.map((lab) => (
              <button
                key={lab.id}
                onClick={() => setActiveTab(lab.id)}
                className={`tab-button ${activeTab === lab.id ? 'active' : ''}`}
              >
                {/* Framer motion active background indicator */}
                {activeTab === lab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="active-tab-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="tab-label">{lab.department}</span>
              </button>
            ))}
          </div>

          {/* Main Showcase Area */}
          <div className="showcase-display-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLab.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="showcase-card"
              >
                <div 
                  className="showcase-icon-large" 
                  style={{ 
                    backgroundColor: `${activeLab.color}15`, 
                    color: activeLab.color,
                    boxShadow: `0 0 40px ${activeLab.color}20` 
                  }}
                >
                  {activeLab.icon}
                </div>
                
                <div className="showcase-content">
                  <span className="showcase-dept" style={{ color: activeLab.color }}>
                    {activeLab.department} Department
                  </span>
                  <h2>{activeLab.title}</h2>
                  <p>{activeLab.description}</p>
                  
                  <div className="showcase-actions">
                    <button className="primary-btn">
                      Explore Equipments <FaArrowRight className="btn-icon" />
                    </button>
                    <button className="secondary-btn">
                      View Projects
                    </button>
                  </div>

                  {activeLab.laboratories && (
                    <div className="laboratories-container">
                      <h3 className="laboratories-title">Laboratories & Incharges</h3>
                      <div className="laboratories-grid">
                        {activeLab.laboratories.map((lab, index) => (
                          <div key={index} className="laboratory-card">
                            <h4 className="laboratory-name" style={{ color: activeLab.color }}>{lab.name}</h4>
                            {lab.incharge && <p className="laboratory-incharge">Incharge: <span>{lab.incharge}</span></p>}
                            {lab.subLabs && (
                              <div className="sub-labs-list">
                                {lab.subLabs.map((subLab, subIndex) => (
                                  <div key={subIndex} className="sub-lab-item">
                                    <h5 className="sub-lab-name">{subLab.name}</h5>
                                    <p className="laboratory-incharge">Incharge: <span>{subLab.incharge}</span></p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Labs;