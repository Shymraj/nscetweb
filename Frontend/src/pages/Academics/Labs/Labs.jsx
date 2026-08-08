import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaMicrochip, FaCogs, FaBolt, FaFlask, FaBuilding, FaArrowRight } from 'react-icons/fa';
import './Labs.css';

const labData = [
  {
    id: 1,
    title: "Advanced Computing Labs",
    department: "Computer Science",
    icon: <FaLaptopCode />,
    description: "Equipped with high-end workstations and modern software development tools to foster innovation in AI, Machine Learning, and Cloud Computing.",
    color: "#3b82f6"
  },
  {
    id: 2,
    title: "VLSI & Embedded Systems Lab",
    department: "Electronics & Comm",
    icon: <FaMicrochip />,
    description: "State-of-the-art facilities for chip design, IoT research, and embedded system programming using industry-standard simulation tools.",
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "CNC & Advanced Manufacturing",
    department: "Mechanical Engg",
    icon: <FaCogs />,
    description: "Features modern CNC machines, 3D printers, and CAD/CAM software to train students in smart manufacturing and Industry 4.0 concepts.",
    color: "#f59e0b"
  },
  {
    id: 4,
    title: "Power Systems & Drives Lab",
    department: "Electrical & Elex",
    icon: <FaBolt />,
    description: "Comprehensive testing environments for electric machines, renewable energy systems, and modern power electronics applications.",
    color: "#ef4444"
  },
  {
    id: 5,
    title: "NABL Accredited Material Testing",
    department: "Civil Engineering",
    icon: <FaBuilding />,
    description: "Industry-grade testing equipment for concrete, soil, and structural analysis, providing consultancy services and hands-on training.",
    color: "#10b981"
  },
  {
    id: 6,
    title: "Science & Language Labs",
    department: "Science & Humanities",
    icon: <FaFlask />,
    description: "Foundational laboratories equipped for advanced physics and chemistry experiments, alongside interactive language labs for communication skills.",
    color: "#ec4899"
  }
];

const Labs = () => {
  const [activeTab, setActiveTab] = useState(labData[0].id);

  // Find the currently selected lab data
  const activeLab = labData.find(lab => lab.id === activeTab);

  return (
    <div className="labs-page-container">
      {/* =========================================
          HERO SECTION (UNTOUCHED AS REQUESTED) 
          ========================================= */}
      <section className="labs-hero">
        <div className="labs-hero-bg"></div>
        <div className="labs-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            State-of-the-Art <span>Laboratories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience hands-on learning with industry-standard equipment and advanced research facilities designed to transform theoretical knowledge into practical expertise.
          </motion.p>
        </div>
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