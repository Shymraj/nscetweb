import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBrain, FaNetworkWired, FaUserTie, FaEnvelope, FaGraduationCap,
  FaChalkboardTeacher, FaBookOpen, FaChartLine, FaDownload, FaPaperPlane,
  FaCalendarTimes, FaCalendarAlt, FaAward, FaLightbulb, FaCheckCircle,
  FaRobot, FaDatabase, FaProjectDiagram
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";

import PageBanner from "../../../../components/common/PageBanner/PageBanner";
import FacultyProfileModal from "../../../../components/common/FacultyProfileModal/FacultyProfileModal";
import DepartmentFacultyCard from "../../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";
import DepartmentHODProfile from "../../../../components/common/DepartmentHODProfile/DepartmentHODProfile";

// Auto-load banner image inside ./banner/
const bannerGlobs = import.meta.glob("./banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

import aimLogo from "./images/aim.png";

// Faculty Imports
import imgVignesh from "./images/vignesh.jpg";
import imgVinothKumar from "./images/vinothkumar.jpg";
import imgKanimoli from "./images/kanimoli.jpg";
import imgGeerthiga from "./images/68060bda58c98_Geerthiga.jpg";
import imgPavithra from "./images/Pavithra.jpg";
import imgNagajothi from "./images/Nagajothi.jpg";
import imgSunitha from "./images/1778918688_ADS - Sunitha.jpeg";
import imgKodeeswaran from "./images/1778918812_ADS - Kodeeswaran.jpeg";

import "../../cse/CSE.css";

const AIDS = () => {
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

  const faculties = [
    { name: "Mr. L.S. Vignesh", desig: "Assistant Professor & Head [I/C]", qual: "M.E., (Ph.D)", email: "hodai_ds@nscet.org", image: imgVignesh, spec: "Artificial Intelligence & Deep Learning", objectPosition: "center 10%" },
    { name: "Mr. J. Vinoth Kumar", desig: "Assistant Professor", qual: "M.E., (Ph.D)", email: "vinothkumar@nscet.org", image: imgVinothKumar, spec: "Machine Learning & Neural Networks", objectPosition: "center 10%" },
    { name: "J. Kanimoli", desig: "Assistant Professor", qual: "M.E.", email: "kanimoli@nscet.org", image: imgKanimoli, spec: "Data Engineering & Analytics", objectPosition: "center 10%" },
    { name: "Mrs. G. Geerthiga", desig: "Assistant Professor", qual: "M.E.", email: "geerthiga@nscet.org", image: imgGeerthiga, spec: "Computer Vision & Pattern Recognition", objectPosition: "center 10%" },
    { name: "Mrs. M. Pavithra", desig: "Assistant Professor", qual: "M.E.", email: "pavithra@nscet.org", image: imgPavithra, spec: "Natural Language Processing & AI", objectPosition: "center 10%" },
    { name: "Ms. P. Nagajothi", desig: "Assistant Professor", qual: "M.E.", email: "nagajothi@nscet.org", image: imgNagajothi, spec: "Predictive Modeling & Big Data", objectPosition: "center 10%" },
    { name: "Sunitha S", desig: "Assistant Professor", qual: "M.E.", email: "sunitha.sagee@gmail.com", image: imgSunitha, spec: "Data Mining & Python Systems", objectPosition: "center 12%" },
    { name: "Kodeeswaran S", desig: "Assistant Professor", qual: "M.Tech.", email: "mail2kodees@gmail.com", image: imgKodeeswaran, spec: "AI Algorithms & Intelligent Robotics", objectPosition: "center 12%" }
  ];

  const hod = faculties[0];
  const staff = faculties.slice(1);

  const stats = [
    { count: "240+", label: "AI & DS Students", icon: <FaGraduationCap />, color: "#2563eb" },
    { count: "10+", label: "Specialized AI Faculty", icon: <FaChalkboardTeacher />, color: "#059669" },
    { count: "45+", label: "AI & ML Publications", icon: <FaBookOpen />, color: "#d97706" },
    { count: "4+", label: "GPU Research Labs", icon: <FaBrain />, color: "#7c3aed" },
    { count: "94%", label: "Placement Success", icon: <FaChartLine />, color: "#ec4899" }
  ];

  const facilities = [
    {
      title: "GPU Supercomputing & Deep Learning Lab",
      desc: "High-performance NVIDIA GPU workstations for training deep neural networks and transformer models.",
      icon: <FaBrain />,
      badge: "AI & DL"
    },
    {
      title: "Big Data & Machine Learning Studio",
      desc: "Cloud-connected data pipelines, Hadoop ecosystems, and automated ML model benchmarking tools.",
      icon: <FaDatabase />,
      badge: "Machine Learning"
    },
    {
      title: "Computer Vision & Robotics Center",
      desc: "Robotic perception testbeds, OpenCV image processing hardware, and autonomous system simulators.",
      icon: <FaRobot />,
      badge: "Vision & Robotics"
    },
    {
      title: "Predictive Analytics & NLP Hub",
      desc: "Tools for natural language understanding, sentiment analysis engines, and large-scale data visualization.",
      icon: <FaProjectDiagram />,
      badge: "NLP & Analytics"
    }
  ];

  const achievements = [
    {
      year: "2025 - 2026",
      title: "AI Hackathon National Laurels",
      desc: "AI & DS student teams developed real-time computer vision healthcare diagnostic apps.",
      badge: "Hackathons",
      icon: <FaAward />
    },
    {
      year: "2024 - 2025",
      title: "AIM Association Launch",
      desc: "Successfully launched Artificial Intelligence Minds (AIM) student association for AI workshops and hackathons.",
      badge: "Association",
      icon: <FaBrain />
    },
    {
      year: "2023 - 2024",
      title: "AI Patents & Publications",
      desc: "Faculty and students published 45+ research papers in top AI journals and filed 3 smart systems patents.",
      badge: "Research",
      icon: <FaBookOpen />
    }
  ];

  return (
    <div className="cse-redesign-page">

      {/* Page Banner (Preserved Untouched) */}
      <PageBanner
        title="Department of Artificial Intelligence & Data Science"
        subtitle="Pioneering Intelligent Systems, Machine Learning Models, and Advanced Data Engineering Solutions"
        hideBreadcrumb={false}
        breadcrumb={[
          { label: "Academics", link: "#" },
          { label: "Departments", link: "#" },
          { label: "AI & DS" }
        ]}
        backgroundImage={bannerImg}
      />

      {/* SECTION 1: Introduction */}
      <section className="cse-section cse-intro-section" id="aids-intro">
        <div className="cse-bg-glow glow-1"></div>
        <div className="cse-container cse-intro-grid">
          <motion.div 
            className="cse-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="cse-badge-pill">
                <FaBrain /> Department of AI & DS
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="cse-heading">
              Architecting the Frontier of <span className="cse-text-accent">Artificial Intelligence</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="cse-accent-bar"></motion.div>
            
            <motion.p variants={fadeInUp} className="cse-body-text">
              The Department of Artificial Intelligence and Data Science at Nadar Saraswathi College of Engineering and Technology (NSCET) empowers students to design smart autonomous systems, data pipelines, and deep learning architectures.
            </motion.p>
            <motion.p variants={fadeInUp} className="cse-body-text">
              We combine mathematical rigor with practical machine learning frameworks, computer vision, natural language processing, and ethical AI principles to prepare innovators for global leadership.
            </motion.p>

            <motion.div variants={fadeInUp} className="cse-action-buttons">
              <a href="#aids-facilities" className="cse-btn cse-btn-primary">
                <FaPaperPlane /> Explore Facilities
              </a>
              <a href="#aids-faculty" className="cse-btn cse-btn-secondary">
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
                <img src={bannerImg} alt="AI & DS Department" className="cse-media-img" />
              ) : (
                <div className="cse-media-placeholder">
                  <FaBrain className="cse-placeholder-icon" />
                  <span>Artificial Intelligence & Data Science</span>
                </div>
              )}
              <div className="cse-media-overlay">
                <div className="cse-stat-tag">
                  <FaCheckCircle className="cse-check-icon" /> Advanced GPU Computing Center
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Statistics */}
      <section className="cse-section cse-stats-section" id="aids-stats">
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
      <section className="cse-section cse-vm-section" id="aids-vision-mission">
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
                To emerge as a center of excellence in Artificial Intelligence and Data Science by producing world-class researchers and engineers capable of solving complex societal problems through intelligent technology.
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
                <li><FaCheckCircle className="cse-list-icon" /> To impart deep technical mastery in Machine Learning, Deep Learning, Big Data, and AI algorithms.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To foster industry partnerships, research collaborations, and continuous innovation.</li>
                <li><FaCheckCircle className="cse-list-icon" /> To nurture ethical AI principles, leadership traits, and interdisciplinary problem-solving skills.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Facilities */}
      <section className="cse-section cse-facilities-section" id="aids-facilities">
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

      {/* SECTION 5: Department Association (AIM) */}
      <section className="cse-section cse-assoc-section" id="aids-associations">
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
                  <img src={aimLogo} alt="AIM Logo" className="cse-assoc-logo" />
                </div>
                <span className="cse-assoc-tag">Student Association • Active 4+ Years</span>
              </div>
              <h3 className="cse-assoc-name">AIM — Artificial Intelligence Minds</h3>
              <p className="cse-assoc-desc">
                AIM brings together AI enthusiasts to explore generative models, machine learning hackathons, data analytics competitions, and research seminars.
              </p>
              <div className="cse-assoc-features">
                <span className="cse-chip">AI Hackathons</span>
                <span className="cse-chip">ML Bootcamps</span>
                <span className="cse-chip">Deep Learning Workshops</span>
                <span className="cse-chip">Data Challenges</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: HOD Leadership */}
      <section className="cse-section cse-hod-section" id="aids-hod">
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
              quoteText: "Artificial Intelligence is transforming every human endeavor. Our goal is to cultivate engineers who lead this revolution with analytical precision and strong ethical values."
            }} 
            onOpenProfile={setSelectedFacultyProfile} 
          />
        </div>
      </section>

      {/* SECTION 7: Faculty Directory */}
      <section className="cse-section cse-faculty-section" id="aids-faculty">
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
                onOpenProfile={setSelectedFacultyProfile} 
                fadeInUp={fadeInUp} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Department Achievements */}
      <section className="cse-section cse-achieve-section" id="aids-achievements">
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
      <section className="cse-section cse-events-section" id="aids-events">
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

      {/* Reusable Faculty Academic Profile Fullscreen Modal */}
      <FacultyProfileModal 
        isOpen={selectedFacultyProfile !== null}
        faculty={selectedFacultyProfile}
        onClose={() => setSelectedFacultyProfile(null)}
      />

    </div>
  );
};

export default AIDS;
