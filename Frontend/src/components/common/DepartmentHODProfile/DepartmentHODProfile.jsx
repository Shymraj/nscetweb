import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaEnvelope, FaQuoteLeft, FaFileAlt } from 'react-icons/fa';
import './DepartmentHODProfile.css';

const DepartmentHODProfile = ({ hod, onOpenProfile }) => {
  if (!hod) return null;

  return (
    <motion.div 
      className="dept-hod-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="dept-hod-main-side">
        <div className="dept-hod-portrait-wrap">
          {hod.image ? (
            <img 
              src={hod.image} 
              alt={hod.name} 
              className="dept-hod-portrait" 
              style={{ objectPosition: hod.objectPosition || 'center 10%' }}
            />
          ) : (
            <div className="dept-hod-avatar-fallback"><FaUserTie /></div>
          )}
          <span className="dept-hod-exp-badge">{hod.expBadge || '12+ Yrs Experience'}</span>
        </div>

        <div className="dept-hod-details">
          <h3 className="dept-hod-name">{hod.name}</h3>
          <span className="dept-hod-desig">{hod.desig}</span>

          <div className="dept-hod-meta-list">
            {hod.qual && (
              <div className="dept-hod-meta-item">
                <strong>Qualifications:</strong> {hod.qual}
              </div>
            )}
            {hod.spec && (
              <div className="dept-hod-meta-item">
                <strong>Research Specialization:</strong> {hod.spec}
              </div>
            )}
            {hod.email && (
              <div className="dept-hod-meta-item">
                <strong>Department Email:</strong>{' '}
                <a href={`mailto:${hod.email}`} className="dept-email-link">
                  <FaEnvelope /> {hod.email}
                </a>
              </div>
            )}
          </div>

          <div className="dept-hod-actions">
            {hod.email && (
              <a href={`mailto:${hod.email}`} className="dept-btn dept-btn-primary">
                <FaEnvelope /> Contact HOD
              </a>
            )}
            <button 
              className="dept-profile-btn" 
              onClick={() => onOpenProfile && onOpenProfile(hod)}
              type="button"
              aria-label={`View Academic Profile of ${hod.name}`}
            >
              <FaFileAlt /> Academic Profile
            </button>
          </div>
        </div>
      </div>

      {hod.quoteText && (
        <div className="dept-hod-quote-side">
          <div className="quote-side-bg"></div>
          <div className="quote-side-content">
            <FaQuoteLeft className="dept-quote-icon-large" />
            <p className="dept-quote-text-large">"{hod.quoteText}"</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DepartmentHODProfile;
