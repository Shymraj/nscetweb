import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NSSLightboxModal from './NSSLightboxModal';

import img1 from '../assets/gallery/NSS (1).jpeg';
import img2 from '../assets/gallery/NSS (1).jpg';
import img3 from '../assets/gallery/NSS (2).jpeg';
import img4 from '../assets/gallery/NSS (2).jpg';
import img5 from '../assets/gallery/NSS (3).jpeg';
import img6 from '../assets/gallery/NSS (3).jpg';
import img7 from '../assets/gallery/NSS (5).jpeg';
import img8 from '../assets/gallery/NSS (6).jpeg';

const galleryImages = [
  { id: 1, src: img1, title: 'NSS Volunteer Initiative', alt: 'NSS Volunteer Community Initiative' },
  { id: 2, src: img2, title: 'Blood Donation & Welfare Camp', alt: 'NSS Blood Donation & Social Welfare Camp' },
  { id: 3, src: img3, title: 'Tree Plantation Drive', alt: 'NSS Campus & Community Tree Plantation Drive' },
  { id: 4, src: img4, title: 'Swachh Bharat Cleanliness Drive', alt: 'NSS Cleanliness & Sanitation Awareness Drive' },
  { id: 5, src: img5, title: 'Health & Nutrition Awareness', alt: 'NSS Rural Health & Nutrition Awareness Camp' },
  { id: 6, src: img6, title: 'Educational & Literacy Campaign', alt: 'NSS Youth Educational Literacy Campaign' },
  { id: 7, src: img7, title: 'Community Disaster Relief Service', alt: 'NSS Disaster Relief & Support Work' },
  { id: 8, src: img8, title: 'National Integration Youth Rally', alt: 'NSS National Integration Youth Rally' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const NSSGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="nss-section nss-gallery-section" id="nss-gallery">
      <div className="nss-bg-decoration dec-1"></div>
      <div className="nss-container">
        <motion.div 
          className="nss-section-header"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="nss-section-title">
            NSS Gallery
          </motion.h2>
          <motion.div variants={fadeUp} className="nss-accent-line center"></motion.div>
          <motion.p variants={fadeUp} className="nss-gallery-subtitle">
            Capturing memorable moments of community service, awareness programs, environmental initiatives, blood donation camps, and student volunteer activities.
          </motion.p>
        </motion.div>

        <motion.div 
          className="nss-gallery-grid"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {galleryImages.map((img, index) => (
            <motion.div 
              key={img.id} 
              variants={fadeUp} 
              className="nss-gallery-item"
              onClick={() => handleOpenLightbox(index)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View full size image of ${img.title}`}
            >
              <div className="nss-gallery-image-wrapper">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy" 
                  className="nss-gallery-img"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dedicated NSS Fullscreen Lightbox Modal */}
        <NSSLightboxModal 
          isOpen={lightboxIndex !== null}
          images={galleryImages}
          selectedIndex={lightboxIndex ?? 0}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          title="NSS Gallery"
        />
      </div>
    </section>
  );
};

export default NSSGallery;
