import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import nscetLogo from './assets/logos/nscet-logo.png';
import naacLogo from './assets/logos/naac-logo.png';
import bannerImg from './assets/banner.jpg';
import './Affiliation.css';

const certifications = [
  { name: 'AICTE', delay: 0.1 },
  { name: 'AISHE', delay: 0.2 },
  { name: 'Anna University', delay: 0.3 },
  { name: "NAAC 'A'", delay: 0.4 },
  { name: 'ISO 9001:2015', delay: 0.5 },
  { name: 'UGC 2(f)', delay: 0.6 },
];

const Affiliation = () => {
  return (
    <div className="affiliation-page">
      <PageBanner
        title="Affiliation & Accreditation"
        subtitle="Excellence Recognized by Premier Institutions"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
      />

      <div className="affiliation-container">
        <motion.div 
          className="affiliation-premium-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="affiliation-card-glow"></div>
          
          <div className="affiliation-grid">
            {/* Left Side - Premium Visual Section */}
            <div className="affiliation-visual-col premium-visual-layout">
              {/* Radial gradient background effects */}
              <div className="visual-bg-glow"></div>
              
              {/* Floating particles */}
              <motion.div 
                className="particle particle-1"
                animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="particle particle-2"
                animate={{ y: [0, 15, 0], x: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div 
                className="particle particle-3"
                animate={{ y: [0, -30, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              <div className="premium-logos-container">
                {/* Animated Connecting Line - SVG overlay */}
                <svg className="connecting-line-svg" width="100%" height="100%" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Base Line */}
                  <path 
                    d="M 200,200 Q 240,150 280,140" 
                    fill="none" 
                    stroke="rgba(59, 130, 246, 0.2)" 
                    strokeWidth="3" 
                  />
                  
                  {/* Animated Light Flow Line */}
                  <motion.path 
                    d="M 200,200 Q 240,150 280,140" 
                    fill="none" 
                    stroke="url(#lineGlow)" 
                    strokeWidth="3"
                    strokeDasharray="200"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: -200 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* NSCET Logo (Center) */}
                <motion.div 
                  className="nscet-logo-wrapper"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="glass-logo-card nscet-card">
                    <img src={nscetLogo} alt="NSCET Logo" className="visual-logo nscet-img" />
                  </div>
                </motion.div>

                {/* NAAC Logo (Top Right) */}
                <motion.div 
                  className="naac-logo-wrapper"
                  animate={{ scale: [1, 1.05, 1], filter: ["drop-shadow(0 0 0px rgba(59,130,246,0))", "drop-shadow(0 0 15px rgba(59,130,246,0.5))", "drop-shadow(0 0 0px rgba(59,130,246,0))"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="glass-logo-card naac-card">
                    <img src={naacLogo} alt="NAAC 'A' Grade Logo" className="visual-logo naac-img" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="affiliation-content-col">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="affiliation-heading">
                  Affiliation & Accreditation
                </h2>
                <div className="heading-underline"></div>

                <div className="affiliation-description">
                  <p>
                    Nadar Saraswathi College of Engineering and Technology, established in 2010, is a renowned institution approved by AICTE, New Delhi, and affiliated with Anna University, Chennai.
                  </p>
                  <p>
                    Since its inception, the college has maintained a strong commitment to quality education and academic excellence.
                  </p>
                  <p>
                    It has been awarded ISO 9001:2015 certification for its robust quality management system and accredited by NAAC with 'A' Grade, reflecting excellence in academics, infrastructure, and student outcomes.
                  </p>
                  <p>
                    Recognized under Section 2(f) of the UGC Act and registered with AISHE, NSCET continues to uphold high educational standards while nurturing innovation, research and holistic student development.
                  </p>
                </div>

                <div className="certification-chips">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={`chip-${cert.name}`}
                      className="cert-chip"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      {cert.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorations */}
      <div className="affiliation-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </div>
  );
};

export default Affiliation;
