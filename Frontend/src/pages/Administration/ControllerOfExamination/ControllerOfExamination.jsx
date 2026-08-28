import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ControllerOfExamination.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaFileAlt, FaClipboardCheck, FaExclamationTriangle, FaUserTie, FaProjectDiagram, FaCertificate, FaUserGraduate, FaRupeeSign, FaSearchPlus, FaTimes } from 'react-icons/fa';
import ganeshImg from './images/ganesh.jpg';
import sivaganesanImg from './images/sivaganesan.jpg';
import examCellPdf from './images/1 ExamCell Constitution FC.pdf';
import internalAssessmentPdf from './images/2 Internal Assessment Mechanism.pdf';
import ieGrievancePdf from './images/3 IE Grievance FC FINAL.pdf';
import eeGrievancesPdf from './images/4 EE Grievances FC fINAL.pdf';
import examProcessImg from './images/Exam Cell Process.png';
import bannerImg from './images/EXAM CELL.png';
import saravanaImg from './images/Saravanakumar.png';

const deputyControllers = [
  {
    id: 1,
    name: "Mr. K. Ganesh",
    qualification: "M.Tech,(Ph.D).,   Asst.Prof of EEE",
    role: "Deputy exam cell",
    image: ganeshImg
  },
  {
    id: 2,
    name: "Mr. V. Sivaganesan",
    qualification: "M.E.(Ph.D)., Asst.Prof of MECH",
    role: "Deputy exam cell",
    image: sivaganesanImg
  },
  {
    id: 3,
    name: "Dr.R.Saravana Kumar",
    qualification: "M.Sc., M.Phil, Ph.D., MISTE., Asst.Prof of S&H",
    role: "Deputy exam cell",
    image: saravanaImg
  }

];

const verificationSteps = [
  { id: 1, icon: FaUserGraduate, title: "Register", description: "Create a new account for first-time users" },
  { id: 2, icon: FaFileAlt, title: "Login", description: "Login with registered credentials" },
  { id: 3, icon: FaProjectDiagram, title: "Upload Certificate", description: "Upload scanned copy of the certificate" },
  { id: 4, icon: FaRupeeSign, title: "Pay Fee", description: "Pay ₹200 per certificate via QR Code / Net Banking and upload payment proof" },
  { id: 5, icon: FaClipboardCheck, title: "Verification", description: "Exam Cell Coordinators will verify the submission" },
  { id: 6, icon: FaCertificate, title: "Get Report", description: "Verification report available within 3 working days" },
];

