import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUsers, FaTasks, FaCheckCircle } from 'react-icons/fa';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { clubsData } from './data';
import './ClubsAndChapters.css';

// Using import.meta.glob to load all images from assets folder
const imageGlobs = import.meta.glob('./assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const ClubsAndChapters = () => {
  const [images, setImages] = useState({});
  const [selectedClub, setSelectedClub] = useState(null);

  useEffect(() => {
    // Process the glob object to a clean map of normalized filename -> url
    const loadedImages = {};
    for (const path in imageGlobs) {
      const fileName = path.split('/').pop(); // e.g. "Alumni Association.png"
      const nameWithoutExt = fileName.replace(/\.[^/.]+$/, ""); // "Alumni Association"
      
      // Create a normalized key: lowercase, remove spaces and special chars
      const normalizedKey = nameWithoutExt.toLowerCase().replace(/[^a-z0-9]/g, '');
      loadedImages[normalizedKey] = imageGlobs[path].default;
    }
    setImages(loadedImages);
  }, []);

  return (
    <div className="clubs-chapters-page">
      <PageBanner
        title="Clubs & Chapters"
        subtitle="Empowering students beyond the classroom"
        hideBreadcrumb={true}
      />
      <div className="clubs-chapters-container">
        <div className="clubs-grid">
          {clubsData.map((club) => {
            // Generate possible normalized keys to match against the files the user uploaded
            const keyFromName = club.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            const keyFromId = club.id.toLowerCase().replace(/[^a-z0-9]/g, '');
            const keyFromIcon = club.icon.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
            
            // Try to find a match using any of these keys
            const imageSrc = images[keyFromName] || images[keyFromId] || images[keyFromIcon];
            
            return (
              <motion.div 
                key={club.id} 
                className="club-card"
                onClick={() => setSelectedClub({ ...club, imageSrc })}
                whileHover={{ y: -5 }}
                layoutId={`card-${club.id}`}
              >
                <div className="club-card-header">
                  <h3>{club.name}</h3>
                </div>
                <div className="club-card-body">
                  {imageSrc ? (
                    <motion.img layoutId={`img-${club.id}`} src={imageSrc} alt={`${club.name} Logo`} className="club-logo" />
                  ) : (
                    <div className="club-logo-fallback">
                      <div className="fallback-icon">
                        {club.name.charAt(0)}
                      </div>
                      <span className="fallback-text">Logo Pending</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {selectedClub && (
          <motion.div 
            className="club-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClub(null)}
          >
            <motion.div 
              className="club-modal-content"
              layoutId={`card-${selectedClub.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedClub(null)}>×</button>
              
              <div className="modal-header">
                {selectedClub.imageSrc ? (
                  <motion.img layoutId={`img-${selectedClub.id}`} src={selectedClub.imageSrc} alt="Logo" className="modal-logo" />
                ) : (
                  <div className="modal-logo-fallback">{selectedClub.name.charAt(0)}</div>
                )}
                <h2>{selectedClub.name}</h2>
              </div>
              
              <div className="modal-body">
                <div className={`modal-info-grid ${selectedClub.details?.coordinator === '-' ? 'single-column' : ''}`}>
                  {selectedClub.details?.coordinator !== '-' && (
                    <motion.div 
                      className="info-highlight-card coordinator-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="info-icon-wrapper">
                        <FaUserTie />
                      </div>
                      <div className="info-content">
                        <span className="info-label">Coordinator</span>
                        <span className="info-value">{selectedClub.details?.coordinator || 'To be updated'}</span>
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.div 
                    className="info-highlight-card members-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="info-icon-wrapper">
                      <FaUsers />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Members</span>
                      <span className="info-value">{selectedClub.details?.members || 'To be updated'}</span>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="modal-duties-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="duties-title">
                    <FaTasks className="title-icon" /> Duties & Responsibilities
                  </h4>
                  {selectedClub.details?.duties && selectedClub.details.duties.length > 0 && selectedClub.details.duties[0] !== 'To be updated' ? (
                    <div className="duties-grid">
                      {selectedClub.details.duties.map((duty, idx) => (
                        <motion.div 
                          className="duty-card"
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + (0.1 * idx), type: "spring", stiffness: 100 }}
                          whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                        >
                          <FaCheckCircle className="duty-icon" />
                          <p>{duty}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-duties-card">
                      <p>Details will be updated soon.</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClubsAndChapters;
