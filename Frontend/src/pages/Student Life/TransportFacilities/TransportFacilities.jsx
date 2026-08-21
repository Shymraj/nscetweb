import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaBus, FaMobileAlt, FaUserShield, FaDownload, FaMapMarkedAlt, FaMapMarkerAlt, FaClock, FaShieldAlt, FaUsers, FaArrowLeft, FaCar, FaWalking, FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion';
import nagarajaImg from './images/nagaraja.jpg';
import harikishoreImg from './images/harikishore.jpg';
import bannerImg from './banner/TransportFacilities.png';
import './TransportFacilities.css';

const TransportFacilities = () => {
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
    <div className="transportfacilities-page">
      <PageBanner
        title="Transport Facilities"
        subtitle="Safe, Reliable & Punctual Commuting"
        hideBreadcrumb={false}
        backgroundImage={bannerImg}
      />

      <div className="transport-container">
        {/* Stats Section */}
        <motion.section 
          className="transport-stats-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="transport-stat-card" variants={fadeInUp}>
            <div className="stat-icon-wrapper"><FaBus /></div>
            <div className="stat-info">
              <h2>20+</h2>
              <p>College Buses</p>
            </div>
          </motion.div>
          <motion.div className="transport-stat-card" variants={fadeInUp}>
            <div className="stat-icon-wrapper"><FaMapMarkedAlt /></div>
            <div className="stat-info">
              <h2>30+</h2>
              <p>Routes Covered</p>
            </div>
          </motion.div>
          <motion.div className="transport-stat-card" variants={fadeInUp}>
            <div className="stat-icon-wrapper"><FaUsers /></div>
            <div className="stat-info">
              <h2>1000+</h2>
              <p>Daily Commuters</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Transport Incharges Section */}
        <motion.section 
          className="transport-incharge-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="transport-section-header text-center">
            <FaUserShield className="transport-header-icon" />
            <h3>Transport Incharges</h3>
            <div className="transport-header-line"></div>
          </div>
          
          <div className="incharge-cards-container">
            <motion.div className="incharge-card" variants={fadeInUp}>
              <div className="incharge-img-wrapper">
                <img src={nagarajaImg} alt="Mr. Nagaraja" className="incharge-img" />
                <div className="incharge-role-badge primary">Incharge</div>
              </div>
              <div className="incharge-info">
                <h4>Mr. Nagaraja</h4>
                <p>Transport Coordinator</p>
              </div>
            </motion.div>

            <motion.div className="incharge-card" variants={fadeInUp}>
              <div className="incharge-img-wrapper">
                <img src={harikishoreImg} alt="Mr. Harikishore" className="incharge-img" />
                <div className="incharge-role-badge secondary">Assistant Incharge</div>
              </div>
              <div className="incharge-info">
                <h4>Mr. Harikishore</h4>
                <p>Transport Coordinator</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="transport-about-section">
          <div className="transport-section-header text-center">
            <FaBus className="transport-header-icon" />
            <h3>About Transport</h3>
            <div className="transport-header-line"></div>
          </div>
          <div className="transport-about-grid">
            <div className="transport-about-content">
              <p>
                <strong>Nadar Saraswathi College of Engineering and Technology (NSCET)</strong> offers safe and reliable transport facilities covering nearby towns and villages. Our fleet of well-maintained buses ensures timely pickup and drop-off for students and staff. We prioritize safety, comfort, and punctuality to provide a hassle-free commuting experience for everyone.
              </p>
            </div>
            <motion.div 
              className="transport-features-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="transport-feature-item" variants={fadeInUp}>
                <div className="feature-item-icon-wrapper icon-gradient-1"><FaShieldAlt /></div>
                <h4>Safety First</h4>
                <p>Speed governors and GPS tracking on all buses.</p>
              </motion.div>
              <motion.div className="transport-feature-item" variants={fadeInUp}>
                <div className="feature-item-icon-wrapper icon-gradient-2"><FaClock /></div>
                <h4>Punctual</h4>
                <p>Strict adherence to pickup and drop schedules.</p>
              </motion.div>
              <motion.div className="transport-feature-item" variants={fadeInUp}>
                <div className="feature-item-icon-wrapper icon-gradient-3"><FaMapMarkedAlt /></div>
                <h4>Wide Coverage</h4>
                <p>Connecting major routes across the district.</p>
              </motion.div>
              <motion.div className="transport-feature-item" variants={fadeInUp}>
                <div className="feature-item-icon-wrapper icon-gradient-4"><FaUserShield /></div>
                <h4>Experienced Staff</h4>
                <p>Trained drivers prioritizing student safety.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* App Section */}
        <section className="transport-app-section">
          <div className="transport-section-header">
            <FaMobileAlt className="transport-header-icon" />
            <h3>Bus Attendance Management Application</h3>
            <div className="transport-header-line"></div>
          </div>
          
          <div className="transport-app-content-grid">
            <div className="transport-app-text-wrapper">
              <div className="transport-app-text">
                <p>
                  <strong>NSCET Transport</strong> is a smart Bus Attendance System designed to ensure safe and efficient transportation for NSCET students and staff. It tracks real-time boarding and deboarding, minimizes errors, and provides instant updates. The app enhances safety, accountability, and convenience, ensuring a seamless commuting experience for all users.
                </p>
              </div>
              
              <motion.div 
                className="transport-app-links-wrapper"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div className="transport-link-card" variants={fadeInUp}>
                  <div className="link-card-icon-wrapper">
                    <FaDownload className="link-card-icon" />
                  </div>
                  <div className="link-card-info">
                    <h4>Mobile App</h4>
                    <p>Download the latest APK for Android</p>
                    <a href="#" className="transport-btn-primary">
                      <FaDownload /> Download APK
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="transport-app-visual">
              <div className="app-phone-mockup">
                <div className="phone-notch"></div>
                <div className="app-phone-screen">
                  <div className="app-phone-header">
                    <FaBus className="app-phone-logo" />
                    <span>NSCET Transport</span>
                  </div>
                  <div className="app-phone-body gmaps-ui">
                    
                    {/* Google Maps Header overlay */}
                    <div className="gmaps-header">
                      <div className="gmaps-top-bar">
                        <FaArrowLeft className="gmaps-back-icon" />
                        <span className="gmaps-mode-icons">
                          <FaCar className="mode-icon active" />
                          <FaBus className="mode-icon" />
                          <FaWalking className="mode-icon" />
                        </span>
                      </div>
                      <div className="gmaps-inputs">
                        <div className="gmaps-timeline">
                          <div className="dot blue"></div>
                          <div className="line"></div>
                          <div className="dot red"></div>
                        </div>
                        <div className="gmaps-fields">
                          <div className="gmaps-field">Your location</div>
                          <div className="gmaps-field dest">NSCET Campus</div>
                        </div>
                      </div>
                    </div>

                    {/* Map Background */}
                    <div className="map-bg"></div>
                    
                    {/* S-Curve SVG Route */}
                    <svg className="route-svg" viewBox="0 0 256 456">
                      <path d="M 128,140 C 230,190 230,280 128,275 C 26,270 26,360 128,410" className="route-bg-path" />
                      <path d="M 128,140 C 230,190 230,280 128,275 C 26,270 26,360 128,410" className="route-progress-path" />
                    </svg>
                    
                    {/* Locations */}
                    <div className="location-marker start-marker">
                      <div className="current-location-dot"></div>
                    </div>
                    
                    <div className="location-marker end-marker">
                      <FaMapMarkerAlt className="red-pin-icon" />
                      <span className="marker-label">NSCET Campus</span>
                    </div>

                    {/* Moving Bus */}
                    <div className="moving-bus-container">
                      <div className="bus-pulse"></div>
                      <div className="bus-icon-wrapper">
                        <FaBus />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="app-glow-bg-animated"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransportFacilities;
