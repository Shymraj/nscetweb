import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaCertificate } from "react-icons/fa";
import { vision, mission, qualityPolicy } from "../data";

const VisionMission = () => {
  return (
    <section className="dev-section">
      <div className="vmq-wrapper">
        <div className="vmq-top-row">
          
          {/* Card 1: VISION */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-glass-card vmq-card"
          >
            <div className="vmq-header">
              <FaEye className="vmq-header-icon" />
              <h3 className="vmq-title">VISION</h3>
            </div>
            <p className="vision-text">{vision}</p>
          </motion.div>

          {/* Card 2: MISSION */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="premium-glass-card vmq-card"
          >
            <div className="vmq-header">
              <FaBullseye className="vmq-header-icon" />
              <h3 className="vmq-title">MISSION</h3>
            </div>
            <div className="mission-checklist">
              {mission.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="mission-check-card"
                >
                  <div className="check-number">{index + 1}</div>
                  <div className="check-text">{item}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Card 3: QUALITY POLICY */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="quality-info-card"
        >
          <div className="vmq-header" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <FaCertificate className="vmq-header-icon" style={{ color: '#93c5fd' }} />
          </div>
          <h2 className="quality-title">QUALITY POLICY</h2>
          <p className="quality-text">{qualityPolicy.intro}</p>
          <p className="quality-framework">{qualityPolicy.framework}</p>
        </motion.div>

      </div>
    </section>
  );
};

export default VisionMission;
