import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaLaptopCode, FaDatabase, FaServer, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaShieldAlt
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { mecseFacultyData } from "./mecse/facultyData";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";
import DepartmentHODProfile from "../../../components/common/DepartmentHODProfile/DepartmentHODProfile";

// Auto-load banner image inside ./meCSE_banner/
const bannerGlobs = import.meta.glob("./meCSE_banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import rightSideImg from "./mecse/Theme Img/MECSE.png";
import imgSathya from "./images/sathya.jpeg";
import imgKarthick from "./images/karthick.jpeg";

import "./CSE.css";

const MECSE = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/me-cse/faculty/${facultyId}`, "_blank");
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

  const faculties = useDepartmentStaff(['m.e. - computer science'], mecseFacultyData);

  const hod = faculties[0];
  const staff = faculties.slice(1);

  const stats = [
    { count: "40+", label: "PG Research Scholars", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "5+", label: "Senior PG Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "30+", label: "Scopus Research Papers", icon: <FaBookOpen />, color: "#d97706" },
    { count: "3+", label: "Advanced Computing Labs", icon: <FaServer />, color: "#7c3aed" },
    { count: "100%", label: "Research Thesis Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Advanced Distributed Systems Lab",
      desc: "Dedicated high-speed servers for parallel computing, Hadoop clusters, and cloud virtualization research.",
      icon: <FaServer />,
      badge: "Distributed Systems"
    },
    {
      title: "Software Engineering & Algorithm Studio",
      desc: "Workstations for advanced algorithm design, software verification, and automated testing tools.",
      icon: <FaLaptopCode />,
      badge: "Algorithms"
    },
    {
      title: "Cyber Security & Data Privacy Center",
      desc: "Secure network testbeds, cryptographic software libraries, and intrusion detection research tools.",
      icon: <FaShieldAlt />,
      badge: "Cyber Security"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "PG Research Publications",
      desc: "M.E. CSE scholars published high-impact research papers in IEEE, Elsevier, and Springer journals.",
      badge: "Research",
      icon: <FaBookOpen />
    },
    {
      year: "2024 - 2025",
      title: "PG Placement & Academic Roles",
      desc: "Graduating scholars secured senior software engineering and academic assistant professor positions.",
      badge: "Placements",
      icon: <FaChartLine />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of M.E. Computer Science & Engineering"
        subtitle="Driving the Next Generation of Computing Through Advanced Research, Scalable Architecture, and Intelligent Systems"
        hideBreadcrumb={false}
        breadcrumb={[
          { label: "Academics", link: "#" },
          { label: "Departments", link: "#" },
          { label: "M.E. CSE" }
        ]}
        backgroundImage={bannerImg}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="mecse-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaLaptopCode /> Postgraduate M.E. Program
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Advanced Research in <span className="cse-text-accent">Computer Science & Systems</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The M.E. Computer Science and Engineering program at Nadar Saraswathi College of Engineering and Technology (NSCET) focuses on advanced computing paradigms, distributed software architectures, and intelligent algorithms.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              We empower postgraduate scholars to conduct cutting-edge research, publish in top-tier international journals, and innovate solutions for enterprise software systems.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#mecse-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#mecse-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={rightSideImg} alt="M.E. CSE Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaLaptopCode className="cse-placeholder-icon" />
                  <span>M.E. Computer Science & Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Postgraduate Research Center
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="mecse-stats">
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
      <section className="cse-section cse-vm-section" id="mecse-vision-mission">
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
                To achieve international excellence in postgraduate computer science education and research, producing scholars who drive technological breakthroughs.
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
                <li><FaCheckCircle className="cse-list-icon" /> To provide advanced coursework in distributed systems, algorithms, and cloud computing.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To mentor scholars in publishing high-impact research papers and patenting original solutions.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To cultivate academic leadership, intellectual integrity, and research ethics.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="mecse-facilities">
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

      {/* SECTION 5: HOD Leadership */}
      <section className="cse-section cse-hod-section" id="mecse-hod">
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Program <span className="cse-text-accent">Leadership</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <DepartmentHODProfile 
            hod={{
              ...hod,
              quoteText: "Postgraduate education is about pushing boundaries. We empower our scholars to conduct meaningful research that transforms computing theory into industrial innovation."
            }} 
            onOpenProfile={handleOpenProfile} 
          />
        </div>
      </section>

      {/* SECTION 6: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="mecse-faculty">
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
            {staff.map((member, idx) => (
              <DepartmentFacultyCard 
                key={idx} 
                member={member} 
                onOpenProfile={handleOpenProfile} 
                fadeInUp={fadeInUp} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: Department Achievements */}
      <section className="cse-section cse-achieve-section" id="mecse-achievements">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Program <span className="cse-text-accent">Achievements</span>
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

      {/* SECTION 8: Events */}
      <section className="cse-section cse-events-section" id="mecse-events">
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={scaleUp}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Program <span className="cse-text-accent">Events</span>
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

export default MECSE;
