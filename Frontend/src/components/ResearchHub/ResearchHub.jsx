import React, { useState, useEffect } from "react";
import "./ResearchHub.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaRunning, FaBed, FaUsers, FaCoffee, FaArrowRight } from "react-icons/fa";

// =========================================================================
// ASSETS IMPORTS
// =========================================================================
import coeDrone3 from "../../assets/coe/drone3.jpg";
import coeDrone4 from "../../assets/coe/drone4.jpg";
import coePrinting1 from "../../assets/coe/printing.jpg";
import vehicle1 from "../../assets/coe/vehicle1.jpg";
import vehicle2 from "../../assets/coe/vehicle2.jpg";
// Puthusa add panna IoT images
import iot1 from "../../assets/coe/iot 1.jpg";
import iot2 from "../../assets/coe/iot 2.jpg";

const campusData = [
  {
    id: "sports",
    title: "Drone Technology",
    icon: <FaRunning />,
    images: [coeDrone3, coeDrone4], 
    description: "State-of-the-art facilities for assembling, testing, and flying customized drones.",
    highlight: "Advanced Robotics"
  },
  {
    id: "printing",
    title: "3D - Printing",
    icon: <FaBed />,
    images: [coePrinting1],
    description: "Safe, secure, and comfortable AC/Non-AC hostels with high-speed Wi-Fi, hygienic mess facilities, and recreation rooms offering a home away from home.",
    highlight: "Modern Amenities"
  },
  {
    id: "clubs",
    title: "Electrical Vehicle (EEE)",
    icon: <FaUsers />,
    images: [vehicle1, vehicle2],
    description: "From Robotics and Coding to Drama and Music, join over 30+ active student clubs to pursue your passion, build leadership skills, and network.",
    highlight: "30+ Active Clubs"
  },
  {
    id: "cafeteria",
    title: "WG Tech (ECE)",
    icon: <FaCoffee />,
    images: [iot1, iot2], 
    description: "Spacious multi-cuisine cafeterias and lush green campus hangout spots where ideas are brewed over coffee and lifelong friendships are made.",
    highlight: "Hygienic Multi-Cuisine"
  }
];

function CampusLife() {
  const [activeTab, setActiveTab] = useState(campusData[0]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [activeTab]);

  useEffect(() => {
    let interval;
    if (activeTab.images && activeTab.images.length > 1) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % activeTab.images.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="campus-section">
      <div className="campus-container">
        
        {/* ================= HEADER ================= */}
        <div className="campus-header">
          <div className="header-left">
            <p className="campus-subtitle">BEYOND THE CLASSROOM</p>
            <h2 className="campus-title"> Centre Of Excellence</h2>
          </div>
          <p className="campus-header-desc">
            Our vibrant green campus offers a perfect blend of academics, 
            culture, and recreation to ensure holistic development.
          </p>
        </div>

        {/* ================= INTERACTIVE SHOWCASE ================= */}
        <div className="campus-showcase">
          
          {/* Left Vertical Tabs */}
          <div className="campus-tabs">
            {campusData.map((item) => (
              <button
                key={item.id}
                className={`tab-btn ${activeTab.id === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item)}
              >
                <span className="tab-icon">{item.icon}</span>
                <span className="tab-text">{item.title}</span>
                {activeTab.id === item.id && (
                  <motion.div className="active-indicator" layoutId="activeTabIndicator" />
                )}
              </button>
            ))}
          </div>

          {/* Right Dynamic Display */}
          <div className="campus-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                className="display-content-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                
                {/* BACKGROUND MEDIA */}
                <div className="display-media-container">
                  {activeTab.video ? (
                    <video 
                      src={activeTab.video} 
                      className="display-media" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                    />
                  ) : activeTab.images ? (
                    <AnimatePresence mode="popLayout">
                      {(() => {
                        const currentImage = activeTab.images[imageIndex];
                        // Identify if the current image is the rotated one
                        const isRotatedImage = currentImage === iot2;

                        return (
                          <motion.img 
                            key={imageIndex}
                            src={currentImage} 
                            alt={activeTab.title}
                            className="display-media sliding-media"
                            /* CHANGED 90 to -90 SO THEY STAND STRAIGHT UP */
                            initial={{ opacity: 0, filter: "blur(12px)", scale: isRotatedImage ? 1.8 : 1.05, rotate: isRotatedImage ? -90 : 0 }}
                            animate={{ opacity: 1, filter: "blur(0px)", scale: isRotatedImage ? 1.6 : 1, rotate: isRotatedImage ? -90 : 0 }}
                            exit={{ opacity: 0, filter: "blur(12px)", scale: isRotatedImage ? 1.8 : 1.05, rotate: isRotatedImage ? -90 : 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          />
                        );
                      })()}
                    </AnimatePresence>
                  ) : (
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="display-media" 
                    />
                  )}
                  <div className="media-overlay"></div>
                </div>

                {/* Floating Glassmorphism Info Box */}
                <div className="display-info-card">
                  <span className="info-highlight">{activeTab.highlight}</span>
                  <h3>{activeTab.title}</h3>
                  <p>{activeTab.description}</p>
                  <button className="explore-facility-btn">
                    Explore Facility <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CampusLife;