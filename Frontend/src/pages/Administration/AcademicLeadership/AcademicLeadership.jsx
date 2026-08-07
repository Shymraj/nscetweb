import React from 'react';
import './AcademicLeadership.css';
import { motion } from 'framer-motion'; // PUTHUSA ADD PANNUNA PACKAGE
import bannerImage from './Banner/AcademicLeadership.png';
const AcademicLeadership = () => {
  const hodsData = [
    {
      id: 1,
      name: "Mr. L.S. Vignesh",
      role: "Assistant Professor & Head Of The Department",
      department: "Artificial Intelligence & Data Science",
      image: "/AIDS/vignesh.jpg", 
      qualifications: ["M.E., Ph.D"]
    },
    {
      id: 2,
      name: "Mr. N. Nagarathinam",
      role: "Assistant Professor & Head Of The Department",
      department: "Civil Engineering",
      image: "/CIVIL/nagarathinam.jpg",
      qualifications: ["M. E., M. I. S. T. E., (Ph. D)"]
    },
    {
      id: 3,
      name: "Dr. J. Mathalai Raj",
      role: "Assistant Professor & Head Of The Department",
      department: "Computer Science Engineering",
      image: "/CSE/mathalairaj.jpg",
      qualifications: ["M.E (CSE), Ph.D"]
    },
    {
      id: 4,
      name: "Dr. R. Athilingam",
      role: "Professor & Head Of The Department",
      department: "Electrical and Electronics Engineering",
      image: "/EEE/athilingam.jpg",
      qualifications: ["M.E., Ph.D."]
    },
    {
      id: 5,
      name: "Dr. T. Venishkumar",
      role: " Professor & Head Of The Department",
      department: "Electronics and Communication Engineering",
      image: "/ECE/venishkumar.jpg",
      qualifications: ["M.E., Ph.D"]
    },
    
    {
      id: 7,
      name: "Mr. C. Prathap",
      role: "Assistant Professor & Head Of The Department",
      department: "Information Technology",
      image: "/IT/prathap c.jpg",
      qualifications: ["M.Tech., Ph.D"]
    },
    {
      id: 8,
      name: "Dr. B. Radha Krishnan",
      role: "Professor & Head Of The Department",
      department: "Mechanical Engineering",
      image: "/MECH/radhakrishnan.jpg",
      qualifications: ["M.E., Ph.D., MISTE., MIE."]
    },
   {
      id: 9,
      name: "Dr. A. Vembathurajesh",
      role: "Assistant Professor & Head Of The Department",
      department: "Science & Humanities", 
      image: "/S&H/vembathurajesh.png",
      qualifications: ["M.E., Ph.D, MISTE"]
    },
   
  ];

  return (
    <div className="al-page-container">
      
      <div className="al-hero-banner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <h1>Academic Leadership</h1> */}
      </div>

      <div className="al-about-banner">
        <div className="al-about-content">
          <p>
            <strong>About Our Leadership:</strong> At NSCET, our academic leadership team comprises experienced educators and administrators dedicated to shaping the future of technical education. Led by our Principal, Vice Principals, and Training and Placement Officer, the team ensures a holistic educational experience. Our Heads of Departments and specialized coordinators bring expertise to their respective fields, guiding students toward academic and professional success.
          </p>
        </div>
      </div>

      <div className="al-section-wrapper">
        <h2 className="al-section-title">Top Management Leadership</h2>
        <div className="al-split-container">
          
          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/HEADS/somasundaram.jpg" alt="Secretary" />
                </div>
              </div>
            </div>
            <h2 className="al-name">Er. A.S.S.S. Soma Sundaram BE</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge"> Secretary</span>
            </p>
            <ul className="al-points">
              <li>Guiding the institution towards monumental growth and success.</li>
            </ul>
          </div>

          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/HEADS/subramani.jpg" alt="Joint Secretary" />
                </div>
              </div>
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

      <div className="al-section-wrapper">
        <h2 className="al-section-title">Administrative Leadership</h2>
        <div className="al-admin-stack">
          
          <div className="al-card al-zigzag-row al-row-left">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/ME MANUFACTURING/principle.png" alt="Principal" />
                </div>
              </div>
            </div>
            <div className="al-text-content">
              <h2 className="al-name">Dr. C. Mathalai Sundaram</h2>
              <p className="al-dept-name">
                <span className="al-dept-badge">Principal & Professor</span>
              </p>
              <ul className="al-points">
                <li>M.E., M.B.A., Ph.D., MISTE</li>
                <li>Leading the institution with a strong vision and overall academic excellence.</li>
              </ul>
            </div>
          </div>

          <div className="al-card al-zigzag-row al-row-left">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/ME CSE/Sathya.jpeg" alt="Vice Principal" />
                </div>
              </div>
            </div>
            <div className="al-text-content">
              <h2 className="al-name">Dr. M. Sathya</h2>
              <p className="al-dept-name">
                <span className="al-dept-badge">Vice Principal & Professor</span>
              </p>
              <ul className="al-points">
                <li>M.Tech., M.B.A., Ph.D</li>
                <li>Ensuring student discipline, welfare, and coordinating daily academic operations.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <hr className="al-divider" />

      {/* 5. HEADS OF DEPARTMENT (USING FRAMER MOTION FOR SCROLL ANIMATION) */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Heads of Department</h2>
        <div className="al-zigzag-container">
          {hodsData.map((hod, index) => (
            <motion.div 
              key={hod.id} 
              className={`al-card al-zigzag-row ${index % 2 === 0 ? 'al-row-left' : 'al-row-right'}`}
              
              /* Ithu thaan magic! Kela irunthu mela bounce aagi varum */
              initial={{ opacity: 0, scale: 0.6, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 120, 
                damping: 12, 
                delay: index * 0.1 
              }}
            >
              <div className="al-hex-wrapper">
                <div className="al-hex-outer">
                  <div className="al-hex-inner">
                    <img src={hod.image} alt={hod.name} />
                  </div>
                </div>
              </div>
              <div className="al-text-content">
                <h2 className="al-name">{hod.name}</h2>
                <h3 className="al-role">{hod.role}</h3>
                <p className="al-dept-name">
                  <span className="al-dept-badge">{hod.department}</span>
                </p>
                <ul className="al-points">
                  {hod.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="al-divider" />

      <div className="al-section-wrapper" style={{ marginBottom: '60px' }}>
        <h2 className="al-section-title">Library and Physical Education</h2>
        <div className="al-split-container">
          
          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/library/Sinthan.jpg" alt="Librarian" />
                </div>
              </div>
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

          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/ped.jpg" alt="Physical Education Director" />
                </div>
              </div>
            </div>
            <h2 className="al-name">Mr. [Name]</h2>
            <p className="al-dept-name">
              <span className="al-dept-badge">Physical Education Director</span>
            </p>
            <ul className="al-points">
              <li>Expert in state-level sports coaching, fitness, and wellness.</li>
              <li>Driving the college sports teams to championship victories.</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AcademicLeadership;
