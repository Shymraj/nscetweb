import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLightbulb,
  FaTrophy,
  FaUsers,
  FaLaptopCode,
  FaMicrochip,
  FaAward,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaShieldAlt,
  FaHeartbeat,
  FaLeaf,
  FaRobot,
  FaCity,
  FaEnvelope,
  FaPhoneAlt,
  FaUserTie,
  FaGraduationCap,
  FaCodeBranch,
  FaRocket
} from "react-icons/fa";
import "./SIH.css";

const stats = [
  { value: "50+", label: "Teams Registered", icon: <FaUsers /> },
  { value: "120+", label: "Problem Statements", icon: <FaLightbulb /> },
  { value: "10+", label: "National Finalists", icon: <FaAward /> },
  { value: "₹2.5L+", label: "Prizes & Grants", icon: <FaTrophy /> },
];

const editionData = [
  {
    id: "software",
    title: "Software Edition",
    icon: <FaLaptopCode />,
    description:
      "A 36-hour continuous coding hackathon where students develop digital solutions, web & mobile applications, AI/ML models, and cloud-native software products for real government and industrial problems.",
    features: [
      "Web & Mobile Applications",
      "Artificial Intelligence & Machine Learning",
      "Cybersecurity & Blockchain",
      "Cloud Computing & SaaS Platforms",
      "36-Hour Continuous Grand Finale"
    ]
  },
  {
    id: "hardware",
    title: "Hardware Edition",
    icon: <FaMicrochip />,
    description:
      "A 5-day intensive product development hackathon where student teams design, fabricate, and test working hardware prototypes, embedded systems, IoT devices, and robotic solutions.",
    features: [
      "IoT & Embedded Hardware Systems",
      "Robotics & Mechatronics Prototyping",
      "Smart Agriculture & Biomedical Tech",
      "Renewable Energy & Drone Systems",
      "5-Day Live Prototyping Hackathon"
    ]
  }
];

const roadmapSteps = [
  {
    step: "01",
    title: "Problem Statement Release",
    desc: "Ministries, Departments, and Industries publish real-world problem statements on the official SIH portal.",
    timeline: "Phase 1"
  },
  {
    step: "02",
    title: "Campus Internal Hackathon",
    desc: "NSCET organizes internal screening rounds where expert jury evaluate student presentations and prototypes.",
    timeline: "Phase 2"
  },
  {
    step: "03",
    title: "National Idea Nomination",
    desc: "Top shortlisted teams (with mandatory female representation) get officially nominated on the AICTE SIH portal.",
    timeline: "Phase 3"
  },
  {
    step: "04",
    title: "Mentorship & Prototyping",
    desc: "Selected teams receive continuous mentorship from senior faculty and industry experts to refine their solution.",
    timeline: "Phase 4"
  },
  {
    step: "05",
    title: "Grand Finale",
    desc: "Teams compete nationally at assigned Nodal Centers across India for the grand prize and ministry recognition.",
    timeline: "Phase 5"
  }
];

const themesList = [
  {
    icon: <FaRobot />,
    name: "Smart Automation & AI",
    desc: "Intelligent automation, computer vision, natural language processing, and deep learning solutions."
  },
  {
    icon: <FaHeartbeat />,
    name: "Healthcare & Biomedical",
    desc: "Affordable medical diagnostic devices, telemedicine software, and hospital workflow automation."
  },
  {
    icon: <FaLeaf />,
    name: "Agriculture & Rural Tech",
    desc: "Smart irrigation, crop disease detection, supply chain tracking, and rural empowerment platforms."
  },
  {
    icon: <FaShieldAlt />,
    name: "Cybersecurity & Blockchain",
    desc: "Secure data transactions, anti-fraud algorithms, identity verification, and threat mitigation."
  },
  {
    icon: <FaCity />,
    name: "Smart Cities & Clean Tech",
    desc: "Intelligent waste management, renewable energy optimization, and traffic management solutions."
  },
  {
    icon: <FaCodeBranch />,
    name: "Disaster Management & Robotics",
    desc: "Early warning sensors, autonomous search & rescue drones, and crisis communication systems."
  }
];

