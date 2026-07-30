import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './DepartmentFacultyCard.css';

const DepartmentFacultyCard = ({ member, onOpenProfile, fadeInUp }) => {
  if (!member) return null;

  // Split specialization string into tags (max 2 visible, +N More badge)
  const specParts = member.spec ? member.spec.split(/&|,/).map(s => s.trim()).filter(Boolean) : [];
  const visibleSpecs = specParts.slice(0, 2);
  const extraCount = specParts.length - 2;

  const cardContent = (
    <div className="dept-faculty-card-inner">
      {/* Portrait Wrap */}
      <div className="dept-faculty-avatar-wrap">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="dept-faculty-avatar" 
            style={{ objectPosition: member.objectPosition || 'center 15%' }}
          />
        ) : (
          <div className="dept-faculty-avatar-fallback"><FaUserTie /></div>
        )}
      </div>

      {/* Info Content */}
      <div className="dept-faculty-info">
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

  if (fadeInUp) {
    return (
      <motion.div variants={fadeInUp} className="dept-faculty-card" whileHover={{ y: -5 }}>
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div className="dept-faculty-card">
      {cardContent}
    </div>
  );
};

export default DepartmentFacultyCard;
