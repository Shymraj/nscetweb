import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './DepartmentFacultyCard.css';

const DepartmentFacultyCard = ({ member, onOpenProfile, fadeInUp, isHOD }) => {
  if (!member) return null;

  // Split specialization string into tags (max 2 visible, +N More badge)
  const specParts = member.spec ? member.spec.split(/&|,/).map(s => s.trim()).filter(Boolean) : [];
  const visibleSpecs = specParts.slice(0, 2);
  const extraCount = specParts.length - 2;

  const cardContent = (
    <div className="dept-faculty-card-inner-v2">
      {/* Top Half: Image */}
      <div className="dept-faculty-img-top">
        {/* Glassmorphism Background filling the free spaces */}
        <div className="dept-faculty-glass-bg">
          {member.image && <img src={member.image} alt="" className="glass-bg-img" onError={(e) => { e.target.onerror = null; e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e3a8a&color=fff&size=400`; }} />}
          <div className="glass-bg-overlay"></div>
        </div>

        {/* Circular crisp photo */}
        <div className="dept-faculty-circle-wrap">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name} 
              className="dept-faculty-circle-img" 
              style={{ objectPosition: member.objectPosition || 'center 15%' }}
              onError={(e) => { e.target.onerror = null; e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e3a8a&color=fff&size=200`; }}
            />
          ) : (
            <div className="dept-faculty-circle-fallback"><FaUserTie /></div>
          )}
        </div>
        <div className="dept-faculty-img-glass-divider"></div>
      </div>

      {/* Bottom Half: Info Content */}
      <div className="dept-faculty-info-bottom">
        <h3 className="dept-faculty-name" title={member.name}>{member.name}</h3>
        <span className="dept-faculty-role">{member.desig}</span>
        <span className="dept-faculty-qual">{member.qual}</span>

        {/* Specialization Tags */}
        <div className="dept-faculty-spec">
          {visibleSpecs.map((tag, tIdx) => (
            <span key={tIdx} className="dept-spec-badge">{tag}</span>
          ))}
          {extraCount > 0 && (
            <span className="dept-spec-badge extra">+{extraCount} More</span>
          )}
        </div>

        {/* Email Link */}
        {member.email && (
          <a href={`mailto:${member.email}`} className="dept-faculty-email" title={member.email}>
            <FaEnvelope /> {member.email}
          </a>
        )}

        {/* Academic Profile Action Button */}
        <button 
          className="dept-profile-btn" 
          onClick={() => onOpenProfile && onOpenProfile(member)}
          type="button"
          aria-label={`View Academic Profile of ${member.name}`}
        >
          <FaFileAlt /> Academic Profile
        </button>
      </div>
    </div>
  );

  const CardWrapper = fadeInUp ? motion.div : 'div';
  const wrapperProps = fadeInUp ? { variants: fadeInUp, whileHover: { y: -8 } } : {};

  if (isHOD) {
    return (
      <CardWrapper className="dept-faculty-card hod-glass-card" {...wrapperProps}>
        {/* Top Half: Image */}
        <div className="hod-img-top">
          {/* Glassmorphism Background filling the free spaces */}
          <div className="hod-glass-bg-blur">
            {member.image && <img src={member.image} alt="" className="hod-glass-bg-img" onError={(e) => { e.target.onerror = null; e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e3a8a&color=fff&size=400`; }} />}
            <div className="hod-glass-overlay"></div>
          </div>

          {/* Bigger Circular crisp photo */}
          <div className="hod-circle-wrap">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name} 
                className="hod-circle-img" 
                style={{ objectPosition: member.objectPosition || 'center 15%' }}
                onError={(e) => { e.target.onerror = null; e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e3a8a&color=fff&size=200`; }}
              />
            ) : (
              <div className="hod-circle-fallback"><FaUserTie /></div>
            )}
          </div>
        </div>
        
        <div className="hod-glass-content">
          <h3 className="hod-glass-name">
            {member.name} 
            <svg viewBox="0 0 24 24" className="verified-icon" fill="currentColor" width="22" height="22">
              <path d="M22.5 12.5c0-.94-.38-1.81-1.01-2.42.27-.85.19-1.81-.29-2.61-.47-.8-1.28-1.32-2.19-1.42-.23-.88-.75-1.63-1.46-2.12-.71-.49-1.61-.64-2.46-.42C14.54 2.82 13.63 2.5 12 2.5s-2.54.32-3.09 1.01c-.85-.22-1.75-.07-2.46.42-.71.49-1.23 1.24-1.46 2.12-.91.1-1.72.62-2.19-1.42-.48.8-.56 1.76-.29 2.61-.63.61-1.01 1.48-1.01 2.42 0 .94.38 1.81 1.01 2.42-.27.85-.19 1.81.29 2.61.47.8 1.28 1.32 2.19 1.42.23.88.75 1.63 1.46 2.12.71.49 1.61.64 2.46.42.55.69 1.46 1.01 3.09 1.01s2.54-.32 3.09-1.01c.85.22 1.75.07 2.46-.42.71-.49 1.23-1.24 1.46-2.12.91-.1 1.72-.62 2.19-1.42.48-.8.56-1.76.29-2.61.63-.61 1.01-1.48 1.01-2.42zM10.23 16.71l-3.54-3.54 1.41-1.41 2.12 2.12 6.36-6.36 1.41 1.41-7.76 7.78z"/>
            </svg>
          </h3>
          <p className="hod-glass-desc">
            {member.desig} who leads intuitive research for modern users. Focus on {visibleSpecs.join(', ')}.
          </p>
          
          <div className="hod-glass-footer">
            <button className="hod-glass-btn" onClick={(e) => { e.stopPropagation(); onOpenProfile && onOpenProfile(member); }}>
              <FaFileAlt style={{ marginRight: '6px' }} /> Academic Profile
            </button>
          </div>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper className="dept-faculty-card" {...wrapperProps}>
      {cardContent}
    </CardWrapper>
  );
};

export default DepartmentFacultyCard;
