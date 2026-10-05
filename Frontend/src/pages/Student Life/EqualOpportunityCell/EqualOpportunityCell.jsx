import React from 'react';
import { FaBullseye, FaTasks, FaLightbulb, FaFilePdf, FaCheckCircle, FaUserTie, FaInfoCircle, FaFileAlt, FaClipboardList, FaUsers, FaEye, FaHandshake } from 'react-icons/fa';
import './EqualOpportunityCell.css';
import bannerImg from './banner/EqualOpportunityCell.png';
import PolicyPDF from './Equal Opportunity Cell (EOC).pdf';

const EqualOpportunityCell = () => {
  return (
    /* 👇 Main container-ku common-page-wrapper add panniyachu 👇 */
    <div className="common-page-wrapper eoc-page">
      
      {/* 👇 PageBanner-ku bathila pudhu responsive Banner Div 👇 */}
      <div className="common-hero-banner">
        {bannerImg && (
          <img 
            src={bannerImg} 
            alt="Equal Opportunity Cell Banner" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        )}
      </div>
      
      <div className="eoc-container">

        {/* Introduction Section */}
        <section className="eoc-intro-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-1">
              <FaInfoCircle />
            </div>
            <div>
              <h3>About Equal Opportunity Cell</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-intro-card">
            <div className="eoc-intro-accent"></div>
            <p className="eoc-intro-text">
              The Equal Opportunity Cell (EOC) at Nadar Saraswathi College of Engineering & Technology (NSCET) has been established to ensure that all students, regardless of caste, gender, religion, region, language, disability, or socio-economic background, have equal access to academic, co-curricular, and support opportunities. The cell proactively works towards creating an inclusive, safe, and motivating environment that nurtures student potential and promotes equity across all aspects of campus life.
            </p>
            <div className="eoc-btn-wrapper">
              <a href={PolicyPDF} target="_blank" rel="noopener noreferrer" className="eoc-download-btn">
                <span className="eoc-btn-icon"><FaEye /></span>
                <span>View Meeting / Policy PDF</span>
              </a>
            </div>
          </div>
        </section>

        {/* Committee Members Section (Placed directly below About Section) */}
        <section className="eoc-members-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-2">
              <FaUsers />
            </div>
            <div>
              <h3>Committee Members</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-table-wrapper">
            <table className="eoc-members-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="eoc-chair-row">
                  <td>1</td>
                  <td><strong>Dr. C. Mathalaisundaram</strong></td>
                  <td>Principal</td>
                  <td><span className="eoc-role-badge chairperson">Chairperson</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>Dr. M. Sathya</strong></td>
                  <td>Associate Professor, Academic</td>
                  <td><span className="eoc-role-badge coordinator">Coordinator / EOC</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>Mr. N. Keesamoorthy</strong></td>
                  <td>Assistant Professor / IT</td>
                  <td><span className="eoc-role-badge member">Member</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>Mr. A. MuniKumar</strong></td>
                  <td>Junior Assistant / Admin</td>
                  <td><span className="eoc-role-badge member">Member</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Circular Section */}
        <section className="eoc-doc-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-2">
              <FaFileAlt />
            </div>
            <div>
              <h3>Circular</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-doc-card">
            <div className="eoc-doc-header">
              <div className="eoc-doc-meta">
                <span><strong>Ref:</strong> NSCET/EOC/2024/001</span>
                <span><strong>Date:</strong> 12.07.2024</span>
              </div>
              <h4>MEETING CIRCULAR</h4>
            </div>
            <p className="eoc-doc-intro">
              All the members of the Equal Opportunity Cell (EOC) are hereby informed that a meeting is scheduled as per the following details:
            </p>
            <div className="eoc-meeting-details-grid">
              <div className="eoc-detail-item"><strong>Date:</strong> 16.07.2024 (Friday)</div>
              <div className="eoc-detail-item"><strong>Time:</strong> 10:00 AM</div>
              <div className="eoc-detail-item"><strong>Venue:</strong> Board Room</div>
              <div className="eoc-detail-item"><strong>Chairperson:</strong> Dr. C. Mathalai Sundaram, Principal</div>
            </div>
            <div className="eoc-agenda-box">
              <h5>Agenda Items:</h5>
              <ul className="eoc-agenda-list">
                <li>Overview of Equal Opportunity Initiatives</li>
                <li>
                  Planning events on:
                  <ul className="eoc-sub-agenda-list">
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
            <div className="eoc-doc-footer-notice">
              All concerned members are requested to attend the meeting without fail.
            </div>
            <div className="eoc-doc-signatures">
              <div className="eoc-sig-box"><strong>Coordinator</strong><br/><span>Equal Opportunity Cell</span></div>
              <div className="eoc-sig-box"><strong>Principal</strong><br/><span>NSCET</span></div>
            </div>
          </div>
        </section>

        {/* Meeting Minutes Section */}
        <section className="eoc-doc-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-3">
              <FaClipboardList />
            </div>
            <div>
              <h3>Meeting Minutes</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-doc-card">
            <div className="eoc-doc-header">
              <div className="eoc-doc-meta">
                <span><strong>Ref:</strong> NSCET/EOC/2024/002</span>
                <span><strong>Date:</strong> 16.07.2024</span>
              </div>
              <h4>MINUTES OF THE MEETING</h4>
            </div>
            <div className="eoc-meeting-details-grid">
              <div className="eoc-detail-item"><strong>Date:</strong> 16.07.2024</div>
              <div className="eoc-detail-item"><strong>Time:</strong> 10:00 AM to 11:30 AM</div>
              <div className="eoc-detail-item"><strong>Venue:</strong> Board Room</div>
              <div className="eoc-detail-item"><strong>Chairperson:</strong> Dr. C. Mathalaisundaram, Principal</div>
            </div>
            <div className="eoc-members-present-box">
              <h5>Members Present:</h5>
              <div className="eoc-present-chips">
                <span className="eoc-present-chip">Dr. M. Sathya (Vice Principal, Academic – Coordinator / EOC)</span>
                <span className="eoc-present-chip">Mr. N. Keesamoorthy (Assistant Professor / IT)</span>
                <span className="eoc-present-chip">Mr. A. MuniKumar (JA / Admin)</span>
              </div>
            </div>
            <div className="eoc-agenda-box">
              <h5>Agenda Discussed & Outcomes:</h5>
              <div className="eoc-agenda-card-item">
                <h6>1. Vision of the EOC:</h6>
                <p>The Chairperson reiterated the role of the EOC in promoting inclusivity, access to opportunities, and equality among all students, particularly marginalized groups (SC/ST/OBC).</p>
              </div>
              <div className="eoc-agenda-card-item">
                <h6>2. Program Plans Discussed:</h6>
                <ul className="eoc-agenda-bullet-list">
                  <li><strong>Personality Development & Soft Skills:</strong> Two monthly sessions planned for communication, leadership, and grooming.</li>
                  <li><strong>Competitive Exams Training:</strong> Workshops for GATE, TNPSC, and bank exams to be organized in collaboration with placement cell.</li>
                  <li><strong>Common Competitions:</strong> Aptitude tests, quiz, essay writing, and mock interviews to be hosted college-wide.</li>
                  <li><strong>Abroad Dreams Session:</strong> Alumni-led seminar on higher studies and scholarships abroad.</li>
                  <li><strong>Career & Employability Skills:</strong> Resume building, interview techniques, and domain-specific certifications.</li>
                  <li><strong>SC/ST/OBC Welfare & Government Schemes:</strong> A separate awareness session to be conducted on scholarships, coaching schemes, and career support schemes.</li>
                </ul>
              </div>
              <div className="eoc-agenda-card-item">
                <h6>3. Grievance Redressal & Feedback:</h6>
                <p>Anonymous forms and feedback collection methods were finalized.</p>
              </div>
              <div className="eoc-agenda-card-item">
                <h6>4. Annual Report & Calendar:</h6>
                <p>Members were assigned to collate reports of events conducted till date.</p>
              </div>
              <div className="eoc-agenda-card-item">
                <h6>5. Conclusion:</h6>
                <p>The Principal encouraged frequent and focused student engagement and directed members to prepare a tentative calendar for the above events.</p>
              </div>
            </div>
            <div className="eoc-doc-signatures single-sig">
              <div className="eoc-sig-box">
                <strong>Prepared by:</strong><br/>
                <span>Dr. M. Sathya, Vice Principal<br/>Coordinator – Equal Opportunity Cell</span>
              </div>
            </div>
          </div>
        </section>

        {/* Action Taken Report Section */}
        <section className="eoc-report-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-4">
              <FaTasks />
            </div>
            <div>
              <h3>Action Taken Report</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-table-wrapper">
            <div className="eoc-table-header-info">
              <span><strong>Equal Opportunity Cell (EOC) – 2024-2025</strong></span>
              <span><strong>Ref:</strong> NSCET/EOC/2024/003 | <strong>Date:</strong> 20.07.2024</span>
            </div>
            <table className="eoc-action-table">
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
                  <td><strong>Lecture on Personality Development & Soft Skills</strong> (July 2024)</td>
                  <td>Dr. C. Karthikeyan</td>
                  <td><span className="eoc-status-badge success">Trainer finalized; Date fixed</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>Career Catalyst: Competitive Examinations & Employment Trends</strong> (July 2024)</td>
                  <td>Dr. V. Ananthi</td>
                  <td><span className="eoc-status-badge info">GATE & TNPSC session planned</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>Guest Lecture on "Opening New Gates of Wisdom & Job Opportunities in Japan"</strong></td>
                  <td>Dr. C. Karthikeyan<br/>Dr. V. Ananthi</td>
                  <td><span className="eoc-status-badge success">For Japanese Language & Opportunities</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>Awareness Program on SC/ST/OBC Schemes</strong> (December 2025)</td>
                  <td>Mr. N. Keesamoorthy<br/>Assistant Professor / IT</td>
                  <td><span className="eoc-status-badge info">In collaboration with SEDG CELL</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><strong>EOC Annual Report Compilation</strong></td>
                  <td>Dr. M. Sathya<br/>Vice Principal, EOC Coordinator</td>
                  <td><span className="eoc-status-badge warning">In progress; Due by 10.07.2025</span></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><strong>Anonymous Grievance & Feedback Form Setup</strong></td>
                  <td>Mr. A. MuniKumar<br/>JA / Admin</td>
                  <td><span className="eoc-status-badge success">Draft shared; Roll-out in July</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="eoc-objectives-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-5">
              <FaBullseye />
            </div>
            <div>
              <h3>Key Objectives</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-objectives-grid">
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To uphold the principles of equal access and equal opportunity to education and resources for all students.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To sensitize students and staff about the importance of inclusivity and diversity across campus.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To promote personality development, soft skills, and employability among students from underrepresented backgrounds.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To support students in preparing for competitive exams such as GATE, UPSC, TNPSC, and bank exams.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To conduct awareness programs on overseas education opportunities, global careers, and scholarships.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To organize common interdepartmental competitions that promote unity, leadership, and healthy competition.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To spread awareness about government schemes for SC/ST/OBC students including financial, academic, and career support.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To establish a transparent and confidential grievance redressal system to address discrimination or inequality.</p>
            </div>
            <div className="eoc-objective-card">
              <FaCheckCircle className="eoc-obj-icon" />
              <p>To assist in the preparation of students for career development through structured guidance and training programs.</p>
            </div>
          </div>
        </section>

        {/* Roles and Responsibilities */}
        <section className="eoc-roles-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-6">
              <FaTasks />
            </div>
            <div>
              <h3>Roles and Responsibilities</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-roles-grid">
            <div className="eoc-role-card">
              <h4>Policy Implementation</h4>
              <p>Implement policies and guidelines that promote equal opportunity and eliminate discrimination.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Workshops & Seminars</h4>
              <p>Organize sessions on soft skills, personality development, and competitive exam readiness.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Student Support</h4>
              <p>Provide special attention and mentoring for SC/ST/OBC and economically weaker students.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Career Guidance</h4>
              <p>Facilitate career counseling, mock interviews, resume building, and employability training.</p>
            </div>
            <div className="eoc-role-card">
              <h4>International Awareness</h4>
              <p>Conduct sessions on abroad studies, scholarships, and guidance from alumni.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Competitions</h4>
              <p>Organize competitions like debates, essay writing, coding, and quizzes for inclusive learning.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Grievance Redressal</h4>
              <p>Address grievances related to bias or discrimination confidentially and effectively.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Government Schemes</h4>
              <p>Inform and assist eligible students to available central/state welfare schemes.</p>
            </div>
            <div className="eoc-role-card">
              <h4>Annual Reporting</h4>
              <p>Maintain reports of all programs, student outcomes, and submit to the IQAC.</p>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="eoc-focus-section">
          <div className="eoc-section-header">
            <div className="eoc-header-icon-wrap gradient-1">
              <FaLightbulb />
            </div>
            <div>
              <h3>Focus Areas</h3>
              <div className="eoc-header-line"></div>
            </div>
          </div>
          <div className="eoc-focus-tags">
            <span className="eoc-focus-tag"><FaLightbulb/> Personality Development</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Soft Skills & Communication</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Competitive Exams: GATE, UPSC, TNPSC</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Common College Competitions</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Abroad Education & Scholarships</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Career Guidance & Employability</span>
            <span className="eoc-focus-tag"><FaLightbulb/> SC/ST/OBC & Minority Student Support</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Government Schemes & Welfare</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Gender Sensitization & Disability Inclusion</span>
            <span className="eoc-focus-tag"><FaLightbulb/> Grievance Redressal & Feedback</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EqualOpportunityCell;