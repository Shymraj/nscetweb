import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandsHelping, 
  FaHandHoldingHeart, 
  FaAward, 
  FaUsers, 
  FaGlobeAsia 
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const AboutNSS = () => {
  return (
    <section className="nss-section nss-intro-section" id="about-nss">
      <div className="nss-bg-decoration dec-1"></div>
      <div className="nss-container nss-intro-grid">
        <motion.div 
          className="nss-intro-content"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="nss-section-title">
            About National Service Scheme
          </motion.h2>
          <motion.div variants={fadeUp} className="nss-accent-line"></motion.div>
          <motion.h3 variants={fadeUp} className="nss-subheading">
            Personality Development Through Voluntary Service
          </motion.h3>
          <motion.p variants={fadeUp} className="nss-desc">
            The National Service Scheme (NSS) is a government-sponsored voluntary program aimed at developing students personality through community service. It is a platform for students to engage in social welfare activities and contribute to nation-building.
          </motion.p>
          <motion.p variants={fadeUp} className="nss-desc" style={{ marginTop: '1rem' }}>
            Through hands-on community initiatives, NSS volunteers build leadership skills, empathy, and social civic awareness while creating meaningful impact in rural and urban societies alike.
          </motion.p>
        </motion.div>

        <motion.div 
          className="nss-intro-illustration"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="nss-illustration-bg-glow"></div>

          {/* Central Main Circle */}
          <div className="nss-illustration-circle main-circle">
            <FaHandsHelping className="nss-ill-icon main" />
          </div>

          {/* Orbiting Icons */}
          <div className="nss-illustration-circle orbit-1" title="Volunteer Service">
            <FaHandHoldingHeart className="nss-ill-icon" />
          </div>
          <div className="nss-illustration-circle orbit-2" title="Leadership">
            <FaAward className="nss-ill-icon" />
          </div>
          <div className="nss-illustration-circle orbit-3" title="Community Development">
            <FaUsers className="nss-ill-icon" />
          </div>
          <div className="nss-illustration-circle orbit-4" title="Social Responsibility">
            <FaGlobeAsia className="nss-ill-icon" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutNSS;
