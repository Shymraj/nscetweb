import React from 'react';
import './InternalComplaintsCommittee.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaShieldAlt, FaUsers, FaGavel, FaUserTie, FaFileAlt, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationTriangle, FaBalanceScale, FaUniversity, FaHandHoldingHeart } from 'react-icons/fa';
import bannerImg from './images/icc-banner.jpg';

const committeeMembers = [
  { id: 1, name: "Dr. M. Sathya", designation: "Vice Principal & Professor / CSE", position: "Academic Convenor", contact: "9884854043", email: "vp_academic@nscet.org" },
  { id: 2, name: "Dr. C. Chithra", designation: "Prof-Coordinator / S&H", position: "Member", contact: "9790148325", email: "chithra.c@nscet.org" },
  { id: 3, name: "Dr. R. Valarmathi", designation: "Professor / English", position: "Member", contact: "-", email: "-" },
  { id: 4, name: "Mrs. S. Gayathri", designation: "Assistant Professor / Civil", position: "Member", contact: "8220467759", email: "gayathri@nscet.org" },
  { id: 5, name: "Ms. S. Nanthidha", designation: "Student, IV Yr. / CSE", position: "Student Member", contact: "8015869545", email: "nanthidha_cse@nscet.org" },
  { id: 6, name: "Ms. S. Amutha", designation: "Student, IV Yr. / ECE", position: "Student Member", contact: "9384453946", email: "amuthas_ece@nscet.org" },
  { id: 7, name: "Ms. M. Dheivashri", designation: "Student, IV Yr. / AI&DS", position: "Student Member", contact: "9944110495", email: "dheivashrim_ai@nscet.org" },
  { id: 8, name: "Mr. K. Sidharth", designation: "Student, IV Yr. / Civil", position: "Student Member", contact: "8124433842", email: "-" },
];

const objectives = [
  { icon: FaShieldAlt, text: "Prevent sexual harassment through awareness and sensitization" },
  { icon: FaHandHoldingHeart, text: "Protect the rights and dignity of students and employees (especially women)" },
  { icon: FaBalanceScale, text: "Redress grievances in a timely and confidential manner" },
  { icon: FaUsers, text: "Foster equality, mutual respect and non-discrimination" },
  { icon: FaUniversity, text: "Ensure compliance with UGC and Government of India guidelines" },
];

const roles = [
  { title: "Presiding Officer", description: "Senior woman faculty who leads inquiry and submits reports" },
  { title: "Faculty/Staff Members", description: "Support investigations and awareness activities" },
  { title: "External Member", description: "Expert from NGO/legal background for impartiality" },
];

const complaintSteps = [
  { step: 1, title: "Filing", description: "Written complaint within 3 months of the incident (extendable by another 3 months)" },
  { step: 2, title: "Acknowledgment", description: "ICC forwards copy to respondent within 7 working days. Respondent replies within 10 working days" },
  { step: 3, title: "Conciliation (optional)", description: "Only if complainant requests; no monetary settlement allowed" },
  { step: 4, title: "Inquiry", description: "Formal inquiry completed within 90 days. Fair chance given to both parties" },
  { step: 5, title: "Report", description: "Findings submitted to employer within 10 days of inquiry completion" },
  { step: 6, title: "Action", description: "Employer acts on recommendations within 60 days" },
  { step: 7, title: "Confidentiality", description: "Strictly maintained under Section 16 of the Act" },
];

const legalFrameworks = [
  "POSHE Act, 2013",
  "UGC Regulations, 2015",
  "IPC Sections 354 & 509",
  "Maternity Benefit Act, 1961",
  "Constitutional Articles 14, 15 & 21",
];

const recentMeetings = [
  "21.07.2025 – ICC Meeting",
  "05.09.2024 – Awareness Program",
  "07.01.2022 – ICC Meeting",
  "12.07.2021 – ICC Meeting",
];

const POSHEActivities = [
  "24×7 Helpline Number Circular (08.05.2025)",
  "Awareness Programs (16.10.2025, 19.08.2025, 22.04.2025)",
  "Drawing Competition (20.05.2025)",
  "Quiz Competition (24.06.2025)",
  "Women's Health Awareness (25.09.2025)",
  "Essay Competition (30.07.2025)",
  "POSHE Cell Meeting (08.10.2025)",
];

