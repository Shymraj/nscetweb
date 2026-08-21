import "./Stats.css";
import Counter from "./Counter";
import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function Stats() {
  return (
    <section className="stats">
      {/* Stats Cards */}
      <motion.div 
        className="stats-container" 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="stats-card" variants={cardVariants}>
          <div className="icon-box">
            <FaUserGraduate />
          </div>

          <h2>
            <Counter end={1000} suffix="+" start={true} />
          </h2>

          <p>Students</p>
        </motion.div>

        <motion.div className="stats-card" variants={cardVariants}>
          <div className="icon-box">
            <FaChalkboardTeacher />
          </div>

          <h2>
            <Counter end={150} suffix="+" start={true} />
          </h2>

          <p>Faculty Members</p>
        </motion.div>

        <motion.div className="stats-card" variants={cardVariants}>
          <div className="icon-box">
            <FaBuilding />
          </div>

          <h2>
            <Counter end={12} suffix="" start={true} />
          </h2>

          <p>Departments</p>
        </motion.div>

        <motion.div className="stats-card" variants={cardVariants}>
          <div className="icon-box">
            <FaBriefcase />
          </div>

          <h2>
            <Counter end={97.97} suffix="%" start={true} />
          </h2>

          <p>Placement Rate</p>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Stats;
