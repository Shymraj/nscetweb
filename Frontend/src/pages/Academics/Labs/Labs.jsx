import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaMicrochip, 
  FaCogs, 
  FaBolt, 
  FaFlask, 
  FaBuilding, 
  FaUserTie,
  FaSearch,
  FaCheckCircle,
  FaAward,
  FaTools
} from 'react-icons/fa';
import './Labs.css';
import bannerImg from './banner/Labs.png';

const labData = [
  {
    id: 1,
    title: "Advanced Computing Labs",
    department: "AI & DS, CSE, IT",
    shortName: "CSE, IT & AI-DS",
    icon: <FaLaptopCode />,
    description: "Equipped with high-end workstations and modern software development tools to foster innovation in AI, Machine Learning, and Cloud Computing.",
    color: "#0284c7",
    colorLight: "rgba(2, 132, 199, 0.12)",
    features: ["High-End GPU Workstations", "Cloud Computing Environment", "AI & ML Frameworks", "Open Source Software Hub"],
    laboratories: [
      { name: "Mobile Application Development Laboratory", incharge: "Dr. K. Velkumar & Mrs. B. Sai Suganya" },
      { name: "Machine Learning Laboratory", incharge: "Mr. J. Vinoth Kumar & Mrs. M. Pavithra" },
      { name: "Database Programming Laboratory", incharge: "Mr. N. Kesavamoorthy & Mrs. Anusuya Vairamuthu" }
    ]
  },
  {
    id: 2,
    title: "VLSI & Embedded Systems Lab",
    department: "ECE",
    shortName: "ECE",
    icon: <FaMicrochip />,
    description: "State-of-the-art facilities for chip design, IoT research, and embedded system programming using industry-standard simulation tools.",
    color: "#8b5cf6",
    colorLight: "rgba(139, 92, 246, 0.12)",
    features: ["VLSI Design EDA Tools", "IoT Development Kits", "RF & Wireless Test Benches", "FPGA Hardware Boards"],
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
    department: "Mechanical",
    shortName: "Mechanical",
    icon: <FaCogs />,
    description: "Features modern CNC machines, 3D printers, and CAD/CAM software to train students in smart manufacturing and Industry 4.0 concepts.",
    color: "#f59e0b",
    colorLight: "rgba(245, 158, 11, 0.12)",
    features: ["CNC Lathe & Milling Machines", "Industry Standard CAD/CAM", "Precision Metrology Tools", "Thermal & Dynamics Setup"],
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
    department: "EEE",
    shortName: "EEE",
    icon: <FaBolt />,
    description: "Comprehensive testing environments for electric machines, renewable energy systems, and modern power electronics applications.",
    color: "#ef4444",
    colorLight: "rgba(239, 68, 68, 0.12)",
    features: ["AC/DC Electrical Machines", "Power Electronics Kits", "Renewable Energy Testbed", "Industrial Protection Relays"],
    laboratories: [
      { name: "Engineering Practices Laboratory", incharge: "Mrs. R. Chitra" },
      { name: "Machine Laboratory - 1, 2", incharge: "Mr. K. Ganesh" },
      { name: "Power Electronics Laboratory", incharge: "Mrs. A. Nishetha Jeflin Nixon" }
    ]
  },
  {
    id: 5,
    title: "NABL Accredited Material Testing & Civil Engineering Laboratories",
    department: "Civil",
    shortName: "Civil",
    icon: <FaBuilding />,
    description: "Industry-grade testing equipment for concrete, soil, and structural analysis, providing consultancy services and hands-on training.",
    color: "#10b981",
    colorLight: "rgba(16, 185, 129, 0.12)",
    features: ["NABL Accredited Facility", "Universal Testing Machine", "Digital Surveying Total Stations", "Environmental Analysis Kit"],
    laboratories: [
      { name: "Civil CAD Laboratory", incharge: "Mrs. M. Sindhu" },
      { name: "Fluid Mechanics Laboratory", incharge: "Mrs. S. Gayathri" },
      { name: "Environmental Engineering Laboratory", incharge: "Mrs. R. Nathirun Sabinash" },
      { 
        name: "Civil Work Shop", 
        incharge: null,
        subLabs: [
          { name: "Soil Mechanics Laboratory", incharge: "Mr. Arul Jebaraj" },
          { name: "Strength of Materials Laboratory", incharge: "Mrs. M. Kanimozhi" },
          { name: "Surveying Laboratory", incharge: "Mr. R. Shanmugapriyan" },
          { name: "Highway Engineering Laboratory", incharge: "Mr. T. Hariprasath" }
        ]
      },
      { 
        name: "Structural Work Shop", 
        incharge: null,
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
    shortName: "S & H",
    icon: <FaFlask />,
    description: "Foundational laboratories equipped for advanced physics and chemistry experiments, alongside interactive language labs for communication skills.",
    color: "#ec4899",
    colorLight: "rgba(236, 72, 153, 0.12)",
    features: ["Precision Optics & Lasers", "Analytical Chemistry Lab", "Interactive Audio-Visual System", "Communication Skill Tools"],
    laboratories: [
      { name: "Physics Laboratory", incharge: "Mrs. R. Bhuvaneshwari" },
      { name: "Chemistry Laboratory", incharge: "Dr. S. Srinithi" },
      { name: "Language Laboratory", incharge: "Mr. R. C. Richard Britto" }
    ]
  }
];

const statsData = [
  { icon: <FaAward />, value: "20+", label: "Advanced Laboratories" },
  { icon: <FaTools />, value: "6", label: "Core Departments" },
  { icon: <FaCheckCircle />, value: "NABL", label: "Accredited Testing" },
  { icon: <FaLaptopCode />, value: "100%", label: "Hands-on Practical" }
];

const Labs = () => {
  const [activeTab, setActiveTab] = useState(labData[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const activeLab = labData.find(lab => lab.id === activeTab) || labData[0];

  // Filter laboratories if search query is entered
  const filteredLabs = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    
    const results = [];
    labData.forEach((dept) => {
      const matchingLabs = [];
      dept.laboratories.forEach((lab) => {
        const matchesName = lab.name.toLowerCase().includes(query);
        const matchesIncharge = lab.incharge && lab.incharge.toLowerCase().includes(query);
        const matchingSubLabs = lab.subLabs?.filter(
          s => s.name.toLowerCase().includes(query) || (s.incharge && s.incharge.toLowerCase().includes(query))
        );

        if (matchesName || matchesIncharge || (matchingSubLabs && matchingSubLabs.length > 0)) {
          matchingLabs.push({
            ...lab,
            subLabs: matchingSubLabs && matchingSubLabs.length > 0 ? matchingSubLabs : lab.subLabs
          });
        }
      });

      if (matchingLabs.length > 0 || dept.department.toLowerCase().includes(query) || dept.title.toLowerCase().includes(query)) {
        results.push({
          ...dept,
          laboratories: matchingLabs.length > 0 ? matchingLabs : dept.laboratories
        });
      }
    });

    return results;
  }, [searchQuery]);

  return (
    <div className="common-page-wrapper labs-page-container">
      {/* 1. Full Responsive Hero Banner */}
      <div className="common-hero-banner">
        <img 
          src={bannerImg} 
          alt="NSCET Laboratories Banner" 
          loading="eager"
        />
      </div>

      <div className="labs-main-content">
        {/* 2. Search & Interactive Control Bar */}
        <section className="labs-control-bar">
          <div className="labs-search-box">
            <FaSearch className="labs-search-icon" />
            <input 
              type="text"
              placeholder="Search by lab name, incharge, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="labs-search-input"
              aria-label="Search laboratories"
            />
            {searchQuery && (
              <button 
                className="labs-search-clear" 
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </section>

        {/* 3. Search Results View OR Tabbed Showcase View */}
        {filteredLabs !== null ? (
          <section className="labs-search-results-section">
            <div className="search-results-header">
              <h2 className="search-results-title">
                Search Results for <span>"{searchQuery}"</span>
              </h2>
              <span className="search-count-badge">
                {filteredLabs.length} {filteredLabs.length === 1 ? 'department found' : 'departments found'}
              </span>
            </div>

            {filteredLabs.length === 0 ? (
              <div className="labs-no-results">
                <p>No laboratories matching "{searchQuery}". Please try another keyword.</p>
                <button className="labs-reset-search-btn" onClick={() => setSearchQuery("")}>
                  View All Laboratories
                </button>
              </div>
            ) : (
              <div className="search-results-list">
                {filteredLabs.map((dept) => (
                  <div key={dept.id} className="search-dept-card">
                    <div className="search-dept-header">
                      <div 
                        className="search-dept-icon" 
                        style={{ backgroundColor: dept.colorLight, color: dept.color }}
                      >
                        {dept.icon}
                      </div>
                      <div>
                        <span className="search-dept-tag" style={{ color: dept.color }}>
                          {dept.department}
                        </span>
                        <h3 className="search-dept-title">{dept.title}</h3>
                      </div>
                    </div>

                    <div className="laboratories-grid">
                      {dept.laboratories.map((lab, index) => (
                        <div key={index} className="laboratory-card">
                          <div className="lab-card-accent" style={{ backgroundColor: dept.color }}></div>
                          <div className="lab-card-body">
                            <h4 className="laboratory-name" style={{ color: dept.color }}>
                              {lab.name}
                            </h4>
                            {lab.incharge && (
                              <div className="laboratory-incharge-badge">
                                <FaUserTie className="incharge-icon" />
                                <p className="laboratory-incharge">
                                  <span>Incharge:</span> {lab.incharge}
                                </p>
                              </div>
                            )}
                            {lab.subLabs && (
                              <div className="sub-labs-list">
                                <span className="sub-labs-header">Workshops & Facilities:</span>
                                {lab.subLabs.map((subLab, subIndex) => (
                                  <div key={subIndex} className="sub-lab-item">
                                    <h5 className="sub-lab-name">{subLab.name}</h5>
                                    {subLab.incharge && (
                                      <div className="sub-lab-incharge-badge">
                                        <FaUserTie className="incharge-sub-icon" />
                                        <p className="laboratory-incharge">
                                          <span>Incharge:</span> {subLab.incharge}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : (
          <section className="labs-showcase-section">
            <div className="labs-showcase-wrapper">
              
              {/* Dynamic Scrollable Tabs Navigation */}
              <div className="tabs-container" role="tablist" aria-label="Department laboratories">
                {labData.map((lab) => {
                  const isActive = activeTab === lab.id;
                  return (
                    <button
                      key={lab.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`tabpanel-${lab.id}`}
                      id={`tab-${lab.id}`}
                      onClick={() => setActiveTab(lab.id)}
                      className={`tab-button ${isActive ? 'active' : ''}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="active-tab-indicator"
                          transition={{ type: "spring", stiffness: 350, damping: 32 }}
                        />
                      )}
                      <span className="tab-icon">{lab.icon}</span>
                      <span className="tab-label desktop-tab-label">{lab.department}</span>
                      <span className="tab-label mobile-tab-label">{lab.shortName || lab.department}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Showcase Area with Framer Motion Animation */}
              <div 
                className="showcase-display-area"
                id={`tabpanel-${activeLab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeLab.id}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLab.id}
                    initial={{ opacity: 0, y: 16, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.99 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="showcase-card"
                  >
                    {/* Top Decorative Department Glow */}
                    <div 
                      className="showcase-card-ambient" 
                      style={{ background: `radial-gradient(circle at 10% 10%, ${activeLab.color}18 0%, transparent 65%)` }}
                    />

                    {/* Department Header */}
                    <div className="showcase-header">
                      <div 
                        className="showcase-icon-large" 
                        style={{ 
                          backgroundColor: activeLab.colorLight, 
                          color: activeLab.color,
                          borderColor: `${activeLab.color}35`,
                          boxShadow: `0 8px 30px ${activeLab.color}25` 
                        }}
                      >
                        {activeLab.icon}
                      </div>
                      
                      <div className="showcase-content">
                        <div className="showcase-tag-row">
                          <span 
                            className="showcase-dept" 
                            style={{ 
                              color: activeLab.color, 
                              backgroundColor: activeLab.colorLight,
                              borderColor: `${activeLab.color}30`
                            }}
                          >
                            {activeLab.department} Department
                          </span>
                        </div>
                        <h2>{activeLab.title}</h2>
                        <p>{activeLab.description}</p>

                        {/* Department Feature Pills */}
                        {activeLab.features && (
                          <div className="dept-features-wrap">
                            {activeLab.features.map((feat, fIdx) => (
                              <span key={fIdx} className="dept-feature-pill">
                                <FaCheckCircle className="feat-icon" style={{ color: activeLab.color }} />
                                {feat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Laboratories List */}
                    {activeLab.laboratories && (
                      <div className="laboratories-container">
                        <div className="laboratories-header-row">
                          <h3 className="laboratories-title">Laboratories & Incharges</h3>
                          <span className="laboratories-count">
                            {activeLab.laboratories.length} {activeLab.laboratories.length === 1 ? 'Laboratory' : 'Laboratories'}
                          </span>
                        </div>
                        
                        <div className="laboratories-grid">
                          {activeLab.laboratories.map((lab, index) => (
                            <div key={index} className="laboratory-card">
                              <div className="lab-card-accent" style={{ backgroundColor: activeLab.color }}></div>
                              <div className="lab-card-body">
                                <h4 className="laboratory-name" style={{ color: activeLab.color }}>
                                  {lab.name}
                                </h4>

                                {lab.incharge && (
                                  <div className="laboratory-incharge-badge">
                                    <FaUserTie className="incharge-icon" />
                                    <p className="laboratory-incharge">
                                      <span>Incharge:</span> {lab.incharge}
                                    </p>
                                  </div>
                                )}

                                {lab.subLabs && (
                                  <div className="sub-labs-list">
                                    <span className="sub-labs-header">Workshops & Facilities:</span>
                                    {lab.subLabs.map((subLab, subIndex) => (
                                      <div key={subIndex} className="sub-lab-item">
                                        <h5 className="sub-lab-name">{subLab.name}</h5>
                                        {subLab.incharge && (
                                          <div className="sub-lab-incharge-badge">
                                            <FaUserTie className="incharge-sub-icon" />
                                            <p className="laboratory-incharge">
                                              <span>Incharge:</span> {subLab.incharge}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              
            </div>
          </section>
        )}

        {/* 4. Bottom Highlights & Quick Stats */}
        <section className="labs-stats-strip">
          <div className="labs-stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="labs-stat-item">
                <div className="labs-stat-icon-wrap">{stat.icon}</div>
                <div className="labs-stat-text">
                  <span className="labs-stat-number">{stat.value}</span>
                  <span className="labs-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Labs;