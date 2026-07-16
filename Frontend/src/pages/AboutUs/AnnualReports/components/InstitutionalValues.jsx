import React from 'react';
import { motion } from 'framer-motion';
import { institutionalValuesData } from '../data';
import { FaLeaf, FaCertificate, FaTree, FaBolt, FaTrophy, FaRecycle } from 'react-icons/fa';

const iconMap = {
  FaLeaf: <FaLeaf />,
  FaCertificate: <FaCertificate />,
  FaTree: <FaTree />,
  FaBolt: <FaBolt />,
  FaTrophy: <FaTrophy />,
  FaRecycle: <FaRecycle />
};

const InstitutionalValues = () => {
  return (
    <section className="ar-section ar-institutional-values">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="ar-section-title">Institutional Values</h2>
        <div className="ar-underline"></div>
      </motion.div>

      <div className="values-grid">
        {institutionalValuesData.map((item, index) => (
          <motion.div
            key={index}
            className="value-card ar-glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)" }}
          >
            <div className="value-icon">
              {iconMap[item.icon]}
            </div>
            <div className="value-content">
              <h3 className="value-label">{item.label}</h3>
              <p className="value-value">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InstitutionalValues;
