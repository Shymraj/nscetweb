import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import './RTI.css';
import RTICertificate from './assets/certificate/RTI.jpg';

const RTI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="rti-page">
      <PageBanner 
        title="Right to Information" 
        hideBreadcrumb={true}
      />

      <div className="rti-premium-container">
        {/* Animated Background Elements */}
        <div className="rti-bg-blob blob-1"></div>
        <div className="rti-bg-blob blob-2"></div>
        <div className="rti-bg-blob blob-3"></div>

        <div className="rti-content-wrapper">
          {/* SECTION 1: Heading */}
          <motion.div 
            className="rti-header-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="rti-main-title">RIGHT TO INFORMATION ACT</h1>
            <p className="rti-subtitle">
              Ensuring transparency and accountability in administration. 
              View our official RTI compliance certificate below.
            </p>
          </motion.div>

          {/* SECTION 2: Premium Certificate Showcase */}
          <motion.div 
            className="rti-certificate-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div 
              className="certificate-glass-frame"
              onClick={() => setIsModalOpen(true)}
            >
              <motion.div 
                className="certificate-image-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={RTICertificate} 
                  alt="RTI Certificate" 
                  className="certificate-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('image-placeholder');
                  }}
                />
                <div className="click-to-view-overlay">
                  <span>Click to view fullscreen</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="rti-lightbox-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={RTICertificate} alt="RTI Certificate Fullscreen" className="lightbox-img" 
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('image-placeholder');
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RTI;
