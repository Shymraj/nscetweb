import React, { useState } from "react";
import "./ResearchHub.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaRunning, FaBed, FaUsers, FaCoffee, FaArrowRight } from "react-icons/fa";
import ispin from "../../assets/ispin.mp4"; // Placeholder image for the library video
// STEP 1: Import your video file here. Make sure the path is correct based on your folder structure!
// import libraryVideo from "../../assets/library-vid.mp4"; 

const campusData = [
  {
    id: "library",
    title: "ISPIN",
    icon: <FaBookOpen />,
    // STEP 2: Remove 'image' and add 'video' for the library
    // video: libraryVideo, 
    
    // For now, I'm putting a placeholder video URL so you can see it working immediately. 
    // Replace this string with your imported variable (e.g., video: libraryVideo)
    video: ispin, 
    description: "Innovative Software Product at NSCET",
    highlight: "Department of (CSE,IT,AI & DS)"
  },
  {
    id: "sports",
    title: "Sports & Athletics",
    icon: <FaRunning />,
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "State-of-the-art indoor stadium, synthetic athletic tracks, and courts for basketball, tennis, and badminton to keep our students physically and mentally fit.",
    highlight: "Olympic Standard Courts"
  },
  {
    id: "hostel",
    title: "Student Residences",
    icon: <FaBed />,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Safe, secure, and comfortable AC/Non-AC hostels with high-speed Wi-Fi, hygienic mess facilities, and recreation rooms offering a home away from home.",
    highlight: "Modern Amenities"
  },
  {
    id: "clubs",
    title: "Clubs & Societies",
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
                {/* BACKGROUND MEDIA (Video or Image) */}
                <div className="display-media-container">
                  {/* STEP 3: Condition to check if it's a video or an image */}
                  {activeTab.video ? (
                    <video 
                      src={activeTab.video} 
                      className="display-media" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                    />
                  ) : (
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="display-media" 
                    />
                  )}
                  
                  {/* Gentle gradient so the white text box looks good on any background */}
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