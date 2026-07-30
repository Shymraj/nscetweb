import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaBullseye, FaTasks, FaLightbulb, FaFilePdf, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import './EqualOpportunityCell.css';

const EqualOpportunityCell = () => {
  return (
    <div className="eoc-page">
      <PageBanner
        title="Equal Opportunity Cell"
        subtitle="Promoting Equity and Inclusion at NSCET"
        hideBreadcrumb={false}
      />
      
      <div className="eoc-container">
        {/* Header / College Info */}
        <section className="college-header-info">
          <h5>Managing Body: Theni Melapettai Hindu Nadargal Uravinmurai</h5>
          <h2>NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY</h2>
          <p className="approvals">Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai | Accredited by NAAC with 'A' Grade<br/>Recognized under 2(f) of the UGC Act, 1956 | An ISO 9001:2015 Certified Institution</p>
          <p className="address">Address: Vadapudupatti, Annanji (PO), Theni - 625531.</p>
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="section-header">
            <h3>Introduction</h3>
            <div className="header-line"></div>
          </div>
          <p className="intro-text">
            The Equal Opportunity Cell (EOC) at Nadar Saraswathi College of Engineering & Technology (NSCET) has been established to ensure that all students, regardless of caste, gender, religion, region, language, disability, or socio-economic background, have equal access to academic, co-curricular, and support opportunities. The cell proactively works towards creating an inclusive, safe, and motivating environment that nurtures student potential and promotes equity across all aspects of campus life.
          </p>
          <a href="#" className="download-btn">
            <FaFilePdf /> Download Minutes of Meeting
          </a>
        </section>

        {/* Objectives Section */}
        <section className="objectives-section">
          <div className="section-header">
            <h3>Objectives</h3>
            <div className="header-line"></div>
          </div>
          <ul className="objectives-list">
            <li><FaCheckCircle className="obj-icon"/> <span>To uphold the principles of equal access and equal opportunity to education and resources for all students.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To sensitize students and staff about the importance of inclusivity and diversity.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To promote personality development, soft skills, and employability among students from underrepresented backgrounds.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To support students in preparing for competitive exams such as GATE, UPSC, TNPSC, and bank exams.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To conduct awareness programs on overseas education opportunities and scholarships.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To organize common interdepartmental competitions that promote unity and healthy competition.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To spread awareness about government schemes for SC/ST/OBC students including financial, academic, and career support.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To establish a transparent and confidential grievance redressal system to address discrimination or inequality.</span></li>
            <li><FaCheckCircle className="obj-icon"/> <span>To assist in the preparation of students for career development through guidance and training programs.</span></li>
          </ul>
        </section>

        {/* Roles and Responsibilities */}
        <section className="roles-section">
          <div className="section-header">
            <h3>Roles and Responsibilities</h3>
            <div className="header-line"></div>
          </div>
          <div className="roles-grid">
            <div className="role-card">
              <h4>Policy Implementation</h4>
              <p>Implement policies and guidelines that promote equal opportunity and eliminate discrimination.</p>
            </div>
            <div className="role-card">
              <h4>Workshops & Seminars</h4>
              <p>Organize sessions on soft skills, personality development, and competitive exam readiness.</p>
            </div>
            <div className="role-card">
              <h4>Student Support</h4>
              <p>Provide special attention and mentoring for SC/ST/OBC and economically weaker students.</p>
            </div>
            <div className="role-card">
              <h4>Career Guidance</h4>
              <p>Facilitate career counseling, mock interviews, resume building, and employability training.</p>
            </div>
            <div className="role-card">
              <h4>International Awareness</h4>
              <p>Conduct sessions on abroad studies, scholarships, and guidance from alumni.</p>
            </div>
            <div className="role-card">
              <h4>Competitions</h4>
              <p>Organize competitions like debates, essay writing, coding, and quizzes for inclusive learning.</p>
            </div>
            <div className="role-card">
              <h4>Grievance Redressal</h4>
              <p>Address grievances related to bias or discrimination confidentially and effectively.</p>
            </div>
            <div className="role-card">
              <h4>Government Schemes</h4>
              <p>Inform and assist eligible students to avail central/state welfare schemes.</p>
            </div>
            <div className="role-card">
              <h4>Annual Reporting</h4>
              <p>Maintain reports of all programs, student outcomes, and submit to the IQAC.</p>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="focus-areas-section">
          <div className="section-header">
            <h3>Focus Areas</h3>
            <div className="header-line"></div>
          </div>
          <div className="focus-tags">
            <span className="focus-tag"><FaLightbulb/> Personality Development</span>
            <span className="focus-tag"><FaLightbulb/> Soft Skills & Communication</span>
            <span className="focus-tag"><FaLightbulb/> Competitive Exams: GATE, UPSC, TNPSC</span>
            <span className="focus-tag"><FaLightbulb/> Common College Competitions</span>
            <span className="focus-tag"><FaLightbulb/> Abroad Education & Scholarships</span>
            <span className="focus-tag"><FaLightbulb/> Career Guidance & Employability</span>
            <span className="focus-tag"><FaLightbulb/> SC/ST/OBC & Minority Student Support</span>
            <span className="focus-tag"><FaLightbulb/> Government Schemes & Welfare</span>
            <span className="focus-tag"><FaLightbulb/> Gender Sensitization & Disability Inclusion</span>
            <span className="focus-tag"><FaLightbulb/> Grievance Redressal & Feedback</span>
          </div>
        </section>

        {/* Members Section */}
        <section className="members-section">
          <div className="section-header">
            <h3>Committee Members</h3>
            <div className="header-line"></div>
          </div>
          <div className="members-table-wrapper">
            <table className="members-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Name & Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td>Chairperson</td>
                  <td><strong>Dr. C. Mathalaisundaram</strong><br/>Principal</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td><strong>Dr. M. Sathya</strong><br/>Associate Professor, Academic - Coordinator / EOC</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td><strong>Dr. V. Ananthi</strong><br/>Assistant Professor / Mathematics</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td><strong>Mr. N. Keesamoorthy</strong><br/>Assistant Professor / CSE</td>
                </tr>
                <tr>
                  <td>Members</td>
                  <td><strong>Mr. A. MuniKumar</strong><br/>Junior Assistant / Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EqualOpportunityCell;
