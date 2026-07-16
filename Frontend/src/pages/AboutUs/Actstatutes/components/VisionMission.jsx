import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { vision, mission } from "../data";

const VisionMission = () => {
  return (
    <div className="vision-mission-wrapper">
      <div className="vision-mission-compact-container">
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="elegant-card vision-card"
        >
          <div className="elegant-card-header">
            <h2 className="elegant-card-title">Vision</h2>
            <div className="elegant-line"></div>
          </div>
          <div className="elegant-card-body">
            <p className="elegant-vision-text">{vision}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="elegant-card mission-card"
        >
          <div className="elegant-card-header">
            <h2 className="elegant-card-title">Mission</h2>
            <div className="elegant-line"></div>
          </div>
          <div className="elegant-card-body">
            <ul className="elegant-mission-list">
              {mission.map((item, index) => (
                <li key={index} className="elegant-mission-item">
                  <div className="elegant-icon-wrapper">
                    <FaCheck className="elegant-check-icon" />
                  </div>
                  <span className="elegant-mission-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default VisionMission;
