import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaNetworkWired, FaHandsHelping, FaLightbulb, FaBriefcase, FaUserTie } from 'react-icons/fa';

const Overview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="alumni-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="glam-title" variants={fadeInUp}>
        Alumni Association <span>AANSCET</span>
      </motion.h2>

      <motion.div className="overview-intro-card" variants={fadeInUp}>
        <p>
          The AANSCET Alumni Association, founded in 2014 and formally established in 2023, strengthens the bond between the institution and its graduates. It fosters connections, offers career guidance, and provides professional networking opportunities.
        </p>
      </motion.div>

      <div className="vision-mission-grid">
        <motion.div className="vm-card" variants={fadeInUp}>
          <div className="vm-icon icon-gradient-1" style={{ borderRadius: '12px', padding: '10px' }}><FaLightbulb /></div>
          <h3>Vision</h3>
          <p>
            To build a lifelong connection among students and alumni, fostering personal and professional growth.
          </p>
        </motion.div>

        <motion.div className="vm-card" variants={fadeInUp}>
          <div className="vm-icon icon-gradient-2" style={{ borderRadius: '12px', padding: '10px' }}><span role="img" aria-label="rocket">🚀</span></div>
          <h3>Mission</h3>
          <ul>
            <li>Strengthen alumni relationships and create career development opportunities.</li>
            <li>Provide mentorship, networking, and industry collaboration.</li>
            <li>Support students through guidance, training, and internships.</li>
            <li>Facilitate alumni contributions to curriculum, research, and placements.</li>
            <li>Enhance institutional growth through active alumni engagement.</li>
          </ul>
        </motion.div>
      </div>

      <motion.h3 className="glam-title" variants={fadeInUp}>Our <span>Activities</span></motion.h3>
      <motion.div className="activities-grid" variants={containerVariants}>

        <motion.div className="activity-card" variants={fadeInUp}>
          <div className="activity-icon-wrapper icon-gradient-1"><FaGraduationCap /></div>
          <h4>Mentorship & Placements</h4>
          <p>Alumni guide students in career and higher education opportunities.</p>
        </motion.div>

        <motion.div className="activity-card" variants={fadeInUp}>
          <div className="activity-icon-wrapper icon-gradient-2"><FaNetworkWired /></div>
          <h4>Industry Collaboration</h4>
          <p>Alumni help in MoUs, internships, and entrepreneurship support.</p>
        </motion.div>

        <motion.div className="activity-card" variants={fadeInUp}>
          <div className="activity-icon-wrapper icon-gradient-3"><FaBriefcase /></div>
          <h4>Research & Consultancy</h4>
          <p>Alumni contribute expertise to research projects and industrial partnerships.</p>
        </motion.div>

        <motion.div className="activity-card" variants={fadeInUp}>
          <div className="activity-icon-wrapper icon-gradient-4"><FaHandsHelping /></div>
          <h4>Financial & Admin Support</h4>
          <p>Alumni aid in funding scholarships and institutional development.</p>
        </motion.div>

      </motion.div>

      <motion.div className="incharge-section" variants={fadeInUp}>
        <motion.h3 className="glam-title">Cell <span>In-charges</span></motion.h3>
        <div className="incharge-list">
          <div className="incharge-card">
            <FaUserTie className="incharge-avatar" />
            <div className="incharge-details">
              <h4>Mr. A. Vennimalai Rajan</h4>
              <p>Assistant Professor, Mechanical Engineering</p>
            </div>
          </div>
          <div className="incharge-card">
            <FaUserTie className="incharge-avatar" />
            <div className="incharge-details">
              <h4>Ms. M. Kanimozhi</h4>
              <p>Assistant Professor, Civil Engineering</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Overview;