function InternalComplaintsCommittee() {
  return (
    <div className='icc-page'>
      <PageBanner
        title="Internal Complaints Committee"
        subtitle="Ensuring a Safe, Inclusive, and Respectful Campus Environment"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
      />

      <div className='icc-container'>
        {/* About Section */}
        <section className='icc-section icc-about'>
          <div className='icc-header'>
            <FaShieldAlt className='icc-header-icon' />
            <h2>About the ICC</h2>
          </div>
          <div className='icc-content icc-featured'>
            <p>
              The Internal Complaints Committee (ICC) is constituted as per the UGC (Prevention, Prohibition and Redressal of Sexual Harassment of Women Employees and Students in Higher Educational Institutions) Regulations, 2015 and the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSHE Act).
            </p>
            <p>
              It aims to create a safe, inclusive and respectful campus for everyone. The ICC handles complaints of sexual harassment with fairness, confidentiality, sensitivity and also conducts gender sensitization programs.
            </p>
          </div>
        </section>

        {/* Objectives Section */}
        <section className='icc-section icc-objectives'>
          <div className='icc-header'>
            <FaCheckCircle className='icc-header-icon' />
            <h2>Objectives</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-objectives-grid'>
              {objectives.map((obj, index) => (
                <div key={index} className='icc-objective-card'>
                  <obj.icon className='objective-icon' />
                  <p>{obj.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles & Responsibilities */}
        <section className='icc-section icc-roles'>
          <div className='icc-header'>
            <FaUserTie className='icc-header-icon' />
            <h2>Roles & Responsibilities</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-roles-grid'>
              {roles.map((role, index) => (
                <div key={index} className='icc-role-card'>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
            <div className='icc-duties-box'>
              <h3>Overall Duties</h3>
              <ul>
                <li>Receive & process complaints confidentially</li>
                <li>Conduct inquiry within 90 days</li>
                <li>Recommend actions</li>
                <li>Organize gender sensitization programs</li>
                <li>Submit annual report as per POSHE Act</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Committee Composition */}
        <section className='icc-section icc-composition'>
          <div className='icc-header'>
            <FaUsers className='icc-header-icon' />
            <h2>Composition of the Committee</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-table-wrapper'>
              <table className='icc-table'>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Position</th>
                    <th>Contact</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {committeeMembers.map((member) => (
                    <tr key={member.id}>
                      <td>{member.id}</td>
                      <td><strong>{member.name}</strong></td>
                      <td>{member.designation}</td>
                      <td>{member.position}</td>
                      <td>{member.contact !== "-" ? member.contact : "-"}</td>
                      <td>
                        {member.email !== "-" ? (
                          <a href={`mailto:${member.email}`} className='icc-email-link'>
                            {member.email}
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Complaint Procedure */}
        <section className='icc-section icc-procedure'>
          <div className='icc-header'>
            <FaGavel className='icc-header-icon' />
            <h2>Complaint Procedure (as per POSHE Act, 2013)</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-steps-timeline'>
              {complaintSteps.map((step, index) => (
                <div key={step.step} className={`icc-step-item ${index === 6 ? 'span-three' : ''}`}>
                  <div className='icc-step-number'>{step.step}</div>
                  <div className='icc-step-content'>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies & Legal Framework */}
        <section className='icc-section icc-policies'>
          <div className='icc-header'>
            <FaBalanceScale className='icc-header-icon' />
            <h2>Policies & Legal Framework</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-policies-grid'>
              <div className='icc-policy-card'>
                <FaExclamationTriangle className='policy-icon' />
                <h3>Zero-Tolerance Policy</h3>
                <p>Strict adherence to zero tolerance for any form of harassment</p>
              </div>
              <div className='icc-policy-card'>
                <FaFileAlt className='policy-icon' />
                <h3>Comprehensive POSHE Policy</h3>
                <p>Detailed policy framework for prevention and redressal</p>
              </div>
            </div>
            <div className='icc-legal-framework'>
              <h3>Governing Laws</h3>
              <div className='icc-legal-list'>
                {legalFrameworks.map((law, index) => (
                  <div key={index} className='icc-legal-item'>
                    <FaCheckCircle className='legal-check' />
                    <span>{law}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events & Awareness Activities */}
        <section className='icc-section icc-events'>
          <div className='icc-header'>
            <FaCalendarAlt className='icc-header-icon' />
            <h2>Events & Awareness Activities</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-events-grid'>
              <div className='icc-event-card'>
                <h3>Recent ICC Meetings</h3>
                <ul>
                  {recentMeetings.map((meeting, index) => (
                    <li key={index}>{meeting}</li>
                  ))}
                </ul>
              </div>
              <div className='icc-event-card'>
                <h3>POSHE Activities (2025)</h3>
                <ul>
                  {POSHEActivities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support, Helplines & Contact */}
        <section className='icc-section icc-contact'>
          <div className='icc-header'>
            <FaPhoneAlt className='icc-header-icon' />
            <h2>Support, Helplines & Contact</h2>
          </div>
          <div className='icc-content'>
            <div className='icc-contact-grid'>
              <div className='icc-contact-card'>
                <h3>Helplines</h3>
                <div className='helpline-item'>
                  <FaPhoneAlt className='helpline-icon' />
                  <div>
                    <strong>National Women's Helpline:</strong>
                    <span>181 (24×7)</span>
                  </div>
                </div>
                <div className='helpline-item'>
                  <FaPhoneAlt className='helpline-icon' />
                  <div>
                    <strong>Police Emergency:</strong>
                    <span>100</span>
                  </div>
                </div>
                <div className='helpline-item'>
                  <FaPhoneAlt className='helpline-icon' />
                  <div>
                    <strong>College Security:</strong>
                    <span>04546-263900</span>
                  </div>
                </div>
              </div>

              <div className='icc-contact-card'>
                <h3>Reporting Options</h3>
                <ul>
                  <li>Online Complaint Form → Helpdesk</li>
                  <li>Downloadable Complaint Form (PDF)</li>
                  <li>Physical Drop Box (multiple locations on campus)</li>
                  <li>Email: <a href="mailto:icc@nscet.org" className='icc-email-link'>icc@nscet.org</a></li>
                </ul>
              </div>

              <div className='icc-contact-card'>
                <h3>ICC Office</h3>
                <div className='office-info'>
                  <FaMapMarkerAlt className='office-icon' />
                  <p>Room 101, Administrative Block</p>
                </div>
                <div className='office-info'>
                  <FaPhoneAlt className='office-icon' />
                  <p>Phone: 04546-263900</p>
                </div>
                <div className='office-info'>
                  <FaClock className='office-icon' />
                  <p>Working Hours: Monday–Friday, 10:00 AM – 4:00 PM</p>
                </div>
                <div className='office-info'>
                  <FaHandHoldingHeart className='office-icon' />
                  <p>External Support: Arogya Agam (Local NGO)</p>
                </div>
              </div>
            </div>

            <div className='icc-confidentiality'>
              <FaShieldAlt className='confidentiality-icon' />
              <p><strong>Confidentiality:</strong> All complaints and proceedings are kept strictly confidential.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InternalComplaintsCommittee;
