import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import heroImage from "../../assets/hero/hero.png";
import logo from "../../assets/Img/nscet-logo.png";

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
      return () => clearInterval(interval); // Added cleanup to prevent memory leaks
    }
  }, [heroes.length]);

  const currentHeroImg = heroes.length > 0 && heroes[currentIndex].photo_url 
    ? `http://localhost:5000${heroes[currentIndex].photo_url}` 
    : heroImage;

  // 👉 SCROLL FUNCTION ADD PANNIYACHU
  const scrollToEnquiry = () => {
    const formSection = document.getElementById("enquiry-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${currentHeroImg})`, transition: "background-image 1s ease-in-out" }}
    >
      {/* Premium Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT PANEL */}
        <div className="hero-left-content">
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
                        // 👉 URL illana automatic ah form kku scroll aagum
                        scrollToEnquiry();
                      }
                    }}
                  >
                    {heroes[currentIndex].button_name}
                    <FaArrowRight />
                  </button>
                )}
                <button className="btn-secondary">
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
                {/* 👉 INGA onClick ADD PANNIYACHU */}
                <button className="btn-primary" onClick={scrollToEnquiry}>
                  Apply Now
                  <FaArrowRight />
                </button>

                <button className="btn-secondary">
                  Explore Campus
                  <FaArrowRight />
                </button>
              </div>
            </>
          )}
        </div>

        {/* RIGHT FLOATING CARDS PANEL */}
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
    </section>
  );
};

export default Hero;