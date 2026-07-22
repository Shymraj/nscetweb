import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaBookOpen, FaEnvelope, FaPhoneAlt, FaQuoteLeft } from 'react-icons/fa';
import './Principal.css';

function Principal() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="principal-page-wrapper">
      {/* Background Decorative Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="principal-content-container">
        {/* Hero Section */}
        <motion.div 
          className="principal-hero-card glass-panel"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="hero-grid">
            <div className="hero-image-wrapper">
              <div className="image-glow"></div>
              <img 
                src="https://ui-avatars.com/api/?name=C+M+S&background=1e40af&color=fff&size=300&font-size=0.4" 
                alt="Dr. C. Mathalai Sundaram" 
                className="principal-avatar" 
              />
            </div>
            <div className="hero-text">
              <motion.span className="badge" variants={fadeIn}>Principal, NSCET</motion.span>
              <motion.h1 variants={fadeIn} className="principal-title-main">Dr. C. Mathalai Sundaram</motion.h1>
              <motion.p variants={fadeIn} className="principal-qualifications">Ph.D., M.E., M.B.A.</motion.p>
              
              <motion.div variants={fadeIn} className="contact-pills">
                <a href="mailto:principal@nscet.org" className="contact-pill">
                  <FaEnvelope className="pill-icon" /> principal@nscet.org
                </a>
                <div className="contact-pill">
                  <FaPhoneAlt className="pill-icon" /> +91 94434 88999
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Message Section */}
        <motion.div 
          className="principal-message-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <FaQuoteLeft className="quote-icon-large" />
          <p className="principal-message-text">
            As a 21st century organization, NSCET desires to set an approach to learning that incorporates inquiry, research, analytical thinking and an ethical approach that becomes a lifetime habit. I strongly believe that education is a collaborative effort that involves professional administrators, committed teachers and motivated students. We dedicate ourselves as professional administrators in creating a dynamic education programme empowering the students in a global perspective. Learning at NSCET is a wholesome package of attitude, challenge, and opportunity.
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div 
          className="principal-info-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Profile Card */}
          <motion.div variants={fadeIn} className="info-card glass-panel">
            <div className="card-header">
              <div className="icon-wrapper bg-blue">
                <FaGraduationCap />
              </div>
              <h2>Profile Details</h2>
            </div>
            <div className="card-content">
              <div className="detail-item">
                <span className="detail-label">Designation</span>
                <span className="detail-value">Professor & Principal</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Department</span>
                <span className="detail-value">Mechanical Engineering</span>
              </div>
              <div className="detail-item mt-4">
                <span className="detail-label block-label">Education</span>
                <ul className="custom-list">
                  <li><strong>Ph.D.</strong> in Mechanical Engineering (Composite Tool Materials), Anna University (2011-2017)</li>
                  <li><strong>M.E.</strong> in Manufacturing Engineering, Anna University of Technology, Trichy (2008-2010)</li>
                  <li><strong>M.B.A</strong> in Production Engineering, Madurai Kamaraj University (2002-2004)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={fadeIn} className="info-card glass-panel">
            <div className="card-header">
              <div className="icon-wrapper bg-purple">
                <FaBriefcase />
              </div>
              <h2>Experience</h2>
            </div>
            <div className="card-content">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Professor & Principal</h4>
                    <p>NSCET (June 2017 - Present)</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Professor & Vice Principal</h4>
                    <p>NSCET (4 years)</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Assistant Professor</h4>
                    <p>Bharath Niketan Engineering College (2 years)</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Assistant/Associate Professor</h4>
                    <p>NSCET (3 years)</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Lecturer & HOD</h4>
                    <p>Multiple Polytechnic Colleges (8+ years)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Publications Card */}
          <motion.div variants={fadeIn} className="info-card glass-panel full-width">
            <div className="card-header">
              <div className="icon-wrapper bg-orange">
                <FaBookOpen />
              </div>
              <h2>Publications & Patents</h2>
            </div>
            <div className="card-content grid-2-col">
              <div className="stats-box">
                <span className="stats-number">32</span>
                <span className="stats-label">Total Publications</span>
              </div>
              <div className="patents-list">
                <h4 className="list-title">Notable Patents</h4>
                <ul className="custom-list check-list">
                  <li>Automation in Portable Oil Seal Assembly Machine (2017)</li>
                  <li>Flower Garland Making Machine (2022)</li>
                  <li>Movable Staircase and Lifting Setup in Vehicle (2023)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Principal;
