import React, { useState } from "react";
import "./ResearchHub.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaRunning, FaBed, FaUsers, FaCoffee, FaArrowRight } from "react-icons/fa";

const campusData = [
  {
    id: "library",
    title: "Central Library",
    icon: <FaBookOpen />,
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "A multi-storied, fully automated library with over 100,000+ volumes, digital journals, and quiet reading zones designed for deep focus and research.",
    highlight: "24/7 Digital Access"
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
            <p className="campus-subtitle">INNOVATION HUB</p>
            <h2 className="campus-title">Research and Innovation</h2>
          </div>
          <p className="campus-header-desc">
              Our Research & Innovation Hub empowers visionary minds to solve 
              real-world challenges. We provide state-of-the-art infrastructure, 
              seed funding, and industry mentorship to turn ideas into global solutions.
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
                {/* Background Image */}
                <div className="display-image-container">
                  <img src={activeTab.image} alt={activeTab.title} className="display-image" />
                  <div className="image-overlay"></div>
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