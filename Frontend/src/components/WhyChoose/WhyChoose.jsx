import React from 'react';
import './WhyChoose.css';
import { useNavigate } from 'react-router-dom'; // 👉 1. Import useNavigate
import { FaLaptopCode, FaUserTie, FaHandshake, FaChartLine, FaArrowRight, FaAward } from 'react-icons/fa';

const WhyChoose = () => {
  const navigate = useNavigate(); // 👉 2. Initialize navigate function

  return (
    <section className="whychoose">
      <div className="why-header">
        <p className="why-subtitle">Why Choose Us</p>
        <h2 className="why-title">Discover the NSCET Advantage</h2>
        <p className="why-description">
          Experience world-class education, cutting-edge facilities, and a 
          community dedicated to shaping the tech leaders of tomorrow.
        </p>
      </div>

      <div className="why-grid">
        {/* Card 1 */}
        <div className="why-card">
          <div className="why-icon">
            <FaLaptopCode />
          </div>
          <h3>Advanced Laboratories</h3>
          <p>Experience hands-on learning with cutting-edge laboratories, research facilities and innovation spaces designed for future engineers.</p>
          <button className="learn-more-btn">
            Learn More <FaArrowRight className="btn-arrow" />
          </button>
        </div>

        {/* Card 2 - Expert Faculty */}
        <div className="why-card">
          <div className="why-icon">
            <FaUserTie />
          </div>
          <h3>Expert Faculty</h3>
          <p>Learn from experienced professors, researchers and industry mentors dedicated to academic excellence and student success.</p>
          {/* 👉 3. onClick function added for Expert Faculty */}
          <button 
            className="learn-more-btn" 
            onClick={() => navigate('/academics/teaching-faculty')}
          >
            Learn More <FaArrowRight className="btn-arrow" />
          </button>
        </div>

        {/* Card 3 - Industry Connect */}
        <div className="why-card">
          <div className="why-icon">
            <FaHandshake />
          </div>
          <h3>Industry Connect</h3>
          <p>Strong collaborations with industries through internships, live projects, industrial visits and professional certifications.</p>
          {/* 👉 NEW: onClick function added for Industry Connect */}
          <button 
            className="learn-more-btn"
            onClick={() => navigate('/academics/industry-collaboration')}
          >
            Learn More <FaArrowRight className="btn-arrow" />
          </button>
        </div>

        {/* Card 4 - Career & Placements */}
        <div className="why-card">
          <div className="why-icon">
            <FaChartLine />
          </div>
          <h3>Career & Placements</h3>
          <p>Excellent placement training with top recruiters, career guidance and entrepreneurship support for every student.</p>
          {/* 👉 4. onClick function added for Placements */}
          <button 
            className="learn-more-btn" 
            onClick={() => navigate('/student-life/placements')}
          >
            Learn More <FaArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;