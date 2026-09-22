import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUniversity, FaUserTie, FaUsers, FaGraduationCap,
  FaStar, FaCrown, FaShieldAlt, FaHandshake,
  FaBookOpen, FaLandmark, FaChessKing, FaChessQueen, FaUserCircle
} from "react-icons/fa";
import bannerImg from "./Banner/TMHNUTRUST.png";
import "./TMHNUTrust.css";

import imgDharmarajan from "../../../assets/tmhnu/Dharmarajan.jpeg";
import imgJeevagan from "../../../assets/tmhnu/AS Jeevagan sir - Vice President.jpg";
import imgAnandhavel from "../../../assets/tmhnu/General Secretary-M.M.Anandhavel.jpg";
import imgRamachandran from "../../../assets/tmhnu/Ramachandran - Treasurer.jpg";
import imgSomaSundaram from "../../../assets/tmhnu/SomaSundaram.jpg";
import imgSubramani from "../../../assets/tmhnu/subramani.jpg";

/* ─── Animation Helpers ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

/* ─── CountUp Animation Component for Stats ─── */
const AnimatedCounter = ({ endValue, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(endValue, 10);
      if (start === end) return;
      
      const totalDuration = 2000; 
      const incrementTime = 30; 
      const steps = totalDuration / incrementTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, endValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({ children, variants = fadeInUp, className = "", ...props }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ─── Data ─── */
const governingCell = [
  {
    name: "Mr. A. S. G. Dharmarajan, B.A",
    role: "President",
    image: imgDharmarajan,
    icon: <FaCrown />
  },
  {
    name: "Mr. A. S. Jeevagan",
    role: "Vice President",
    image: imgJeevagan,
    icon: <FaChessKing />
  },
  {
    name: "Mr. M.M. Anandhavel, M.B.A",
    role: "General Secretary",
    image: imgAnandhavel,
    icon: <FaShieldAlt />
  },
  {
    name: "Mr. B. Ramachandran, M.B.A",
    role: "Treasurer",
    image: imgRamachandran,
    icon: <FaHandshake />
  }
];

const committeeMembers = [
  { name: "Mr. B. Ashokan" },
  { name: "Mr.K.T.Balasubramanian" },
  { name: "Mr. V.K.P. Gobi" },
  { name: "Mr. K.A.T. Karthikeyan" },
  { name: "Mr. R. Pandikumar" },
  { name: "Mr. G.S. Raja" },
  { name: "Mr. A. Ramakrishnan" },
  { name: "Mr. T.M. Sampath" },
  { name: "Mr. M. Senthilkumar" },
  { name: "Mr. C. Sundarapandian" },
  { name: "Mr. O.K.T. Vijay" },
  { name: "Mr. R.V. Vijayakumar" }
];

const prominentPersonalities = [
  {
    name: "Er. A.S.S.S. Soma Sundaram, B.E.",
    role: "Secretary",
    image: imgSomaSundaram
  },
  {
    name: "Mr. T. Subramani, B.C.A., M.B.A.",
    role: "Joint Secretary",
    image: imgSubramani
  }
];

/* ─── Component ─── */
function TMHNUTrust() {
  return (
    <div className="common-page-wrapper tmhnu-page tmhnu-page-wrapper">
      {/* Hero Banner */}
      <div className="common-hero-banner">
        <img
          src={bannerImg}
          alt="TMHNU Trust Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* --- SECTION 1: ABOUT --- */}
      <section className="tmhnu-section tmhnu-bg-main">
        <div className="tmhnu-container">
          <div className="tmhnu-bento-grid">
            
            {/* Heritage Card */}
            <AnimatedSection variants={fadeInLeft} className="tmhnu-bento-card">
              <div className="tmhnu-bento-header">
                <span className="tmhnu-badge"><FaLandmark className="badge-icon" /> HERITAGE</span>
                <h2>About TMHNU</h2>
              </div>
              <div className="tmhnu-bento-content">
                <p>
                  Theni Melapettai Hindu Nadargal Uravinmurai (TMHNU) proclaims to society its tremendous service in providing quality education. The pioneers of TMHNU (1898) started the primary school in 1919, named Nadar Saraswathi Vidhyasala, with 38 students and 2 teachers. Now, that small seed has flourished into a large tree. With the blessings of Annai Sri Bathrakaliamman, 17 educational institutions now function under this bower, providing quality education. Over 22,000 students study here, with more than 1,000 teaching and 1,000 supportive staff members.
                </p>
              </div>

              {/* 3 Separate Stats Cards */}
              <div className="tmhnu-stats-3-cards-container">
                <div className="tmhnu-stat-card">
                  <h3 className="stat-number-highlight"><AnimatedCounter endValue={1898} /></h3>
                  <span className="stat-text-highlight">FOUNDED</span>
                </div>
                
                <div className="tmhnu-stat-card">
                  <h3 className="stat-number-highlight"><AnimatedCounter endValue={17} /></h3>
                  <span className="stat-text-highlight">INSTITUTIONS</span>
                </div>
                
                <div className="tmhnu-stat-card">
                  <h3 className="stat-number-highlight"><AnimatedCounter endValue={22} suffix="K+" /></h3>
                  <span className="stat-text-highlight">STUDENTS</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Journey Card */}
            <AnimatedSection variants={fadeInRight} className="tmhnu-bento-card">
              <div className="tmhnu-bento-header">
                <span className="tmhnu-badge"><FaBookOpen className="badge-icon" /> OUR JOURNEY</span>
                <h2>About Our Journey</h2>
              </div>
              <div className="tmhnu-bento-content">
                <p>
                  Nadar Saraswathi College of Engineering and Technology was established in 2010 to uplift rural students and nurture them with excellence. Located on a 21-acre eco-friendly campus near Theni, the institution focuses on molding outstanding engineers as responsible citizens and professionals.
                </p>
                <p>
                  In today's world, there is a genuine need for an institute that provides quality academic and career education in a personalized atmosphere. NSCET offers programs that prepare students for successful employment through quality teaching, learning and research. Our goal is to equip students with lifelong knowledge, skills and credentials for professional advancement at any point in their careers.
                </p>
                <p>
                  Excellence in teaching remains our most important criterion for faculty recruitment. Our faculty are also engaged in continuous research, scholarly work and service to the region and state. The college offers comprehensive support services to ensure student success.
                </p>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* --- SECTION 2: GOVERNING CELL --- */}
      <section className="tmhnu-section tmhnu-bg-light">
        <div className="tmhnu-container">
          <AnimatedSection variants={fadeInUp} className="tmhnu-section-header">
            <span className="tmhnu-badge"><FaUserTie className="badge-icon" /> LEADERSHIP</span>
            <h2>Governing Cell</h2>
            <p>Dedicated leaders guiding TMHNU towards excellence in education and institutional growth</p>
          </AnimatedSection>

          <motion.div 
            className="tmhnu-screenshot-grid-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {governingCell.map((leader, index) => (
              <motion.div className="tmhnu-screenshot-card-box" key={index} variants={scaleIn}>
                <div className="screenshot-img-wrapper">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                  <div className="screenshot-icon-badge">{leader.icon}</div>
                </div>
                <div className="screenshot-text-box">
                  <span className="screenshot-role-text">{leader.role}</span>
                  <h4 className="screenshot-name-text">{leader.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: PROMINENT PERSONALITIES --- */}
      <section className="tmhnu-section tmhnu-bg-main">
        <div className="tmhnu-container">
          <AnimatedSection variants={fadeInUp} className="tmhnu-section-header">
            <span className="tmhnu-badge"><FaStar className="badge-icon" /> PERSONALITIES</span>
            <h2>Prominent Personalities of NSCET</h2>
            <p>Visionary leaders driving the mission and growth of the institution</p>
          </AnimatedSection>

          <motion.div 
            className="tmhnu-screenshot-grid-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {prominentPersonalities.map((person, index) => (
              <motion.div className="tmhnu-screenshot-card-box" key={index} variants={scaleIn}>
                <div className="screenshot-img-wrapper">
                  <img src={person.image} alt={person.name} loading="lazy" />
                </div>
                <div className="screenshot-text-box">
                  <span className="screenshot-role-text">{person.role}</span>
                  <h3 className="screenshot-name-text">{person.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: EXECUTIVE COMMITTEE --- */}
      <section className="tmhnu-section tmhnu-bg-light">
        <div className="tmhnu-container">
          <AnimatedSection variants={fadeInUp} className="tmhnu-section-header">
            <span className="tmhnu-badge"><FaUsers className="badge-icon" /> COMMITTEE</span>
            <h2>Executive Committee Members of TMHNU</h2>
            <p>Distinguished members committed to shaping the future of education</p>
          </AnimatedSection>

          <motion.div 
            className="tmhnu-exec-grid-3x4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {committeeMembers.map((member, index) => (
              <motion.div className="exec-card-3x4" key={index} variants={scaleIn}>
                <div className="exec-avatar-3x4">
                  <FaUserCircle className="default-user-icon" />
                </div>
                <div className="exec-details-3x4">
                  <h5 className="exec-name-3x4">{member.name}</h5>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default TMHNUTrust;