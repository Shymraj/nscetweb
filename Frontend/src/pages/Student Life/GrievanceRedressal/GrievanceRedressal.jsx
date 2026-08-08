import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaFilePdf, FaGavel, FaListAlt, FaEnvelopeOpenText, FaInfoCircle, FaUsers, FaBullseye, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PolicyPDF from './Grievance_Redressal_Policy.pdf';
import './GrievanceRedressal.css';

const GrievanceRedressal = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="grc-page">
      <PageBanner
        title="Grievance Redressal Committee"
        subtitle="Ensuring a Fair and Transparent Campus"
        hideBreadcrumb={false}
      />
      
      <div className="grc-container">

        {/* About the Cell Section */}
        <motion.section 
          className="grc-intro-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="grc-section-header" variants={fadeInLeft}>
            <div className="grc-header-icon-wrap gradient-1">
              <FaInfoCircle />
            </div>
            <div>
              <h3>About the Cell</h3>
              <div className="grc-header-line"></div>
            </div>
          </motion.div>
          <motion.div className="grc-intro-card" variants={fadeInUp}>
            <div className="grc-intro-accent"></div>
            <p className="grc-intro-text">
              Nadar Saraswathi College of Engineering and Technology is committed to maintaining a fair, transparent, and responsive system for addressing grievances of students and staff. This policy establishes a structured mechanism for receiving, examining, and resolving grievances in a time-bound and impartial manner while ensuring confidentiality and principles of natural justice.
            </p>
            <a href={PolicyPDF} target="_blank" rel="noopener noreferrer" className="grc-download-btn">
              <span className="grc-btn-icon"><FaFilePdf /></span>
              <span>View Meeting / Policy PDF</span>
            </a>
          </motion.div>
        </motion.section>

        {/* Objective Section */}
        <motion.section 
          className="grc-objective-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="grc-objective-card" variants={scaleIn}>
            <div className="grc-objective-bg-pattern"></div>
            <div className="grc-objective-icon-wrap">
              <FaBullseye />
            </div>
            <div className="grc-objective-content">
              <h3>Our Objective</h3>
              <p>To provide a fair, transparent, and responsive system for addressing grievances of students and staff in a time-bound and impartial manner while ensuring confidentiality and principles of natural justice.</p>
            </div>
            <div className="grc-objective-glow"></div>
          </motion.div>
        </motion.section>

        {/* Committee Members */}
        <motion.section 
          className="grc-members-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="grc-section-header" variants={fadeInLeft}>
            <div className="grc-header-icon-wrap gradient-2">
              <FaUsers />
            </div>
            <div>
              <h3>Committee Members</h3>
              <div className="grc-header-line"></div>
            </div>
          </motion.div>
          <motion.div className="grc-members-table-wrapper" variants={fadeInUp}>
            <table className="grc-members-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grc-highlight-row">
                  <td>1</td>
                  <td><strong>Dr. C. Chithra</strong></td>
                  <td>Prof / Maths<br/>Senior Professor</td>
                  <td><span className="grc-role-badge chairperson">Chairperson</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>Dr. N. David Mathan</strong></td>
                  <td>Prof / Che.<br/>IQAC / Administrative Officer</td>
                  <td><span className="grc-role-badge secretary">Member Secretary</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>Dr. M. Sathya</strong></td>
                  <td>VP / Prof / CSE<br/>Senior Faculty</td>
                  <td><span className="grc-role-badge member">Member</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>Dr. N. Pandiselvi</strong></td>
                  <td>Prof / EEE<br/>Faculty Member</td>
                  <td><span className="grc-role-badge member">Member</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><strong>Dr. B. Radhakrishnan</strong></td>
                  <td>HoD / Mech<br/>Faculty Member</td>
                  <td><span className="grc-role-badge member">Member</span></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><strong>Dr. A. Rajadurai</strong></td>
                  <td>Prof (Prod)<br/>Professor (Retired)</td>
                  <td><span className="grc-role-badge ombuds">Ombudsperson</span></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td><strong>Mr. P. Praveen Kumar</strong></td>
                  <td>CSE Student<br/>Student Representative</td>
                  <td><span className="grc-role-badge invitee">Special Invitee</span></td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Quick Links / Important Info */}
        <section className="grc-links-section">
          <motion.div 
            className="grc-section-header"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grc-header-icon-wrap gradient-3">
              <FaLink />
            </div>
            <div>
              <h3>Important Information</h3>
              <div className="grc-header-line"></div>
            </div>
          </motion.div>
          <div className="grc-cards-grid">
            <motion.a 
              href={PolicyPDF} target="_blank" rel="noopener noreferrer" 
              className="grc-action-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grc-card-icon-wrap card-gradient-1">
                <FaFilePdf />
              </div>
              <h4>Grievance Redressal Policy</h4>
              <p>Click to view the complete policy document and guidelines.</p>
              <span className="grc-card-arrow">→</span>
            </motion.a>
            <motion.div 
              className="grc-action-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grc-card-icon-wrap card-gradient-2">
                <FaListAlt />
              </div>
              <h4>GRC Rules and Procedure</h4>
              <p>Learn about the step-by-step procedures to formally lodge and resolve a grievance.</p>
              <span className="grc-card-arrow">→</span>
            </motion.div>
            <motion.div 
              className="grc-action-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grc-card-icon-wrap card-gradient-3">
                <FaEnvelopeOpenText />
              </div>
              <h4>For Any Grievances</h4>
              <p>Submit your grievances confidentially through our official portal or contact the cell directly.</p>
              <span className="grc-card-arrow">→</span>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GrievanceRedressal;
