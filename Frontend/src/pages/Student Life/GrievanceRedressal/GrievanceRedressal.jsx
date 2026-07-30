import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaFilePdf, FaGavel, FaListAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import PolicyPDF from './Grievance_Redressal_Policy.pdf';
import './GrievanceRedressal.css';

const GrievanceRedressal = () => {
  return (
    <div className="grc-page">
      <PageBanner
        title="Grievance Redressal Committee"
        subtitle="Ensuring a Fair and Transparent Campus"
        hideBreadcrumb={false}
      />
      
      <div className="grc-container">
        {/* Header / College Info */}
        <section className="college-header-info">
          <h5>Managing Body: Theni Melapettai Hindu Nadargal Uravinmurai</h5>
          <h2>NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY</h2>
          <p className="approvals">Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai | Accredited by NAAC with 'A' Grade<br/>Recognized under 2(f) of the UGC Act, 1956 | An ISO 9001:2015 Certified Institution</p>
          <p className="address">Address: Vadapudupatti, Annanji (PO), Theni - 625531.</p>
        </section>

        {/* About the Cell Section */}
        <section className="intro-section">
          <div className="section-header">
            <h3>About the Cell</h3>
            <div className="header-line"></div>
          </div>
          <p className="intro-text">
            Nadar Saraswathi College of Engineering and Technology is committed to maintaining a fair, transparent, and responsive system for addressing grievances of students and staff. This policy establishes a structured mechanism for receiving, examining, and resolving grievances in a time-bound and impartial manner while ensuring confidentiality and principles of natural justice.
          </p>
          <a href={PolicyPDF} target="_blank" rel="noopener noreferrer" className="download-btn">
            <FaFilePdf /> Download Minutes of Meeting / Policy PDF
          </a>
        </section>

        {/* Objective Section */}
        <section className="objective-section">
          <div className="objective-card">
            <FaGavel className="objective-icon" />
            <div className="objective-content">
              <h3>Objective</h3>
              <p>To provide a fair, transparent, and responsive system for addressing grievances of students and staff in a time-bound and impartial manner while ensuring confidentiality and principles of natural justice.</p>
            </div>
          </div>
        </section>

        {/* Committee Members */}
        <section className="members-section">
          <div className="section-header">
            <h3>Committee Members</h3>
            <div className="header-line"></div>
          </div>
          <div className="members-table-wrapper">
            <table className="members-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td>1</td>
                  <td><strong>Dr. C. Chithra</strong></td>
                  <td>Prof / Maths<br/>Senior Professor</td>
                  <td>Chairperson</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>Dr. N. David Mathan</strong></td>
                  <td>Prof / Che.<br/>IQAC / Administrative Officer</td>
                  <td>Member Secretary</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>Dr. M. Sathya</strong></td>
                  <td>VP / ASP / CSE<br/>Senior Faculty (Female)</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>Dr. N. Pandiselvi</strong></td>
                  <td>AP / EEE<br/>Faculty Member</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><strong>Dr. B. Radhakrishnan</strong></td>
                  <td>HoD / Mech<br/>Professor / HoD</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><strong>Dr. A. Rajadurai</strong></td>
                  <td>Prof (Prod)<br/>Professor (Retired)</td>
                  <td>Ombudsperson</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td><strong>Mr. P. Praveen Kumar</strong></td>
                  <td>CSE Student<br/>Student Representative</td>
                  <td>Special Invitee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Links / Sections */}
        <section className="grc-links-section">
          <div className="section-header">
            <h3>Important Information</h3>
            <div className="header-line"></div>
          </div>
          <div className="grc-cards-grid">
            <a href={PolicyPDF} target="_blank" rel="noopener noreferrer" className="grc-action-card">
              <FaFilePdf className="action-icon" />
              <h4>Grievance Redressal Policy</h4>
              <p>Click to view or download the complete policy document and guidelines.</p>
            </a>
            <div className="grc-action-card">
              <FaListAlt className="action-icon" />
              <h4>GRC Rules and Procedure</h4>
              <p>Learn about the step-by-step procedures to formally lodge and resolve a grievance.</p>
            </div>
            <div className="grc-action-card contact-card">
              <FaEnvelopeOpenText className="action-icon" />
              <h4>For Any Grievances</h4>
              <p>Submit your grievances confidentially through our official portal or contact the cell directly.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GrievanceRedressal;
