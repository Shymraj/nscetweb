import "./VisionMission.css";

import { motion } from "framer-motion";

import {
  FaBullseye,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

function VisionMission() {
  return (
    <section className="vision-mission">

      {/* Section Heading */}

      <motion.div
        className="vm-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="vm-subtitle">
          OUR FOUNDATION
        </p>

        <h2 className="vm-title">
          Vision & Mission
        </h2>

        <p className="vm-description">
          At NSCET, we are committed to nurturing future-ready engineers
          through academic excellence, innovation, ethical values and
          industry-oriented education.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="vm-grid">

        {/* Vision */}

        <motion.div
          className="vm-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <div className="vm-icon">

            <FaBullseye />

          </div>

          <h3>
            Our Vision
          </h3>

          <p className="vision-text">
To establish ourselves as a leading technological institutions
          </p>

        </motion.div>

        {/* Mission */}

        <motion.div
          className="vm-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <div className="vm-icon mission">

            <FaRocket />

          </div>

          <h3>
            Our Mission
          </h3>

          <ul className="mission-list">

            <li>
              <FaCheckCircle />
To provide professional, Constructive and learner centered education.
            </li>

            <li>
              <FaCheckCircle />
To make learners contribute to the development of nation through academic and industrial excellence.
            </li>

            <li>
              <FaCheckCircle />
To encourage learners involve in innovative researches with ethics.
            </li>

            <li>
              <FaCheckCircle />
To produce competitive and confident graduates to face the ever growing challenges of the labor market.
            </li>


          </ul>

        </motion.div>

      </div>

    </section>
  );
}

export default VisionMission;