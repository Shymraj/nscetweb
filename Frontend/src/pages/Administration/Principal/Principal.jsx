import React from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaGraduationCap, 
  FaBriefcase, 
  FaLightbulb, 
  FaBookOpen,
  FaChevronRight
} from 'react-icons/fa';
import principalImg from '../../../assets/administration/images/prinicipal.jpg';
import './Principal.css';

function Principal() {
  return (
    <div className="principal-page">
      <div className="pr-container">
        
        {/* Centered Page Title & Breadcrumb Header */}
        <div className="pr-header-centered">
          <h1 className="pr-page-title">Principal Message</h1>
          <div className="pr-breadcrumb">
            <a href="/" className="pr-breadcrumb-link">Home</a>
            <FaChevronRight className="pr-breadcrumb-icon" />
            <span className="pr-breadcrumb-current">Principal Message</span>
          </div>
        </div>

        {/* Hero Section: Left Image + Right Text */}
        <div className="pr-hero-grid">
          
          {/* LEFT SIDE: Principal Portrait */}
          <div className="pr-hero-left">
            <div className="pr-image-frame">
              <img 
                src={principalImg} 
                alt="Dr. C. Mathalai Sundaram - Principal" 
                className="pr-portrait-img"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Name, Title & Welcome Paragraphs */}
          <div className="pr-hero-right">
            <h2 className="pr-principal-name">Dr. C. Mathalai Sundaram</h2>
            <h3 className="pr-principal-subtitle">
              Principal, Nadar Saraswathi College of Engineering and Technology
            </h3>

            <div className="pr-hero-text-block">
              <p className="pr-paragraph">
                As a 21st century organization, NSCET desires to set an approach to learning that incorporates inquiry, research, analytical thinking and an ethical approach that becomes a lifetime habit. I strongly believe that education is a collaborative effort that involves professional administrators, committed teachers and motivated students.
              </p>
              <p className="pr-paragraph">
                We dedicate ourselves as professional administrators in creating a dynamic education programme empowering the students in a global perspective. Learning at NSCET is a wholesome package of attitude, challenge, and opportunity.
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Sections Block */}
        <div className="pr-details-container">
          
          {/* 1. Profile Details Card */}
          <div className="pr-info-card">
            <div className="pr-card-header">
              <FaGraduationCap className="pr-card-icon" />
              <h2>Profile Details</h2>
            </div>
            <div className="pr-card-body">
              <p className="pr-info-row">
                <strong>Designation:</strong> Professor &amp; Principal
              </p>
              <p className="pr-info-row">
                <strong>Department:</strong> Mechanical Engineering
              </p>
              <div className="pr-edu-block">
                <p className="pr-subheading"><strong>Education:</strong></p>
                <ul className="pr-bullet-list">
                  <li>Ph.D. in Mechanical Engineering (Composite Tool Materials), Anna University (2011-2017)</li>
                  <li>M.E. in Manufacturing Engineering, Anna University of Technology, Trichy (2008-2010)</li>
                  <li>M.B.A in Production Engineering, Madurai Kamaraj University (2002-2004)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Experience Card */}
          <div className="pr-info-card">
            <div className="pr-card-header">
              <FaBriefcase className="pr-card-icon" />
              <h2>Experience</h2>
            </div>
            <div className="pr-card-body">
              <ul className="pr-bullet-list">
                <li>Professor &amp; Principal of NSCET since June 2017</li>
                <li>Professor &amp; Vice Principal at NSCET for 4 years</li>
                <li>Assistant/Associate Professor at NSCET for 3 years</li>
                <li>Assistant Professor at Bharath Niketan Engineering College for 2 years</li>
                <li>Lecturer &amp; Head of Department at multiple polytechnic colleges for over 8 years</li>
              </ul>
            </div>
          </div>

          {/* 3. Publications & Patents Card */}
          <div className="pr-info-card">
            <div className="pr-card-header">
              <FaLightbulb className="pr-card-icon" />
              <h2>Publications &amp; Patents</h2>
            </div>
            <div className="pr-card-body">
              <p className="pr-info-row">
                <strong>Total Publications:</strong> 32
              </p>
              <p className="pr-subheading"><strong>Patents:</strong></p>
              <ul className="pr-bullet-list">
                <li>Automation in Portable Oil Seal Assembly Machine (2017)</li>
                <li>Flower Garland Making Machine (2022)</li>
                <li>Movable Staircase and Lifting Setup in Vehicle (2023)</li>
              </ul>
            </div>
          </div>

          {/* 4. Contact Information Card */}
          <div className="pr-info-card pr-contact-card">
            <div className="pr-card-header">
              <FaEnvelope className="pr-card-icon" />
              <h2>Contact Information</h2>
            </div>
            <div className="pr-card-body pr-contact-rows">
              <div className="pr-contact-item">
                <FaEnvelope className="pr-contact-subicon" />
                <span><strong>Email:</strong> <a href="mailto:principal@nscet.org">principal@nscet.org</a></span>
              </div>
              <div className="pr-contact-item">
                <FaPhoneAlt className="pr-contact-subicon" />
                <span><strong>Contact:</strong> +91 94434 88999, +91 98426 85138</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Principal;
