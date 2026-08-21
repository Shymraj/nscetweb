import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaBolt, FaMicrochip, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaSolarPanel, FaIndustry, FaBroadcastTower
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { electricalFacultyData } from "./facultyData";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";

// Auto-load banner image inside ./images/be_banner/
const bannerGlobs = import.meta.glob("./images/be_banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import electroblitzLogo from "./images/Electroblitz.png";
import rightSideImg from "./Theme Img/EEE.png";

import imgGanesh from "./images/ganesh.jpg";
import imgRajaKarthick from "./images/raja_karthick.jpg";
import imgNishetha from "./images/Nishetha_jeflin_nixon.jpg";
import imgVijayalakshmi from "./images/Vijayalakshmi.jpg";
import imgShiva from "./images/shiva.jpg";
import imgAbirami from "./images/Abirami.jpg";
import imgChitra from "./images/chitra.jpg";
import imgJuriyaBanu from "./images/juriyabanu.jpg";
import imgPandiSelvi from "./images/pandiselvi.jpeg";

import "../cse/CSE.css";

const Electrical = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/electrical/faculty/${facultyId}`, "_blank");
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

  const faculties = useDepartmentStaff(['electrical'], electricalFacultyData);

  const stats = [
    { count: "350+", label: "EEE Students Enrolled", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "12+", label: "Expert EEE Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "65+", label: "Power Research Papers", icon: <FaBookOpen />, color: "#d97706" },
    { count: "6+", label: "High Voltage Labs", icon: <FaBolt />, color: "#7c3aed" },
    { count: "93%", label: "Placement Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Power Electronics & Electric Drives Lab",
      desc: "Modern inverter test rigs, DC/AC drive controllers, and DSP-based power semiconductor modules.",
      icon: <FaBolt />,
      badge: "Power Drives"
    },
    {
      title: "Renewable Energy & Solar Grid Center",
      desc: "Solar PV microgrid simulators, wind energy emulators, and MPPT controller experimental setups.",
      icon: <FaSolarPanel />,
      badge: "Solar & Microgrid"
    },
    {
      title: "Control Systems & Microcontroller Lab",
      desc: "ARM/PIC microcontroller trainers, MATLAB Simulink real-time interfacing, and PLC automation racks.",
      icon: <FaMicrochip />,
      badge: "Control Systems"
    },
    {
      title: "Electrical Machines & Protection Lab",
      desc: "Synchronous generators, induction motors, transformer testing benches, and numerical protection relays.",
      icon: <FaIndustry />,
      badge: "Machines & Relays"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "Power & EV Sector Placements",
      desc: "EEE graduates secured engineering roles in Schneider Electric, Siemens, ABB, and EV battery firms.",
      badge: "Placements",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "Electroblitz Tech Fest Laurels",
      desc: "Department student association hosted national solar energy symposiums and circuit debugging hackathons.",
      badge: "Association",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "Smart Grid Research & Patents",
      desc: "Faculty published 65+ research papers in IEEE/Scopus journals and filed 3 smart metering patents.",
      badge: "Research",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Electrical & Electronics Engineering"
        subtitle="Powering the Future — Smart Grids, Electric Mobility, Renewable Energy, and Power Electronics"
        hideBreadcrumb={false}
        breadcrumb={[
          { label: "Academics", link: "#" },
          { label: "Departments", link: "#" },
          { label: "EEE" }
        ]}
        backgroundImage={bannerImg}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="eee-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaBolt /> Department of EEE
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Powering the Frontier of <span className="cse-text-accent">Energy & Smart Grids</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Electrical and Electronics Engineering at Nadar Saraswathi College of Engineering and Technology (NSCET) prepares engineers to lead the clean energy transition, electric vehicle revolution, and smart grid automation.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              Our state-of-the-art laboratories and curriculum blend electrical machines, power electronics, embedded systems, and solar energy technologies to cultivate analytical precision and engineering innovation.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#eee-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#eee-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={rightSideImg} alt="Electrical Engineering Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaBolt className="cse-placeholder-icon" />
                  <span>Electrical & Electronics Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Solar Microgrid & EV Testing Center
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="eee-stats">
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
      <section className="cse-section cse-vm-section" id="eee-vision-mission">
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
                To achieve academic and research excellence in Electrical and Electronics Engineering, cultivating creative engineers capable of driving sustainable power systems and smart automation.
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
                <li><FaCheckCircle className="cse-list-icon" /> To deliver high-quality technical education in power systems, electric drives, and renewable energy.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To promote industrial tie-ups, hands-on lab training, and innovation projects.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To nurture ethical values, safety protocols, and sustainable environmental awareness.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="eee-facilities">
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

      {/* SECTION 5: Department Association (Electroblitz) */}
      <section className="cse-section cse-assoc-section" id="eee-associations">
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
                  <img src={electroblitzLogo} alt="Electroblitz Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 6+ Years</span>
              </div>
              <h3 className="cse-assoc-name">Electroblitz — Association of Electrical Engineers</h3>
              <p className="cse-assoc-desc">
                Electroblitz organizes solar energy expos, EV design challenges, circuit debugging contests, and technical industrial seminars for EEE students.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">EV Design Expo</span>
                <span className="cse-chip">Circuit Debugging</span>
                <span className="cse-chip">Solar Microgrid Workshops</span>
                <span className="cse-chip">Paper Presentations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="eee-faculty">
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
      <section className="cse-section cse-achieve-section" id="eee-achievements">
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
      <section className="cse-section cse-events-section" id="eee-events">
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

export default Electrical;
