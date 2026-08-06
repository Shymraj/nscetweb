import React from "react";
import "./Campuslife.css"; 
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

// Imported Images
import pongalImg from "../../assets/pongal.jpg";
import hackathonImg from "../../assets/hackathon.png";
import sportsImg from "../../assets/sports.jpeg";
import annualImg from "../../assets/annual.jpg";
import wavesImg from "../../assets/waves.jpeg";

// Event Data Array
const eventsData = [
  {
    id: 1,
    image: pongalImg,
    title: "Pongal Celebration - 2024",
    desc: "A grand traditional fest bringing students together to celebrate our rich cultural heritage.",
    gridClass: "bento-wide" 
  },
  {
    id: 2,
    image: hackathonImg,
    title: "Smart India Hackathon",
    desc: "Students innovating tech solutions and coding non-stop to solve real-world industry challenges.",
    gridClass: "bento-square" 
  },
  {
    id: 3,
    image: sportsImg,
    title: "14th Sports Meet",
    desc: "Fostering athletic spirit and teamwork through intense track and field competitions.",
    gridClass: "bento-square" 
  },
  {
    id: 4,
    image: annualImg,
    title: "NSCET Annual Day - 2024",
    desc: "Spectacular dance performances, cultural events, and award distributions to honor student excellence.",
    gridClass: "bento-square" 
  },
  {
    id: 5,
    image: wavesImg,
    title: "Waves Cultural Fest",
    desc: "The ultimate battle of talents, creativity, and inter-departmental cultural showdowns.",
    gridClass: "bento-square" 
  }
];

function CampusLife() {
  const navigate = useNavigate(); 

  return (
    <section className="campus-sticky-section">
      <div className="campus-sticky-container">
        
        {/* ================= LEFT: STICKY HEADER ================= */}
        <div className="sticky-left-panel">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="campus-subtitle">CAMPUS LIFE</p>
            <h2 className="campus-title">
              Experience the Vibrant Life
            </h2>
            <p className="campus-description">
              Our vibrant green campus offers a perfect blend of academics, 
              culture, and recreation to ensure holistic development.
            </p>
            
            <button 
              className="campus-primary-btn" 
              onClick={() => navigate('/gallery/events')}
            >
              Explore Gallery <FaArrowRight style={{marginLeft: "8px"}} />
            </button>
            
          </motion.div>
        </div>

        {/* ================= RIGHT: BENTO GRID CONTENT ================= */}
        <div className="scroll-right-panel">
          {eventsData.map((event, index) => (
            <motion.div 
              key={event.id}
              className={`event-card ${event.gridClass}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Section Fixed */}
              <div className="event-img-wrapper">
                <img src={event.image} alt={event.title} className="event-img" />
              </div>

              {/* Text Content */}
              <div className="event-content">
                <h3 className="event-heading">{event.title}</h3>
                <p className="event-desc">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CampusLife;