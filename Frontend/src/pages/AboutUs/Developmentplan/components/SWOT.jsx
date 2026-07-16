import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaExclamationTriangle, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { swotData } from "../data";

const iconComponents = {
  FaTrophy: <FaTrophy />,
  FaExclamationTriangle: <FaExclamationTriangle />,
  FaLightbulb: <FaLightbulb />,
  FaShieldAlt: <FaShieldAlt />
};

const SWOT = () => {
  return (
    <section className="dev-section">
      <h2 className="dev-section-title" style={{ display: "block", textAlign: "center", marginBottom: "3rem" }}>
        Institutional SWOT Analysis
      </h2>
      <div className="swot-grid">
        {swotData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`premium-glass-card swot-card swot-${item.color}`}
          >
            <div className="swot-header">
              <div className="swot-icon-wrapper">
                {iconComponents[item.icon]}
              </div>
              <h3 className="swot-title">{item.title}</h3>
            </div>
            <ul className="swot-list">
              {item.points.map((point, idx) => (
                <li key={idx} className="swot-list-item">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SWOT;
