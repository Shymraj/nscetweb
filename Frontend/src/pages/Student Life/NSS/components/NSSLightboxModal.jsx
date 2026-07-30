import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './NSSLightboxModal.css';

const NSSLightboxModal = ({
  isOpen,
  images = [],
  selectedIndex = 0,
  onClose,
  onPrev,
  onNext,
  title = 'NSS Gallery'
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
    // Lock body scroll while NSS Lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[selectedIndex];
  const imageSrc = typeof currentImage === 'string' ? currentImage : currentImage?.src;
  const imageAlt = typeof currentImage === 'string' ? `${title} ${selectedIndex + 1}` : currentImage?.alt || currentImage?.title || `${title} ${selectedIndex + 1}`;

  // Use React Portal to render directly onto document.body to bypass all parent stacking contexts
  return ReactDOM.createPortal(
    <div 
      className="nss-fullscreen-lightbox-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="NSS Fullscreen Image Viewer"
    >
      {/* Top-Right Fixed Viewport Close Button */}
      <button 
        className="nss-lightbox-close-btn" 
        onClick={onClose} 
        aria-label="Close Lightbox (Esc)"
        title="Close (Esc)"
      >
        <FaTimes />
      </button>

      {/* Left Edge Fixed Navigation Button */}
      {images.length > 1 && (
        <button 
          className="nss-lightbox-nav-btn prev" 
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }} 
          aria-label="Previous Image (Left Arrow)"
          title="Previous (Left Arrow)"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Right Edge Fixed Navigation Button */}
      {images.length > 1 && (
        <button 
          className="nss-lightbox-nav-btn next" 
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }} 
          aria-label="Next Image (Right Arrow)"
          title="Next (Right Arrow)"
        >
          <FaChevronRight />
        </button>
      )}

      {/* Main Centered Floating Image Stage */}
      <div className="nss-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="nss-lightbox-image-stage">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="nss-lightbox-main-img"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NSSLightboxModal;
