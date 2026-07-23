import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaBriefcase, FaBookOpen, FaEnvelope, FaPhoneAlt, 
  FaQuoteLeft, FaAward, FaLightbulb, FaUniversity, FaBuilding, 
  FaCheckCircle, FaStar, FaCalendarCheck
} from 'react-icons/fa';
import principalImg from '../../../assets/administration/images/prinicipal.jpg';
import './Principal.css';

function Principal() {
  const [activeTab, setActiveTab] = useState('message');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="principal-page">
      {/* Ambient background blur elements */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Hero Header Section */}
      <section className="principal-hero-section">
        <div className="principal-hero-container">
          <motion.div 
            className="principal-hero-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="principal-hero-grid">
              
              {/* Executive Portrait Frame */}
              <div className="principal-portrait-container">
                <div className="portrait-glow-ring"></div>
                <div className="portrait-frame">
                  <img 
                    src={principalImg} 
                    alt="Dr. C. Mathalai Sundaram - Principal of NSCET" 
                    className="principal-portrait-img"
                  />
                  <div className="portrait-badge">
                    <FaAward className="badge-star-icon" />
                    <span>Principal's Desk</span>
                  </div>
                </div>
              </div>

              {/* Executive Bio & Identity */}
              <div className="principal-hero-details">
                <div className="institution-pill">
                  <FaUniversity className="institution-icon" />
                  <span>Nadar Saraswathi College of Engineering & Technology</span>
                </div>

                <h1 className="principal-name-title">Dr. C. Mathalai Sundaram</h1>
                <p className="principal-degrees">Ph.D., M.E., M.B.A. (Mechanical & Manufacturing Engineering)</p>

                <div className="principal-quick-stats">
                  <div className="quick-stat-box">
                    <span className="stat-number">15+</span>
                    <span className="stat-desc">Years Leadership</span>
                  </div>
                  <div className="quick-stat-box">
                    <span className="stat-number">32+</span>
                    <span className="stat-desc">Publications</span>
                  </div>
                  <div className="quick-stat-box">
                    <span className="stat-number">3</span>
                    <span className="stat-desc">Patents Filed</span>
                  </div>
                </div>

                <div className="principal-contact-row">
                  <a href="mailto:principal@nscet.org" className="executive-contact-btn">
                    <FaEnvelope className="contact-btn-icon" />
                    <span>principal@nscet.org</span>
                  </a>
                  <a href="tel:+919443488999" className="executive-contact-btn secondary">
                    <FaPhoneAlt className="contact-btn-icon" />
                    <span>+91 94434 88999</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Navigation */}
      <section className="principal-tabs-section">
        <div className="principal-container">
          <div className="principal-tabs-wrapper">
            <button 
              className={`principal-tab-btn ${activeTab === 'message' ? 'active' : ''}`}
              onClick={() => setActiveTab('message')}
            >
              <FaQuoteLeft className="tab-btn-icon" />
              <span>Principal's Message</span>
            </button>
            <button 
              className={`principal-tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <FaLightbulb className="tab-btn-icon" />
              <span>Strategic Vision</span>
            </button>
            <button 
              className={`principal-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaGraduationCap className="tab-btn-icon" />
              <span>Academic Profile</span>
            </button>
            <button 
              className={`principal-tab-btn ${activeTab === 'research' ? 'active' : ''}`}
              onClick={() => setActiveTab('research')}
            >
              <FaBookOpen className="tab-btn-icon" />
              <span>Research & Patents</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content Panes */}
      <section className="principal-content-body">
        <div className="principal-container">
          
          {/* TAB 1: MESSAGE */}
          {activeTab === 'message' && (
            <motion.div 
              className="tab-pane-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="executive-letter-card">
                <div className="letter-header">
                  <div className="quote-badge">
                    <FaQuoteLeft />
                  </div>
                  <div>
                    <h2 className="letter-title">Welcome Message from the Principal</h2>
                    <p className="letter-subtitle">Inspiring Excellence, Technical Innovation & Global Leadership</p>
                  </div>
                </div>

                <div className="letter-body">
                  <p className="lead-paragraph">
                    "As a premier 21st-century institution, Nadar Saraswathi College of Engineering and Technology (NSCET) is committed to building an educational environment centered on inquiry, research, analytical thinking, and high ethical standards."
                  </p>

                  <p>
                    I strongly believe that true academic excellence is achieved through a synchronized partnership between dedicated administrators, visionary educators, and motivated students. At NSCET, we empower our engineering students with a dynamic global perspective, preparing them to tackle modern industrial challenges and innovate for societal advancement.
                  </p>

                  <p>
                    Learning at NSCET is a holistic development package encompassing technical skills, character building, experiential hands-on learning, and state-of-the-art laboratory infrastructure. Our aim is to mold every student into a responsible, highly competent global professional who carries lifelong learning as a core values system.
                  </p>

                  <div className="letter-signature-block">
                    <div className="signature-info">
                      <h4 className="signature-name">Dr. C. Mathalai Sundaram</h4>
                      <p className="signature-title">Professor & Principal, NSCET</p>
                    </div>
                    <div className="signature-motto">
                      <FaStar className="motto-star" /> "Empowering Minds, Transforming Futures"
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Pillars Grid */}
              <div className="pillars-grid">
                <motion.div className="pillar-card" variants={itemVariants}>
                  <div className="pillar-icon-box blue">
                    <FaLightbulb />
                  </div>
                  <h3>Innovate & Lead</h3>
                  <p>Encouraging student-led research projects, patent filings, and active technology incubator initiatives.</p>
                </motion.div>

                <motion.div className="pillar-card" variants={itemVariants}>
                  <div className="pillar-icon-box purple">
                    <FaAward />
                  </div>
                  <h3>Academic Rigor</h3>
                  <p>Delivering outcomes-based engineering education accredited by NAAC & affiliated with Anna University.</p>
                </motion.div>

                <motion.div className="pillar-card" variants={itemVariants}>
                  <div className="pillar-icon-box orange">
                    <FaBuilding />
                  </div>
                  <h3>Industry Synergy</h3>
                  <p>Building strong collaborative ties with industrial partners for corporate training, internships, and placements.</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: STRATEGIC VISION */}
          {activeTab === 'vision' && (
            <motion.div 
              className="tab-pane-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="vision-grid">
                <motion.div className="vision-card" variants={itemVariants}>
                  <div className="vision-card-header">
                    <FaStar className="vision-header-icon" />
                    <h2>Institutional Vision</h2>
                  </div>
                  <p>
                    To emerge as a benchmark institution of engineering education and research, recognized for academic excellence, sustainable innovation, and developing ethically grounded, globally competitive engineers.
                  </p>
                </motion.div>

                <motion.div className="vision-card" variants={itemVariants}>
                  <div className="vision-card-header">
                    <FaCheckCircle className="vision-header-icon green" />
                    <h2>Institutional Mission</h2>
                  </div>
                  <ul className="vision-checklist">
                    <li><FaCheckCircle className="check-icon" /> Impart high-quality, outcome-based technical education utilizing state-of-the-art facilities.</li>
                    <li><FaCheckCircle className="check-icon" /> Foster a research-driven ecosystem promoting multidisciplinary innovation and patent creation.</li>
                    <li><FaCheckCircle className="check-icon" /> Enhance industry-institute collaboration for practical exposure, skill enhancement, and career growth.</li>
                    <li><FaCheckCircle className="check-icon" /> Instill strong moral integrity, leadership capabilities, and social responsibility in every student.</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ACADEMIC PROFILE */}
          {activeTab === 'profile' && (
            <motion.div 
              className="tab-pane-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="profile-grid">
                
                {/* Qualifications */}
                <motion.div className="profile-card" variants={itemVariants}>
                  <div className="profile-card-header">
                    <div className="header-icon-wrap blue">
                      <FaGraduationCap />
                    </div>
                    <h2>Qualifications & Specialization</h2>
                  </div>

                  <div className="qualifications-list">
                    <div className="degree-item">
                      <div className="degree-badge">Ph.D.</div>
                      <div className="degree-details">
                        <h4>Doctor of Philosophy (Mechanical Engineering)</h4>
                        <p>Anna University, Chennai (2011 - 2017)</p>
                        <span className="spec-tag">Specialization: Composite Tool Materials</span>
                      </div>
                    </div>

                    <div className="degree-item">
                      <div className="degree-badge">M.E.</div>
                      <div className="degree-details">
                        <h4>Master of Engineering (Manufacturing Engineering)</h4>
                        <p>Anna University of Technology, Trichy (2008 - 2010)</p>
                      </div>
                    </div>

                    <div className="degree-item">
                      <div className="degree-badge">M.B.A.</div>
                      <div className="degree-details">
                        <h4>Master of Business Administration (Production Engineering)</h4>
                        <p>Madurai Kamaraj University (2002 - 2004)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div className="profile-card" variants={itemVariants}>
                  <div className="profile-card-header">
                    <div className="header-icon-wrap purple">
                      <FaBriefcase />
                    </div>
                    <h2>Leadership Experience Timeline</h2>
                  </div>

                  <div className="executive-timeline">
                    <div className="timeline-block current">
                      <div className="timeline-marker"></div>
                      <div className="timeline-info">
                        <span className="timeline-period">June 2017 – Present</span>
                        <h4 className="timeline-role">Professor & Principal</h4>
                        <p className="timeline-org">Nadar Saraswathi College of Engineering & Technology</p>
                      </div>
                    </div>

                    <div className="timeline-block">
                      <div className="timeline-marker"></div>
                      <div className="timeline-info">
                        <span className="timeline-period">4 Years</span>
                        <h4 className="timeline-role">Professor & Vice Principal</h4>
                        <p className="timeline-org">Nadar Saraswathi College of Engineering & Technology</p>
                      </div>
                    </div>

                    <div className="timeline-block">
                      <div className="timeline-marker"></div>
                      <div className="timeline-info">
                        <span className="timeline-period">3 Years</span>
                        <h4 className="timeline-role">Assistant / Associate Professor</h4>
                        <p className="timeline-org">Nadar Saraswathi College of Engineering & Technology</p>
                      </div>
                    </div>

                    <div className="timeline-block">
                      <div className="timeline-marker"></div>
                      <div className="timeline-info">
                        <span className="timeline-period">2 Years</span>
                        <h4 className="timeline-role">Assistant Professor</h4>
                        <p className="timeline-org">Bharath Niketan Engineering College</p>
                      </div>
                    </div>

                    <div className="timeline-block">
                      <div className="timeline-marker"></div>
                      <div className="timeline-info">
                        <span className="timeline-period">8+ Years</span>
                        <h4 className="timeline-role">Lecturer & Head of Department</h4>
                        <p className="timeline-org">Multiple Renowned Polytechnic Institutions</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: RESEARCH & PATENTS */}
          {activeTab === 'research' && (
            <motion.div 
              className="tab-pane-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="research-summary-banner">
                <div className="summary-stat-box">
                  <span className="stat-val">32</span>
                  <span className="stat-lbl">International Publications</span>
                </div>
                <div className="summary-stat-box">
                  <span className="stat-val">3</span>
                  <span className="stat-lbl">Patents Published / Granted</span>
                </div>
                <div className="summary-stat-box">
                  <span className="stat-val">20+</span>
                  <span className="stat-lbl">Years Academic Research</span>
                </div>
              </div>

              <div className="patents-section-card">
                <div className="patents-header">
                  <FaLightbulb className="patents-header-icon" />
                  <h2>Granted & Published Patents</h2>
                </div>

                <div className="patents-grid">
                  <div className="patent-card">
                    <div className="patent-badge">Patent 2023</div>
                    <h3>Movable Staircase and Lifting Setup in Vehicle</h3>
                    <p>Engineering mechanism designed for improved accessibility, safety, and operational vehicle utility.</p>
                  </div>

                  <div className="patent-card">
                    <div className="patent-badge">Patent 2022</div>
                    <h3>Flower Garland Making Machine</h3>
                    <p>Automated precision machinery facilitating commercial garland weaving with high speed and consistency.</p>
                  </div>

                  <div className="patent-card">
                    <div className="patent-badge">Patent 2017</div>
                    <h3>Automation in Portable Oil Seal Assembly Machine</h3>
                    <p>Industrial tool automation designed for error-free automotive component assembly processes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* Office & Appointment Bar */}
      <section className="principal-office-section">
        <div className="principal-container">
          <div className="office-card">
            <div className="office-card-left">
              <FaBuilding className="office-card-icon" />
              <div>
                <h3>Principal's Office Hours</h3>
                <p>Monday – Saturday: 09:00 AM – 05:00 PM | Administrative Block, NSCET Campus</p>
              </div>
            </div>
            <div className="office-card-right">
              <a href="mailto:principal@nscet.org?subject=Appointment%20Request%20-%20Principal%20NSCET" className="office-appoint-btn">
                <FaCalendarCheck /> Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Principal;
