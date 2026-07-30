import React, { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './LightboxModal.css';

const LightboxModal = ({
  isOpen,
  images = [],
  selectedIndex = 0,
  onClose,
  onPrev,
  onNext,
  title = 'Gallery Image'
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[selectedIndex];
  const imageSrc = typeof currentImage === 'string' ? currentImage : currentImage?.src || currentImage?.url;
  const imageAlt = typeof currentImage === 'string' ? `${title} ${selectedIndex + 1}` : currentImage?.alt || `${title} ${selectedIndex + 1}`;

  return (
    <div 
      className="reusable-lightbox-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
    >
      {/* Top-Right Viewport Fixed Close Button */}
      <button 
        className="reusable-lightbox-close-btn" 
        onClick={onClose} 
        aria-label="Close Gallery View (Esc)"
        title="Close (Esc)"
      >
        <FaTimes />
      </button>

      {/* Main Viewport Container */}
      <div className="reusable-lightbox-modal" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button 
            className="reusable-lightbox-nav-btn prev" 
            onClick={onPrev} 
            aria-label="Previous Image (Left Arrow)"
            title="Previous (Left Arrow)"
          >
            <FaChevronLeft />
          </button>
        )}

        <div className="reusable-lightbox-image-container">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="reusable-lightbox-image"
          />
          <div className="reusable-lightbox-counter">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {images.length > 1 && (
          <button 
            className="reusable-lightbox-nav-btn next" 
            onClick={onNext} 
            aria-label="Next Image (Right Arrow)"
            title="Next (Right Arrow)"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default LightboxModal;
