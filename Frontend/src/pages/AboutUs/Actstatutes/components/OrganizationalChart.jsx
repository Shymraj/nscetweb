import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import chartImg from "../assets/images/organizational-chart.png";

const OrganizationalChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section id="organizational-chart" className="about-section-wrapper bg-light-2">
      <div className="about-inner-container act-section">
      <div className="section-header">
        <h2 className="section-title">Organizational Chart</h2>
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="chart-preview-card"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="img-placeholder">
          <img src={chartImg} alt="Organizational Chart" className="chart-thumbnail" />
          <div className="hover-overlay">
            <FaSearchPlus className="zoom-icon" />
            <span>Click to View Full Screen</span>
          </div>
        </div>
      </motion.div>

      {/* Use portal to ensure the modal sits on top of everything including navbar */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fullscreen-modal"
              onClick={() => setIsModalOpen(false)}
            >
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src={chartImg}
                alt="Organizational Chart Fullscreen"
                className="chart-fullscreen-img"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      </div>
    </section>
  );
};

export default OrganizationalChart;
