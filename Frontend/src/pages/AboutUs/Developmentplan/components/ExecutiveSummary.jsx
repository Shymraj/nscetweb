import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb, FaBuilding, FaHandshake, FaUsers, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { executiveSummary } from "../data";

const iconMap = [
  <FaGraduationCap />,
  <FaLightbulb />,
  <FaBuilding />,
  <FaHandshake />,
  <FaUsers />,
  <FaUniversity />
];

const ExecutiveSummary = () => {
  return (
    <section className="dev-section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="exec-summary-wrapper"
      >
        <div className="exec-left">
          <h2 className="dev-section-title">{executiveSummary.title}</h2>
          <p className="exec-text">{executiveSummary.intro}</p>
          
          <p className="exec-focus-intro">{executiveSummary.focusPrefix}</p>
          <ul className="exec-focus-list">
            {executiveSummary.focusPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="exec-focus-item"
              >
                <FaCheckCircle className="focus-bullet" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          
          <p className="exec-conclusion">{executiveSummary.conclusion}</p>
        </div>

        <div className="exec-right">
          {executiveSummary.focusPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-glass-card feature-card"
            >
              <div className="feature-icon-wrapper">
                {iconMap[index]}
              </div>
              <h3 className="feature-title">{point}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExecutiveSummary;
