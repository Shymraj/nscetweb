import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUniversity, FaUserTie, FaUsers, FaGraduationCap,
  FaStar, FaCrown, FaShieldAlt, FaHandshake,
  FaBookOpen, FaLandmark, FaChessKing, FaChessQueen
} from "react-icons/fa";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./TMHNUTrust.css";

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
    image: "https://nscet.org/assets/img/administration/Dharmarajan.jpeg",
    icon: <FaCrown />
  },
  {
    name: "Mr. A. S. Jeevagan",
    role: "Vice President",
    image: "https://nscet.org/assets/img/administration/AS%20Jeevagan%20sir%20-%20Vice%20President.jpg",
    icon: <FaChessKing />
  },
  {
    name: "Mr. M.M. Anandhavel, M.B.A",
    role: "General Secretary",
    image: "https://nscet.org/assets/img/administration/General%20Secretary-M.M.Anandhavel.jpg",
    icon: <FaShieldAlt />
  },
  {
    name: "Mr. B. Ramachandran, M.B.A",
    role: "Treasurer",
    image: "https://nscet.org/assets/img/administration/Ramachandran%20-%20Treasurer.jpg",
    icon: <FaHandshake />
  }
];

const committeeMembers = [
  "Mr. B. Ashokan",
  "Mr. K.T. Balasubramanian",
  "Mr. V.K.P. Gobi",
  "Mr. K.A.T. Karthikeyan",
  "Mr. R. Pandikumar",
  "Mr. G.S. Raja",
  "Mr. A. Ramakrishnan",
  "Mr. T.M. Sampath",
  "Mr. M. Senthilkumar",
  "Mr. C. Sundarapandian",
  "Mr. O.K.T. Vijay",
  "Mr. R.V. Vijayakumar"
];

const prominentPersonalities = [
  {
    name: "Er. A.S.S.S. Soma Sundaram, B.E.",
    role: "Secretary",
    image: "https://nscet.org/assets/img/administration/SomaSundaram.jpg"
  },
  {
    name: "Mr. T. Subramani, B.C.A., M.B.A.",
    role: "Joint Secretary",
    image: "https://nscet.org/assets/img/administration/subramani.jpg"
  }
];

