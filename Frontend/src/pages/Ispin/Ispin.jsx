import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import { 
  FaRocket, 
  FaLaptopCode, 
  FaBrain, 
  FaCloud, 
  FaPaintBrush, 
  FaUsers, 
  FaAward, 
  FaLightbulb, 
  FaPlay, 
  FaPause, 
  FaCheckCircle, 
  FaArrowRight, 
  FaCode, 
  FaProjectDiagram 
} from "react-icons/fa";
import ispinVideo from "../../assets/coe/ispin.mp4";
import bannerBg from "../../assets/annual.jpg";
import "./Ispin.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Ispin = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const pillars = [
    {
      icon: <FaLaptopCode className="pillar-icon" />,
      title: "Software Product Engineering",
      desc: "Architecting enterprise web portals, mobile apps, and scalable full-stack software applications using modern tech stacks."
    },
    {
      icon: <FaBrain className="pillar-icon" />,
      title: "AI & Data Science Solutions",
      desc: "Deploying intelligent algorithms, machine learning models, computer vision systems, and analytics for smart decision-making."
    },
    {
      icon: <FaCloud className="pillar-icon" />,
      title: "Cloud & DevOps Architecture",
      desc: "Building robust cloud infrastructure, containerized deployments, and continuous integration pipelines for high reliability."
    },
    {
      icon: <FaPaintBrush className="pillar-icon" />,
      title: "UI/UX & Product Design",
      desc: "Crafting intuitive, accessible, visually stunning digital experiences and modern design systems."
    }
  ];

  const departments = [
    { code: "CSE", name: "Computer Science & Engineering", desc: "Core algorithms, backend systems, and software engineering principles." },
    { code: "IT", name: "Information Technology", desc: "Enterprise networks, web services, database architecture, and cybersecurity." },
    { code: "AI & DS", name: "Artificial Intelligence & Data Science", desc: "Deep learning, predictive data models, NLP, and intelligent data pipelines." }
  ];

  const stats = [
    { count: "50+", label: "Products & Tools Developed" },
    { count: "100+", label: "Student Developers & Designers" },
    { count: "3+", label: "Core Tech Departments" },
    { count: "100%", label: "Real-World Industry Exposure" }
  ];

  const features = [
    "Production-Ready Software Development",
    "Hands-on Student Product Incubation",
    "Industry Collaboration & Client Projects",
    "Mentorship by Expert Faculty & Industry Pioneers",
    "Agile Methodology & Modern DevOps Workflow",
    "Continuous Skill Enhancement & Tech Workshops"
  ];

  return (
    <div className="ispin-page">
      <PageBanner
        title="ISPIN - Innovative Software Product Industry"
        subtitle="Bridging Academic Excellence with Industry-Grade Software Innovation at NSCET"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Research", link: "/research" },
          { label: "ISPIN" }
        ]}
        backgroundImage={bannerBg}
        showOverlay={true}
        showText={true}
      />

      <div className="ispin-container">
        {/* ================= HERO INTRO & VIDEO SHOWCASE ================= */}
        <section className="ispin-hero-section">
          <div className="ispin-grid">
            <motion.div 
              className="ispin-intro-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="ispin-badge">
                <FaRocket /> CENTRE OF EXCELLENCE IN SOFTWARE
              </span>
              <h2 className="ispin-heading">
                Transforming Ideas into <span>Industry-Grade Products</span>
              </h2>
              <p className="ispin-desc">
                <strong>ISPIN (Innovative Software Product Industry of NSCET)</strong> is a premier student-driven technology hub established by the <strong>Department of CSE, IT, and AI & DS</strong> at Nadar Saraswathi College of Engineering and Technology.
              </p>
              <p className="ispin-desc">
                ISPIN empowers passionate student engineers to build end-to-end software applications, digital platforms, AI tools, and enterprise management solutions, fostering a culture of innovation, product development, and technological leadership.
              </p>

              <div className="ispin-highlights">
                <div className="highlight-item">
                  <FaCode className="hl-icon" />
                  <div>
                    <h4>Industry Standards</h4>
                    <p>Building scalable products with clean code architecture</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaProjectDiagram className="hl-icon" />
                  <div>
                    <h4>Multi-Disciplinary Teams</h4>
                    <p>Synergy between CSE, IT & AI-DS students</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="ispin-video-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="video-card">
                <video 
                  ref={videoRef}
                  src={ispinVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="ispin-video"
                />
                <div className="video-overlay-bar">
                  <div className="video-info">
                    <span className="video-dot"></span>
                    <span>ISPIN Showcase Video</span>
                  </div>
                  <button className="play-pause-btn" onClick={togglePlay} aria-label="Toggle Video Playback">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="ispin-stats-section">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="stat-count">{stat.count}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= PILLARS SECTION ================= */}
        <section className="ispin-pillars-section">
          <div className="section-title-wrapper">
            <span className="section-subtitle">OUR CORE FOCUS</span>
            <h2 className="section-title">Key Pillars of ISPIN</h2>
            <div className="section-line"></div>
          </div>

          <motion.div 
            className="pillars-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pillars.map((pillar, idx) => (
              <motion.div key={idx} className="pillar-card" variants={fadeUp}>
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= DEPARTMENTS INVOLVED ================= */}
        <section className="ispin-dept-section">
          <div className="section-title-wrapper">
            <span className="section-subtitle">COLLABORATIVE DEPARTMENTS</span>
            <h2 className="section-title">Departments Driving ISPIN</h2>
            <div className="section-line"></div>
          </div>

          <div className="dept-grid">
            {departments.map((dept, idx) => (
              <motion.div 
                key={idx}
                className="dept-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="dept-badge">{dept.code}</div>
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES & OBJECTIVES ================= */}
        <section className="ispin-features-section">
          <div className="features-container">
            <div className="features-content">
              <h2>Why ISPIN Matters for Students & Industry</h2>
              <p>
                At NSCET, ISPIN bridges the gap between traditional academic curricula and modern tech industry demands. Students gain hands-on experience in building real software, participating in code reviews, mastering Git workflows, and delivering products.
              </p>
              <ul className="features-list">
                {features.map((feat, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="features-card-box">
              <div className="impact-box">
                <FaAward className="impact-icon" />
                <h3>Student Startup Incubation</h3>
                <p>
                  Promoting software product ideas into market-ready prototypes and encouraging student tech entrepreneurs at NSCET.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CALL TO ACTION ================= */}
        <section className="ispin-cta-section">
          <div className="cta-box">
            <h2>Partner with ISPIN or Learn More</h2>
            <p>Connect with the ISPIN Development Team at Nadar Saraswathi College of Engineering and Technology.</p>
            <a href="mailto:info@nscet.org" className="cta-btn">
              Get in Touch <FaArrowRight />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Ispin;
