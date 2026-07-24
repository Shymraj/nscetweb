import React from 'react';
import './Entrepreneurship Development Cell.css';

const EdcIicGrid = () => {
  const teamMembers = [
    { name: "Mr. P. Surulimani", role: "Coordinator", dept: "AP/Mech" ,  photo: "/Surulimani.jpg"},
    { name: "Dr. S. R. Krishnamoorthi", role: "Coordinator", dept: "ASP/Phy" , photo:"/krishnamoorthy.jpg"},
    { name: "Mr. V. Sivaganesan", role: "Coordinator", dept: "AP/Mech" , photo:"/sivaganesan.jpg" },
    { name: "Mrs. K. Benita Merlin Isabella", role: "Member", dept: "AP/CIVIL" , photo: "/Benita.jpg" },
    { name: "Mr. C. Shiva", role: "Member", dept: "AP/EEE",  photo: "/shiva.jpg"},
    { name: "Mrs. P. Shantha Devi", role: "Member", dept: "AP/ECE",photo: "/shanthadevi.jpg" },
    { name: "Mr. J. Vinoth Kumar", role: "Member", dept: "AP/AI&DS", photo: "/vinothkumar.jpg" },
    { name: "Mr. K. Rajaguru", role: "Member", dept: "AP/Phy",photo: "/rajaguru.jpg" },
   ];

  const archives = ["2023-24", "2022-23", "2021-22", "2020-21", "2019-20", "2018-19"];

  return (
    <div className="edc-grid-wrapper">
      
      {/* Header & About Section */}
      <section className="edc-intro-section">
        <h1 className="edc-page-title">ENTREPRENEURSHIP DEVELOPMENT CELL (EDC) & IIC</h1>
        <div className="edc-about-box">
          <h2>About EDC & IIC</h2>
          <p>At Nadar Saraswathi College of Engineering and Technology (NSCET), the Entrepreneurship Development Cell (EDC) and the Institution's Innovation Council (IIC) function collaboratively to promote innovation, creativity, and entrepreneurial thinking among students and faculty.</p>
          <p>These initiatives are aligned with the Government of India's national missions such as Startup India, Make in India, Digital India, and Atal Innovation Mission. Together, they aim to build a robust ecosystem that encourages ideation, product development, business planning, and startup incubation within the institution.</p>
          <p>While the EDC focuses on nurturing entrepreneurial qualities and converting ideas into viable businesses, the IIC is dedicated to cultivating a structured innovation culture through activities like hackathons, design thinking workshops, IPR sessions, and prototype development.</p>
          <p>NSCET's commitment to entrepreneurship and innovation is further strengthened through collaborations with industries, startups, incubators, and government agencies, ensuring our students are well-equipped to be future-ready leaders and change-makers.</p>
        </div>
      </section>

      {/* ALTERED: Core Values Section (Hero Banner & Split Layout) */}
      <section className="edc-values-highlight">
        
        {/* Vision Hero Banner */}
        <div className="vision-banner">
          <div className="banner-icon">◆</div>
          <div className="banner-content">
            <h3>Our Vision</h3>
            <p>To build a sustainable and inclusive ecosystem of innovation and entrepreneurship by nurturing future-ready innovators, leaders, and job creators through ethical and impactful practices.</p>
          </div>
        </div>

        {/* Mission & Objectives Split Cards */}
        <div className="mission-obj-split">
          
          <div className="split-card mission-card">
            <div className="card-header">
              <span className="card-icon">🎯</span>
              <h3>Mission</h3>
            </div>
            <ul className="custom-list">
              <li>To foster a culture of innovation, entrepreneurship, and creativity across all disciplines.</li>
              <li>To enable hands-on learning and experiential projects that address real-world challenges.</li>
              <li>To provide mentorship, technical support, and infrastructure for idea validation and startup growth.</li>
              <li>To facilitate collaboration with industry, academia, and government bodies to support entrepreneurial initiatives.</li>
              <li>To empower all sections of society, including women and rural youth, through inclusive programs.</li>
            </ul>
          </div>

          <div className="split-card obj-card">
            <div className="card-header">
              <span className="card-icon">🚀</span>
              <h3>Objectives</h3>
            </div>
            <ul className="custom-list">
              <li>Build an entrepreneurial mindset among students through training, events, and experiential learning.</li>
              <li>Promote startup development by supporting ideation, prototype building, and business model creation.</li>
              <li>Conduct regular activities such as innovation challenges, bootcamps, guest lectures, and My Story sessions.</li>
              <li>Facilitate access to funding, incubation, and government startup schemes (e.g., DST, MSME, NIDHI, YUKTI).</li>
              <li>Encourage students and faculty to file Intellectual Property Rights (IPR) such as patents and trademarks.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Document Archives Section */}
      <section className="edc-archives-section">
        <h2 className="section-heading">Document Archives</h2>
        <p className="archives-subtext">Click on a year below to view the corresponding IIC Ranking document:</p>
        <div className="archives-flex">
          {archives.map((year, index) => (
            <button key={index} className="archive-pill">{year}</button>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="edc-team-section">
        <h2 className="section-heading">EDC & IIC Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="profile-icon">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="real-photo" />
                ) : (
                  <span>👤</span>
                )}
              </div>
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-dept">{member.dept}</p>
                <span className={`team-role ${member.role === 'Coordinator' ? 'role-coord' : 'role-member'}`}>
                  {member.role === 'Coordinator' ? '◀' : '🔹'} {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default EdcIicGrid;