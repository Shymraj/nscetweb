import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUserGraduate, FaFileAlt } from 'react-icons/fa';
import './FacultyProfileModal.css';

const FacultyProfileModal = ({ isOpen, onClose, faculty }) => {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !faculty) return null;

  const profileImage = faculty.academicProfileImage || faculty.image;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fpm-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${faculty.name} Academic Profile`}
        >
          {/* Top Fixed Close Button */}
          <button 
            className="fpm-close-btn" 
            onClick={onClose} 
            aria-label="Close Academic Profile"
            title="Close (Esc)"
          >
            <FaTimes />
          </button>

          {/* Centered Modal Container */}
          <motion.div 
            className="fpm-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Header Info */}
            <div className="fpm-header">
              <span className="fpm-badge">
                <FaFileAlt /> Academic Profile
              </span>
              <h3 className="fpm-name">{faculty.name}</h3>
              <p className="fpm-sub">{faculty.desig} • {faculty.qual}</p>
            </div>

            {/* Profile Image Viewport */}
            <div className="fpm-image-wrapper">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt={`${faculty.name} Academic Profile`} 
                  className="fpm-profile-img"
                  style={{ objectPosition: faculty.objectPosition || 'center 15%' }}
                />
              ) : (
                <div className="fpm-placeholder">
                  <FaUserGraduate className="fpm-placeholder-icon" />
                  <h4>{faculty.name}</h4>
                  <p>{faculty.qual}</p>
                  <span>Academic Profile Details Currently Being Processed</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default FacultyProfileModal;
