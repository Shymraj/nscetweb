import React, { useState, useEffect } from "react";
import "./ResearchHub.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaRunning, FaBed, FaUsers, FaCoffee, FaArrowRight } from "react-icons/fa";

// Imports for videos and images
import ispin from "../../assets/ispin.mp4"; 
import drone1 from "../../assets/Drone.jpg";
import drone2 from "../../assets/Drone1.jpg";
import drone3 from "../../assets/Drone2.jpg";

const campusData = [
  {
    id: "library",
    title: "ISPIN",
    icon: <FaBookOpen />,
    video: ispin, 
    description: "Innovative Software Product at NSCET",
    highlight: "Department of (CSE,IT,AI & DS)"
  },
  {
    id: "sports",
    title: "Drone Technology",
    icon: <FaRunning />,
    // INGA DHAAN CHANGES PANNIRUKOM: Single image-ku badhila array of 3 images
    images: [drone1, drone2, drone3], 
    description: "State-of-the-art facilities for assembling, testing, and flying customized drones. Students get hands-on experience in modern aerial robotics.",
    highlight: "Advanced Robotics"
  },
  {
    id: "hostel",
    title: "3D-Printing",
    icon: <FaBed />,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Safe, secure, and comfortable AC/Non-AC hostels with high-speed Wi-Fi, hygienic mess facilities, and recreation rooms offering a home away from home.",
    highlight: "Modern Amenities"
  },
  {
    id: "clubs",
    title: "IQARENA",
    icon: <FaUsers />,
    image: "https://images.unsplash.com/photo-1523580494112-071d324be806?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "From Robotics and Coding to Drama and Music, join over 30+ active student clubs to pursue your passion, build leadership skills, and network.",
    highlight: "30+ Active Clubs"
  },
  {
    id: "cafeteria",
    title: "Cafeteria & Hangouts",
    icon: <FaCoffee />,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Spacious multi-cuisine cafeterias and lush green campus hangout spots where ideas are brewed over coffee and lifelong friendships are made.",
    highlight: "Hygienic Multi-Cuisine"
  }
];

function CampusLife() {
  const [activeTab, setActiveTab] = useState(campusData[0]);
  const [imageIndex, setImageIndex] = useState(0);

  // Tab change aagumbodhu index-a 0 ku reset pandrom
  useEffect(() => {
    setImageIndex(0);
  }, [activeTab]);

  // Image Slideshow Timer Logic
  useEffect(() => {
    let interval;
    // Active tab-la 'images' array irundhu, adhula 1-ku mela images irundha mattum slider odum
    if (activeTab.images && activeTab.images.length > 1) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % activeTab.images.length);
      }, 3500); // 3.5 seconds-ku oru thadava image change aagum
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
            <h2 className="campus-title">Research and Development</h2>
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
                
                {/* BACKGROUND MEDIA (Video, Slideshow, or Single Image) */}
                <div className="display-media-container">
                  
                  {activeTab.video ? (
                    // Video render
                    <video 
                      src={activeTab.video} 
                      className="display-media" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                    />
                  ) : activeTab.images ? (
                    // Crossfade Blur Slideshow render
                    <AnimatePresence mode="popLayout">
                      <motion.img 
                        key={imageIndex}
                        src={activeTab.images[imageIndex]} 
                        alt={activeTab.title}
                        className="display-media sliding-media"
                        initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                  ) : (
                    // Default Single Image render
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="display-media" 
                    />
                  )}
                  
                  {/* Gentle gradient overlay */}
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