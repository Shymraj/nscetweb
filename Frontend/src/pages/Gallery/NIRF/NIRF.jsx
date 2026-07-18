import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaChalkboardTeacher, FaFlask, FaUserGraduate, FaGlobe, FaStar } from 'react-icons/fa';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import './NIRF.css';

import pdfSustainable from './PDFs/IR-B-C-56319 SUSTAINABLE ENERGY.pdf';
import pdfEngg from './PDFs/IR-E-C-56319 ENGG 25 (1).pdf';
import pdfInnovation from './PDFs/IR-I-C-56319 INNOVATION 25 (1).pdf';
import pdfOverall from './PDFs/IR-O-C-56319 OVERALL 25 (1).pdf';

const NIRF = () => {
  const rankingParameters = [
    {
      title: "Teaching, Learning & Resources (TLR)",
      description: "Faculty quality, student-teacher ratio, and learning infrastructure.",
      icon: <FaChalkboardTeacher />
    },
    {
      title: "Research & Professional Practice (RP)",
      description: "Research publications, patents, and collaborations.",
      icon: <FaFlask />
    },
    {
      title: "Graduation Outcomes (GO)",
      description: "Placement records, entrepreneurship, and student success.",
      icon: <FaUserGraduate />
    },
    {
      title: "Outreach & Inclusivity (OI)",
      description: "Student diversity, social inclusivity, and scholarships.",
      icon: <FaGlobe />
    },
    {
      title: "Perception (PR)",
      description: "Employer and academic reputation.",
      icon: <FaStar />
    }
  ];

  const reports = [
    {
      id: 1,
      title: "Download IR-B-C-56319",
      subtitle: "SUSTAINABLE ENERGY Report",
      link: pdfSustainable
    },
    {
      id: 2,
      title: "Download IR-E-C-56319",
      subtitle: "ENGG 25 Report",
      link: pdfEngg
    },
    {
      id: 3,
      title: "Download IR-I-C-56319",
      subtitle: "INNOVATION 25 Report",
      link: pdfInnovation
    },
    {
      id: 4,
      title: "Download IR-O-C-56319",
      subtitle: "OVERALL 25 Report",
      link: pdfOverall
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  return (
    <div className="nirf-page">
      <PageBanner 
        title="NIRF" 
        hideBreadcrumb={true}
      />
      
      <div className="nirf-container">
        
        <div className="nirf-premium-middle-section">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>

          <motion.div 
            className="nirf-intro-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="nirf-intro-content">
              <div className="intro-left">
                <h2 className="section-title">
                  National Institutional<br/>
                  <span className="highlight">Ranking Framework</span>
                </h2>
                <h3 className="institute-name">Nadar Saraswathi College of Engineering and Technology</h3>
              </div>
              <div className="intro-right">
                <div className="intro-text-block">
                  <p>
                    The National Institutional Ranking Framework (NIRF), launched by the Ministry of Education, Government of India, evaluates higher education institutions based on key performance indicators. Nadar Saraswathi College of Engineering and Technology is proud to participate in the NIRF rankings, showcasing our commitment to excellence in education, research, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="ranking-performance-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-header">
              <h2>Ranking &amp; Performance</h2>
              <p className="subtitle">
                Our institution maintains high standards in academics, research, and placements. The ranking parameters include:
              </p>
            </div>

            <motion.div 
              className="parameters-grid dynamic-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {rankingParameters.map((param, index) => (
                <motion.div 
                  className={`parameter-card premium-glass-card card-${index + 1}`}
                  key={index}
                  variants={itemVariants}
                >
                  <div className="card-accent-line"></div>
                  <div className="param-icon-container">
                    <div className="param-icon-glow"></div>
                    <div className="param-icon">{param.icon}</div>
                  </div>
                  <div className="param-content">
                    <h3>{param.title}</h3>
                    <p>{param.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="nirf-reports-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="reports-title">Download NIRF Reports</h2>
          <motion.div 
            className="reports-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {reports.map((report) => (
              <motion.a 
                key={report.id}
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="report-download-btn"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="btn-icon">
                  <FaFilePdf />
                </div>
                <div className="btn-text-content">
                  <span className="btn-title">{report.title}</span>
                  <span className="btn-subtitle">{report.subtitle}</span>
                </div>
                <div className="btn-download-icon">
                  <FaDownload />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NIRF;
