import React from 'react';
import './Entrepreneurship Development Cell.css';
import { FaLightbulb, FaBullseye, FaRocket, FaCompass, FaUsers, FaUserTie } from 'react-icons/fa';

const EdcIicGrid = () => {
  const teamMembers = [
    { name: "Mr. P. Surulimani", role: "Coordinator", dept: "AP/Mech", photo: "/MECH/Surulimani.jpg" },
    { name: "Dr. S. R. Krishnamoorthi", role: "Coordinator", dept: "Prof/Phy", photo: "/S&H/krishnamoorthy.jpg" },
    { name: "Mr. V. Sivaganesan", role: "Coordinator", dept: "AP/Mech", photo: "/MECH/sivaganesan.jpg" },
    { name: "Mrs. K. Benita Merlin Isabella", role: "Member", dept: "AP/CIVIL", photo: "/ME STRUCTURAL/Benita.jpg" },
    { name: "Mr. C. Shiva", role: "Member", dept: "AP/EEE", photo: "/EEE/shiva.jpg" },
    { name: "Mrs. P. Shantha Devi", role: "Member", dept: "AP/ECE", photo: "/ECE/shanthadevi.jpg" },
    { name: "Mr. J. Vinoth Kumar", role: "Member", dept: "AP/AI&DS", photo: "/AIDS/vinothkumar.jpg" },
    { name: "Mr. K. Rajaguru", role: "Member", dept: "AP/Phy", photo: "/S&H/rajaguru.jpg" },
  ];

  return (
    <div className="common-page-wrapper edc-page">
      <div className="edc-container">
        
        {/* Header Section */}
        <div className="edc-header-section">
          <h1 className="edc-page-title">ENTREPRENEURSHIP DEVELOPMENT CELL (EDC) & IIC</h1>
          <div className="edc-title-underline"></div>
        </div>

        {/* About Section */}
        <div className="edc-about-box">
          <div className="edc-card-title-row">
            <FaLightbulb className="edc-title-icon" />
            <h2>About EDC & IIC</h2>
          </div>
          <div className="edc-about-content">
            <p>
              At Nadar Saraswathi College of Engineering and Technology (NSCET), the Entrepreneurship Development Cell (EDC) and the Institution's Innovation Council (IIC) function collaboratively to promote innovation, creativity, and entrepreneurial thinking among students and faculty.
            </p>
            <p>
              These initiatives are aligned with the Government of India's national missions such as Startup India, Make in India, Digital India, and Atal Innovation Mission. Together, they aim to build a robust ecosystem that encourages ideation, product development, business planning, and startup incubation within the institution.
            </p>
            <p>
              While the EDC focuses on nurturing entrepreneurial qualities and converting ideas into viable businesses, the IIC is dedicated to cultivating a structured innovation culture through activities like hackathons, design thinking workshops, IPR sessions, and prototype development.
            </p>
            <p>
              NSCET's commitment to entrepreneurship and innovation is further strengthened through collaborations with industries, startups, incubators, and government agencies, ensuring our students are well-equipped to be future-ready leaders and change-makers.
            </p>
          </div>
        </div>

        {/* Vision Hero Banner */}
        <div className="edc-vision-banner">
          <div className="edc-banner-icon-box">
            <FaCompass className="edc-vision-icon" />
          </div>
          <div className="edc-banner-content">
            <h3>Our Vision</h3>
            <p>
              To build a sustainable and inclusive ecosystem of innovation and entrepreneurship by nurturing future-ready innovators, leaders and job creators through ethical and impactful practices.
            </p>
          </div>
        </div>

        {/* Mission & Objectives Split Layout */}
        <div className="edc-mission-obj-grid">
          
          {/* Mission Card */}
          <div className="edc-split-card mission-card">
            <div className="edc-card-header">
              <FaBullseye className="card-header-icon mission-icon" />
              <h3>Mission</h3>
            </div>
            <ul className="edc-custom-list">
              <li>To foster a culture of innovation, entrepreneurship, and creativity across all disciplines.</li>
              <li>To enable hands-on learning and experiential projects that address real-world challenges.</li>
              <li>To provide mentorship, technical support and infrastructure for idea validation and startup growth.</li>
              <li>To facilitate collaboration with industry, academia and government bodies to support entrepreneurial initiatives.</li>
              <li>To empower all sections of society, including women and rural youth, through inclusive programs.</li>
            </ul>
          </div>

          {/* Objectives Card */}
          <div className="edc-split-card obj-card">
            <div className="edc-card-header">
              <FaRocket className="card-header-icon obj-icon" />
              <h3>Objectives</h3>
            </div>
            <ul className="edc-custom-list">
              <li>Build an entrepreneurial mindset among students through training, events and experiential learning.</li>
              <li>Promote startup development by supporting ideation, prototype building and business model creation.</li>
              <li>Conduct regular activities such as innovation challenges, bootcamps, guest lectures and My Story sessions.</li>
              <li>Facilitate access to funding, incubation and government startup schemes (e.g., DST, MSME, NIDHI, YUKTI).</li>
              <li>Encourage students and faculty to file Intellectual Property Rights (IPR) such as patents and trademarks.</li>
            </ul>
          </div>

        </div>

        {/* Team Section */}
        <div className="edc-team-section">
          <div className="edc-team-header-wrapper">
            <div className="edc-team-title-row">
              <FaUsers className="team-header-icon" />
              <h2 className="section-heading">EDC & IIC Team</h2>
            </div>
            <div className="edc-title-underline sub-underline"></div>
          </div>
          
          <div className="edc-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="edc-team-card">
                <div className="edc-profile-avatar">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="real-photo" />
                  ) : (
                    <FaUserTie className="avatar-fallback" />
                  )}
                </div>
                <div className="edc-team-info">
                  <h4 className="edc-team-name">{member.name}</h4>
                  <p className="edc-team-dept">{member.dept}</p>
                  <span className={`edc-team-badge ${member.role === 'Coordinator' ? 'badge-coord' : 'badge-member'}`}>
                    {member.role === 'Coordinator' ? '★ Coordinator' : '● Member'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EdcIicGrid;