/* ─── Component ─── */
function TMHNUTrust() {
  return (
    <div className="tmhnu-page">
      {/* Hero Banner */}
      {/* Premium Custom Hero Banner */}
      <section className="tmhnu-premium-hero">
        <div className="tmhnu-premium-hero-right">
          <img src="https://nscet.org/assets/img/main/college_main.jpg" alt="NSCET College Campus Cinematic View" />
          <div className="tmhnu-premium-overlay"></div>
        </div>
        
        <div className="tmhnu-premium-hero-left">
          <div className="tmhnu-premium-content">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="tmhnu-premium-title"
            >
              TMHNU TRUST
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "60px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="tmhnu-premium-accent-line"
            ></motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="tmhnu-premium-subtitle"
            >
              Serving Education Since 1898
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="tmhnu-premium-desc"
            >
              A legacy of academic excellence, dedicated to nurturing brilliant minds and empowering future leaders through world-class educational institutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About TMHNU & Our Journey */}
      <section className="tmhnu-about-section">
        <div className="tmhnu-container">
          <div className="tmhnu-about-grid">
            {/* About TMHNU */}
            <AnimatedSection variants={fadeInLeft}>
              <div className="tmhnu-about-card">
                <div className="tmhnu-section-badge">
                  <FaLandmark className="badge-icon" />
                  Heritage
                </div>
                <h2 className="tmhnu-section-title">About TMHNU</h2>
                <p className="tmhnu-section-tagline">
                  "Genesis of Theni Melapettai Hindu Nadargal Uravinmurai Since 1898"
                </p>
                <p className="tmhnu-about-text">
                  Theni Melapettai Hindu Nadargal Uravinmurai (TMHNU) proclaims to society its tremendous service in providing quality education. The pioneers of TMHNU (1898) started the primary school in 1919, named Nadar Saraswathi Vidhyasala, with 38 students and 2 teachers. Now, that small seed has flourished into a large tree. With the blessings of Annai Sri Bathrakaliamman, 17 educational institutions now function under this bower, providing quality education. Over 22,000 students study here, with more than 1,000 teaching and 1,000 supportive staff members.
                </p>
                <div className="tmhnu-stats-row">
                  <div className="tmhnu-stat-chip">
                    <span className="stat-number">1898</span>
                    <span className="stat-label">Founded</span>
                  </div>
                  <div className="tmhnu-stat-chip">
                    <span className="stat-number">17</span>
                    <span className="stat-label">Institutions</span>
                  </div>
                  <div className="tmhnu-stat-chip">
                    <span className="stat-number">22K+</span>
                    <span className="stat-label">Students</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* About Our Journey */}
            <AnimatedSection variants={fadeInRight}>
              <div className="tmhnu-about-card">
                <div className="tmhnu-section-badge">
                  <FaBookOpen className="badge-icon" />
                  Our Journey
                </div>
                <h2 className="tmhnu-section-title">About Our Journey</h2>
                <p className="tmhnu-section-tagline">
                  Nurturing Excellence on a 21-Acre Eco-Friendly Campus
                </p>
                <p className="tmhnu-about-text">
                  Nadar Saraswathi College of Engineering and Technology was established in 2010 to uplift rural students and nurture them with excellence. Located on a 21-acre eco-friendly campus near Theni, the institution focuses on molding outstanding engineers as responsible citizens and professionals.
                </p>
                <p className="tmhnu-about-text" style={{ marginTop: "14px" }}>
                  In today's world, there is a genuine need for an institute that provides quality academic and career education in a personalized atmosphere. NSCET offers programs that prepare students for successful employment through quality teaching, learning, and research. Our goal is to equip students with lifelong knowledge, skills, and credentials for professional advancement at any point in their careers.
                </p>
                <p className="tmhnu-about-text" style={{ marginTop: "14px" }}>
                  Excellence in teaching remains our most important criterion for faculty recruitment. Our faculty are also engaged in continuous research, scholarly work, and service to the region and state. The college offers comprehensive support services to ensure student success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Governing Cell */}
      <section className="tmhnu-governing-section">
        <div className="tmhnu-container">
          <AnimatedSection variants={fadeInUp}>
            <div className="tmhnu-heading-center">
              <div className="tmhnu-section-badge">
                <FaUniversity className="badge-icon" />
                Leadership
              </div>
              <h2 className="tmhnu-section-title">Governing Cell</h2>
              <p className="tmhnu-heading-subtitle">
                Dedicated leaders guiding TMHNU towards excellence in education and institutional growth
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="tmhnu-leaders-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {governingCell.map((leader, index) => (
              <motion.div
                className="tmhnu-leader-card"
                key={index}
                variants={scaleIn}
              >
                <div className="tmhnu-leader-card-inner">
                  <div className="tmhnu-leader-avatar-wrap">
                    <div className="tmhnu-leader-avatar-ring">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="tmhnu-leader-avatar"
                        loading="lazy"
                      />
                    </div>
                    <div className="tmhnu-leader-rank">{leader.icon}</div>
                  </div>
                  <div className="tmhnu-leader-info">
                    <div className="tmhnu-leader-role">{leader.role}</div>
                    <h3 className="tmhnu-leader-name">{leader.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="tmhnu-committee-section">
        <div className="tmhnu-container">
          <AnimatedSection variants={fadeInUp}>
            <div className="tmhnu-heading-center">
              <div className="tmhnu-section-badge">
                <FaUsers className="badge-icon" />
                Committee
              </div>
              <h2 className="tmhnu-section-title">Executive Committee Members of TMHNU</h2>
              <p className="tmhnu-heading-subtitle">
                Distinguished members committed to shaping the future of education
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="tmhnu-committee-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {committeeMembers.map((member, index) => (
              <motion.div
                className="tmhnu-member-chip"
                key={index}
                variants={fadeInUp}
              >
                <div className="tmhnu-member-icon">
                  <FaUserTie />
                </div>
                <span className="tmhnu-member-name">{member}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prominent Personalities */}
      <section className="tmhnu-personalities-section">
        <div className="tmhnu-container">
          <AnimatedSection variants={fadeInUp}>
            <div className="tmhnu-heading-center">
              <div className="tmhnu-section-badge">
                <FaStar className="badge-icon" />
                Personalities
              </div>
              <h2 className="tmhnu-section-title">Prominent Personalities of NSCET</h2>
              <p className="tmhnu-heading-subtitle">
                Visionary leaders driving the mission and growth of the institution
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="tmhnu-personalities-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {prominentPersonalities.map((person, index) => (
              <motion.div
                className="tmhnu-personality-card"
                key={index}
                variants={scaleIn}
              >
                <div className="tmhnu-personality-img-wrap">
                  <div className="tmhnu-personality-img-bg" />
                  <div className="tmhnu-personality-avatar-ring">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="tmhnu-personality-avatar"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="tmhnu-personality-info">
                  <div className="tmhnu-personality-role">{person.role}</div>
                  <h3 className="tmhnu-personality-name">{person.name}</h3>
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
