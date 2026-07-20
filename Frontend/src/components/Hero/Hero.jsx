import "./Hero.css";
import heroImage from "../../assets/Img/hero.jpeg";
import logo from "../../assets/Img/nscet-logo.webp";

import {
  FaAward,
  FaUniversity,
  FaLandmark,
  FaArrowRight,
  FaChevronDown,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Premium Overlay (Styled transparent in CSS to highlight image brightness) */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT PANEL */}
        <div className="hero-left-content">
          <div className="hero-brand">
            <img src={logo} alt="NSCET Logo" className="hero-logo" />
            <div className="badge">
              <FaStar />
              <span>Excellence in Engineering Education</span>
            </div>
          </div>

          <h1 className="college-name">
            Nadar Saraswathi
            <br />
            <span className="accent-text">College of Engineering & Technology</span>
          </h1>

          <div className="premium-line"></div>

          <p className="college-tagline">Empowering Minds, Shaping the Future</p>

          <p className="left-description">
            Join a vibrant learning community that inspires innovation,
            nurtures talent, and transforms dreams into real-world success.
            Excellence in education, innovation in every step.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Apply Now
              <FaArrowRight />
            </button>

            <button className="btn-secondary">
              Explore Campus
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT FLOATING CARDS PANEL */}
        <div className="hero-right-cards">
          <div className="floating-card card-1">
            <div className="feature-icon">
              <FaAward />
            </div>
            <div className="card-info">
              <h3>NAAC 'A' Grade</h3>
              <p>Accredited Institution</p>
            </div>
          </div>

          <div className="floating-card card-2">
            <div className="feature-icon">
              <FaUniversity />
            </div>
            <div className="card-info">
              <h3>Affiliated to Anna University</h3>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="floating-card card-3">
            <div className="feature-icon">
              <FaLandmark />
            </div>
            <div className="card-info">
              <h3>AICTE Approved</h3>
              <p>Approved by AICTE, New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;