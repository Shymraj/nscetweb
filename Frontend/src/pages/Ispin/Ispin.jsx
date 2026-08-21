import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaProjectDiagram,
  FaTimes,
  FaExpand,
  FaTerminal, 
  FaChevronLeft, 
  FaChevronRight, 
  FaGlobe, 
  FaDatabase, 
  FaWifi, 
  FaCodeBranch, 
  FaShieldAlt, 
  FaCalendarCheck,
  FaExternalLinkAlt
} from "react-icons/fa"; 
import styles from "./Ispin.module.css";
import "./Ispin.css";

// Video Import
import ispinVideo from "../../assets/coe/ispin.mp4";
import bannerBg from "./banner/ISPIN.png";

const journeyData = [
  {
    year: "2021",
    title: "NSCET Web Ecosystem",
    desc: "Designed and deployed the official institutional infrastructure from scratch, moving from theory to live production.",
    tags: ["React", "Architecture", "Live Prod"],
    icon: <FaGlobe />
  },
  {
    year: "2022",
    title: "Library DB Platform",
    desc: "Digitized the entire institutional book inventory, automated borrow limits, and catalog tracking operations.",
    tags: ["Full Stack", "PostgreSQL", "Relational"],
    icon: <FaDatabase />
  },
  {
    year: "2023",
    title: "Transport Operations",
    desc: "Real-time fleet telemetry tracking architecture. Constructed telemetry data pipelines mapping campus mobility nodes.",
    tags: ["IoT Core", "Real-time Sync", "Mobile"],
    icon: <FaWifi />
  },
  {
    year: "2024",
    title: "Hackathon Infrastructure",
    desc: "Engineered an end-to-end event execution engine: featuring secure high-concurrency OAuth authentication.",
    tags: ["Event Tech", "OAuth", "Scale"],
    icon: <FaCodeBranch />
  },
  {
    year: "2025",
    title: "iQarena Engine",
    desc: "A strictly sandboxed, highly scalable examination and automated assessment portal empowering real-time evaluation.",
    tags: ["EdTech", "Assessment", "Portal"],
    icon: <FaShieldAlt />
  },
  {
    year: "2026",
    title: "Campus Nexus ERP",
    desc: "The pinnacle flagship enterprise tier. Half a decade of cumulative engineering modules unified into a centralized platform.",
    tags: ["Enterprise", "Microservices", "ERP"],
    icon: <FaCalendarCheck />
  }
];

const pillars = [
  { title: "Product Incubation", desc: "Forging raw student software definitions into battle-tested commercial systems." },
  { title: "AI & Deep Learning", desc: "Engineering high-accuracy data pipelines and predictive statistical matrices." },
  { title: "Cloud & DevOps", desc: "Constructing highly-available deployment strategies and CI/CD pipelines." },
  { title: "Modern UI/UX", desc: "Architecting atomic components, scalable variables, and responsive interactions." }
];