const dummyShowcases = [
  {
    title: "Autonomous Crop Disease Surveillance System",
    category: "Hardware",
    theme: "Agriculture & Rural Tech",
    teamName: "Team AgroInnovators",
    lead: "Karthik R (CSE)",
    mentor: "Dr. S. Ramesh, M.E., Ph.D.",
    badge: "SIH National Finalist",
    statusColor: "finalist",
    summary:
      "A multispectral drone integrated with edge AI to detect leaf blight and moisture deficiency in real time with SMS alerts to farmers."
  },
  {
    title: "AI-Powered Medical Prescription & Tele-Triage",
    category: "Software",
    theme: "Healthcare & Biomedical",
    teamName: "Team MedPulse",
    lead: "Priyadharshini M (IT)",
    mentor: "Prof. K. Sundaram, M.Tech.",
    badge: "1st Prize - Internal SIH",
    statusColor: "winner",
    summary:
      "OCR-based multilingual prescription reader and automated severity index calculation for remote primary health centres."
  },
  {
    title: "Smart Grid Fault Isolation & Load Balancer",
    category: "Hardware",
    theme: "Clean & Green Tech",
    teamName: "Team VoltGuard",
    lead: "Vigneshwaran S (EEE)",
    mentor: "Dr. M. Anand, Ph.D.",
    badge: "Special Jury Award",
    statusColor: "special",
    summary:
      "Microcontroller-driven phase load balancing unit that prevents transformer burnout during peak village power surges."
  }
];

const faqs = [
  {
    q: "Who is eligible to participate in Smart India Hackathon (SIH)?",
    a: "All regular undergraduate and postgraduate engineering and technology students of NSCET are eligible to form teams and participate in the internal hackathon."
  },
  {
    q: "What is the team composition requirement?",
    a: "Each team must consist of exactly 6 members. As per strict AICTE/Ministry guidelines, at least one female team member is mandatory in every team."
  },
  {
    q: "How does NSCET support participating teams?",
    a: "NSCET provides state-of-the-art incubation labs (including iSPIN & IoT Centres), dedicated faculty mentorship, financial support for prototype components, and travel grants for national grand finale events."
  },
  {
    q: "Can a student be part of multiple teams?",
    a: "No, a student can only be a registered member of one team for a specific edition of the Smart India Hackathon."
  }
];

