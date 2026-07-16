import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaSearchPlus } from "react-icons/fa";
import devPlanImg from "../assets/images/developmentplan.jpg";

const DevelopmentImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Handle ESC key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <section className="dev-section dev-image-section">
      <div className="dev-image-header">
        <h2 className="dev-section-title">Institutional Development Plan Roadmap</h2>
        <p className="dev-image-subtitle">Visual representation of NSCET's strategic development roadmap.</p>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="dev-image-container"
        onClick={!imageError ? openModal : undefined}
      >
        <div className="dev-image-glow"></div>
        
        {!imageError ? (
          <div className="image-wrapper">
            <img 
              src={devPlanImg} 
              alt="Development Plan Roadmap" 
              className="dev-roadmap-img"
              onError={() => setImageError(true)}
            />
            <div className="image-hover-overlay">
              <FaSearchPlus className="zoom-icon" />
              <span>Click to Enlarge</span>
            </div>
          </div>
        ) : (
          <div className="image-placeholder">
            <p>Development Plan Image will be added here.</p>
          </div>
        )}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && !imageError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="dev-modal-backdrop"
            onClick={closeModal}
          >
            <button className="dev-modal-close" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="dev-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={devPlanImg} alt="Development Plan Roadmap Fullscreen" className="dev-modal-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DevelopmentImage;
