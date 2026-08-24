import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Placements.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import DepartmentFacultyCard from '../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard';

// Auto-load banner image inside ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;
import { FaBuilding, FaUserTie, FaChalkboardTeacher, FaBriefcase, FaWifi, FaUsers, FaGraduationCap, FaIndustry, FaPhone, FaEnvelope, FaChevronLeft, FaChevronRight, FaCheckCircle, FaBullseye, FaHandshake, FaChartLine, FaUtensils, FaComments, FaBrain, FaRegLightbulb } from 'react-icons/fa';
import geethaImg from './images/Geetha.jpeg';
import ramkumarImg from './images/Ramkumar.jpeg';
import megaImg from './images/Mega.jpeg';
import subathamaniImg from './images/Subathamani.jpeg';
import poster1 from './images/1769520719_Placement Poster M&S 1.jpg.webp';
import poster2 from './images/1769521126_Placement Poster 11-06-2025.webp';
import poster3 from './images/1769521242_Placement Poster EEE.webp';
import placed1 from './images/1769520443_place (2).jpg';
import placed2 from './images/1769520502_place (1).jpg';
import placed3 from './images/1769520516_place (1).jpeg';
import placed4 from './images/1769520863_WhatsApp Image 2026-01-27 at 7.03.37 PM.jpeg';

const galleryImages = [
  { src: poster1, alt: 'Placement Poster 1', type: 'poster' },
  { src: poster2, alt: 'Placement Poster 2', type: 'poster' },
  { src: poster3, alt: 'Placement Poster 3', type: 'poster' },
  { src: placed1, alt: 'Placed Student 1', type: 'placed' },
  { src: placed2, alt: 'Placed Student 2', type: 'placed' },
  { src: placed3, alt: 'Placed Student 3', type: 'placed' },
  { src: placed4, alt: 'Placed Student 4', type: 'placed' },
];

const placementOfficerData = {
  name: "Mrs. C. Geetha ",
  desig: "Training and Placement Officer",
  image: geethaImg,
  spec: "Corporate Relations, Career Guidance"
};

const placementCoordinatorsData = [
  { name: "Mr. K. Ramkumar", qual: "B.E., MBA.", desig: "Training and Placement Coordinator", image: ramkumarImg, spec: "Placement Training" },
  { name: "Mrs. S. Megha", qual: "B.Sc", desig: "Training and Placement Coordinator", image: megaImg, spec: "Soft Skills" },
  { name: "Mrs. T. Subathamani", qual: "M.A., B.Ed., M.Phil.", desig: "Training and Placement Coordinator", image: subathamaniImg, spec: "Communication" }
];

const departmentCoordinators = [
  { department: 'AI & DS', name: 'Mr. S. Kodeeswaran' },
  { department: 'CIVIL', name: 'Mrs. S. Gayathri' },
  { department: 'CSE', name: 'Mrs. M. Venkata Lakshmi' },
  { department: 'ECE', name: 'Mrs. P. Gowthami' },
  { department: 'EEE', name: 'Mrs. A. Nishetha Jeflin Nixon' },
  { department: 'MECH', name: 'Dr. A. Vennimalairajan' },
  { department: 'IT', name: 'Mrs. B. Sai Suganya' },
];

const facilities = [
  { icon: FaBuilding, text: 'State-of-the-art air-conditioned auditorium (seating capacity over 300 students)' },
  { icon: FaChalkboardTeacher, text: 'Air-conditioned, multimedia-equipped Interaction Hall (around 60 students) for interactions, workshops & seminars' },
  { icon: FaUsers, text: 'Fully equipped, air-conditioned computer labs for online tests (around 60 students at a time)' },
  { icon: FaBriefcase, text: 'Multimedia air-conditioned conference hall for Group Discussions' },
  { icon: FaUserTie, text: 'Well-furnished and fully equipped cabins for personal interviews' },
  { icon: FaWifi, text: 'High-speed Wi-Fi internet' },
];

const communicationFocusAreas = [
  'Improve vocabulary to express views confidently',
  'How to perform during interviews',
  'How to exhibit attitude, skills & knowledge in interviews',
  'Paper presentations and seminars',
  'Competitive & written examinations for recruitment',
  'Management reviews',
  'Research papers',
  'Updates from newspapers & world-class magazines',
  'General & Business quiz',
  'Latest company updates',
];

const csetActivities = [
  'Verbal Training',
  'Soft Skills Training',
  'Discussions on Contemporary Issues',
  'Senior Interaction on Summer Internship and Final Placements',
  'Newspaper Reading and Discussion',
  'Research Papers',
  'Article Reading and Discussion',
  'Industrial Visits and Interactions',
  'Interactions with Alumni on Placement and Summer Internships',
];

