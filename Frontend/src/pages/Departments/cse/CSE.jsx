import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaLaptopCode, FaDatabase, FaShieldAlt, FaServer,
  FaUserTie, FaEnvelope, FaGraduationCap, FaChalkboardTeacher,
  FaBookOpen, FaChartLine, FaDownload, FaPaperPlane, FaCalendarTimes,
  FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle, FaQuoteLeft, FaFileAlt
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { cseFacultyData } from "./facultyData";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";

// Auto-load banner image inside ./CSE_banner/
const bannerGlobs = import.meta.glob("./CSE_banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import fistLogo from "./images/fist.png";
import rightSideImg from "./Theme Img/CSE.png";

import imgMathalaiRaj from "./images/67dd26bfce3c4_mathalairaj.jpg";
import imgVelkumar from "./images/69143b078344d_velkumar.JPG";
import imgDeepiga from "./images/deepika.jpg";
import imgArchana from "./images/archana.jpeg";
import imgAbirami from "./images/1774499419_abirami mam.jpeg";
import imgVenkataLakshmi from "./images/Venkata Lakshmi M.jpg";
import imgAnusuya from "./images/ANUSUYA VAIRAMUTHU.jpg";
import imgVinothini from "./images/1778918321_CSE - Vinothini.jpeg";
import imgSnega from "./images/1778918481_CSE - Snega Priyanka.png";

import "./CSE.css";

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

const CSE = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/cse/faculty/${facultyId}`, "_blank");
  };

  const faculties = useDepartmentStaff(['cse', 'computer science'], cseFacultyData);

  const stats = [
    { count: "166", label: "Students Enrolled", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "9", label: "Expert Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "0", label: "Research Papers", icon: <FaBookOpen />, color: "#d97706" },
    { count: "0", label: "Specialized Labs", icon: <FaServer />, color: "#7c3aed" },
    { count: "90%", label: "Placement Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Software Engineering Labs",
      desc: "Advanced coding workstations equipped with modern IDEs, full-stack development frameworks, and open-source tools.",
      icon: <FaLaptopCode />,
      badge: "Development"
    },
    {
      title: "Data Systems & Analytics",
      desc: "High-performance database servers, big data processing frameworks, and cloud analytics platform infrastructure.",
      icon: <FaDatabase />,
      badge: "Big Data"
    },
    {
      title: "Cyber Security & Networks",
      desc: "Dedicated security testing environments, ethical hacking simulators, and network defense protocol labs.",
      icon: <FaShieldAlt />,
      badge: "Security"
    },
    {
      title: "AI & Systems Research",
      desc: "High-performance GPU computing nodes, machine learning toolkits, and IoT prototyping experimental setups.",
      icon: <FaServer />,
      badge: "AI & Innovation"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "95%+ Placement Track Record",
      desc: "Graduating CSE students secured high-package engineering roles across leading IT multinationals and software product firms.",
      badge: "Placements",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "National Hackathon Laurels",
      desc: "Student innovation teams won top positions in National Smart India Hackathons and regional software coding competitions.",
      badge: "Hackathons",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "Research Publications & Patents",
      desc: "Over 85+ Scopus-indexed research papers published by faculty and students along with multiple patent applications filed.",
      badge: "Research",
      icon: <FaBookOpen />
    },
    {
      year: "2022 - 2023",
      title: "In-House Product Incubation",
      desc: "Successfully launched production-grade enterprise software applications for college administration through student incubation.",
      badge: "Incubation",
      icon: <FaLightbulb />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved) */}
      <PageBanner
        title="Department of Computer Science & Engineering"
        subtitle="Innovating the Digital Frontier — Shaping the Future Through Code, Intelligence, and Industry Excellence"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
        height="auto"
      />

      {/* SECTION 1: Department Introduction */}
      <section className="cse-section cse-intro-section" id="cse-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaLaptopCode /> Department of CSE
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Engineering the Future of <span className="cse-text-accent">Software & Intelligence</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Computer Science and Engineering at Nadar Saraswathi College of Engineering and Technology (NSCET) aims to produce engineers who are lifelong learners, pursuing professional development and thriving in a multidisciplinary, systems-oriented work environment.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              We train students to solve complex technical problems in the software industry, equipping them with deep expertise in software engineering, artificial intelligence, data systems, and cyber security while upholding strong ethical values, leadership, and tolerance.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#cse-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#cse-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={rightSideImg} alt="CSE Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaLaptopCode className="cse-placeholder-icon" />
                  <span>Computer Science & Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> NAAC 'A' Grade Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Department Statistics */}
      <section className="cse-section cse-stats-section" id="cse-stats">
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
      <section className="cse-section cse-vm-section" id="cse-vision-mission">
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
                To become a leading hub in the field of Computer engineering, producing confident software professionals and researchers of high caliber.
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
                <li><FaCheckCircle className="cse-list-icon" /> To provide strong theoretical and practical knowledge emphasizing software development.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To encourage autonomous learning, foster interactions, and establish partnerships with renowned software industries.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To inculcate soft skills, leadership qualities, and innovative research skills with ethical values.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="cse-facilities">
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

      {/* SECTION 5: Department Association (FIST) */}
      <section className="cse-section cse-assoc-section" id="cse-associations">
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
                  <img src={fistLogo} alt="FIST Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 6+ Years</span>
              </div>
              <h3 className="cse-assoc-name">Fraternity of Immortal Software Technocrats (FIST)</h3>
              <p className="cse-assoc-desc">
                Running successfully for over six years, our passionate group of engineers constantly involve themselves in organizing technical and non-technical events to invoke creativity, team building, and leadership skills.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">Technical Events</span>
                <span className="cse-chip">Coding Competitions</span>
                <span className="cse-chip">Hackathons</span>
                <span className="cse-chip">Workshops</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION 7: Faculty Members */}
      <section className="cse-section cse-faculty-section" id="cse-faculty">
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
                key={idx} 
                member={member} 
                onOpenProfile={handleOpenProfile} 
                fadeInUp={fadeInUp} 
                isHOD={idx === 0}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Department Achievements */}
      <section className="cse-section cse-achieve-section" id="cse-achievements">
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
      <section className="cse-section cse-events-section" id="cse-events">
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
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

export default CSE;
