import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaMicrochip, FaBroadcastTower, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaSatelliteDish, FaRobot, FaLaptopCode
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { electronicsFacultyData } from "./facultyData";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";

// Auto-load banner image inside ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import echelonzLogo from "./images/ECHELONZ.png";
import rightSideImg from "./Theme Img/ECE.png";

import imgVenishkumar from "./images/venishkumar.jpg";
import imgMathavan from "./images/Mathavan.jpg";
import imgIdhayachandran from "./images/idhayachandran.jpg";
import imgPrathap from "./images/prathap.jpg";
import imgPradeepKumar from "./images/pradeepkumar.jpg";
import imgTamilSelvi from "./images/tamilselvi.jpg";
import imgShanthaDevi from "./images/shanthadevi.jpg";
import imgGowthami from "./images/gowthami.jpg";
import imgBharathiKannan from "./images/bharathikannan.jpg";

import "../cse/CSE.css";

const Electronics = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/electronics/faculty/${facultyId}`, "_blank");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const faculties = useDepartmentStaff(['electronics and communication'], electronicsFacultyData);

  const stats = [
    { count: "154", label: "ECE Students Enrolled", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "11", label: "Expert ECE Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "80+", label: "Research Publications", icon: <FaBookOpen />, color: "#d97706" },
    { count: "94%", label: "Placement Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "VLSI Design & EDA Tools Studio",
      desc: "Cadence, Xilinx Vivado, and Synopsis EDA software suites with FPGA prototyping boards.",
      icon: <FaMicrochip />,
      badge: "VLSI & FPGA"
    },
    {
      title: "RF & Microwave Communication Center",
      desc: "Spectrum analyzers, vector network analyzers, and microwave test benches for antenna design.",
      icon: <FaBroadcastTower />,
      badge: "RF & Microwave"
    },
    {
      title: "Embedded Systems & IoT Innovation Lab",
      desc: "ARM Cortex boards, Raspberry Pi, Arduino, and wireless sensor node prototyping kits.",
      icon: <FaRobot />,
      badge: "Embedded & IoT"
    },
    {
      title: "Digital Signal & Image Processing Studio",
      desc: "High-speed DSP starter kits, MATLAB/Simulink real-time processing, and image sensors.",
      icon: <FaSatelliteDish />,
      badge: "DSP & Vision"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "Semiconductor & Telecom Placements",
      desc: "ECE graduates secured chip design and telecom roles at Qualcomm, Intel, Texas Instruments, and Bosch.",
      badge: "Placements",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "ECHELONZ Tech Conclave",
      desc: "Electronics department association hosted national VLSI coding and robotics hackathons with 600+ delegates.",
      badge: "Association",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "RF & Antenna Research Patents",
      desc: "Faculty published 80+ research papers in IEEE/Scopus journals and filed 4 patents in compact microstrip antennas.",
      badge: "Research",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Electronics & Communication Engineering"
        subtitle="Designing the Hardware of Tomorrow — VLSI Chip Architecture, Wireless Networks, and Embedded Intelligence"
        hideBreadcrumb={false}
        breadcrumb={[
          { label: "Academics", link: "#" },
          { label: "Departments", link: "#" },
          { label: "ECE" }
        ]}
        backgroundImage={bannerImg}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="ece-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaMicrochip /> Department of ECE
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Engineering the Core of <span className="cse-text-accent">Semiconductors & Networks</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Electronics and Communication Engineering at Nadar Saraswathi College of Engineering and Technology (NSCET) empowers students to architect microchips, wireless communication protocols, and embedded systems.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              Our state-of-the-art EDA software tools and RF communication laboratories prepare graduates for leading semiconductor multinationals, defense electronics, and telecommunication giants.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#ece-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#ece-faculty" className="cse-btn cse-btn-secondary">
                <FaDownload /> View Faculty
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="cse-intro-media"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="cse-media-card">
              {rightSideImg ? (
                <img src={rightSideImg} alt="Electronics Engineering Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaMicrochip className="cse-placeholder-icon" />
                  <span>Electronics & Communication Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Advanced VLSI & FPGA Prototyping Lab
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="ece-stats">
        <div className="cse-container">
          <motion.div 
            className="cse-stats-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="cse-stat-card" whileHover={{ y: -6 }}>
                <div className="cse-stat-icon-wrap" style={{ color: stat.color, background: `${stat.color}15` }}>
                  {stat.icon}
                </div>
                <h3 className="cse-stat-number">{stat.count}</h3>
                <span className="cse-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Vision & Mission */}
      <section className="cse-section cse-vm-section" id="ece-vision-mission">
        <div className="cse-bg-glow glow-2"></div>
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Vision & <span className="cse-text-accent">Mission</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <motion.div 
            className="cse-vm-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="cse-vm-card vision-card" whileHover={{ y: -6 }}>
              <div className="cse-vm-top">
                <div className="cse-vm-icon-box vision-icon">
                  <GiEyeTarget />
                </div>
                <h3 className="cse-vm-title">Our Vision</h3>
              </div>
              <div className="cse-vm-divider"></div>
              <p className="cse-vm-desc">
                To achieve national recognition in Electronics and Communication Engineering by developing skilled chip designers, communication engineers, and innovative researchers.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="cse-vm-card mission-card" whileHover={{ y: -6 }}>
              <div className="cse-vm-top">
                <div className="cse-vm-icon-box mission-icon">
                  <GiStairsGoal />
                </div>
                <h3 className="cse-vm-title">Our Mission</h3>
              </div>
              <div className="cse-vm-divider"></div>
              <ul className="cse-vm-list">
                <li><FaCheckCircle className="cse-list-icon" /> To provide state-of-the-art education in VLSI, embedded systems, and wireless networks.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To establish collaborative links with semiconductor industries for real-world projects.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To instill ethical standards, leadership skills, and passion for continuous innovation.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="ece-facilities">
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Excellence & <span className="cse-text-accent">Facilities</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <motion.div 
            className="cse-facilities-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {facilities.map((fac, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="cse-facility-card" whileHover={{ y: -6 }}>
                <span className="cse-fac-badge">{fac.badge}</span>
                <div className="cse-fac-icon-wrap">{fac.icon}</div>
                <h3 className="cse-fac-title">{fac.title}</h3>
                <p className="cse-fac-desc">{fac.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Department Association (ECHELONZ) */}
      <section className="cse-section cse-assoc-section" id="ece-associations">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Department <span className="cse-text-accent">Association</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <motion.div 
            className="cse-assoc-single-wrap"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={scaleUp}
          >
            <div className="cse-assoc-card single-card">
              <div className="cse-assoc-header">
                <div className="cse-assoc-logo-wrap">
                  <img src={echelonzLogo} alt="ECHELONZ Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 6+ Years</span>
              </div>
              <h3 className="cse-assoc-name">ECHELONZ — Association of ECE Engineers</h3>
              <p className="cse-assoc-desc">
                ECHELONZ conducts VLSI design workshops, antenna building competitions, robotics hackathons, and semiconductor industry conclaves for ECE students.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">VLSI Workshops</span>
                <span className="cse-chip">Robotics Hackathons</span>
                <span className="cse-chip">Circuit Prototyping</span>
                <span className="cse-chip">Antenna Expos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="ece-faculty">
        <div className="cse-bg-glow glow-2"></div>
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Faculty <span className="cse-text-accent">Members</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <motion.div 
            className="cse-faculty-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {faculties.map((member, idx) => (
              <DepartmentFacultyCard
                isHOD={idx === 0} 
                key={idx} 
                member={member} 
                onOpenProfile={handleOpenProfile} 
                fadeInUp={fadeInUp} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Department Achievements */}
      <section className="cse-section cse-achieve-section" id="ece-achievements">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Department <span className="cse-text-accent">Achievements</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <div className="cse-timeline">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                className="cse-timeline-item"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="cse-timeline-marker">{item.icon}</div>
                <div className="cse-timeline-content">
                  <div className="cse-timeline-header">
                    <span className="cse-timeline-badge">{item.badge}</span>
                    <span className="cse-timeline-year">{item.year}</span>
                  </div>
                  <h3 className="cse-timeline-title">{item.title}</h3>
                  <p className="cse-timeline-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Department Events */}
      <section className="cse-section cse-events-section" id="ece-events">
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={scaleUp}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Department <span className="cse-text-accent">Events</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <motion.div 
            className="cse-empty-events-box"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="cse-empty-icon-wrap">
              <FaCalendarTimes />
            </div>
            <h3 className="cse-empty-title">No Live Events Available Right Now</h3>
            <p className="cse-empty-desc">
              Our department regularly hosts guest lectures, technical symposiums, and coding workshops. Stay tuned for upcoming announcements!
            </p>
            <Link to="/gallery" className="cse-btn cse-btn-secondary">
              <FaCalendarAlt /> Explore Event Archives
            </Link>
          </motion.div>
        </div>
      </section>

      

    </div>
  );
};

export default Electronics;