export default function Ispin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const videoRef = React.useRef(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevCard();
      if (e.key === "ArrowRight") nextCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const nextCard = () => setActiveIndex((prev) => (prev + 1 >= journeyData.length ? prev : prev + 1));
  const prevCard = () => setActiveIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));

  return (
    <div className={styles.ispinDenseContainer}>
      
      {/* ================= 01. INTEGRATED DARK HERO ================= */}
      <section className={styles.darkHeroSection}>
        <div className={styles.heroGrid}>
          
          {/* Left Text Content */}
          <div className={styles.heroTextContent}>
            <motion.div className={styles.heroBadge} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <FaTerminal className={styles.accentIcon} />
              <span>THE CORE PRODUCTION HUB // NSCET</span>
            </motion.div>
            
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Engineering Systems <br /> That Scale: <span>{`{i}`}spin</span>
            </motion.h1>
            
            <motion.div className={styles.heroStats} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className={styles.statBox}>
                <h4>2021</h4><p>FOUNDED</p>
              </div>
              <div className={styles.statBox}>
                <h4>06<span>+</span></h4><p>DEPLOYMENTS</p>
              </div>
              <div className={styles.statBox}>
                <h4>100<span>%</span></h4><p>LIVE PROD</p>
              </div>
            </motion.div>
          </div>

          {/* Right Video Content */}
          <motion.div className={styles.heroVideoWrapper} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
            <div className={styles.videoMacHeader}>
              <div className={styles.dots}><span className={styles.r}></span><span className={styles.y}></span><span className={styles.g}></span></div>
              <span className={styles.vidName}>ispin_showcase.mp4</span>
            </div>
            <video ref={videoRef} onClick={() => setIsVideoExpanded(true)} style={{ cursor: 'pointer' }} src={ispinVideo} autoPlay loop muted playsInline className={styles.heroVideo} />
            <div className={styles.liveTag}><span className={styles.pulse}></span> System Capture</div>
          </motion.div>

        </div>
      </section>

      {/* ================= 02. MEGA BENTO GRID (Zero Empty Space) ================= */}
      <section className={styles.bentoSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.subTag}>// ARCHITECTURE & STRATEGY</span>
          <h2>The Operational Core</h2>
        </div>

        <div className={styles.megaBentoGrid}>
          
          {/* Main Context Box (Spans 2 columns) */}
          <motion.div className={`${styles.bentoBox} ${styles.span2}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={styles.bentoTop}>
              <span className={styles.bentoIdx}>01 // CONTEXT</span>
              <h3>About Technical Core</h3>
            </div>
            <p className={styles.bentoDesc}><strong>ISPIN</strong> represents the premier technical engineering wing powered by CSE, IT, and AI-DS streams. We function as a production-grade technology forge within the institution.</p>
            <div className={styles.bentoList}>
              <p><FaCheckCircle className={styles.check}/> Modular Clean Code Infrastructure</p>
              <p><FaCheckCircle className={styles.check}/> High Availability Production Scaling</p>
            </div>
          </motion.div>

          {/* Strategy Box (Spans 2 columns) */}
          <motion.div className={`${styles.bentoBox} ${styles.span2}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className={styles.bentoTop}>
              <span className={styles.bentoIdx}>02 // STRATEGY</span>
              <h3>The Purpose System</h3>
            </div>
            <p className={styles.bentoDesc}>Student engineers own infrastructure end-to-end. We operate on daily scrum validations, cross-functional engineering, and ship live staging releases directly to functional production clusters.</p>
            <div className={styles.bentoList}>
              <p><FaCheckCircle className={styles.check}/> Agile Sprint Architecture</p>
              <p><FaCheckCircle className={styles.check}/> Automated CI/CD Workflows</p>
            </div>
          </motion.div>

          {/* 4 Pillars (Span 1 column each to fill the grid) */}
          {pillars.map((pillar, idx) => (
            <motion.div key={idx} className={`${styles.bentoBox} ${styles.pillarBox}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
               <h4 className={styles.pillarTitle}>{pillar.title}</h4>
               <p className={styles.pillarDesc}>{pillar.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= 03. COVERFLOW TIMELINE ================= */}
      <section className={styles.timelineSection}>
        <div className={`${styles.sectionHeader} ${styles.center}`}>
          <span className={styles.subTag}>// PRODUCTION LIFECYCLE DECK</span>
          <h2>The System Evolution Matrix</h2>
        </div>

        <div className={styles.coverflowArea}>
          <div className={styles.coverflowTrack}>
            <AnimatePresence>
              {journeyData.map((project, index) => {
                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);
                const isCenter = offset === 0;

                if (absOffset > 2) return null;

                return (
                  <motion.div
                    key={index}
                    className={`${styles.flowCard} ${isCenter ? styles.flowActive : ""}`}
                    onClick={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      x: offset * 320, 
                      y: absOffset * 15, 
                      scale: 1 - absOffset * 0.1,
                      rotateY: offset * -25, 
                      zIndex: 10 - absOffset,
                      opacity: absOffset === 2 ? 0.3 : 1, 
                      filter: `blur(${absOffset * 3}px)`, 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                  >
                    <div className={styles.cardGloss} />
                    <div className={styles.cardInner}>
                      <div className={styles.cardTopBar}>
                        <span className={styles.year}>{project.year}</span>
                        <div className={styles.iconBox}>{project.icon}</div>
                      </div>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDesc}>{project.desc}</p>
                      <div className={styles.tagsGrid}>
                        {project.tags.map((tag, i) => <span key={i}>#{tag}</span>)}
                      </div>
                      {isCenter && (
                        <motion.button className={styles.inspectBtn} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                          Inspect Spec Base <FaExternalLinkAlt size={12} />
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Matrix Controls */}
        <div className={styles.matrixControls}>
          <button className={styles.ctrlBtn} onClick={prevCard} disabled={activeIndex === 0}><FaChevronLeft /></button>
          <div className={styles.dotsContainer}>
            {journeyData.map((_, i) => (
              <span key={i} className={`${styles.navDot} ${i === activeIndex ? styles.navActive : ""}`} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
          <button className={styles.ctrlBtn} onClick={nextCard} disabled={activeIndex === journeyData.length - 1}><FaChevronRight /></button>
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

      {/* ================= VIDEO MODAL ================= */}
      {isVideoExpanded && (
        <div className="ispin-video-modal-overlay" onClick={() => setIsVideoExpanded(false)}>
          <button className="ispin-video-modal-close" onClick={() => setIsVideoExpanded(false)} aria-label="Close Modal">
            <FaTimes />
          </button>
          <motion.div 
            className="ispin-video-modal-content" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <video 
              src={ispinVideo}
              autoPlay
              controls
              className="ispin-modal-video"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}