import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import bannerImg from './banner/boyshostel.png';
import { FaDumbbell, FaTv, FaBook, FaUtensils, FaShieldAlt, FaCalendarCheck, FaExclamationCircle } from 'react-icons/fa';
import './BoysHostel.css';

const BoysHostel = () => {
  return (
    <div className="boyshostel-page">
      <PageBanner
        backgroundImage={bannerImg}
        hideBreadcrumb={true}
        showOverlay={false}
        showText={false}
      />
      
      <div className="hostel-container">
        {/* Header / College Info */}
        <section className="college-header-info">
          <h5>Managing Body: Theni Melapettai Hindu Nadargal Uravinmurai</h5>
          <h2>NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY</h2>
          <p className="approvals">Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai | Accredited by NAAC with 'A' Grade<br/>Recognized under 2(f) of the UGC Act, 1956 | An ISO 9001:2015 Certified Institution</p>
          <p className="address">Address: Vadapudupatti, Annanji (PO), Theni - 625531.</p>
        </section>

        {/* About Section */}
        <section className="about-hostel">
          <div className="section-header">
            <h3>About Hostel</h3>
            <div className="header-line"></div>
          </div>
          <p>
            The Boys Hostel at our college provides a comfortable and secure environment for students. Equipped with modern facilities and 24/7 supervision, the hostel ensures a home-like atmosphere where students can focus on their academics while enjoying their stay. Spacious rooms, hygienic dining, and recreational areas make it an ideal place for holistic growth and development.
          </p>
        </section>

        {/* Wardens Section */}
        <section className="warden-section">
           <div className="section-header">
            <h3>Wardens</h3>
            <div className="header-line"></div>
          </div>
          <div className="warden-cards">
            <div className="warden-card principal">
              <h4>Dr. C. Mathalai Sundaram</h4>
              <p>Principal / Warden</p>
            </div>
            <div className="warden-card deputy">
              <h4>Dr. J. Mathalai Raj</h4>
              <p>Deputy Warden</p>
            </div>
            <div className="warden-card deputy">
              <h4>Mr. R. Santhaseelan</h4>
              <p>Deputy Warden</p>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="facilities-section">
           <div className="section-header">
            <h3>Facilities</h3>
            <div className="header-line"></div>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <FaDumbbell className="facility-icon" />
              <p>Well-equipped gym with modern exercise machines and weights.</p>
            </div>
            <div className="facility-card">
              <FaTv className="facility-icon" />
              <p>Common room with a TV, comfortable seating, and entertainment options.</p>
            </div>
            <div className="facility-card">
              <FaBook className="facility-icon" />
              <p>Study area with quiet spaces, desks, and high-speed internet.</p>
            </div>
            <div className="facility-card">
              <FaUtensils className="facility-icon" />
              <p>Mess with a variety of nutritious meals served at convenient timings.</p>
            </div>
            <div className="facility-card">
              <FaShieldAlt className="facility-icon" />
              <p>Security with CCTV cameras and a hostel warden available 24/7.</p>
            </div>
          </div>
        </section>

        {/* Strength Section */}
        <section className="strength-section">
           <div className="section-header">
            <h3>Hostel Strength</h3>
            <div className="header-line"></div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">28</span>
              <span className="stat-label">Total Rooms</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">02</span>
              <span className="stat-label">Blocks</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">03</span>
              <span className="stat-label">Students / Room</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">01</span>
              <span className="stat-label">Sick Rooms</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">39</span>
              <span className="stat-label">Toilets</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">35</span>
              <span className="stat-label">Bathrooms</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">01</span>
              <span className="stat-label">Study Room</span>
            </div>
            <div className="stat-card highlight">
              <span className="stat-number">22</span>
              <span className="stat-label">Total Students</span>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="events-section">
           <div className="section-header">
            <h3>Hostel Events</h3>
            <div className="header-line"></div>
          </div>
          <div className="event-box">
            <div className="event-icon-wrap">
              <FaCalendarCheck />
            </div>
            <div className="event-details">
              <h4>Annual Hostel Day</h4>
              <p>The Annual Hostel Day is a celebration of the hostel community, featuring games, cultural performances, and a grand dinner. It brings together students and staff for a fun-filled day, promoting bonding and camaraderie.</p>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="rules-section">
           <div className="section-header">
            <h3>Rules and Regulations</h3>
            <div className="header-line"></div>
          </div>
          <ul className="rules-list">
            <li><FaExclamationCircle className="rule-icon"/> <span>Students must maintain discipline within the hostel premises.</span></li>
            <li><FaExclamationCircle className="rule-icon"/> <span>Late-night entry is strictly prohibited; the hostel gate closes at 10:00 PM.</span></li>
            <li><FaExclamationCircle className="rule-icon"/> <span>Visitors are not allowed in the hostel rooms without prior permission from the hostel warden.</span></li>
            <li><FaExclamationCircle className="rule-icon"/> <span>Hostellers are expected to adhere to the mess timings and not waste food.</span></li>
            <li><FaExclamationCircle className="rule-icon"/> <span>No smoking, drinking, or gambling is allowed inside the hostel premises.</span></li>
            <li><FaExclamationCircle className="rule-icon"/> <span>Keep the hostel environment clean and use dustbins properly.</span></li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default BoysHostel;
