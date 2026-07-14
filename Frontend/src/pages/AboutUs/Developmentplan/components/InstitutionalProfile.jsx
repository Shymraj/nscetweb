import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward } from "react-icons/fa";
import { institutionalProfile } from "../data";

const InstitutionalProfile = () => {
  return (
    <section className="dev-section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="premium-glass-card profile-card"
      >
        <h2 className="dev-section-title">{institutionalProfile.title}</h2>
        
        <div className="profile-content">
          {institutionalProfile.description.map((text, index) => (
            <motion.p
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="profile-text"
            >
              <FaCheckCircle className="profile-bullet" />
              <span>{text}</span>
            </motion.p>
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="profile-badges"
        >
          {institutionalProfile.badges.map((badge, index) => (
            <div key={index} className="badge-item">
              <FaAward className="badge-icon" />
              {badge}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InstitutionalProfile;
