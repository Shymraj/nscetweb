import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaChalkboardTeacher, FaFlask, FaUserGraduate, FaGlobe, FaStar, FaArrowRight } from 'react-icons/fa';
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
      
      {/* PREMIUM MIDDLE SECTION */}
      <div className="nirf-premium-container">
        {/* Animated Background Elements */}
        <div className="premium-bg-mesh"></div>
        <motion.div className="bg-blob blob-primary" animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="bg-blob blob-secondary" animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="bg-blob blob-accent" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <div className="bg-grid-overlay"></div>

        <div className="nirf-content-wrapper">
          {/* INTRO SECTION */}
          <motion.div 
            className="nirf-intro-glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="intro-content-layout">
              <div className="intro-text-primary">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
                  <h2 className="premium-title">
                    National Institutional<br/>
                    <span className="text-gradient">Ranking Framework</span>
                  </h2>
                  <div className="title-accent-line"></div>
                </motion.div>
                <motion.h3 className="premium-subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
                  Nadar Saraswathi College of Engineering and Technology
                </motion.h3>
              </div>
              <div className="intro-text-secondary">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                  The National Institutional Ranking Framework (NIRF), launched by the Ministry of Education, Government of India, evaluates higher education institutions based on key performance indicators. Nadar Saraswathi College of Engineering and Technology is proud to participate in the NIRF rankings, showcasing our commitment to excellence in education, research, and innovation.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* RANKING PARAMETERS SECTION */}
          <div className="ranking-section">
            <motion.div className="section-header-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="premium-section-title">Ranking &amp; Performance</h2>
              <p className="premium-section-subtitle">Our institution maintains high standards in academics, research, and placements. The ranking parameters include:</p>
            </motion.div>

            <motion.div 
              className="asymmetrical-params-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {rankingParameters.map((param, index) => (
                <motion.div 
                  className={`premium-glass-card card-pos-${index + 1}`}
                  key={index}
                  variants={itemVariants}
                >
                  <div className="card-shine-sweep"></div>
                  <div className="card-animated-border"></div>
                  
                  <div className="card-inner-content">
                    <div className="icon-container-wrapper">
                      <div className="icon-glow-ring"></div>
                      <div className="premium-icon-box">{param.icon}</div>
                    </div>
                    <div className="card-text-content">
                      <h3>{param.title}</h3>
                      <p>{param.description}</p>
                    </div>
                    <div className="card-action-footer">
                      <span className="learn-more-text">Learn More</span>
                      <FaArrowRight className="learn-more-icon" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD REPORTS SECTION */}
      <div className="nirf-reports-premium-wrapper">
        <div className="reports-bg-layer"></div>
        <div className="nirf-content-wrapper">
          <motion.div 
            className="reports-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="premium-section-title">Download NIRF Reports</h2>
            <div className="title-accent-line center-line"></div>
          </motion.div>

          <motion.div 
            className="horizontal-reports-list"
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
                className="horizontal-report-tile"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="tile-accent-border"></div>
                <div className="tile-icon-section">
                  <div className="pdf-icon-wrapper">
                    <FaFilePdf />
                  </div>
                </div>
                <div className="tile-content-section">
                  <h4 className="report-title">{report.title}</h4>
                  <span className="report-category">{report.subtitle}</span>
                </div>
                <div className="tile-action-section">
                  <div className="download-btn-premium">
                    <span className="btn-text">Download</span>
                    <FaDownload className="btn-icon" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default NIRF;
