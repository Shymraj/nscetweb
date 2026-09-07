import React, { useState } from 'react';
import { 
  Shield, BookOpen, Users, Award, Phone, Mail, FileText, 
  ChevronRight, GraduationCap, HeartHandshake, CheckCircle, 
  ExternalLink, Sparkles, Scale, AlertCircle, ArrowRight, UserCheck
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './SEDG.css'; 
import './PremiumSubPages.css'; 

const SEDG = () => {
  const navigate = useNavigate(); 
  const [activeTab, setActiveTab] = useState('all');
  
  const committeeMembers = [
    { sNo: 1, name: "Dr. C. Mathalai Sundaram", designation: "Principal", position: "Chair Person", category: "Others / Male", phone: "9443488999", email: "principal@nscet.org" },
    { sNo: 2, name: "Dr. M. Sathya", designation: "Vice Principal", position: "Member", category: "Others / Female", phone: "9884854043", email: "vpacademic@nscet.org" },
    { sNo: 3, name: "Dr. J. Mathalai Raj", designation: "HOD / CSE", position: "Member", category: "Others / Male", phone: "9095100228", email: "hodcse@nscet.org" },
    { sNo: 4, name: "Mr. A. Vembathu Rajesh", designation: "HOD / S&H", position: "Member", category: "Others / Male", phone: "9443487999", email: "hods_h@nscet.org" },
    { sNo: 5, name: "Mrs. B. Sowmiya", designation: "AP / Civil", position: "Member", category: "SC / Female", phone: "9629264297", email: "sowmiya@nscet.org" },
    { sNo: 6, name: "Mr. N. Kesavamoorthy", designation: "AP / IT", position: "Member", category: "SC / Male", phone: "9942390288", email: "kesavamoorthy@nscet.org" },
    { sNo: 7, name: "Mrs. M. Shobana", designation: "LA / CSE", position: "Member", category: "SC / Female", phone: "9095100233", email: "shobana13mm@gmail.com" }
  ];

  const focusGroups = [
    { title: "Scheduled Castes (SC)", badge: "Special Focus", icon: "✦" },
    { title: "Scheduled Tribes (ST)", badge: "Special Focus", icon: "✦" },
    { title: "Other Backward Classes (OBC)", badge: "Inclusion", icon: "✦" },
    { title: "Persons with Disabilities (PwD)", badge: "Accessibility", icon: "✦" },
    { title: "Economically Weaker Sections (EWS)", badge: "Empowerment", icon: "✦" },
    { title: "Women & Religious Minorities", badge: "Equity", icon: "✦" }
  ];

  const objectives = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Empowerment",
      tagline: "Academic & Personal Growth",
      description: "Provide holistic support to socio-economically disadvantaged students to help them excel in academics, co-curriculars and career pathways."
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Awareness",
      tagline: "Schemes & Entitlements",
      description: "Create widespread awareness about various Central/State Government schemes, institutional fee waivers, education loans and scholarships."
    },
    {
      id: 3,
      icon: Award,
      title: "Skill Development",
      tagline: "Employability & Mentorship",
      description: "Organize customized technical training, soft skill workshops, language enhancement and career mentoring to maximize placement readiness."
    },
    {
      id: 4,
      icon: Users,
      title: "Support System",
      tagline: "Counseling & Wellbeing",
      description: "Establish a resilient support network to proactively address academic hurdles, financial constraints, and mental/emotional well-being."
    }
  ];

  const keyActivities = [
    {
      id: "01",
      title: "Scholarship & Financial Aid Guidance",
      desc: "Comprehensive counseling on availing Central & State scholarships, PM-USP, AICTE schemes (Pragati, Saksham, Swanath), fee concessions and education loans.",
      badge: "Financial Aid"
    },
    {
      id: "02",
      title: "Remedial Coaching & Peer Tutoring",
      desc: "Special academic support sessions, peer learning circles, book bank facilities, and personalized faculty mentoring for difficult technical subjects.",
      badge: "Academics"
    },
    {
      id: "03",
      title: "Skill Readiness & Employability Training",
      desc: "Tailored workshops on coding, soft skills, aptitude training, mock interviews and communication skills for corporate and public sector placements.",
      badge: "Career"
    },
    {
      id: "04",
      title: "Welfare & Rights Awareness Sessions",
      desc: "Interactive seminars on government reservations, national commissions, constitutional safeguards and institutional welfare initiatives.",
      badge: "Awareness"
    },
    {
      id: "05",
      title: "Holistic Counseling & Mental Well-being",
      desc: "Confidential psychological counseling, emotional guidance and personal mentoring to ensure a nurturing, bias-free campus experience.",
      badge: "Wellness"
    }
  ];

  return (
    <div className="common-page-wrapper sedg-page">
      {/* --- HERO SECTION --- */}
      <section className="sedg-hero">
        <div className="sedg-hero-overlay"></div>
        <div className="sedg-hero-content">
          <div className="sedg-hero-badge">
            <Sparkles size={16} />
            <span>NEP 2020 INITIATIVE • NSCET THENI</span>
          </div>
          <h1 className="sedg-hero-title">
            Socio-Economically Disadvantaged Groups <span className="highlight-text">Cell (SEDG)</span>
          </h1>
          <p className="sedg-hero-desc">
            Ensuring an equitable, inclusive, and safe academic ecosystem for every aspiring student in line with the National Education Policy (NEP 2020).
          </p>
          
          <div className="sedg-hero-actions">
            <button className="sedg-btn primary" onClick={() => navigate('/student-life/sedg/grievance')}>
              <Shield size={18} /> File a Grievance
            </button>
            <button className="sedg-btn secondary" onClick={() => navigate('/student-life/sedg/scholarships')}>
              <Award size={18} /> Explore Scholarships
            </button>
            <button className="sedg-btn outline" onClick={() => navigate('/student-life/sedg/welfare')}>
              <HeartHandshake size={18} /> Welfare Links
            </button>
          </div>

          <div className="sedg-stats-bar">
            <div className="stat-pill">
              <strong>100%</strong>
              <span>Equitable Access</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <strong>Govt & AICTE</strong>
              <span>Approved Schemes</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-pill">
              <strong>Dedicated</strong>
              <span>Support Cell</span>
            </div>
          </div>
        </div>
      </section>

      <div className="sedg-main-container">
        {/* --- ABOUT & VISION SECTION --- */}
        <section className="sedg-section sedg-about-section">
          <div className="sedg-grid-2col">
            <div className="sedg-about-card">
              <div className="sedg-badge-label">
                <Scale size={16} />
                <span>ABOUT THE CELL</span>
              </div>
              <h2 className="sedg-section-heading">
                Fostering Inclusivity, Equality & Social Empowerment
              </h2>
              <p className="sedg-paragraph">
                The <strong>Socio-Economically Disadvantaged Groups (SEDG) Cell</strong> at Nadar Saraswathi College of Engineering and Technology (NSCET) has been established to ensure that students belonging to SEDGs enjoy a secure environment and equitable access to high-quality technical education, as envisioned under the <strong>National Education Policy (NEP) 2020</strong> of the Government of India.
              </p>
              <p className="sedg-paragraph">
                Globally, equitable education remains a key milestone. In India, historically disadvantaged communities often encounter socioeconomic hurdles. The Government of India aims to bridge these gaps through inclusive national development. The SEDG Cell at NSCET functions as a dedicated institutional support pillar, empowering students from all underprivileged backgrounds to thrive academically, socially, and professionally.
              </p>
            </div>

            <div className="sedg-focus-card">
              <div className="focus-card-header">
                <Shield size={28} className="focus-header-icon" />
                <div>
                  <h3 className="focus-title">Communities We Serve</h3>
                  <p className="focus-subtitle">Comprehensive Support Architecture</p>
                </div>
              </div>
              <div className="focus-groups-grid">
                {focusGroups.map((group, idx) => (
                  <div className="focus-group-pill" key={idx}>
                    <div className="focus-indicator">{group.icon}</div>
                    <div className="focus-info">
                      <strong>{group.title}</strong>
                      <span>{group.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="focus-footer-banner">
                <CheckCircle size={18} />
                <span>Zero Discrimination • Equal Opportunities • Confidential Assistance</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- OBJECTIVES SECTION --- */}
        <section className="sedg-section sedg-objectives-section">
          <div className="sedg-section-header center">
            <div className="sedg-badge-label">
              <TargetIcon />
              <span>CORE MISSION</span>
            </div>
            <h2 className="sedg-section-heading">Our Key Objectives</h2>
            <p className="sedg-section-subtext">
              Strategic pillars designed to foster academic excellence, equity and holistic career advancement.
            </p>
          </div>

          <div className="sedg-objectives-grid">
            {objectives.map((item) => {
              const IconComp = item.icon;
              return (
                <div className="sedg-objective-card" key={item.id}>
                  <div className={`obj-icon-wrapper obj-theme-${item.id}`}>
                    <IconComp size={30} />
                  </div>
                  <div className="obj-tagline">{item.tagline}</div>
                  <h3 className="obj-title">{item.title}</h3>
                  <p className="obj-desc">{item.description}</p>
                  <div className="obj-hover-accent"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- KEY ACTIVITIES SECTION --- */}
        <section className="sedg-section sedg-activities-section">
          <div className="sedg-section-header">
            <div className="sedg-badge-label">
              <Sparkles size={16} />
              <span>ACTION PLAN</span>
            </div>
            <h2 className="sedg-section-heading">Key Activities & Initiatives</h2>
            <p className="sedg-section-subtext">
              Targeted academic, financial, skill-building and well-being programs conducted throughout the year.
            </p>
          </div>

          <div className="sedg-activities-timeline">
            {keyActivities.map((act, index) => (
              <div className="activity-card-item" key={index}>
                <div className="activity-number">{act.id}</div>
                <div className="activity-content-box">
                  <div className="activity-top-row">
                    <h3 className="activity-title">{act.title}</h3>
                    <span className="activity-badge">{act.badge}</span>
                  </div>
                  <p className="activity-desc">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SC/ST WELFARE COMMITTEE MEMBERS TABLE & CARDS --- */}
        <section className="sedg-section sedg-committee-section">
          <div className="sedg-section-header center">
            <div className="sedg-badge-label">
              <UserCheck size={16} />
              <span>GOVERNANCE & LEADERSHIP</span>
            </div>
            <h2 className="sedg-section-heading">SC/ST Welfare Committee Members</h2>
            <p className="sedg-section-subtext">
              Dedicated faculty and administrative officers responsible for ensuring the welfare, rights, and support of students.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="sedg-table-wrapper">
            <table className="sedg-custom-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>S.No</th>
                  <th>Member Name</th>
                  <th>Designation</th>
                  <th>Position</th>
                  <th>Caste / Gender</th>
                  <th>Contact</th>
                  <th>Mail ID</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member) => (
                  <tr key={member.sNo}>
                    <td className="text-center font-bold text-muted">{member.sNo}</td>
                    <td>
                      <div className="member-name-cell">
                        <strong>{member.name}</strong>
                      </div>
                    </td>
                    <td><span className="dept-chip">{member.designation}</span></td>
                    <td>
                      <span className={`position-badge ${member.position.toLowerCase().includes('chair') ? 'chair-badge' : 'member-badge'}`}>
                        {member.position}
                      </span>
                    </td>
                    <td><span className="category-tag">{member.category}</span></td>
                    <td>
                      <a href={`tel:${member.phone}`} className="table-contact-link phone">
                        <Phone size={14} /> {member.phone}
                      </a>
                    </td>
                    <td>
                      <a href={`mailto:${member.email}`} className="table-contact-link email">
                        <Mail size={14} /> {member.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Profile Cards View */}
          <div className="sedg-mobile-cards-grid">
            {committeeMembers.map((member) => (
              <div className="sedg-member-card" key={member.sNo}>
                <div className="member-card-header">
                  <div className="member-avatar">
                    {member.name.replace('Dr. ', '').replace('Mr. ', '').replace('Mrs. ', '').charAt(0)}
                  </div>
                  <div className="member-meta">
                    <h4 className="member-name">{member.name}</h4>
                    <span className="member-designation">{member.designation}</span>
                  </div>
                </div>
                <div className="member-badges-row">
                  <span className={`position-badge ${member.position.toLowerCase().includes('chair') ? 'chair-badge' : 'member-badge'}`}>
                    {member.position}
                  </span>
                  <span className="category-tag">{member.category}</span>
                </div>
                <div className="member-card-actions">
                  <a href={`tel:${member.phone}`} className="card-action-btn phone">
                    <Phone size={15} /> <span>{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="card-action-btn email">
                    <Mail size={15} /> <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- QUICK ACTION RESOURCE CARDS --- */}
        <section className="sedg-section sedg-resources-section">
          <div className="sedg-section-header center">
            <div className="sedg-badge-label">
              <BookOpen size={16} />
              <span>RESOURCE HUB & QUICK ACCESS</span>
            </div>
            <h2 className="sedg-section-heading">Portals & Official Resources</h2>
            <p className="sedg-section-subtext">
              Direct access to grievance redressal, scholarship directory, welfare links, and committee records.
            </p>
          </div>

          <div className="sedg-resources-grid">
            
            {/* Minutes of Meeting - Modified to open PDF */}
            <a href="/SCST Cell (1).pdf" target="_blank" rel="noopener noreferrer" className="sedg-portal-card blue-theme">
              <div className="portal-card-glow"></div>
              <div className="portal-icon-box">
                <FileText size={28} />
              </div>
              <div className="portal-content">
                <span className="portal-category">Official Documentation</span>
                <h3 className="portal-title">Minutes of Meeting</h3>
                <p className="portal-desc">Access official committee proceedings, resolutions, and annual reports.</p>
                <div className="portal-link-text">
                  <span>View Minutes</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>

            {/* Grievance Portal */}
            <Link to="/student-life/sedg/grievance" className="sedg-portal-card red-theme">
              <div className="portal-card-glow"></div>
              <div className="portal-icon-box">
                <Shield size={28} />
              </div>
              <div className="portal-content">
                <span className="portal-category">Confidential Redressal</span>
                <h3 className="portal-title">Grievance Portal</h3>
                <p className="portal-desc">Submit concerns or discrimination grievances with 100% confidentiality.</p>
                <div className="portal-link-text">
                  <span>File Grievance</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Scholarships */}
            <Link to="/student-life/sedg/scholarships" className="sedg-portal-card gold-theme">
              <div className="portal-card-glow"></div>
              <div className="portal-icon-box">
                <Award size={28} />
              </div>
              <div className="portal-content">
                <span className="portal-category">Financial Aid</span>
                <h3 className="portal-title">Scholarships</h3>
                <p className="portal-desc">Detailed guide on Central, State, AICTE, and UGC scholarship schemes.</p>
                <div className="portal-link-text">
                  <span>View Scholarships</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Welfare Links */}
            <Link to="/student-life/sedg/welfare" className="sedg-portal-card teal-theme">
              <div className="portal-card-glow"></div>
              <div className="portal-icon-box">
                <HeartHandshake size={28} />
              </div>
              <div className="portal-content">
                <span className="portal-category">Government Portals</span>
                <h3 className="portal-title">Welfare Links</h3>
                <p className="portal-desc">National & State commission portals, skill ministries, and statutory bodies.</p>
                <div className="portal-link-text">
                  <span>Explore Links</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const TargetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export default SEDG;