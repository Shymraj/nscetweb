import "./About.css";
import aboutImage from "../../assets/about.png";

import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaUniversity,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      {/* LEFT IMAGE */}

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-image">

          <img
            src={aboutImage}
            alt="NSCET Campus"
          />

          {/* Floating Badge */}

          <div className="about-badge">

            <h2>18+</h2>

            <p>Years of Excellence</p>

          </div>

          {/* Bottom Card */}

          <div className="experience-card">

            <FaUniversity />

            <div>

              <h4>Established in 2006</h4>

              <span>Quality Engineering Education</span>

            </div>

          </div>

        </div>

      </motion.div>

      {/* RIGHT CONTENT */}

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="about-subtitle">
          ABOUT NSCET
        </span>

        <h2 className="about-title">
          Empowering Future Engineers Through
          <span> Innovation & Excellence</span>
        </h2>

        <p className="about-description">
          Nadar Saraswathi College of Engineering and Technology is dedicated
          to providing world-class engineering education through academic
          excellence, innovative research, modern infrastructure, industry
          collaboration, and holistic student development.
        </p>

        {/* Feature Cards */}

        <div className="about-features">

          <div className="feature-box">

            <FaAward />

            <div>

              <h4>NAAC Accredited</h4>

              <p>Committed to academic quality and excellence.</p>

            </div>

          </div>

          <div className="feature-box">

            <FaUsers />

            <div>

              <h4>Excellent Placements</h4>

              <p>Top recruiters with outstanding placement records.</p>

            </div>

          </div>

          <div className="feature-box">

            <FaCheckCircle />

            <div>

              <h4>AICTE Approved</h4>

              <p>Recognized programs affiliated to Anna University.</p>

            </div>

          </div>

          <div className="feature-box">

            <FaUniversity />

            <div>

              <h4>Modern Campus</h4>

              <p>Advanced laboratories and smart classrooms.</p>

            </div>

          </div>

        </div>

        <button className="about-btn">

          Explore More

          <FaArrowRight />

        </button>

      </motion.div>

    </section>
  );
}

export default About;