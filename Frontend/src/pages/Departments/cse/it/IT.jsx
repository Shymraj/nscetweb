import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLaptopCode, FaServer, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaNetworkWired, FaCloudUploadAlt, FaDatabase
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { itFacultyData } from "./facultyData";

import PageBanner from "../../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";
import DepartmentHODProfile from "../../../../components/common/DepartmentHODProfile/DepartmentHODProfile";

// Auto-load banner image inside ./banner/
const bannerGlobs = import.meta.glob("./banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import nexusLogo from "./images/nexus.jpg";

// Faculty Imports
import imgPrathap from "./images/prathap.jpg";
import imgUdhayakumar from "./images/udhayakumar.jpg";
import imgKesavamoorthy from "./images/kesavamoorthy.jpg";
import imgSaiSuganya from "./images/68060d94a3a65_sai suganya.jpg";
import imgBhavani from "./images/Bhavani.jpg";
import imgMahalakshmi from "./images/Mahalakshmi.jpg";
import imgJasmineJose from "./images/jasminejose.jpg";
import imgArulJothi from "./images/aruljothi.jpg";

import "../../cse/CSE.css";

const IT = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/it/faculty/${facultyId}`, "_blank");
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

  const faculties = itFacultyData;

  const hod = faculties[0];
  const staff = faculties.slice(1);

  const stats = [
    { count: "320+", label: "IT Students Enrolled", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "12+", label: "Expert Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "60+", label: "Research Publications", icon: <FaBookOpen />, color: "#d97706" },
    { count: "5+", label: "Advanced IT Labs", icon: <FaServer />, color: "#7c3aed" },
    { count: "92%", label: "Placement Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Cloud & Network Infrastructure Lab",
      desc: "Equipped with cloud virtualization software, Cisco routing switches, and high-performance server clusters.",
      icon: <FaCloudUploadAlt />,
      badge: "Cloud & Networks"
    },
    {
      title: "Full-Stack Web Engineering Lab",
      desc: "Modern development environments for React, Node, Python web frameworks, and enterprise database systems.",
      icon: <FaLaptopCode />,
      badge: "Software Dev"
    },
    {
      title: "Data Analytics & Security Lab",
      desc: "Dedicated workstations for big data tools, network traffic analyzers, and security penetration testing.",
      icon: <FaDatabase />,
      badge: "Data & Security"
    },
    {
      title: "IoT & Mobile Computing Center",
      desc: "Hardware prototyping boards, sensors, and mobile application test environments for smart solutions.",
      icon: <FaNetworkWired />,
      badge: "IoT Systems"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "High-Package IT Placements",
      desc: "Information Technology graduates secured top roles in Cloud Architecture, DevOps, and Full-Stack Engineering.",
      badge: "Placements",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "NEXUS Tech Fest Laurels",
      desc: "Department student association hosted inter-collegiate codeathons and technical hackathons with over 500+ participants.",
      badge: "Association",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "Cloud Certification Excellence",
      desc: "Over 80%+ IT students completed AWS, Azure, and Cisco professional cloud certifications.",
      badge: "Certifications",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Information Technology"
        subtitle="Empowering Next-Generation Digital Innovators Through Cloud Systems, Data Analytics, and Software Architecture"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
        height="auto"
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="it-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaLaptopCode /> Department of IT
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Building the Engine of the <span className="cse-text-accent">Global Digital Economy</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Information Technology at Nadar Saraswathi College of Engineering and Technology (NSCET) prepares students to become versatile software engineers, cloud architects, and data strategists.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              Our curriculum blends theoretical foundations with hands-on exposure to cloud computing, cybersecurity, web applications, and artificial intelligence, fostering innovation, analytical thinking, and ethical professional conduct.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#it-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#it-faculty" className="cse-btn cse-btn-secondary">
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
              {bannerImg ? (
                <img src={bannerImg} alt="IT Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaLaptopCode className="cse-placeholder-icon" />
                  <span>Information Technology</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Industry-Aligned IT Curriculum
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="it-stats">
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
      <section className="cse-section cse-vm-section" id="it-vision-mission">
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
                To achieve academic excellence in Information Technology by imparting high-quality technical education, research mindset, and entrepreneurial spirit to meet global industry needs.
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
                <li><FaCheckCircle className="cse-list-icon" /> To provide comprehensive education in cloud computing, data science, and web architectures.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To establish collaborative partnerships with IT industries for internships and real-world projects.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To instill ethical values, leadership qualities, and lifelong learning attitudes in students.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="it-facilities">
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

      {/* SECTION 5: Department Association (NEXUS) */}
      <section className="cse-section cse-assoc-section" id="it-associations">
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
                  <img src={nexusLogo} alt="NEXUS Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 5+ Years</span>
              </div>
              <h3 className="cse-assoc-name">NEXUS — Network of Exceptional IT Technocrats</h3>
              <p className="cse-assoc-desc">
                NEXUS empowers IT students through technical symposiums, code challenges, web development bootcamps, and industrial mentorship programs.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">Web Hackathons</span>
                <span className="cse-chip">Cloud Bootcamps</span>
                <span className="cse-chip">Code Sprints</span>
                <span className="cse-chip">Industry Talks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: HOD Leadership */}
      <section className="cse-section cse-hod-section" id="it-hod">
        <div className="cse-container">
          <motion.div 
            className="cse-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="cse-section-title">
              Department <span className="cse-text-accent">Leadership</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="cse-accent-bar center"></motion.div>
          </motion.div>

          <DepartmentHODProfile 
            hod={{
              ...hod,
              quoteText: "Our mission is to shape competent IT professionals who leverage emerging technologies to drive digital transformation and solve global engineering challenges."
            }} 
            onOpenProfile={handleOpenProfile} 
          />
        </div>
      </section>

      {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="it-faculty">
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

      {/* SECTION 8: Department Achievements */}
      <section className="cse-section cse-achieve-section" id="it-achievements">
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
      <section className="cse-section cse-events-section" id="it-events">
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

export default IT;
