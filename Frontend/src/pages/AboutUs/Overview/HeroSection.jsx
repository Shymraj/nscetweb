import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import CampusSlider from "./CampusSlider";

const HeroSection = () => {
  return (
    <section className="about-section-wrapper bg-white">
      <div className="about-inner-container hero-section">
      {/* Background ambient gradients */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      <div className="hero-container">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div className="hero-header">
            <h1 className="hero-title">ABOUT NSCET</h1>
            <h2 className="hero-subtitle">Inspiring Innovation. Empowering Future Engineers.</h2>
          </div>
          
          <div className="hero-info-cards">
            <div className="info-card">
              <span className="info-year">2010</span>
              <span className="info-label">Established</span>
            </div>
            <div className="info-card">
              <span className="info-highlight">Anna Univ</span>
              <span className="info-label">Affiliated</span>
            </div>
            <div className="info-card">
              <span className="info-highlight">AICTE</span>
              <span className="info-label">Approved</span>
            </div>
            <div className="info-card">
              <span className="info-highlight grade-a">NAAC 'A'</span>
              <span className="info-label">Accredited</span>
            </div>
          </div>

          <div className="hero-text-content">
            <p className="hero-description">
              Nadar Saraswathi College of Engineering and Technology (NSCET), established in 2010 at Vadapudupatti, Theni, is one of the leading engineering institutions affiliated with Anna University, Chennai. Approved by AICTE and accredited with NAAC 'A' Grade, the institution is dedicated to delivering quality technical education through innovation, research, and industry-oriented learning.
            </p>
            <p className="hero-description">
              The campus provides a vibrant academic environment supported by highly qualified faculty members, modern laboratories, advanced research facilities, smart classrooms, digital libraries, and excellent infrastructure.
            </p>
          </div>

          <div className="hero-quote-card">
            <FaQuoteLeft className="quote-icon" />
            <p>Empowering Young Minds Through Innovation and Excellence, shaping the leaders of tomorrow.</p>
          </div>
        </motion.div>

        {/* Right Side: Cinematic Slider */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-visual"
        >
          <CampusSlider />
          
          {/* Glassmorphism Floating Caption */}
          <div className="floating-caption">
            <div className="caption-content">
              <h4>State-of-the-art Campus</h4>
              <p>Experience world-class infrastructure designed for collaborative learning.</p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