function SIH() {
  const [activeTab, setActiveTab] = useState("software");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="common-page-wrapper sih-page-wrapper">
      {/* ─── Hero Section ─── */}
      <section className="sih-hero-section">
        <div className="sih-hero-blob sih-hero-blob-1" />
        <div className="sih-hero-blob sih-hero-blob-2" />
        <div className="sih-container sih-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sih-hero-badge"
          >
            <FaRocket className="sih-badge-icon" />
            <span>Ministry of Education & AICTE Initiative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sih-hero-title"
          >
            Smart India Hackathon <span className="sih-gradient-text">(SIH)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sih-hero-subtitle"
          >
            World's biggest open innovation model fostering digital product development, out-of-the-box thinking, and multidisciplinary engineering problem solving at Nadar Saraswathi College of Engineering & Technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sih-hero-actions"
          >
            <a href="#about" className="sih-btn sih-btn-primary">
              <FaLightbulb /> About SIH
            </a>
            <a href="#roadmap" className="sih-btn sih-btn-secondary">
              <FaCalendarAlt /> Selection Process
            </a>
            <a href="#showcase" className="sih-btn sih-btn-outline">
              <FaTrophy /> Project Showcase
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Metrics Section ─── */}
      <section className="sih-stats-section">
        <div className="sih-container">
          <div className="sih-stats-grid">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="sih-stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="sih-stat-icon-wrap">{stat.icon}</div>
                <div className="sih-stat-info">
                  <span className="sih-stat-value">{stat.value}</span>
                  <span className="sih-stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About SIH & Editions ─── */}
      <section id="about" className="sih-section sih-bg-light">
        <div className="sih-container">
          <div className="sih-section-header">
            <span className="sih-sub-badge">INNOVATION ECOSYSTEM</span>
            <h2 className="sih-section-title">What is Smart India Hackathon?</h2>
            <p className="sih-section-desc">
              Smart India Hackathon (SIH) is a nationwide initiative by the Ministry of Education's Innovation Cell (MIC) and AICTE to provide students with a platform to solve pressing problems of ministries, departments, industries, and non-governmental organizations.
            </p>
          </div>

          {/* Edition Toggle */}
          <div className="sih-tabs-nav">
            {editionData.map((tab) => (
              <button
                key={tab.id}
                className={`sih-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="sih-edition-content-card">
            {editionData
              .filter((tab) => tab.id === activeTab)
              .map((tab) => (
                <div key={tab.id} className="sih-edition-grid">
                  <div className="sih-edition-text">
                    <h3 className="sih-edition-heading">{tab.title} Overview</h3>
                    <p className="sih-edition-p">{tab.description}</p>
                    <div className="sih-feature-list">
                      {tab.features.map((feat, fidx) => (
                        <div key={fidx} className="sih-feature-item">
                          <FaCheckCircle className="sih-check-icon" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="sih-edition-highlight-box">
                    <div className="sih-highlight-inner">
                      <div className="sih-highlight-icon">{tab.icon}</div>
                      <h4 className="sih-highlight-title">Why Participate in {tab.title}?</h4>
                      <p className="sih-highlight-p">
                        Gain direct visibility with national leadership, win cash prizes up to ₹1,00,000 per problem statement, receive incubation support, and build career-defining engineering portfolios.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ─── Roadmap & Process ─── */}
      <section id="roadmap" className="sih-section">
        <div className="sih-container">
          <div className="sih-section-header">
            <span className="sih-sub-badge">CAMPUS TO NATION</span>
            <h2 className="sih-section-title">SIH Journey & Selection Process</h2>
            <p className="sih-section-desc">
              How NSCET students advance from internal ideation to the national Grand Finale.
            </p>
          </div>

          <div className="sih-roadmap-grid">
            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="sih-roadmap-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="sih-step-badge">{step.timeline}</div>
                <div className="sih-step-number">{step.step}</div>
                <h3 className="sih-step-title">{step.title}</h3>
                <p className="sih-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Themes & Focus Areas ─── */}
      <section className="sih-section sih-bg-light">
        <div className="sih-container">
          <div className="sih-section-header">
            <span className="sih-sub-badge">DOMAINS</span>
            <h2 className="sih-section-title">Key Innovation Themes</h2>
            <p className="sih-section-desc">
              Interdisciplinary challenge verticals tackled by our engineering departments.
            </p>
          </div>

          <div className="sih-themes-grid">
            {themesList.map((theme, idx) => (
              <motion.div
                key={idx}
                className="sih-theme-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="sih-theme-icon">{theme.icon}</div>
                <h3 className="sih-theme-title">{theme.name}</h3>
                <p className="sih-theme-desc">{theme.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Project Showcases / Winners (Dummy Data) ─── */}
      <section id="showcase" className="sih-section">
        <div className="sih-container">
          <div className="sih-section-header">
            <span className="sih-sub-badge">STUDENT ACHIEVEMENTS</span>
            <h2 className="sih-section-title">Featured Innovations & Projects</h2>
            <p className="sih-section-desc">
              Exemplary student prototypes that represented NSCET at Smart India Hackathons.
            </p>
          </div>

          <div className="sih-showcase-grid">
            {dummyShowcases.map((item, idx) => (
              <motion.div
                key={idx}
                className="sih-showcase-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="sih-showcase-top">
                  <span className={`sih-status-badge ${item.statusColor}`}>
                    {item.badge}
                  </span>
                  <span className="sih-category-pill">{item.category}</span>
                </div>
                <h3 className="sih-showcase-title">{item.title}</h3>
                <p className="sih-showcase-summary">{item.summary}</p>
                <div className="sih-showcase-meta">
                  <div className="sih-meta-row">
                    <span className="sih-meta-label">Team:</span>
                    <span className="sih-meta-val">{item.teamName}</span>
                  </div>
                  <div className="sih-meta-row">
                    <span className="sih-meta-label">Lead:</span>
                    <span className="sih-meta-val">{item.lead}</span>
                  </div>
                  <div className="sih-meta-row">
                    <span className="sih-meta-label">Mentor:</span>
                    <span className="sih-meta-val">{item.mentor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPOC & Faculty Coordinators ─── */}
      <section className="sih-section sih-bg-light">
        <div className="sih-container">
          <div className="sih-section-header">
            <span className="sih-sub-badge">LEADERSHIP & GUIDANCE</span>
            <h2 className="sih-section-title">Institutional SPOC & Coordination Team</h2>
            <p className="sih-section-desc">
              Connect with our Single Point of Contact (SPOC) and departmental faculty mentors for registration and guidance.
            </p>
          </div>

          <div className="sih-spoc-grid">
            <div className="sih-spoc-card sih-spoc-highlight">
              <div className="sih-spoc-avatar-wrap">
                <FaUserTie className="sih-avatar-icon" />
              </div>
              <div className="sih-spoc-details">
                <span className="sih-spoc-tag">College SPOC</span>
                <h3 className="sih-spoc-name">Dr. Institutional SPOC</h3>
                <p className="sih-spoc-role">Single Point of Contact - Smart India Hackathon</p>
                <p className="sih-spoc-dept">Nadar Saraswathi College of Engineering & Technology</p>
                <div className="sih-spoc-contacts">
                  <span className="sih-contact-item">
                    <FaEnvelope /> sih@nscet.org
                  </span>
                  <span className="sih-contact-item">
                    <FaPhoneAlt /> +91 98765 43210
                  </span>
                </div>
              </div>
            </div>

            <div className="sih-spoc-card">
              <div className="sih-spoc-avatar-wrap">
                <FaGraduationCap className="sih-avatar-icon" />
              </div>
              <div className="sih-spoc-details">
                <span className="sih-spoc-tag">Hackathon Cell</span>
                <h3 className="sih-spoc-name">Innovation & Incubation Cell</h3>
                <p className="sih-spoc-role">Student Mentorship & Lab Support</p>
                <p className="sih-spoc-dept">iSPIN Innovation Hub & Centres of Excellence</p>
                <div className="sih-spoc-contacts">
                  <span className="sih-contact-item">
                    <FaEnvelope /> incubation@nscet.org
                  </span>
                  <span className="sih-contact-item">
                    <FaPhoneAlt /> Vadapudupatti, Theni
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="sih-section">
        <div className="sih-container">
          <div className="sih-section-header">
            <span className="sih-sub-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="sih-section-title">Rules & Guidelines</h2>
            <p className="sih-section-desc">
              Important information regarding participation, eligibility, and team formation.
            </p>
          </div>

          <div className="sih-faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`sih-faq-item ${openFaq === index ? "open" : ""}`}
              >
                <button
                  className="sih-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="sih-faq-answer"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="sih-cta-box">
            <h3 className="sih-cta-title">Ready to build the next breakthrough innovation?</h3>
            <p className="sih-cta-desc">
              Stay tuned for the upcoming Internal Hackathon announcement and register your team with our college SPOC.
            </p>
            <a
              href="https://www.sih.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="sih-btn sih-btn-primary"
            >
              Visit Official SIH Portal <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SIH;
