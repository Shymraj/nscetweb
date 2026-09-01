import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaCogs, FaIndustry, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaFlask, FaRobot, FaTools
} from "react-icons/fa";
import { GiGears, GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { mechanicalFacultyData } from "./facultyData";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";

// Auto-load banner image inside ./images/BE_banner/
const bannerGlobs = import.meta.glob("./images/BE_banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import massLogo from "./images/mass.png";
import rightSideImg from "./Tmeme Img/MECH.png";

// Faculty images
import imgRadhaKrishnan from "./images/radhakrishnan.jpg";
import imgSanthaseelan from "./images/santhaseelan.jpg";
import imgSivaganesan from "./images/sivaganesan.jpg";
import imgNagarajan from "./images/nagarajan.jpg";
import imgSurulimani from "./images/Surulimani.jpg";
import imgHarikishore from "./images/harikishore.jpg";
import imgChakravarthySamy from "./images/chakravarthysamydurai.jpg";
import imgNagaraja from "./images/nagaraja.jpg";
import imgVembathurajesh from "./images/vembathurajesh.png";

import "../cse/CSE.css";

const Mechanical = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/mechanical/faculty/${facultyId}`, "_blank");
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

  const faculties = useDepartmentStaff(['mechanical'], mechanicalFacultyData);

  const stats = [
    { count: "86", label: "Mechanical Students", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "17", label: "Expert Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "0", label: "Research Papers", icon: <FaBookOpen />, color: "#d97706" },
    { count: "90%", label: "Placement Track Record", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "CNC & Advanced Manufacturing Workshop",
      desc: "CNC Lathe, CNC Milling machines, precision lathes, and automated machining centers.",
      icon: <FaIndustry />,
      badge: "CNC & Machining"
    },
    {
      title: "Thermal & Internal Combustion Engine Lab",
      desc: "Multi-cylinder test rigs, computerized engine analyzers, and heat transfer experimental setups.",
      icon: <FaCogs />,
      badge: "Thermal & IC Engines"
    },
    {
      title: "Mechatronics & Robotics Studio",
      desc: "Pneumatic/hydraulic automation trainers, PLC control boards, and industrial robotic arms.",
      icon: <FaRobot />,
      badge: "Robotics & Automation"
    },
    {
      title: "CAD / CAM & 3D Modeling Center",
      desc: "High-end workstations with SolidWorks, Creo, ANSYS simulation, and 3D printing prototyping tools.",
      icon: <FaTools />,
      badge: "CAD/CAM & FEA"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "Automotive & Core Engineering Placements",
      desc: "Graduates secured design and manufacturing roles at TVS Motors, Hyundai, Ashok Leyland, and L&T.",
      badge: "Placements",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "MASS Motor Expo Laurels",
      desc: "Mechanical Engineering Student Association hosted national-level Go-Kart and CAD modeling championships.",
      badge: "Association",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "E-Vehicle & Solar Research Patents",
      desc: "Faculty and students published 75+ research papers and filed 4 patents in solar thermal and EV battery cooling.",
      badge: "Research",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Mechanical Engineering"
        subtitle="Designing the Machines of Tomorrow — Manufacturing Excellence, Thermal Systems, and Smart Mechatronics"
        hideBreadcrumb={false}
        breadcrumb={[
          { label: "Academics", link: "#" },
          { label: "Departments", link: "#" },
          { label: "Mechanical" }
        ]}
        backgroundImage={bannerImg}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="mech-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaCogs /> Department of Mechanical Engineering
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Innovating the Future of <span className="cse-text-accent">Machines & Robotics</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Mechanical Engineering at Nadar Saraswathi College of Engineering and Technology (NSCET) builds engineers capable of designing, analyzing, and manufacturing advanced mechanical systems.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              We impart deep domain knowledge in thermal engineering, robotics, CAD/CAM design, and material science, nurturing practical hands-on mastery alongside ethical values.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#mech-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#mech-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={rightSideImg} alt="Mechanical Engineering Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaCogs className="cse-placeholder-icon" />
                  <span>Mechanical Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Advanced CNC & Mechatronics Lab
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="mech-stats">
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
      <section className="cse-section cse-vm-section" id="mech-vision-mission">
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
                To achieve global recognition in mechanical engineering education and research, developing innovative software-driven mechanical engineers and industrial leaders.
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
                <li><FaCheckCircle className="cse-list-icon" /> To provide rigorous technical education in design, thermal systems, and manufacturing.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To foster industrial collaborations, internships, and robotics automation projects.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To instill ethical values, teamwork, and sustainable engineering practices.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="mech-facilities">
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

      {/* SECTION 5: Department Association (MASS) */}
      <section className="cse-section cse-assoc-section" id="mech-associations">
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
                  <img src={massLogo} alt="MASS Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 6+ Years</span>
              </div>
              <h3 className="cse-assoc-name">MASS — Mechanical Association of Smart Students</h3>
              <p className="cse-assoc-desc">
                MASS conducts vehicle design expos, Go-Kart races, CAD modeling competitions, and technical industrial seminars for mechanical engineering students.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">Vehicle Expo</span>
                <span className="cse-chip">Go-Kart Races</span>
                <span className="cse-chip">CAD Modeling</span>
                <span className="cse-chip">Robotics Expo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="mech-faculty">
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
      <section className="cse-section cse-achieve-section" id="mech-achievements">
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
      <section className="cse-section cse-events-section" id="mech-events">
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

export default Mechanical;
