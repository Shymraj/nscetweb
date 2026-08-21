import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaGraduationCap, 
  FaBriefcase, 
  FaLightbulb, 
  FaBookOpen,
  FaChevronRight,
  FaUserCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import defaultPrincipalImg from '../../../assets/administration/images/prinicipal.jpg';
import './Principal.css';

function Principal({ hideBreadcrumb = false }) {
  const [principalData, setPrincipalData] = useState(null);

  useEffect(() => {
    const fetchPrincipal = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/home/principal');
        if (response.data && response.data.data && response.data.data.length > 0) {
          setPrincipalData(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching principal data:", error);
      }
    };
    fetchPrincipal();
  }, []);

  return (
    <div className={`principal-page ${hideBreadcrumb ? 'pr-home-view' : ''}`}>
      <div className="pr-container">
        
        {/* Centered Page Title & Breadcrumb Header */}
        {!hideBreadcrumb ? (
        <div className="pr-header-centered">
          <h1 className="pr-page-title" style={{ fontFamily: 'var(--font-heading)' }}>Principal Message</h1>
          <div className="pr-breadcrumb">
            <a href="/" className="pr-breadcrumb-link">Home</a>
            <FaChevronRight className="pr-breadcrumb-icon" />
            <span className="pr-breadcrumb-current">Principal Message</span>
          </div>
        </div>
        ) : (
        <div className="pr-home-header">
          <h2 className="pr-home-title">PRINCIPAL</h2>
        </div>
        )}

        {/* Hero Section: Left Image + Right Text */}
        <div className="pr-hero-grid">
          
          {/* LEFT SIDE: Principal Portrait */}
          <div className="pr-hero-left">
            <div className="pr-image-frame">
              <img 
                src={principalData?.photo_url ? `http://localhost:5000${principalData.photo_url}` : defaultPrincipalImg} 
                alt={principalData?.name || "Dr. C. Mathalai Sundaram - Principal"} 
                className="pr-portrait-img"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Name, Title & Welcome Paragraphs */}
          <div className="pr-hero-right">
            <h2 className="pr-principal-name">{principalData?.name || "Dr. C. Mathalai Sundaram"}</h2>
            <h3 className="pr-principal-subtitle">
              Principal, Nadar Saraswathi College of Engineering and Technology
            </h3>

            <div className="pr-hero-text-block">
              {principalData?.message ? (
                <p className="pr-paragraph">{principalData.message}</p>
              ) : (
                <>
                  <p className="pr-paragraph">
                    As a 21st century organization, NSCET desires to set an approach to learning that incorporates inquiry, research, analytical thinking and an ethical approach that becomes a lifetime habit. I strongly believe that education is a collaborative effort that involves professional administrators, committed teachers and motivated students.
                  </p>
                  <p className="pr-paragraph">
                    We dedicate ourselves as professional administrators in creating a dynamic education programme empowering the students in a global perspective. Learning at NSCET is a wholesome package of attitude, challenge and opportunity.
                  </p>
                </>
              )}
              
              <div style={{ marginTop: '20px' }}>
                <Link to="/administration/principal/profile" className="pr-academic-profile-btn">
                  <FaUserCircle className="pr-btn-icon" />
                  View Academic Profile
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Sections Block */}
        <div className="pr-details-container">
          

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
