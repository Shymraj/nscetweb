import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaArrowRight, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaTimes, 
  FaPhoneAlt, 
  FaUniversity,
  FaFileContract
} from 'react-icons/fa';
import Rajadurai from '../../../assets/administration/images/Rajadurai.png';
import './Ombudsperson.css';

function Ombudsperson() {
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  return (
    <div className="ombudsperson-page">
      {/* Background Animated Floating Ambient Shapes */}
      <div className="omb-bg-shapes">
        <div className="omb-shape omb-shape-1"></div>
        <div className="omb-shape omb-shape-2"></div>
        <div className="omb-shape omb-shape-3"></div>
      </div>

      {/* Main Section */}
      <section className="omb-main-section">
        <div className="omb-container">

          <div className="omb-two-column-grid">
            
            {/* LEFT: Premium Profile Card */}
            <div className="omb-profile-card">
              <div className="omb-avatar-wrapper">
                <div className="omb-avatar-glow"></div>
                <img 
                  src={Rajadurai} 
                  alt="Dr. A. Rajadurai - Ombudsperson" 
                  className="omb-avatar-img"
                />
              </div>

              <div className="omb-profile-details">
                <span className="omb-role-badge">Ombudsperson</span>
                <h2 className="omb-person-name">Dr. A. Rajadurai</h2>
                <p className="omb-person-title">Professor (Retired), MIT Campus</p>
              </div>

              <div className="omb-card-divider"></div>

              {/* Info Chips */}
              <div className="omb-chips-container">
                <div className="omb-chip">
                  <FaCheckCircle className="omb-chip-icon" />
                  <span>Student Support</span>
                </div>
                <div className="omb-chip">
                  <FaCheckCircle className="omb-chip-icon" />
                  <span>Fair Resolution</span>
                </div>
                <div className="omb-chip">
                  <FaCheckCircle className="omb-chip-icon" />
                  <span>Confidential</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Glassmorphism Content Card */}
            <div className="omb-content-card">
              <div className="omb-content-header">
                <div className="omb-badge-pill">
                  <FaShieldAlt className="omb-badge-icon" />
                  <span>Institutional Charter &amp; Governance</span>
                </div>
              </div>

              <div className="omb-content-body">
                <p className="omb-paragraph">
                  The Ombudsperson serves as an impartial and independent resource for students, faculty, and staff at the institution. This role is dedicated to addressing concerns, grievances, and disputes in a fair and confidential manner. The Ombudsperson listens to all parties involved, provides guidance on institutional policies, and facilitates resolutions to promote a harmonious and equitable campus environment. By upholding principles of fairness and transparency, the Ombudsperson ensures that all members of the college community are heard and supported.
                </p>
              </div>

              {/* Bottom Action Section: Premium Contact Panel */}
              <div className="omb-contact-panel">
                <div className="omb-contact-info">
                  <div className="omb-email-icon-box">
                    <FaEnvelope className="omb-email-icon" />
                  </div>
                  <div className="omb-panel-text">
                    <h3 className="omb-panel-title">Official Approval Document</h3>
                    <p className="omb-panel-subtitle">Anna University Ombudsperson Appointment Notification</p>
                  </div>
                </div>

                <button 
                  type="button"
                  className="omb-gradient-btn"
                  onClick={() => setShowApprovalModal(true)}
                >
                  <span>Approval Mail</span>
                  <FaArrowRight className="omb-btn-arrow" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* APPROVAL MAIL MODAL POPUP */}
      {showApprovalModal && (
        <div className="omb-modal-overlay" onClick={() => setShowApprovalModal(false)}>
          <div className="omb-modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="omb-modal-header">
              <div className="omb-modal-header-title">
                <FaFileContract className="omb-modal-header-icon" />
                <div>
                  <h2>Anna University Official Communication</h2>
                  <p>Centre for Student Affairs – Ombudsperson Appointment Notification</p>
                </div>
              </div>
              <button 
                className="omb-modal-close-btn"
                onClick={() => setShowApprovalModal(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Document Body */}
            <div className="omb-modal-body">
              <div className="omb-letterhead-card">
                
                <div className="omb-letterhead-top">
                  <FaUniversity className="omb-univ-icon" />
                  <div className="omb-univ-details">
                    <h3>CENTRE FOR STUDENT AFFAIRS</h3>
                    <h4>ANNA UNIVERSITY, CHENNAI - 600 025</h4>
                  </div>
                </div>

                <div className="omb-letter-content">
                  <p className="omb-salutation">Sir / Madam,</p>

                  <p className="omb-letter-paragraph">
                    As you may know, all institutions must constitute the Student Grievance Redressal Committee according to the University Grants Commission Regulations 2023. In this regard, you are kindly requested to provide the particulars of the committee's formation in your institution, as specified in clause (V) of the UGC regulations to <strong>"The Director, Centre for Student Affairs"</strong> immediately.
                  </p>

                  <p className="omb-letter-paragraph">
                    Continuing the above, <strong>Dr. A. Rajadurai, Professor(Retired), Department of Production Technology, Anna University MIT Campus, Chennai</strong> has been appointed as the Ombudsperson for a term of three years, effective from January 22, 2024. Please reach out to the following email address and number for inquiries related to the Ombudsperson:
                  </p>

                  {/* Contact Highlight Box */}
                  <div className="omb-contact-details-box">
                    <div className="omb-detail-row">
                      <FaEnvelope className="omb-detail-icon" />
                      <div>
                        <span className="omb-detail-label">Email ID ---</span>
                        <a href="mailto:dsaannauniv@gmail.com" className="omb-detail-link">
                          dsaannauniv@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="omb-detail-row">
                      <FaPhoneAlt className="omb-detail-icon" />
                      <div>
                        <span className="omb-detail-label">Landline number</span>
                        <span className="omb-detail-val">044-22357081 / 22357078</span>
                      </div>
                    </div>
                  </div>

                  {/* Sign-off Block */}
                  <div className="omb-signoff-block">
                    <p className="omb-signoff-regards">With regards,</p>
                    <p className="omb-signoff-role">Director,</p>
                    <p className="omb-signoff-dept">Centre for Student Affairs,</p>
                    <p className="omb-signoff-dept">Anna University,</p>
                    <p className="omb-signoff-dept">Chennai-25.</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="omb-modal-footer">
              <a 
                href="mailto:dsaannauniv@gmail.com?subject=Inquiry%20to%20Ombudsperson%20-%20Anna%20University" 
                className="omb-modal-email-btn"
              >
                <FaEnvelope /> Email Centre for Student Affairs
              </a>
              <button 
                type="button" 
                className="omb-modal-close-action"
                onClick={() => setShowApprovalModal(false)}
              >
                Close Document
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Ombudsperson;
