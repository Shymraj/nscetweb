import React from "react";
import "./Campuslife.css";
import { motion } from "framer-motion";
import { FaMicroscope, FaRocket, FaAward, FaBookOpen, FaArrowRight, FaLightbulb } from "react-icons/fa";

function ResearchHub() {
  return (
    <section className="research-sticky-section">
      <div className="research-sticky-container">
        
        {/* ================= LEFT: STICKY HEADER ================= */}
        <div className="sticky-left-panel">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="research-subtitle">CAMPUS LIFE</p>
            <h2 className="research-title">
                Infrastructure & Facilities            
            </h2>
            <p className="research-description">
              Our vibrant green campus offers a perfect blend of academics, 
              culture, and recreation to ensure holistic development.
            </p>
            <button className="research-primary-btn">
              Apply for Seed Fund <FaArrowRight />
            </button>
          </motion.div>
        </div>

        {/* ================= RIGHT: SCROLLABLE CONTENT ================= */}
        <div className="scroll-right-panel">
          
          {/* Card 1: Impact Dashboard (Stats) */}
          <motion.div 
            className="research-card stats-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          {/* Card 2: Centers of Excellence */}
          <motion.div 
            className="research-card image-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-visual coe-visual">
              <div className="visual-overlay">
                <FaMicroscope className="visual-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-heading">Centers of Excellence (CoE)</h3>
              <p>
                State-of-the-art laboratories equipped with advanced AI supercomputers, 
                IoT testbeds, and automated manufacturing units dedicated to specialized 
                industry-backed research.
              </p>
              <ul className="feature-list">
                <li>AI & Deep Learning Lab</li>
                <li>Robotics & Industrial Automation</li>
                <li>Renewable & Smart Grid Systems</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Incubation Cell */}
          <motion.div 
            className="research-card image-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-visual incubation-visual">
              <div className="visual-overlay">
                <FaRocket className="visual-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-heading">Startup Incubation Cell</h3>
              <p>
                Transforming student ideas into successful tech startups. We provide 
                co-working spaces, legal support for company registration, and direct 
                access to angel investors.
              </p>
              <button className="text-btn">View Incubated Startups <FaArrowRight /></button>
            </div>
          </motion.div>

          {/* Card 4: Publications & Journals */}
          <motion.div 
            className="research-card text-only-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-content">
              <h3 className="card-heading">High-Impact Publications</h3>
              <p>
                Our faculty and students consistently publish groundbreaking research 
                in top-tier international journals and conferences.
              </p>
              <div className="journal-tags">
                <span>IEEE Xplore</span>
                <span>Springer</span>
                <span>Scopus Indexed</span>
                <span>Nature</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ResearchHub;