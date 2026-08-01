import React from 'react';
import './AcademicLeadership.css';

const AcademicLeadership = () => {
  // Department Heads Data - Strictly in Alphabetical Order based on Department Name
  const hodsData = [
    {
      id: 1,
      name: "Mr. L.S. Vignesh",
      role: "Assistant Professor & Head [I/C]",
      department: "Artificial Intelligence & Data Science",
      image: "/vignesh.jpg", 
      qualifications: [
        "B.Tech - Artificial Intelligence & Data Science",
        "M.E., Ph.D"
      ]
    },
    {
      id: 2,
      name: "Mr. N. Nagarathinam",
      role: "Assistant Professor & Head [I/C]",
      department: "Civil Engineering",
      image: "/nagarathinam.jpg",
      qualifications: [
        "B.E. - Civil Engineering",
        "M. E., M. I. S. T. E., (Ph. D)"
      ]
    },
    {
      id: 3,
      name: "Dr. J. Mathalai Raj",
      role: "Assistant Professor & Head [I/C]",
      department: "Computer Science Engineering",
      image: "/mathalairaj.jpg",
      qualifications: [
        "B.E. - Computer Science Engineering",
        "M.E (CSE), Ph.D"
      ]
    },
    {
      id: 4,
      name: "Mr. K. Ganesh",
      role: "Professor & Head",
      department: "Electrical and Electronics Engineering",
      image: "/ganesh.jpg",
      qualifications: [
        "B.E. - Electrical and Electronics Engineering",
        "M.E., (Ph.D.)"
      ]
    },
    {
      id: 5,
      name: "Dr. T. Venishkumar",
      role: "Associate Professor & Head [I/C]",
      department: "Electronics and Communication Engineering",
      image: "/venishkumar.jpg",
      qualifications: [
        "B.E. - Electronics and Communication Engineering",
        "M.E., Ph.D"
      ]
    },
    {
      id: 6,
      name: "Dr. R. Athilingam",
      role: "Associate Professor & Head [I/C]",
      department: "Embedded Systems and Technology",
      image: "/athilingam.jpg",
      qualifications: [
        "M.E. - Embedded Systems and Technology",
        "Ph.D, M.E."
      ]
    },
    {
      id: 7,
      name: "Mr. C. Prathap",
      role: "Assistant Professor & Head [I/C]",
      department: "Information Technology",
      image: "/prathap c.jpg",
      qualifications: [
        "B.Tech - Information Technology",
        "M.Tech., Ph.D"
      ]
    },
    {
      id: 8,
      name: "Dr. B. Radha Krishnan",
      role: "Professor & Head [I/C]",
      department: "Mechanical Engineering",
      image: "/radhakrishnan.jpg",
      qualifications: [
        "B.E. - Mechanical Engineering",
        "M.E., Ph.D., MISTE., MIE."
      ]
    },
    {
      id: 9,
      name: "Dr. A. Vembathurajesh",
      role: "Assistant Professor & Head [I/C]",
      department: "Science & Humanities",
      image: "/vembathurajesh.png",
      qualifications: [
        "Science & Humanities",
        "M.E., Ph.D, MISTE"
      ]
    },
    {
      id: 10,
      name: "Dr. E. Anantha Krishnan",
      role: "Professor & Head",
      department: "Structural Engineering",
      image: "/ananthakrishnan.jpg",
      qualifications: [
        "M.E. - Structural Engineering",
        "M. E., Ph. D."
      ]
    }
  ];

  return (
    <div className="al-page-container">
      
      {/* 1. Main Hero Banner (8:3 Ratio & Centered) */}
      <div className="al-hero-banner">
        <h1>Academic Leadership</h1>
      </div>

      {/* 2. Separate About Us Banner Container */}
      <div className="al-about-banner">
        <div className="al-about-content">
          <p>
            <strong>About Our Leadership:</strong> At NSCET, our academic leadership team comprises experienced educators and administrators dedicated to shaping the future of technical education. Led by our Principal, Vice Principals, and Training and Placement Officer, the team ensures a holistic educational experience. Our Heads of Departments and specialized coordinators bring expertise to their respective fields, guiding students toward academic and professional success.
          </p>
        </div>
      </div>

      {/* 3. TOP MANAGEMENT LEADERSHIP (Secretary & Joint Secretary Split Layout) */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Top Management Leadership</h2>
        <div className="al-split-container">
          
          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/somasundaram.jpg" alt="Secretary" />
                </div>
              </div>
            </div>
            <h2 className="al-name">Er. A.S.S.S. Soma Sundaram</h2>
            <h3 className="al-role">Secretary, NSCET</h3>
            <ul className="al-points">
              <li>B.E.</li>
              <li>Guiding the institution towards monumental growth and success.</li>
            </ul>
          </div>

          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/subramani.jpg" alt="Joint Secretary" />
                </div>
              </div>
            </div>
            <h2 className="al-name">Mr. T. Subramani</h2>
            <h3 className="al-role">Joint Secretary, NSCET</h3>
            <ul className="al-points">
              <li>B.C.A., M.B.A.</li>
              <li>Overseeing institutional policies and strategic developments.</li>
            </ul>
          </div>

        </div>
      </div>

      <hr className="al-divider" />

      {/* 4. ADMINISTRATIVE LEADERSHIP (Principal & Vice Principal - No ZigZag) */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Administrative Leadership</h2>
        <div className="al-admin-stack">
          
          <div className="al-card al-zigzag-row al-row-left">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/principle.png" alt="Principal" />
                </div>
              </div>
            </div>
            <div className="al-text-content">
              <h2 className="al-name">Dr. C. Mathalai Sundaram</h2>
              <h3 className="al-role">Principal & Head of Department ME Manufacturing Engineering</h3>
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
                  <img src="/sathya.jpeg" alt="Vice Principal" />
                </div>
              </div>
            </div>
            <div className="al-text-content">
              <h2 className="al-name">Dr. M. Sathya</h2>
              <h3 className="al-role">Vice Principal & Head of Department ME CSE</h3>
              <ul className="al-points">
                <li>M.Tech., M.B.A., Ph.D</li>
                <li>Ensuring student discipline, welfare, and coordinating daily academic operations.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <hr className="al-divider" />

      {/* 5. HEADS OF DEPARTMENT (10 Depts - Alphabetical Order Zig-Zag Layout) */}
      <div className="al-section-wrapper">
        <h2 className="al-section-title">Heads of Department</h2>
        <div className="al-zigzag-container">
          {hodsData.map((hod, index) => (
            <div 
              key={hod.id} 
              className={`al-card al-zigzag-row ${index % 2 === 0 ? 'al-row-left' : 'al-row-right'}`}
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
                <p className="al-dept-name"><strong>Department:</strong> {hod.department}</p>
                <ul className="al-points">
                  {hod.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="al-divider" />

      {/* 6. LIBRARY AND PHYSICAL EDUCATION (Split Container Layout) */}
      <div className="al-section-wrapper" style={{ marginBottom: '60px' }}>
        <h2 className="al-section-title">Library and Physical Education</h2>
        <div className="al-split-container">
          
          <div className="al-card al-admin-card">
            <div className="al-hex-wrapper">
              <div className="al-hex-outer">
                <div className="al-hex-inner">
                  <img src="/Sinthan.jpg" alt="Librarian" />
                </div>
              </div>
            </div>
            <h2 className="al-name">Dr. S. Sinthan</h2>
            <h3 className="al-role">ChiefLibrarian</h3>
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
            <h3 className="al-role">Physical Education Director</h3>
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