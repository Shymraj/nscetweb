import React from 'react';
import './AcademicLeadership.css';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaBuilding,
  FaDesktop,
  FaMicrochip,
  FaBroadcastTower,
  FaCode,
  FaCogs,
  FaBookOpen,
  FaUserGraduate
} from 'react-icons/fa';
import bannerImage from './Banner/AcademicLeadership.png';
import ponnaiahImg from './Ponnaiah.png';

const AcademicLeadership = () => {
  const hodsData = [
    {
      id: 1,
      name: "Vignesh L S",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Artificial Intelligence & Data Science",
      image: "/AIDS/vignesh.jpg",
      qualifications: ["M.E., Ph.D"],
      Icon: FaBrain
    },
    {
      id: 2,
      name: "Mr. N. Nagarathinam",
      role: "ASSISTANT PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Civil Engineering",
      image: "/CIVIL/nagarathinam.jpg",
      qualifications: ["M.E., MISTE (Ph. D)"],
      Icon: FaBuilding
    },
    {
      id: 3,
      name: "Dr. J. Mathalai Raj",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Computer Science Engineering",
      image: "/CSE/mathalairaj.jpg",
      qualifications: ["M.E., Ph.D"],
      Icon: FaDesktop
    },
    {
      id: 4,
      name: "Dr. R. Athilingam",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Electrical and Electronics Engineering",
      image: "/EEE/athilingam.jpg",
      qualifications: ["M.E., Ph.D."],
      Icon: FaMicrochip
    },
    {
      id: 5,
      name: "Dr. T. Venishkumar",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Electronics and Communication Engineering",
      image: "/ECE/venishkumar.jpg",
      qualifications: ["M.E., Ph.D"],
      Icon: FaBroadcastTower
    },
    {
      id: 7,
      name: "Dr. C. Prathap",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Information Technology",
      image: "/IT/prathap c.jpg",
      qualifications: ["M.Tech., Ph.D"],
      Icon: FaCode
    },
    {
      id: 8,
      name: "Dr. B. Radha Krishnan",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Mechanical Engineering",
      image: "/MECH/radhakrishnan.jpg",
      qualifications: ["M.E., Ph.D., MISTE., MIE."],
      Icon: FaCogs
    },
    {
      id: 9,
      name: "Dr. A. Vembathurajesh",
      role: "PROFESSOR & HEAD OF THE DEPARTMENT",
      department: "Science & Humanities",
      image: "/S&H/vembathurajesh.png",
      qualifications: ["M.E., Ph.D, MISTE"],
      Icon: FaBookOpen
    }
  ];

  return (
    <div className="al-page-container">

      <div className="al-hero-banner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>

      <div className="al-about-card">
        {/* Left Curved Navy Section with Icon Badge */}
        <div className="al-about-left-section">
          <div className="al-about-icon-badge">
            <FaUserGraduate className="al-about-badge-icon" />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="al-about-right-section">
          {/* Decorative Dot Grid Watermark */}
          <div className="al-about-dot-grid"></div>

          <div className="al-about-header-text">
            <span className="al-about-subtitle">ABOUT OUR</span>
            <h2 className="al-about-title">ACADEMIC LEADERSHIP</h2>
            <div className="al-about-title-indicator">
              <span className="al-about-line"></span>
              <span className="al-about-dot"></span>
            </div>
          </div>

          <p className="al-about-text">
            At NSCET, our academic leadership team comprises experienced educators and administrators dedicated to shaping the future of technical education. Led by our <strong>Principal</strong>, <strong>Vice Principals</strong>, and <strong>Training and Placement Officer</strong>, the team ensures a holistic educational experience. Our <strong>Heads of Departments</strong> and specialized coordinators bring expertise to their respective fields, guiding students toward academic and professional success.
          </p>

          {/* Decorative Watermark Emblem in Bottom Right */}
          <div className="al-about-emblem-watermark">
            <FaBookOpen />
          </div>
        </div>
      </div>

      {/* TOP MANAGEMENT LEADERSHIP */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Top Management Leadership</h2>
        <div className="al-split-container">

          <div className="al-card al-admin-card">
            <div className="al-card-top-bar"></div>
            <div className="al-avatar-ring">
              <img src="/HEADS/somasundaram.jpg" alt="Secretary" loading="eager" decoding="async" />
            </div>
            <h2 className="al-name">Er. A.S.S.S. Soma Sundaram B.E.</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Secretary</span>
            </p>
            <ul className="al-points">
              <li>Guiding the institution towards momental growth and success.</li>
            </ul>
          </div>

          <div className="al-card al-admin-card">
            <div className="al-card-top-bar"></div>
            <div className="al-avatar-ring">
              <img src="/HEADS/subramani.jpg" alt="Joint Secretary" loading="eager" decoding="async" />
            </div>
            <h2 className="al-name">Mr. T. Subramani B.C.A., M.B.A.</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Joint Secretary</span>
            </p>
            <ul className="al-points">
              <li>Overseeing institutional policies and strategic developments.</li>
            </ul>
          </div>

        </div>
      </div>

      <hr className="al-divider" />

      {/* ADMINISTRATIVE LEADERSHIP */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Administrative Leadership</h2>
        <div className="al-split-container">

          <div className="al-card al-admin-card">
            <div className="al-card-top-bar"></div>
            <div className="al-avatar-ring">
              <img src={encodeURI("/ME MANUFACTURING/principle.png")} alt="Principal" loading="eager" decoding="async" />
            </div>
            <h2 className="al-name">Dr. C. Mathalai Sundaram</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Principal & Professor</span>
            </p>
            <ul className="al-points">
              <li>M.E., M.B.A., Ph.D., MISTE</li>
              <li>Leading the institution with a strong vision and overall academic excellence.</li>
            </ul>
          </div>

          <div className="al-card al-admin-card">
            <div className="al-card-top-bar"></div>
            <div className="al-avatar-ring">
              <img src={encodeURI("/ME CSE/sathya.jpeg")} alt="Vice Principal" loading="eager" decoding="async" />
            </div>
            <h2 className="al-name">Dr. M. Sathya</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Vice Principal & Professor</span>
            </p>
            <ul className="al-points">
              <li>M.Tech., M.B.A., Ph.D</li>
              <li>Ensuring student discipline, welfare and coordinating daily academic operations.</li>
            </ul>
          </div>

        </div>
      </div>

      <hr className="al-divider" />

      {/* HEADS OF DEPARTMENT (FULL HOD LAYOUT WITH IMAGE 1 & 2 CONTAINER DESIGN) */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Heads of Department</h2>
        <div className="al-hod-grid">
          {hodsData.map((hod, index) => {
            const HodIcon = hod.Icon;
            return (
              <motion.div
                key={hod.id}
                className="al-card al-hod-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay: (index % 4) * 0.08
                }}
              >
                <div className="al-card-top-bar"></div>
                <div className="al-avatar-ring">
                  <img src={encodeURI(hod.image)} alt={hod.name} loading="eager" decoding="async" />
                </div>
                <h3 className="al-name">{hod.name}</h3>
                <p className="al-role">{hod.role}</p>
                <div className="al-role-sep"></div>

                <div className="al-qual-footer">
                  <FaUserGraduate className="al-qual-icon" />
                  <span>{hod.qualifications.join(', ')}</span>
                </div>

                <div className="al-dept-banner-box">
                  <div className="al-dept-icon-box">
                    <HodIcon />
                  </div>
                  <span className="al-dept-banner-text">{hod.department}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <hr className="al-divider" />

      {/* LIBRARY AND PHYSICAL EDUCATION */}
      <div className="al-section-wrapper" style={{ marginBottom: '35px' }}>
        <h2 className="al-section-title">Library and Physical Education</h2>
        <div className="al-split-container">

          <div className="al-card al-admin-card al-lib-card">
            <div className="al-card-top-bar"></div>
            <div className="al-avatar-ring">
              <img
                src={encodeURI("/library/Sinthan.jpg")}
                alt="Dr. S. Sinthan"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/nscet-logo.png';
                  e.target.style.objectFit = 'contain';
                  e.target.style.padding = '8px';
                }}
              />
            </div>
            <h2 className="al-name">Dr. S. Sinthan</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Chief Librarian</span>
            </p>
            <ul className="al-points">
              <li>Managing 21,800+ volumes of engineering textbooks and journals.</li>
              <li>Guiding students with vast digital library and IEEE resources.</li>
            </ul>
          </div>

          <div className="al-card al-admin-card al-lib-card">
            <div className="al-card-top-bar"></div>
            <div className="al-avatar-ring">
              <img
                src={ponnaiahImg}
                alt="Mr. Ponnaiah"
                loading="eager"
                decoding="async"
                style={{ objectFit: 'cover', transform: 'scale(1.3)' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/nscet-logo.png';
                  e.target.style.objectFit = 'contain';
                  e.target.style.padding = '8px';
                  e.target.style.transform = 'scale(1)';
                }}
              />
            </div>
            <h2 className="al-name">Mr. Ponnaiah</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Physical Education Director</span>
            </p>
            <ul className="al-points">
              <li>Expert in state-level sports coaching, fitness and wellness.</li>
              <li>Driving the college sports teams to championship victories.</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AcademicLeadership;
