import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMicrochip, FaCogs, FaBolt, FaFlask, FaBuilding } from 'react-icons/fa';
import './Labs.css';

const labData = [
  {
    id: 1,
    title: "Advanced Computing Labs",
    department: "Computer Science & Engineering",
    icon: <FaLaptopCode />,
    description: "Equipped with high-end workstations and modern software development tools to foster innovation in AI, Machine Learning, and Cloud Computing.",
    color: "#3b82f6"
  },
  {
    id: 2,
    title: "VLSI & Embedded Systems Lab",
    department: "Electronics & Communication",
    icon: <FaMicrochip />,
    description: "State-of-the-art facilities for chip design, IoT research, and embedded system programming using industry-standard simulation tools.",
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "CNC & Advanced Manufacturing",
    department: "Mechanical Engineering",
    icon: <FaCogs />,
    description: "Features modern CNC machines, 3D printers, and CAD/CAM software to train students in smart manufacturing and Industry 4.0 concepts.",
    color: "#f59e0b"
  },
  {
    id: 4,
    title: "Power Systems & Drives Lab",
    department: "Electrical & Electronics",
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
  return (
    <div className="labs-page-container">
      {/* Hero Section */}
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

      {/* Labs Grid Section */}
      <section className="labs-grid-section">
        <div className="labs-grid-wrapper">
          <div className="labs-grid">
            {labData.map((lab, index) => (
              <motion.div 
                className="lab-card"
                key={lab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="lab-card-icon" style={{ backgroundColor: `${lab.color}15`, color: lab.color }}>
                  {lab.icon}
                </div>
                <div className="lab-card-content">
                  <h3>{lab.title}</h3>
                  <span className="lab-dept">{lab.department}</span>
                  <p>{lab.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labs;
