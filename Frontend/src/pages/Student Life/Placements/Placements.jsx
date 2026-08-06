import React, { useState } from 'react';
import './Placements.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

// Auto-load banner image inside ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;
import { FaBuilding, FaUserTie, FaChalkboardTeacher, FaBriefcase, FaWifi, FaUsers, FaGraduationCap, FaIndustry, FaPhone, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  { icon: FaBuilding, text: 'State-of-the-art air-conditioned auditorium (seating capacity over 400 students)' },
  { icon: FaChalkboardTeacher, text: 'Air-conditioned, multimedia-equipped Interaction Hall (around 60 students) for interactions, workshops & seminars' },
  { icon: FaUsers, text: 'Fully equipped, air-conditioned computer labs for online tests (around 300 students at a time)' },
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="placements-page">
      <PageBanner
        title="Placements"
        subtitle="Training & Placement Cell"
        hideBreadcrumb={true}
        backgroundImage="/banners/banner_placements.png"
        height="auto"
      />

      <div className="placements-content">
        {/* About Placement */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaBriefcase className="pl-header-icon" />
            <h2>About Placement</h2>
          </div>
          <div className="pl-about-content">
            <p>
              The Training & Placement Department of NSCET brings corporates close to the campus and encourages them to establish facilities for students. It plays a pivotal role in counseling and guiding students for successful careers — acting as the interface between academic completion and entry into the job market.
            </p>
            <p className="pl-aim"><strong>Aim:</strong> Provide career guidance and placement opportunities to all students.</p>
            <p>
              It arranges and coordinates programs to mould students to meet industry expectations, bringing laurels to the institution. The department imparts comprehensive training to face the dynamic job market. Special Skill Enhancement Training Programs are customized to meet industry requirements.
            </p>
          </div>
        </section>

        {/* Placement Officer */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaUserTie className="pl-header-icon" />
            <h2>Placement Officer</h2>
          </div>
          <div className="pl-officer-wrapper">
            <div className="pl-officer-card">
              <img src={geethaImg} alt="Mrs. C. Geetha" className="pl-officer-image" />
              <div className="pl-officer-info">
                <h3>Mrs. C. Geetha B.E</h3>
                <p className="pl-officer-designation">Training and Placement Officer</p>
              </div>
            </div>
            <div className="pl-officer-responsibilities">
              <h3>Roles and Responsibilities</h3>
              <p>
                The Training and Placement Department, guided by a set of rules and principles, strives to maintain a good relationship with industries. The department endeavors to successfully carry out all the processes related to training, placement, and career guidance methodically throughout the year.
              </p>
            </div>
          </div>
        </section>

        {/* Placement Coordinators */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaUsers className="pl-header-icon" />
            <h2>Placement Coordinators</h2>
          </div>
          <div className="pl-coordinators-grid">
            <div className="pl-coordinator-card">
              <img src={ramkumarImg} alt="Mr. K. Ramkumar" className="pl-coordinator-image" />
              <div className="pl-coordinator-info">
                <h4>Mr. K. Ramkumar</h4>
                <p>B.E., MBA.</p>
                <p className="pl-coordinator-role">Training and Placement Coordinator</p>
              </div>
            </div>
            <div className="pl-coordinator-card">
              <img src={megaImg} alt="Ms. S. Megha" className="pl-coordinator-image" />
              <div className="pl-coordinator-info">
                <h4>Ms. S. Megha</h4>
                <p>B.Sc</p>
                <p className="pl-coordinator-role">Training and Placement Coordinator</p>
              </div>
            </div>
            <div className="pl-coordinator-card">
              <img src={subathamaniImg} alt="Mrs. T. Subathamani" className="pl-coordinator-image" />
              <div className="pl-coordinator-info">
                <h4>Mrs. T. Subathamani</h4>
                <p>M.A., B.Ed., M.Phil.</p>
                <p className="pl-coordinator-role">Training and Placement Coordinator</p>
              </div>
            </div>
          </div>
        </section>

        {/* Department Coordinators */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaGraduationCap className="pl-header-icon" />
            <h2>Department Coordinators</h2>
          </div>
          <div className="pl-dept-table-wrapper">
            <table className="pl-dept-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Coordinator</th>
                </tr>
              </thead>
              <tbody>
                {departmentCoordinators.map((item, index) => (
                  <tr key={index}>
                    <td>{item.department}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Facilities */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaBuilding className="pl-header-icon" />
            <h2>Facilities Provided to Recruiters</h2>
          </div>
          <div className="pl-facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="pl-facility-card">
                <facility.icon className="pl-facility-icon" />
                <p>{facility.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Training */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaChalkboardTeacher className="pl-header-icon" />
            <h2>Corporate Training</h2>
          </div>
          <div className="pl-training-content">
            <p>
              Students receive continuous aptitude, soft skills, and communication training. This sharpens employability skills and confidence during recruitment. Regular Group Discussions and Mock Interview sessions help students understand their standing in the job market.
            </p>
          </div>
        </section>

        {/* Communication Skill Enhancement */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaBriefcase className="pl-header-icon" />
            <h2>Communication Skill Enhancement Training</h2>
          </div>
          <div className="pl-focus-section">
            <h3>Focus areas:</h3>
            <ul className="pl-focus-list">
              {communicationFocusAreas.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activities in CSET */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaUsers className="pl-header-icon" />
            <h2>Activities in CSET</h2>
          </div>
          <div className="pl-activities-grid">
            {csetActivities.map((activity, index) => (
              <div key={index} className="pl-activity-card">
                <span className="pl-activity-number">{index + 1}</span>
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IIPC */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaIndustry className="pl-header-icon" />
            <h2>Industry Institute Partnership Cell (IIPC)</h2>
          </div>
          <div className="pl-iipc-content">
            <p>
              Established to bridge the skill gap between institute and industry. It identifies industrial expectations and prepares the institution by facilitating R&D projects, seminars, workshops, and industrial training programs.
            </p>
            <p>
              It equips faculty with latest technologies and makes students industry-ready through exposure to current practices. Focus is on interacting with elite industries in India and establishing global partnerships.
            </p>
            <p>
              Objectives include facilitating technocrats to meet industry expectations through academic offerings involving industry, and disseminating technical advances via internships, industrial visits, and industrial events.
            </p>
          </div>
        </section>

        {/* Placement Gallery */}
        <section className="pl-section">
          <div className="pl-section-header">
            <FaGraduationCap className="pl-header-icon" />
            <h2>Placement Posters & Placed Students</h2>
          </div>
          <div className="pl-gallery-slider">
            <button className="pl-slider-btn pl-slider-btn-prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <div className="pl-slider-content">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="pl-slider-image"
              />
              <div className="pl-slider-caption">
                <p>{galleryImages[currentIndex].type === 'poster' ? 'Placement Poster' : 'Placed Student'}</p>
              </div>
            </div>
            <button className="pl-slider-btn pl-slider-btn-next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
          <div className="pl-slider-dots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`pl-slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </section>

        {/* Contact Details */}
        <section className="pl-section pl-contact-section">
          <div className="pl-section-header">
            <FaPhone className="pl-header-icon" />
            <h2>Contact Details</h2>
          </div>
          <div className="pl-contact-card">
            <h3>Dr. M. Sathya</h3>
            <p className="pl-contact-role">Training & Placement Officer</p>
            <p className="pl-contact-org">Nadar Saraswathi College Of Engineering & Technology</p>
            <p className="pl-contact-location">Vapudhupatti, Theni-625531</p>
            <p className="pl-contact-state">Tamil Nadu, India</p>
            <div className="pl-contact-details">
              <p><FaPhone className="pl-contact-icon" /> TEL: 04546 – 253900, 901, 902</p>
              <p><FaEnvelope className="pl-contact-icon" /> EMAIL: placement@nscet.org</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Placements;
