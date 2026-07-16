import "./About.css";
import aboutImage from "../../assets/about.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about">

      {/* Image */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img src={aboutImage} alt="NSCET Campus" />

        <div className="about-badge">
          <h3>Since 2006</h3>
          <span>18+ Years of Excellence</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="about-subtitle">
          ABOUT NSCET
        </p>

        <h2>
          Shaping Future Engineers Through Innovation & Excellence
        </h2>

        <p className="about-text">
          Nadar Saraswathi College of Engineering and Technology is committed
          to providing quality education, cutting-edge research opportunities,
          and industry-oriented learning experiences for future engineers.
        </p>

        <div className="about-features">
          <p><FaCheckCircle /> NAAC Accredited Institution</p>
          <p><FaCheckCircle /> AICTE Approved Programs</p>
          <p><FaCheckCircle /> Affiliated to Anna University</p>
          <p><FaCheckCircle /> Excellent Placement Record</p>
        </div>

        <button className="about-btn">
          Read More <span>→</span>
        </button>
      </motion.div>

    </section>
  );
}

export default About;