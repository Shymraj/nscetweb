import React from 'react';
import { motion } from 'framer-motion';
import distinguishedPoster from '../../../assets/Img/distinguished_alumni.jpg';
import { FaTrophy, FaBriefcase, FaGlobeAmericas } from 'react-icons/fa';

const DistinguishedAlumni = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div
      className="alumni-section"
      initial="hidden" animate="visible" variants={staggerContainer}
    >
      <motion.div className="header-wrapper" variants={fadeInUp}>
        <h2 className="glam-title">
          Inspiring Alumni <span>&</span> Global Leaders
        </h2>
        <p className="section-intro">
          Our distinguished graduates embody excellence and leadership. From steering multinational IT projects at Cognizant, contributing to national engineering boards, serving in government departments, to excelling in academic and medical spaces, these bright minds continue to make profound impacts across the globe.
        </p>
      </motion.div>

      <motion.div className="poster-showcase-container" variants={popIn}>
        <div className="poster-glass-wrapper">
          <motion.img
            src={distinguishedPoster}
            alt="NSCET Distinguished Alumni Poster"
            className="distinguished-poster-img"
            whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="poster-glow-backdrop"></div>
        </div>
      </motion.div>

      <motion.div className="alumni-impact-grid" variants={staggerContainer}>
        <motion.div className="impact-card" variants={fadeInUp}>
          <div className="impact-icon"><FaGlobeAmericas /></div>
          <h4>Global Footprint</h4>
          <p>Our alumni are stationed internationally and nationally, bringing innovation to corporate conglomerates globally.</p>
        </motion.div>

        <motion.div className="impact-card" variants={fadeInUp}>
          <div className="impact-icon"><FaBriefcase /></div>
          <h4>Public & Core Sectors</h4>
          <p>Serving with dedication as leading engineers, police officials, and in state administrative departments.</p>
        </motion.div>

        <motion.div className="impact-card" variants={fadeInUp}>
          <div className="impact-icon"><FaTrophy /></div>
          <h4>Academic Excellence</h4>
          <p>Leading as professors, researchers, and inspiring the subsequent generations at renowned institutions.</p>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default DistinguishedAlumni;
