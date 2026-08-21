import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaHardHat, FaDraftingCompass, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaFlask
} from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { mestructuralFacultyData } from "./mestructural/facultyData";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";
import DepartmentHODProfile from "../../../components/common/DepartmentHODProfile/DepartmentHODProfile";

// Auto-load me_structuraleng banner image from ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.entries(bannerGlobs).find(([path]) => path.toLowerCase().includes("me_structural") || path.toLowerCase().includes("structural"))?.[1] || Object.values(bannerGlobs)[0] || null;

import imgAnanthaKrishnan from "./images/ananthakrishnan.jpg";
import rightSideImg from "./mestructural/Theme Img/structural_eng.png";
import imgSindhu from "./images/sindhu.jpg";
import imgBenita from "./images/Benita Photo.jpg";

import "../cse/CSE.css";

const MEStructural = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/me-structural/faculty/${facultyId}`, "_blank");
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

  const faculties = useDepartmentStaff(['m.e. - structural'], mestructuralFacultyData);

  const hod = faculties[0];
  const staff = faculties.slice(1);

  const stats = [
    { count: "35+", label: "PG Structural Scholars", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "4+", label: "Senior Structural Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "25+", label: "Scopus Journal Papers", icon: <FaBookOpen />, color: "#d97706" },
    { count: "3+", label: "NABL Material Testing Labs", icon: <BsBuildingsFill />, color: "#7c3aed" },
    { count: "100%", label: "Thesis Completion Rate", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Advanced Structural Testing Laboratory",
      desc: "Heavy-duty loading frames, servo-hydraulic actuators, and digital strain measurement systems.",
      icon: <BsBuildingsFill />,
      badge: "Structural Testing"
    },
    {
      title: "Finite Element & Structural CAD Studio",
      desc: "High-performance stations running ANSYS Structural, SAP2000, ETABS, and ABAQUS simulation software.",
      icon: <FaDraftingCompass />,
      badge: "FEM & Simulation"
    },
    {
      title: "Concrete & Material Diagnostics Center",
      desc: "Non-destructive testing equipment, ultrasonic pulse velocity meters, and rebound hammers.",
      icon: <FaFlask />,
      badge: "Material NDT"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "Bridge & High-Rise Consultancies",
      desc: "M.E. Structural scholars executed structural health monitoring and load audit consultancies for regional infrastructure.",
      badge: "Consultancy",
      icon: <FaFlask />
    },
    {
      year: "2024 - 2025",
      title: "Seismic & Earthquake Research Papers",
      desc: "Scholars published 25+ papers in earthquake-resistant concrete and base-isolation technologies.",
      badge: "Research",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of M.E. Structural Engineering"
        subtitle="Mastering High-Rise Towers, Seismic Resilience, Advanced Concrete Science, and Finite Element Modeling"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
        height="auto"
        className="me-structural-banner"
        style={{ paddingTop: "95px" }}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="mestructural-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <BsBuildingsFill /> Postgraduate M.E. Program
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Advanced Research in <span className="cse-text-accent">Structural Engineering</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The M.E. Structural Engineering program at Nadar Saraswathi College of Engineering and Technology (NSCET) develops specialists in seismic structural design, finite element analysis, and advanced concrete technology.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              Our postgraduate research laboratory and testing facilities equip scholars to design disaster-resilient infrastructure and execute real-world structural health audits.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#mestructural-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#mestructural-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={rightSideImg} alt="M.E. Structural Engineering Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <BsBuildingsFill className="cse-placeholder-icon" />
                  <span>M.E. Structural Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> NABL Structural Diagnostics Lab
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="mestructural-stats">
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
      <section className="cse-section cse-vm-section" id="mestructural-vision-mission">
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
                To achieve international distinction in structural engineering research, producing scholars who pioneer sustainable and earthquake-resistant infrastructure.
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
                <li><FaCheckCircle className="cse-list-icon" /> To provide advanced instruction in finite element modeling, structural dynamics, and prestressed concrete.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To conduct high-impact consultancy projects in structural health audit and disaster resilience.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To nurture research ethics, leadership, and sustainable building philosophies.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="mestructural-facilities">
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
      <section className="cse-section cse-hod-section" id="mestructural-hod">
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
              quoteText: "Structural Engineering requires absolute precision. We empower our postgraduate scholars to design resilient high-rise structures that withstand seismic forces."
            }} 
            onOpenProfile={handleOpenProfile} 
          />
        </div>
      </section>

      {/* SECTION 6: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="mestructural-faculty">
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

      {/* SECTION 7: Program Achievements */}
      <section className="cse-section cse-achieve-section" id="mestructural-achievements">
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
      <section className="cse-section cse-events-section" id="mestructural-events">
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

export default MEStructural;
