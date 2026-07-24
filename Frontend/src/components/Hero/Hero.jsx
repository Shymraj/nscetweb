import "./Hero.css";
import heroImage from "../../assets/Img/hero.jpeg";
import logo from "../../assets/Img/nscet-logo.webp";

import {
  FaAward,
  FaUniversity,
  FaLandmark,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Premium Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT PANEL */}
        <div className="hero-left-content">
          <div className="hero-brand">
            <div className="badge">
              <FaStar />
              <span>Theni Melapettai Hindu Nadargal Uravinmurai</span>
            </div>
          </div>

          <h1 className="college-name">
            NADAR SARASWATHI
            <br />
            <span className="accent-text">
              COLLEGE OF
              <br />
              ENGINEERING &
              <br />
              TECHNOLOGY
            </span>
          </h1>

          <div className="premium-line"></div>

          <p className="college-tagline">Empowering Minds, Shaping the Future</p>

          <p className="left-description">
            Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai
Accredited by NAAC with 'A' Grade <br />Recognized under 2(f) of the UGC Act, 1956 <br />
An ISO 9001:2015 Certified Institution <br />
Vadapudupatti, Annanji (PO), Theni - 625531.
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