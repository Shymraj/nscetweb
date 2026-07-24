import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, FaFlask, FaNetworkWired, FaBrain,
  FaChartLine, FaHandshake, FaMoneyBillWave, FaBookOpen, FaFileSignature,
  FaEnvelope, FaPhoneAlt, FaUserTie
} from 'react-icons/fa';
import './ResearchDevelopmentCell.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const ResearchDevelopmentCell = () => {
  const objectives = [
    {
      icon: <FaChartLine />,
      title: "Promote Research Culture",
      desc: "Encourage faculty and students to engage in innovative research activities."
    },
    {
      icon: <FaHandshake />,
      title: "Collaborate with Industry",
      desc: "Establish partnerships with industries to facilitate applied research and development."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Secure Funding",
      desc: "Assist in obtaining research grants from government and private agencies."
    },
    {
      icon: <FaBookOpen />,
      title: "Enhance Publication Output",
      desc: "Support the publication of research findings in reputed journals and conferences."
    },
    {
      icon: <FaFileSignature />,
      title: "Develop Patents",
      desc: "Encourage the development of new technologies and processes leading to patent filings."
    }
  ];

  const members = [
    { name: "Dr. B. Radha Krishnan", desig: "Professor & Head", dept: "Department of Mechanical Engineering" },
    { name: "Dr. C. Mathalai Sundaram", desig: "Principal & Professor", dept: "Department of Mechanical Engineering" },
    { name: "Dr. Athilingam R", desig: "Associate Professor", dept: "Department of Electrical and Electronics Engineering" },
    { name: "Dr. T. Venish Kumar A", desig: "Professor & Head", dept: "Department of Electronics and Communication Engineering" },
    { name: "Dr. M. Sathya", desig: "Associate Professor", dept: "Department of Computer Science and Engineering" },
    { name: "Dr. N. David Mathan", desig: "Professor", dept: "Department of Chemistry" },
    { name: "Dr. Ananthakrishnan", desig: "Professor & Head", dept: "Department of Civil Engineering" },
    { name: "Dr. N. Mathavan", desig: "Assistant Professor", dept: "Department of Electronics and Communication Engineering" },
    { name: "Dr. Mathalai Raj", desig: "Assistant Professor", dept: "Department of Computer Science and Engineering" }
  ];

  return (
    <div className="rdc-page">
      {/* SECTION 1: Intro */}
      <section className="rdc-section rdc-intro-section">
        <div className="rdc-bg-decoration dec-1"></div>
        <div className="rdc-container rdc-intro-grid">
          <motion.div 
            className="rdc-intro-content"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="rdc-heading">Research & Development Cell</motion.h1>
            <motion.div variants={fadeUp} className="rdc-accent-line"></motion.div>
            <motion.h3 variants={fadeUp} className="rdc-subheading">About the R&D Cell</motion.h3>
            <motion.p variants={fadeUp} className="rdc-desc">
              The Research and Development Cell at Nadar Saraswathi College of Engineering and Technology (NSCET) is dedicated to fostering a culture of innovation and research excellence. Strategically positioned within the vibrant academic environment of NSCET, the R&D Cell aims to bridge the gap between theoretical knowledge and practical application, thereby contributing to the advancement of technology and industry.
            </motion.p>
          </motion.div>
          <motion.div 
            className="rdc-intro-illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Elegant abstract icon composition */}
            <div className="rdc-illustration-circle main-circle">
              <FaBrain className="rdc-ill-icon" />
            </div>
            <motion.div className="rdc-illustration-circle orbit-1" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <FaLightbulb className="rdc-ill-icon" />
            </motion.div>
            <motion.div className="rdc-illustration-circle orbit-2" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <FaFlask className="rdc-ill-icon" />
            </motion.div>
            <motion.div className="rdc-illustration-circle orbit-3" animate={{ y: [0, -20, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
              <FaNetworkWired className="rdc-ill-icon" />
            </motion.div>
            <div className="rdc-illustration-bg-glow"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Objectives */}
      <section className="rdc-section rdc-objectives-section">
        <div className="rdc-bg-decoration dec-2"></div>
        <div className="rdc-container">
          <motion.div 
            className="rdc-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="rdc-section-title">Objectives</motion.h2>
            <motion.div variants={fadeUp} className="rdc-accent-line center"></motion.div>
          </motion.div>

          <motion.div 
            className="rdc-objectives-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {objectives.map((obj, i) => (
              <motion.div key={i} variants={fadeUp} className="rdc-objective-card" whileHover={{ y: -10 }}>
                <div className={`rdc-obj-icon-wrap obj-icon-bg-${(i % 5) + 1}`}>
                  {obj.icon}
                </div>
                <h4 className="rdc-obj-title">{obj.title}</h4>
                <p className="rdc-obj-desc">{obj.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Members */}
      <section className="rdc-section rdc-members-section">
        <div className="rdc-bg-decoration dec-3"></div>
        <div className="rdc-container">
          <motion.div 
            className="rdc-section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="rdc-section-title">Cell Members</motion.h2>
            <motion.div variants={fadeUp} className="rdc-accent-line center"></motion.div>
          </motion.div>

          <motion.div 
            className="rdc-members-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {members.map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="rdc-member-card" whileHover={{ scale: 1.02 }}>
                <div className="rdc-member-avatar">
                  <FaUserTie />
                </div>
                <div className="rdc-member-info">
                  <h4 className="rdc-member-name">{member.name}</h4>
                  <p className="rdc-member-desig">{member.desig}</p>
                  <p className="rdc-member-dept">{member.dept}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: In-Charge */}
      <section className="rdc-section rdc-incharge-section">
        <div className="rdc-bg-decoration dec-4"></div>
        <div className="rdc-container">
          <motion.div 
            className="rdc-incharge-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="rdc-incharge-title">Cell In-Charge</h2>
            <div className="rdc-incharge-details">
              <h3 className="rdc-incharge-name">Dr. B. Radha Krishnan</h3>
              <p className="rdc-incharge-role">Professor & Head, Department of Mechanical Engineering</p>
              
              <div className="rdc-contact-links">
                <a href="mailto:research@nscet.org" className="rdc-contact-item">
                  <div className="rdc-contact-icon"><FaEnvelope /></div>
                  <span>research@nscet.org</span>
                </a>
                <a href="tel:+919159989767" className="rdc-contact-item">
                  <div className="rdc-contact-icon"><FaPhoneAlt /></div>
                  <span>+91 9159989767</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopmentCell;