function ControllerOfExamination() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div className='coe-page'>
      <PageBanner
        title="Controller of Examination"
        subtitle="Ensuring Academic Excellence through Fair and Transparent Examination Processes"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
      />

      <div className='coe-container'>
        {/* Exam Cell Introduction */}
        <section className='coe-section coe-intro'>
          <div className='coe-header'>
            <FaUserTie className='coe-header-icon' />
            <h2>Exam Cell</h2>
          </div>
          <div className='coe-content coe-featured'>
            <p>
              <strong>Dr.C.Mathalai Sundaram ,M.E.,M.B.A.,Ph.D.,MISTE</strong> is the Chief Superintendent of the College.
              The Exam Cell ensures smooth conduct of examinations, fair evaluation processes and timely declaration of results.
            </p>
          </div>
        </section>

        {/* Page Sections Overview */}
        <section className='coe-section coe-sections'>
          <div className='coe-header'>
            <FaFileAlt className='coe-header-icon' />
            <h2>Work Flow</h2>
          </div>
          <div className='coe-sections-grid'>
            <div className='coe-section-card'>
              <FaFileAlt className='section-card-icon' />
              <h3>Exam Cell Constitution</h3>
              <p>Governance structure and committee members</p>
            </div>
            <div className='coe-section-card'>
              <FaClipboardCheck className='section-card-icon' />
              <h3>Internal Assessment Mechanism</h3>
              <p>Continuous evaluation process and criteria</p>
            </div>
            <div className='coe-section-card'>
              <FaExclamationTriangle className='section-card-icon' />
              <h3>Internal Examinations Grievance</h3>
              <p>Redressal mechanism for internal exam concerns</p>
            </div>
            <div className='coe-section-card'>
              <FaExclamationTriangle className='section-card-icon' />
              <h3>External Examinations Grievances</h3>
              <p>Process for addressing external exam issues</p>
            </div>
            <div className='coe-section-card'>
              <FaProjectDiagram className='section-card-icon' />
              <h3>Exam Cell Process Chart</h3>
              <p>Visual workflow of examination procedures</p>
            </div>
          </div>
        </section>

        {/* Exam Cell Process Chart */}
        <section className='coe-section coe-process'>
          <div className='coe-header'>
            <FaProjectDiagram className='coe-header-icon' />
            <h2>Exam Cell Process Chart</h2>
          </div>
          <div className='coe-content'>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="coe-image-container"
              onClick={!imageError ? openModal : undefined}
            >
              <div className="coe-image-glow"></div>

              {!imageError ? (
                <div className="coe-image-wrapper">
                  <img
                    src={examProcessImg}
                    alt="Exam Cell Process Chart"
                    className="coe-roadmap-img"
                    onError={() => setImageError(true)}
                  />
                  <div className="coe-hover-overlay">
                    <FaSearchPlus className="zoom-icon" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              ) : (
                <div className="image-placeholder">
                  <p>Exam Cell Process Chart will be added here.</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Controller of Examinations Team */}
        <section className='coe-section coe-team'>
          <div className='coe-header'>
            <FaUserTie className='coe-header-icon' />
            <h2>Co-ordinaters of Exam Cell</h2>
          </div>
          <div className='coe-content'>
            <h3>Co-ordinaters</h3>
            <div className='coe-team-grid'>
              {deputyControllers.map((member) => (
                <div key={member.id} className='coe-team-card'>
                  <div className='coe-team-image'>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className='coe-team-info'>
                    <h4>{member.name}</h4>
                    <p className='coe-qualification'>{member.qualification}</p>
                    <p className='coe-role'>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Verification Portal */}
        <section className='coe-section coe-verification'>
          <div className='coe-header'>
            <FaCertificate className='coe-header-icon' />
            <h2>Certificate Verification Portal</h2>
          </div>
          <div className='coe-content'>
            <p className='coe-intro-text'>
              There is a separate Certificate Verification system for students and employers to verify academic credentials.
            </p>
            <h3>Verification Procedure</h3>
            <div className='coe-steps-grid'>
              {verificationSteps.map((step) => (
                <div key={step.id} className='coe-step-card'>
                  <div className='coe-step-number'>{step.id}</div>
                  <div className='coe-step-icon'>
                    <step.icon />
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className='coe-fee-info'>
              <FaRupeeSign className='fee-icon' />
              <p><strong>Fee:</strong> ₹200 per certificate</p>
              <p><strong>Payment Methods:</strong> QR Code / Net Banking</p>
              <p><strong>Processing Time:</strong> Within 3 working days</p>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <section className='coe-section coe-notes'>
          <div className='coe-header'>
            <FaFileAlt className='coe-header-icon' />
            <h2>Additional Information</h2>
          </div>
          <div className='coe-content'>
            <ul className='coe-notes-list'>
              <li>
                <strong>Escalation System:</strong> Exam Cell is part of the college's escalation/helpdesk system (Level 2–4 involves Exam Cell Co-ordinators).
              </li>
              <li>
                <strong>Academic Calendars:</strong> Internal Examinations schedules are mentioned in academic calendars (e.g., Internal I for UG/PG).
              </li>
              <li>
                <strong>Process Documentation:</strong> Detailed process flow, committee members and grievance redressal steps are documented in official charts and PDFs.
              </li>
            </ul>
          </div>
        </section>

        {/* Document Downloads */}
        <section className='coe-section coe-documents'>
          <div className='coe-header'>
            <FaFileAlt className='coe-header-icon' />
            <h2>Documents</h2>
          </div>
          <div className='coe-content'>
            <div className='coe-doc-card'>
              <FaFileAlt className='doc-icon' />
              <div className='doc-info'>
                <h4>Exam Cell Constitution</h4>
                <p>Official constitution document</p>
              </div>
              <a href={`${examCellPdf}#toolbar=0`} target='_blank' rel='noopener noreferrer' className='doc-download-btn'>
                PDF
              </a>
            </div>
            <div className='coe-doc-card'>
              <FaFileAlt className='doc-icon' />
              <div className='doc-info'>
                <h4>Internal Assessment Mechanism</h4>
                <p>Assessment process and criteria</p>
              </div>
              <a href={`${internalAssessmentPdf}#toolbar=0`} target='_blank' rel='noopener noreferrer' className='doc-download-btn'>
                PDF
              </a>
            </div>
            <div className='coe-doc-card'>
              <FaFileAlt className='doc-icon' />
              <div className='doc-info'>
                <h4>Internal Examinations Grievance</h4>
                <p>Grievance redressal for internal exams</p>
              </div>
              <a href={`${ieGrievancePdf}#toolbar=0`} target='_blank' rel='noopener noreferrer' className='doc-download-btn'>
                PDF
              </a>
            </div>
            <div className='coe-doc-card'>
              <FaFileAlt className='doc-icon' />
              <div className='doc-info'>
                <h4>External Examinations Grievances</h4>
                <p>Grievance process for external exams</p>
              </div>
              <a href={`${eeGrievancesPdf}#toolbar=0`} target='_blank' rel='noopener noreferrer' className='doc-download-btn'>
                PDF
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && !imageError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="coe-modal-backdrop"
              onClick={closeModal}
            >
              <button className="coe-modal-close" onClick={closeModal} aria-label="Close modal">
                <FaTimes />
              </button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="coe-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={examProcessImg} alt="Exam Cell Process Chart Fullscreen" className="coe-modal-img" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

export default ControllerOfExamination;
