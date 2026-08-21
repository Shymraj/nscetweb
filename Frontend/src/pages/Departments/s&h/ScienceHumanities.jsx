import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDepartmentStaff } from "../../../hooks/useDepartmentStaff";
import { Link } from "react-router-dom";
import {
  FaFlask, FaMicroscope, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaSquareRootAlt, FaGlobe, FaAtom
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import { shFacultyData } from "./facultyData";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";

// Auto-load banner image inside ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import logo7thSense from "./images/seventh.png";
import rightSideImg from "./Theme Img/S&H.png";

// Faculty Imports
import imgVembathuRajesh from "./images/vembathurajesh.png";
import imgChithra from "./images/Dr.C.CHITHRA.jpg";
import imgDavidMathan from "./images/davidmathan.jpg";
import imgRichardBritto from "./images/richard britto.jpg";
import imgSubathamani from "./images/Subathamani.png";
import imgMallaiyasamy from "./images/mailysamy.jpg";
import imgKarunyah from "./images/karunyah.jpg";
import imgArulvizhi from "./images/arulvizhi.jpg";
import imgDhandayuthapani from "./images/dhandayuthapani.jpg";
import imgRajaguru from "./images/rajaguru.jpg";
import imgKrishnamoorthi from "./images/krishnamoorthy.jpg";
import imgArunKumar from "./images/arunkumar.jpg";
import imgSelvapriya from "./images/Selvapriya.jpg";
import imgReka from "./images/Reka.jpg";
import imgBuvaneshwari from "./images/Buvaneswarih.jpg";
import imgDeviMeenakshi from "./images/1778918990_Chemistry - Devi Meenakshi.jpg";
import imgMalarvizhi from "./images/malarvizhi.jpg";
import imgValarmathi from "./images/Valarmathi.jpg";
import imgMufeena from "./images/Mufeena.JPG";
import imgSaravanakumar from "./images/Saravakumar.png";
import imgSumathra from "./images/1778919066_Chemistry - Sumathra.jpeg";
import imgSangeetha from "./images/1778919146_English - Sangeetha.jpeg";
import imgMurugan from "./images/1778919261_Maths - Murugan.jpeg";
import imgDiana from "./images/Physics - Diana.jpg";
import imgEaswari from "./images/1778919497_Physics - Easwari.jpeg";
import imgIniya from "./images/General Engg - Iniya.jpeg";
import imgNandhini from "./images/General Engg - Nandini.jpeg";
import imgSrinithi from "./images/Chemistry - Srinithi.jpeg";
import imgRajeshshree from "./images/Rajeshshree.jpeg";
import imgThisha from "./images/thisha.jpeg";
import imgRamKumar from "./images/ramkumar.jpeg";

import "../cse/CSE.css";

const ScienceHumanities = () => {
  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(`/departments/science-humanities/faculty/${facultyId}`, "_blank");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const faculties = useDepartmentStaff(['science and humanities'], shFacultyData);

  const stats = [
    { count: "600+", label: "First Year Students", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "33+", label: "Dedicated S&H Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "90+", label: "Research Publications", icon: <FaBookOpen />, color: "#d97706" },
    { count: "6+", label: "Science & Language Labs", icon: <FaFlask />, color: "#7c3aed" },
    { count: "95%", label: "First Year Pass Rate", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Engineering Physics Laboratory",
      desc: "He-Ne Laser systems, fiber optic characterization kits, spectrometer setups, and ultrasonic interferometers.",
      icon: <FaAtom />,
      badge: "Physics"
    },
    {
      title: "Engineering Chemistry Laboratory",
      desc: "Spectrophotometers, pH meters, water quality analysis apparatus, and viscosity testing units.",
      icon: <FaFlask />,
      badge: "Chemistry"
    },
    {
      title: "Language Communication Lab",
      desc: "Multimedia computer systems equipped with interactive phonetics software and soft skills modules.",
      icon: <FaGlobe />,
      badge: "Language & Soft Skills"
    },
    {
      title: "Computer Practice & Graphics Studio",
      desc: "AutoCAD 2D/3D modeling stations, C/Python programming environments for first-year engineering foundation.",
      icon: <FaSquareRootAlt />,
      badge: "Graphics & Math"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "100% First-Year Foundation Transition",
      desc: "Successfully transitioned over 600+ engineering freshmen into core disciplines with solid foundational knowledge.",
      badge: "Academics",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "7th Sense Science Expo Laurels",
      desc: "Student association hosted inter-collegiate science fairs, mathematics olympiads, and English literary competitions.",
      badge: "Association",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "Research Publications & Books",
      desc: "S&H faculty published 90+ research papers in Scopus-indexed physics, chemistry, and mathematics journals.",
      badge: "Research",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Science & Humanities"
        subtitle="Building Strong Academic Foundations — Nurturing Scientific Inquiry, Mathematical Rigor, and Global Communication"
        hideBreadcrumb={false}
        breadcrumb={[
          { label: "Academics", link: "#" },
          { label: "Departments", link: "#" },
          { label: "Science & Humanities" }
        ]}
        backgroundImage={bannerImg}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="sh-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaFlask /> Department of Science & Humanities
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Foundation of Engineering <span className="cse-text-accent">Excellence & Discovery</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Science and Humanities at Nadar Saraswathi College of Engineering and Technology (NSCET) lays the foundational cornerstone for all engineering disciplines.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              We impart core principles in Engineering Mathematics, Applied Physics, Environmental Chemistry, and Professional English, fostering analytical thinking and communication proficiency.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#sh-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#sh-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={rightSideImg} alt="Science & Humanities Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaFlask className="cse-placeholder-icon" />
                  <span>Science & Humanities</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Language & Basic Science Labs
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="sh-stats">
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
      <section className="cse-section cse-vm-section" id="sh-vision-mission">
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
                To build an extraordinary scientific foundation for engineering students, nurturing logical reasoning, environmental responsibility, and effective communication.
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
                <li><FaCheckCircle className="cse-list-icon" /> To provide rigorous foundational education in Physics, Chemistry, Mathematics, and Humanities.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To develop effective communication, interpersonal, and leadership skills.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To instill ethical values, environmental sustainability, and scientific curiosity.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="sh-facilities">
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

      {/* SECTION 5: Department Association (7th SENSE) */}
      <section className="cse-section cse-assoc-section" id="sh-associations">
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
                  <img src={logo7thSense} alt="7th Sense Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 6+ Years</span>
              </div>
              <h3 className="cse-assoc-name">7th SENSE — Science & Humanities Association</h3>
              <p className="cse-assoc-desc">
                7th SENSE organizes science expos, math olympiads, English debate competitions, and eco-friendly green initiatives for first-year engineering students.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">Science Expo</span>
                <span className="cse-chip">Math Olympiad</span>
                <span className="cse-chip">English Debates</span>
                <span className="cse-chip">Eco Club</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="sh-faculty">
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
      <section className="cse-section cse-achieve-section" id="sh-achievements">
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
      <section className="cse-section cse-events-section" id="sh-events">
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

export default ScienceHumanities;
