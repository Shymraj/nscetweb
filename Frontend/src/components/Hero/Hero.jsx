import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import heroImage from "../../assets/hero/hero.png";
import logo from "../../assets/Img/nscet-logo.png";

// 👉 FRAMER MOTION IMPORT PANNIYACHU
import { motion, AnimatePresence } from "framer-motion";

import {
  FaAward,
  FaUniversity,
  FaLandmark,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleExploreClick = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/home/hero");
        if (response.data && response.data.data) {
          setHeroes(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };
    fetchHeroes();
  }, []);

  useEffect(() => {
    if (heroes.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroes.length]);

  const currentHeroImg = heroes.length > 0 && heroes[currentIndex].photo_url 
    ? `http://localhost:5000${heroes[currentIndex].photo_url}` 
    : heroImage;

  const scrollToEnquiry = () => {
    const formSection = document.getElementById("enquiry-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      
      {/* =======================================================
          1. BLUR & CROSSFADE BACKGROUND ENGINE (Like Video)
      ======================================================== */}
      <div className="hero-bg-wrapper">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hero-bg-image"
            style={{ backgroundImage: `url(${currentHeroImg})` }}
          />
        </AnimatePresence>
      </div>

      {/* Premium Overlay (UNTOUCHED) */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        
        {/* =======================================================
            2. DYNAMIC TEXT ANIMATION (Fresh entry on every slide)
        ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="hero-left-content"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="hero-brand">
              <div className="badge">
                <FaStar />
                <span>Theni Melapettai Hindu Nadargal Uravinmurai</span>
              </div>
            </div>

            {heroes.length > 0 ? (
              <>
                <h1 className="hero-college-name">
                  {heroes[currentIndex].heading}
                </h1>

                <div className="premium-line"></div>

                <p className="college-tagline">{heroes[currentIndex].sub_heading}</p>

                <p className="left-description">
                  {heroes[currentIndex].paragraph}
                </p>

                <div className="hero-buttons">
                  {heroes[currentIndex].button_name && (
                    <button 
                      className="btn-primary" 
                      onClick={() => {
                        if (heroes[currentIndex].url) {
                          window.open(heroes[currentIndex].url, '_blank');
                        } else {
                          scrollToEnquiry();
                        }
                      }}
                    >
                      {heroes[currentIndex].button_name}
                      <FaArrowRight />
                    </button>
                  )}
                  <button className="btn-secondary" onClick={handleExploreClick}>
                    Explore Campus
                    <FaArrowRight />
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="hero-college-name">
                  NADAR SARASWATHI
                  <br />
                  <span className="accent-text">
                    COLLEGE OF
                    <br />
                    ENGINEERING &
                    <br />
                    TECHNOLOGY
                  </span>
                </h1>

                <div className="premium-line"></div>

                <p className="college-tagline">Empowering Minds, Shaping the Future</p>

                <p className="left-description">
                  Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai<br/>
                  Accredited by NAAC with 'A' Grade <br />Recognized under 2(f) of the UGC Act, 1956 <br />
                  An ISO 9001:2015 Certified Institution <br />
                  Vadapudupatti, Annanji (PO), Theni - 625531.
                </p>

                <div className="hero-buttons">
                  <button className="btn-primary" onClick={scrollToEnquiry}>
                    Enroll Now
                    <FaArrowRight />
                  </button>

                  <button className="btn-secondary" onClick={handleExploreClick}>
                    Explore Campus
                    <FaArrowRight />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* RIGHT FLOATING CARDS PANEL (UNTOUCHED) */}
        <div className="hero-right-cards">
          <div className="floating-card card-1">
            <div className="feature-icon">
              <FaAward />
            </div>
            <div className="card-info">
              <h3>NAAC 'A' Grade</h3>
              <p>Accredited Institution</p>
            </div>
          </div>

          <div className="floating-card card-2">
            <div className="feature-icon">
              <FaUniversity />
            </div>
            <div className="card-info">
              <h3>Affiliated to Anna University</h3>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="floating-card card-3">
            <div className="feature-icon">
              <FaLandmark />
            </div>
            <div className="card-info">
              <h3>AICTE Approved</h3>
              <p>Approved by AICTE, New Delhi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Coming Soon Toast */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div 
            className="coming-soon-toast"
            initial={{ opacity: 0, x: "-50%", y: "calc(-50% + 50px)", scale: 0.95 }}
            animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
            exit={{ opacity: 0, x: "-50%", y: "calc(-50% + 20px)", scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="toast-icon-wrap">
              <span className="toast-icon">✨</span>
            </div>
            <div className="toast-content">
              <h4>Coming Soon!</h4>
              <p>Our interactive 3D virtual campus tour is under development.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;