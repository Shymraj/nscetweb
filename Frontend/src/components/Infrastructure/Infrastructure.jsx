import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Infrastructure.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBookReader, FaRunning, FaBuilding, FaBus, FaArrowRight } from "react-icons/fa";

// ============================================================================
// FUTURE IMAGES IMPORT (Images vandhadhum idhai uncomment pannunga)
// ============================================================================
// import labsImg from "../../assets/labs.jpg";
// import libraryImg from "../../assets/library.jpg";
// import sportsImg from "../../assets/sports.jpg";
// import hostelImg from "../../assets/hostel.jpg";
// import transportImg from "../../assets/transport.jpg";

const infraData = [
  {
    id: 1,
    title: "Hi-Tech Labs",
    shortName: "LABS",
    icon: <FaLaptopCode />,
    // Future code: image: labsImg,
    image: "https://via.placeholder.com/1000x800/ea580c/ffffff?text=Labs+Image",
    desc: "Equipped with the latest hardware and software, our smart labs provide hands-on experience in cutting-edge technologies.",
    link: "/academics/labs"
  },
  {
    id: 2,
    title: "Central Library",
    shortName: "LIBRARY",
    icon: <FaBookReader />,
    // Future code: image: libraryImg,
    image: "https://via.placeholder.com/1000x800/f97316/ffffff?text=Library+Image",
    desc: "A massive repository of 1 Lakh+ books, digital IEEE journals, and quiet A/C reading halls for focused learning.",
    link: "/academics/library"
  },
  {
    id: 3,
    title: "Sports Complex",
    shortName: "SPORTS",
    icon: <FaRunning />,
    // Future code: image: sportsImg,
    image: "https://via.placeholder.com/1000x800/ea580c/ffffff?text=Sports+Image",
    desc: "Sprawling playgrounds, indoor courts, and modern gym facilities to build physical fitness and team spirit."
  },
  {
    id: 4,
    title: "Premium Hostels",
    shortName: "HOSTELS",
    icon: <FaBuilding />,
    // Future code: image: hostelImg,
    image: "https://via.placeholder.com/1000x800/f97316/ffffff?text=Hostel+Image",
    desc: "Safe, secure, and comfortable AC/Non-AC hostels with high-speed Wi-Fi and hygienic multi-cuisine mess."
  },
  {
    id: 5,
    title: "Smart Transport",
    shortName: "TRANSPORT",
    icon: <FaBus />,
    // Future code: image: transportImg,
    image: "https://via.placeholder.com/1000x800/ea580c/ffffff?text=Transport+Image",
    desc: "A fleet of 50+ modern buses covering a 100km radius, ensuring safe and punctual commute for all students.",
    link: "/campus/transport"
  }
];

const Infrastructure = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="infra-section">
      <div className="infra-container">
        
        {/* Header Section */}
        <motion.div 
          className="infra-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="infra-subtitle">WORLD-CLASS FACILITIES</span>
          <h2 className="infra-title">Explore Our Infrastructure</h2>
          <p className="infra-desc">
            Experience a campus built for the future. From modern smart classrooms 
            to advanced research centers, we provide the best environment for your growth.
          </p>
        </motion.div>

        {/* Expanding Accordion Grid */}
        <motion.div 
          className="accordion-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {infraData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={item.id}
                className={`accordion-panel ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)} // For mobile users
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Premium Gradient Overlay */}
                <div className="panel-overlay"></div>

                {/* Vertical Text (Visible when collapsed) */}
                <div className={`vertical-title-box ${isActive ? "hide-vertical" : ""}`}>
                  <div className="vertical-icon">{item.icon}</div>
                  <h3 className="vertical-text">{item.shortName}</h3>
                </div>

                {/* Expanded Content (Visible when active) */}
                <div className={`panel-content ${isActive ? "show-content" : ""}`}>
                  <div className="content-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="content-text-box">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <button 
                      className="infra-explore-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.link) navigate(item.link);
                      }}
                    >
                      Explore Facility <FaArrowRight className="arrow-icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Infrastructure;