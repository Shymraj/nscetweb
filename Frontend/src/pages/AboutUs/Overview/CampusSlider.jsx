import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { campusImages } from "./data";
import "./Overview.css";

const CampusSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <div className="hero-slider-container">
      <AnimatePresence mode="wait">
        {campusImages.map((img, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="hero-slide active"
            >
              <img
                src={img}
                alt={`NSCET Campus ${index + 1}`}
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600/1e40af/FFFFFF/png?text=NSCET+Campus';
                }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="slider-controls">
        <button className="slider-arrow" onClick={prevSlide} aria-label="Previous image">
          <FaChevronLeft />
        </button>
        <div className="slider-dots">
          {campusImages.map((_, idx) => (
            <div
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              role="button"
              aria-label={`Go to slide ${idx + 1}`}
            ></div>
          ))}
        </div>
        <button className="slider-arrow" onClick={nextSlide} aria-label="Next image">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CampusSlider;