const Placements = () => {
  // Duplicate array for seamless infinite marquee scrolling
  const marqueeData = galleryImages.length > 0
    ? [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages]
    : [];

  return (
    <div className="placements-page">
      <PageBanner
        title="Placements"
        subtitle="Training & Placement Cell"
        hideBreadcrumb={true}
        backgroundImage={bannerImg}
        height="auto"
      />

      <div className="placements-content">
        {/* About Placement */}
        <motion.section
          className="pl-section pl-about-section-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaBriefcase className="pl-header-icon" />
            <h2>About Placement</h2>
          </div>

          <div className="pl-about-grid">
            {/* Main Descriptive Card */}
            <motion.div
              className="pl-about-main-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Bridging Academia and Industry</h3>
              <p>
                The Training & Placement Department of NSCET brings corporates close to the campus and encourages them to establish facilities for students. It plays a pivotal role in counseling and guiding students for successful careers, imparting comprehensive training to face the dynamic job market.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="pl-about-sub-cards">
              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="pl-sub-icon-wrapper"><FaBullseye /></div>
                <div>
                  <h4>Primary Aim</h4>
                  <p>Provide comprehensive career guidance and premium placement opportunities to all students.</p>
                </div>
              </motion.div>

              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="pl-sub-icon-wrapper"><FaHandshake /></div>
                <div>
                  <h4>Corporate Interface</h4>
                  <p>Acting as the critical interface between academic completion and seamless entry into the global job market.</p>
                </div>
              </motion.div>

              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="pl-sub-icon-wrapper"><FaChartLine /></div>
                <div>
                  <h4>Dynamic Training</h4>
                  <p>Customized Skill Enhancement Training Programs expertly designed to meet rigorous industry expectations.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Placement Officer */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaUserTie className="pl-header-icon" />
            <h2>Placement Officer</h2>
          </div>
          <div className="pl-officer-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <DepartmentFacultyCard member={placementOfficerData} isHOD={true} />
            </motion.div>
            <div className="pl-officer-responsibilities">
              <h3>Roles and Responsibilities</h3>
              <ul className="pl-roles-list">
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Corporate Relations:</strong> Establishing robust partnerships with top-tier companies and industry leaders.</div></li>
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Skill Enhancement:</strong> Executing comprehensive technical, aptitude, and soft-skills training programs.</div></li>
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Career Guidance:</strong> Mentoring students to identify optimal career paths aligned with their strengths.</div></li>
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Placement Drives:</strong> Organizing and coordinating seamless on-campus and off-campus recruitment events.</div></li>
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Internship Programs:</strong> Facilitating summer internships and industrial training for practical exposure.</div></li>
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Student Profiling:</strong> Conducting mock interviews and group discussions to evaluate and build student readiness.</div></li>
                <li><FaCheckCircle className="pl-role-icon" /> <div><strong>Alumni Networking:</strong> Engaging with successful alumni to create mentorship opportunities and leverage industry connections.</div></li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Placement Coordinators */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaUsers className="pl-header-icon" />
            <h2>Placement Coordinators</h2>
          </div>
          <div className="pl-coordinators-grid">
            {placementCoordinatorsData.map((coordinator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DepartmentFacultyCard member={coordinator} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Department Coordinators */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaGraduationCap className="pl-header-icon" />
            <h2>Department Coordinators</h2>
          </div>
          <div className="pl-dept-cards-grid">
            {departmentCoordinators.map((item, index) => (
              <motion.div
                key={index}
                className="pl-dept-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="pl-dept-card-icon">
                  <FaGraduationCap />
                </div>
                <div className="pl-dept-card-info">
                  <h4>{item.department}</h4>
                  <p>{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Facilities Provided to Recruiters */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaBuilding className="pl-header-icon" />
            <h2>Facilities Provided to Recruiters</h2>
          </div>
          <div className="pl-facilities-bento">
            {/* Large Hero Facility */}
            <motion.div
              className="pl-facility-bento-main"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="pl-facility-bento-icon"><FaBuilding /></div>
              <div className="pl-facility-bento-content">
                <h3>State-of-the-Art Infrastructure</h3>
                <p>We provide exclusive, fully-equipped corporate spaces ensuring a seamless hiring experience for recruiters, from initial pre-placement talks to final interviews.</p>
              </div>
            </motion.div>

            <div className="pl-facilities-bento-subgrid">
              <motion.div
                className="pl-facility-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="pl-fc-icon-wrapper"><FaChalkboardTeacher /></div>
                <div>
                  <h4>Auditorium & Seminar Halls</h4>
                  <p>300-seater main auditorium and three fully-equipped 150-seater seminar halls.</p>
                </div>
              </motion.div>

              <motion.div
                className="pl-facility-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="pl-fc-icon-wrapper"><FaWifi /></div>
                <div>
                  <h4>Pre-Placement Halls</h4>
                  <p>High-speed Wi-Fi enabled, fully furnished halls meticulously tailored for company presentations.</p>
                </div>
              </motion.div>

              <motion.div
                className="pl-facility-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="pl-fc-icon-wrapper"><FaUsers /></div>
                <div>
                  <h4>Interview Cabins</h4>
                  <p>Dedicated, sound-proofed executive cabins for focused interviews and group discussions.</p>
                </div>
              </motion.div>

              <motion.div
                className="pl-facility-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="pl-fc-icon-wrapper"><FaUtensils /></div>
                <div>
                  <h4>Hospitality</h4>
                  <p>Exclusive fine-dining facilities and premium guest house arrangements for visiting corporate teams.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Training & Skill Enhancement */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaChalkboardTeacher className="pl-header-icon" />
            <h2>Training & Skill Enhancement</h2>
          </div>

          <div className="pl-about-grid">
            <motion.div
              className="pl-about-main-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Corporate & Soft Skills Training</h3>
              <p>
                Students receive continuous aptitude, soft skills, and communication training. This sharpens employability skills and confidence during recruitment. Regular Group Discussions and Mock Interview sessions help students deeply understand their standing in the global job market.
              </p>
            </motion.div>

            <div className="pl-about-sub-cards">
              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="pl-sub-icon-wrapper"><FaComments /></div>
                <div>
                  <h4>Language & Expression</h4>
                  <p>Mastering listening, speaking, reading, writing, advanced vocabulary, and extempore speech.</p>
                </div>
              </motion.div>
              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="pl-sub-icon-wrapper"><FaUsers /></div>
                <div>
                  <h4>Interpersonal & Behavioral</h4>
                  <p>Refining body language, intra-personal skills, and dynamic team building.</p>
                </div>
              </motion.div>
              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="pl-sub-icon-wrapper"><FaBrain /></div>
                <div>
                  <h4>Cognitive Skills</h4>
                  <p>Advanced aptitude training (logic, mathematics, verbal), goal setting, and strategic decision making.</p>
                </div>
              </motion.div>
              <motion.div
                className="pl-about-sub-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="pl-sub-icon-wrapper"><FaBriefcase /></div>
                <div>
                  <h4>Career Readiness</h4>
                  <p>Professional resume writing, rigorous mock interviews, and group discussion execution.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Activities in NSCET */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaRegLightbulb className="pl-header-icon" />
            <h2>Activities in NSCET</h2>
          </div>
          <div className="pl-activities-grid">
            {csetActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="pl-activity-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="pl-activity-icon-wrapper"><FaCheckCircle /></div>
                <p>{activity}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IIPC */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaIndustry className="pl-header-icon" />
            <h2>Industry Institute Partnership Cell (IIPC)</h2>
          </div>

          <div className="pl-iipc-hero-card">
            <div className="pl-iipc-icon"><FaIndustry /></div>
            <div className="pl-iipc-hero-content">
              <h3>Bridging the Skill Gap</h3>
              <p>
                Established to bridge the critical skill gap between the institute and industry. It prepares the institution by facilitating advanced research and development projects, seminars, workshops, and extensive industrial training programs.
              </p>
              <p>
                Our focus is on interacting with elite industries globally, equipping faculty with the latest technologies, and making students undeniably industry-ready.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Placement Gallery */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaGraduationCap className="pl-header-icon" />
            <h2>Placement Posters & Placed Students</h2>
          </div>
          <div className="pl-marquee-wrapper">
            <div className="pl-marquee-track">
              {marqueeData.map((item, index) => (
                <div className="pl-poster-card" key={index}>
                  <div className="pl-poster-img-container">
                    <img
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Recruiters */}
        <motion.section
          className="pl-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaBuilding className="pl-header-icon" />
            <h2>Our Recruiters</h2>
          </div>
          <div className="pl-coming-soon-wrapper">
            <div className="pl-coming-soon-card">
              <FaIndustry className="pl-coming-soon-icon" />
              <h3>Coming Soon</h3>
              <p>We are currently updating our list of esteemed recruiters.</p>
            </div>
          </div>
        </motion.section>

        {/* Contact Details */}
        <motion.section
          className="pl-section pl-contact-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pl-section-header">
            <FaPhone className="pl-header-icon" />
            <h2>Contact Details</h2>
          </div>
          <div className="pl-contact-card">
            <h3>Mrs. C. Geetha</h3>
            <p className="pl-contact-role">Training & Placement Officer</p>
            <p className="pl-contact-org">Nadar Saraswathi College Of Engineering & Technology</p>
            <p className="pl-contact-location">Vadapudupatti, Theni-625531</p>
            <p className="pl-contact-state">Tamil Nadu, India</p>
            <div className="pl-contact-details">
              <p><FaPhone className="pl-contact-icon" /> TEL: 04546 – 253900, 901, 902</p>
              <p><FaEnvelope className="pl-contact-icon" /> EMAIL: placement@nscet.org</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Placements;
