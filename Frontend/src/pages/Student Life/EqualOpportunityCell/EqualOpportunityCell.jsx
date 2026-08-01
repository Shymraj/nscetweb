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

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="section-header">
            <h3>Introduction</h3>
            <div className="header-line"></div>
          </div>
          <p className="intro-text">
            The Equal Opportunity Cell (EOC) at Nadar Saraswathi College of Engineering & Technology (NSCET) has been established to ensure that all students, regardless of caste, gender, religion, region, language, disability, or socio-economic background, have equal access to academic, co-curricular, and support opportunities. The cell proactively works towards creating an inclusive, safe, and motivating environment that nurtures student potential and promotes equity across all aspects of campus life.
          </p>
        </section>

        {/* Circular Section */}
        <section className="circular-section">
          <div className="section-header">
            <h3>Circular</h3>
            <div className="header-line"></div>
          </div>
          <div className="circular-content">
            <div className="circular-header">
              <p><strong>Ref:</strong> NSCET/EOC/2024/001</p>
              <p><strong>Date:</strong> 12.07.2024</p>
              <h4>CIRCULAR</h4>
            </div>
            <p className="circular-text">
              All the members of the Equal Opportunity Cell (EOC) are hereby informed that a meeting is scheduled as per the following details:
            </p>
            <div className="meeting-details">
              <p><strong>Date:</strong> 16.07.2024 (Friday)</p>
              <p><strong>Time:</strong> 10:00 AM</p>
              <p><strong>Venue:</strong> Board Room</p>
              <p><strong>Chairperson:</strong> Dr. C. Mathalai Sundaram, Principal</p>
            </div>
            <div className="agenda-section">
              <h5>Agenda:</h5>
              <ul>
                <li>Overview of Equal Opportunity Initiatives</li>
                <li>Planning event on:
                  <ul>
                    <li>Personality Development & Soft Skills</li>
                    <li>Competitive Exams (GATE, UPSC, TNPSC, etc.)</li>
                    <li>Common Interdepartmental Competitions</li>
                    <li>Awareness on Overseas Education Opportunities</li>
                    <li>Career Development and Employability Skills</li>
                    <li>Government Schemes for SC/ST/OBC students</li>
                  </ul>
                </li>
                <li>Planning support mechanisms and awareness drives</li>
                <li>Finalization of events calendar and responsibilities</li>
                <li>Compilation of Annual Report</li>
                <li>Any other matter with permission of the Chair</li>
              </ul>
            </div>
            <p className="circular-footer">
              All concerned members are requested to attend the meeting without fail.
            </p>
            <div className="circular-signatures">
              <p>Coordinator, EOC</p>
              <p>Principal</p>
            </div>
          </div>
        </section>

        {/* Meeting Minutes Section */}
        <section className="minutes-section">
          <div className="section-header">
            <h3>Meeting Minutes</h3>
            <div className="header-line"></div>
          </div>
          <div className="minutes-content">
            <div className="minutes-header">
              <p><strong>Ref:</strong> NSCET/EOC/2024/002</p>
              <p><strong>Date:</strong> 16.07.2024</p>
              <h4>Meeting Minutes</h4>
            </div>
            <div className="meeting-details">
              <p><strong>Date:</strong> 16.07.2024</p>
              <p><strong>Time:</strong> 10:00 AM to 11:30 AM</p>
              <p><strong>Venue:</strong> Board Room</p>
              <p><strong>Chairperson:</strong> Dr. C. Mathalaisundaram, Principal</p>
            </div>
            <div className="members-present">
              <h5>Members Present:</h5>
              <ul>
                <li>Dr. M. Sathya, Viceprincipal, Academic – Coordinator / EOC</li>
                <li>Dr. C. Karthikeyan, Placement and Training Officer</li>
                <li>Dr. V. Ananthi, Asst Prof / Maths</li>
                <li>Mr. N. Keesamoorthy, Asst Prof / CSE</li>
                <li>Mr. A. MuniKumar, JA / Admin</li>
              </ul>
            </div>
            <div className="agenda-discussed">
              <h5>Agenda Discussed:</h5>
              <div className="agenda-item">
                <h6>Vision of the EOC:</h6>
                <p>The Chairperson reiterated the role of the EOC in promoting inclusivity, access to opportunities, and equality among all students, particularly marginalized groups (SC/ST/OBC).</p>
              </div>
              <div className="agenda-item">
                <h6>Program Plans Discussed:</h6>
                <ul>
                  <li><strong>Personality Development & Soft Skills:</strong> Two monthly sessions planned for communication, leadership, and grooming.</li>
                  <li><strong>Competitive Exams Training:</strong> Workshops for GATE, TNPSC, and bank exams to be organized in collaboration with placement cell.</li>
                  <li><strong>Common Competitions:</strong> Aptitude tests, quiz, essay writing, and mock interviews to be hosted college-wide.</li>
                  <li><strong>Abroad Dreams Session:</strong> Alumni-led seminar on higher studies and scholarships abroad.</li>
                  <li><strong>Career & Employability Skills:</strong> Resume building, interview techniques, and domain-specific certifications.</li>
                  <li><strong>SC/ST/OBC Welfare & Government Schemes:</strong> A separate awareness session to be conducted on scholarships, coaching schemes, and career support schemes.</li>
                </ul>
              </div>
              <div className="agenda-item">
                <h6>Grievance Redressal & Feedback:</h6>
                <p>Anonymous forms and feedback collection methods were finalized.</p>
              </div>
              <div className="agenda-item">
                <h6>Annual Report & Calendar:</h6>
                <p>Members were assigned to collate reports of events conducted till date.</p>
              </div>
              <div className="agenda-item">
                <h6>Conclusion:</h6>
                <p>The Principal encouraged frequent and focused student engagement and directed members to prepare a tentative calendar for the above events.</p>
              </div>
            </div>
            <div className="minutes-signature">
              <p><strong>Prepared by:</strong> Dr. M. Sathya, Coordinator – Equal Opportunity Cell</p>
            </div>
          </div>
        </section>

        {/* Action Taken Report Section */}
        <section className="action-report-section">
          <div className="section-header">
            <h3>Action Taken Report</h3>
            <div className="header-line"></div>
          </div>
          <div className="action-report-content">
            <div className="report-header">
              <p><strong>Equal Opportunity Cell (EOC) – 2024-2025</strong></p>
              <p><strong>Ref:</strong> NSCET/EOC/2024/003</p>
              <p><strong>Date:</strong> 20.07.2024</p>
            </div>
            <div className="action-table-wrapper">
              <table className="action-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Action Point</th>
                    <th>Responsible Person</th>
                    <th>Status / Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lecture on Personality development & Soft Skills (July 2024)</td>
                    <td>Dr. C. Karthikeyan, Placement and Training Officer</td>
                    <td>Trainer finalized; Date fixed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Career catalyst : Competitive Examinations and trends in Employment (July 2024)</td>
                    <td>Dr. V. Ananthi, Asst Prof / Maths</td>
                    <td>GATE & TNPSC session planned</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Guest Lecture on "Opening New Gates of Wisdom & Job opportunities in Japan"</td>
                    <td>Dr. C. Karthikeyan, Placement and Training Officer<br/>Dr. V. Ananthi, Asst Prof / Maths</td>
                    <td>For Teaching Japanese Language And To Provide Knowledge On Opportunities</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Awareness Program on SC/ST/OBC Schemes (December 2025)</td>
                    <td>Mr. N. Keesamoorthy, Asst Prof / CSE</td>
                    <td>In collaboration with SEDG CELL – planned</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>EOC Annual Report Compilation</td>
                    <td>Dr. M. Sathya, EOC Coordinator</td>
                    <td>In progress; Due by 10.07.2025</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Anonymous Grievance & Feedback Form Setup</td>
                    <td>Mr. A. MuniKumar, JA / Admin</td>
                    <td>Draft shared; Roll-out in July</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
