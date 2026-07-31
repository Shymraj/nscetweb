import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHardHat, FaDraftingCompass, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaFlask, FaMapMarkedAlt
} from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";

import PageBanner from "../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";
import DepartmentHODProfile from "../../../components/common/DepartmentHODProfile/DepartmentHODProfile";

// Auto-load civil banner image from ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.entries(bannerGlobs).find(([path]) => path.toLowerCase().includes("/civil.") || path.toLowerCase().endsWith("civil.png"))?.[1] || Object.values(bannerGlobs)[0] || null;

import imgNagarathinam from "./images/nagarathinam.jpg";
import imgGayathri from "./images/gayathri.jpg";
import imgShanmugapriyan from "./images/shanmugapriyan.jpg";
import imgSowmiya from "./images/sowmiya.jpg";
import imgKanimozhi from "./images/kanimozhi.jpg";
import imgAruljebaraj from "./images/aruljebaraj.jpg";
import imgNathirunSabinash from "./images/nathirunsabinash.jpg";
import imgHariprasath from "./images/hariprasath.jpg";
import imgManojPrabakar from "./images/Manoj_prabakar.jpg";
import eycaLogo from "./images/eyca-logo.png";

import "../cse/CSE.css";
import { civilFacultyData } from "./facultyData";

const Civil = () => {
  const [selectedFacultyProfile, setSelectedFacultyProfile] = useState(null);

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

  const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || "hod";
    window.open(
      `/departments/civil/faculty/${facultyId}`,
      "_blank"
    );
  };

  const faculties = civilFacultyData;

  const hod = faculties[0];
  const staff = faculties.slice(1);

  const stats = [
    { count: "380+", label: "Civil Students Enrolled", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "12+", label: "Expert Civil Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "50+", label: "Testing Consultancies", icon: <FaFlask />, color: "#d97706" },
    { count: "6+", label: "NABL Grade Labs", icon: <BsBuildingsFill />, color: "#7c3aed" },
    { count: "90%", label: "Placement Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "Strength of Materials & Concrete Lab",
      desc: "Universal Testing Machines, compression testing equipment, and concrete mix design prototyping tools.",
      icon: <BsBuildingsFill />,
      badge: "Materials & Concrete"
    },
    {
      title: "Surveying & Total Station Lab",
      desc: "Advanced Total Stations, DGPS instruments, auto-levels, and digital land survey tools.",
      icon: <FaMapMarkedAlt />,
      badge: "Land Survey"
    },
    {
      title: "Geotechnical & Soil Mechanics Lab",
      desc: "Direct shear, triaxial, and compaction testing apparatus for foundation soil stability analysis.",
      icon: <FaHardHat />,
      badge: "Geotechnical"
    },
    {
      title: "CADD & Structural Design Studio",
      desc: "High-end CAD workstations with AutoCAD, STAAD.Pro, ETABS, and Revit 3D building modeling tools.",
      icon: <FaDraftingCompass />,
      badge: "CAD & BIM"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "High-Rise & Infrastructure Placements",
      desc: "Graduates placed in L&T Infrastructure, Shapoorji Pallonji, and top civil consultancy firms.",
      badge: "Placements",
      icon: <FaChartLine />
    },
    {
      year: "2024 - 2025",
      title: "EYCA Association Conclave",
      desc: "Elite Youth Civil Association hosted state-level model building and bridge loading competitions.",
      badge: "Association",
      icon: <FaAward />
    },
    {
      year: "2023 - 2024",
      title: "Government Material Testing Consultancy",
      desc: "Department executed soil testing and concrete quality consultancy projects for local municipal projects.",
      badge: "Consultancy",
      icon: <FaFlask />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Civil Engineering"
        subtitle="Building the Foundation of Tomorrow — Where Sustainable Design Meets Structural Excellence"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
        height="auto"
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="civil-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <BsBuildingsFill /> Department of Civil Engineering
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Engineering the World's <span className="cse-text-accent">Infrastructure & Towers</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              Our department aims to produce engineers with extraordinary abilities focusing on the Strength, Stiffness, and Stability of structures. We embed a deep understanding of Cost, Constructability, Safety, Aesthetics, and Sustainability into every student.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              From mammoth bridges and flyovers to sustainable towers and tunnels, our civil engineers are trained to design solutions that are safe and serviceable to serve humanity.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#civil-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#civil-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={bannerImg} alt="Civil Engineering Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <BsBuildingsFill className="cse-placeholder-icon" />
                  <span>Civil Engineering</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Material Testing Consultancy
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="civil-stats">
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
      <section className="cse-section cse-vm-section" id="civil-vision-mission">
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
                To achieve international recognition in civil engineering education and research by molding students into highly skilled, ethical, and sustainable infrastructure builders.
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
                <li><FaCheckCircle className="cse-list-icon" /> To impart deep technical fundamentals in structural design, surveying, and material science.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To provide hands-on consultancy, site visits, and industrial training experiences.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To promote sustainable green building techniques, ethics, and leadership in civil engineering.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="civil-facilities">
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

      {/* SECTION 5: Department Association (EYCA) */}
      <section className="cse-section cse-assoc-section" id="civil-associations">
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
                  <img src={eycaLogo} alt="EYCA Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 6+ Years</span>
              </div>
              <h3 className="cse-assoc-name">EYCA — Elite Youth Civil Association</h3>
              <p className="cse-assoc-desc">
                EYCA organizes inter-college bridge building competitions, AutoCAD design contests, surveyor challenges, and site visit expos.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">Bridge Model Competitions</span>
                <span className="cse-chip">Surveying Challenges</span>
                <span className="cse-chip">CAD Expo</span>
                <span className="cse-chip">Site Visits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: HOD Leadership */}
      <section className="cse-section cse-hod-section" id="civil-hod">
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
              quoteText: "Civil Engineering is the backbone of societal growth. We train our engineers to construct safe, sustainable, and aesthetically brilliant structures for future generations."
            }} 
            onOpenProfile={handleOpenProfile} 
          />
        </div>
      </section>

      {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="civil-faculty">
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
      <section className="cse-section cse-achieve-section" id="civil-achievements">
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
      <section className="cse-section cse-events-section" id="civil-events">
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

export default Civil;
