import React from 'react';
import './WhyChoose.css';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  FaLaptopCode,
  FaUserTie,
  FaHandshake,
  FaChartLine,
  FaArrowRight
} from 'react-icons/fa';

import atxLogo from "../../assets/Recruiters/ATX.png";
import atxWhiteLogo from "../../assets/Recruiters/ATX_white.png";
import dviliteLogo from "../../assets/Recruiters/dvilite_color.png";
import dviliteWhiteLogo from "../../assets/Recruiters/dvilite_white.png";
import promonLogo from "../../assets/Recruiters/promon_logo_hd.webp";
import tcsLogo from "../../assets/Recruiters/tcs.png";
import infosysLogo from "../../assets/Recruiters/Infosys_logo.svg.png";
import zohoLogo from "../../assets/Recruiters/zoho.png";
import hclLogo from "../../assets/Recruiters/hcl.png";
import wiproLogo from "../../assets/Recruiters/wipro.png";
import webberaxLogo from "../../assets/Recruiters/webberax.png";
import teslaLogo from "../../assets/Recruiters/tesla.png";
import msLogo from "../../assets/Recruiters/M&S software.png";
import nardilLogo from "../../assets/Recruiters/NaRdil-Logo-270.webp";
import crewLogo from "../../assets/Recruiters/chennai_ratha_engineering_works_logo-removebg-preview.png";
import rainbowLogo from "../../assets/Recruiters/rainbow.png";
import wgtechLogo from "../../assets/Recruiters/wgtech.png";
import rippleLogo from "../../assets/Recruiters/ripple_links.png";

const topRowLogos = [
  { name: "Infosys", logo: infosysLogo, scale: 1.1 },
  { name: "Zoho", logo: zohoLogo, scale: 1.05 },
  { name: "TCS", logo: tcsLogo, scale: 0.88 },
  { name: "Tesla Electric", logo: teslaLogo, scale: 1.15 },
  { name: "HCL", logo: hclLogo, scale: 0.88 },
  { name: "Wipro", logo: wiproLogo, scale: 1.2 },
  { name: "Webberax", logo: webberaxLogo, scale: 1.25 },
  { name: "Rainbow Enterprises", logo: rainbowLogo, scale: 1.2 },
];

const bottomRowLogos = [
  { name: "ATX", logo: atxLogo, logoWhite: atxWhiteLogo, scale: 1.05 },
  { name: "Dvilite", logo: dviliteLogo, logoWhite: dviliteWhiteLogo, scale: 0.85 },
  { name: "NaRDil", logo: nardilLogo, scale: 0.85 },
  { name: "Chennai Radha Engineering Works", logo: crewLogo, scale: 1.25 },
  { name: "Promon", logo: promonLogo, scale: 1.2 },
  { name: "M&S Software", logo: msLogo, scale: 1.2 },
  { name: "WGTech", logo: wgtechLogo, scale: 1.15 },
  { name: "Ripple Links", logo: rippleLogo, scale: 1.05 },
];

const WhyChoose = () => {
  const navigate = useNavigate();
  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <>
      {/* 1. WHY CHOOSE US CARDS */}
      <section className="whychoose">
        <div className="why-header">
          <p className="why-subtitle">WHY CHOOSE US</p>
          <h2 className="why-title">Discover the NSCET Advantage</h2>
          <div className="why-title-line"></div>
          <p className="why-description">
            Experience world-class education, cutting-edge facilities, and a
            community dedicated to shaping the tech leaders of tomorrow.
          </p>
        </div>

        <div className="why-grid">
          {/* Card 1: Advanced Laboratories */}
          <div className="why-card">
            <div className="why-icon">
              <FaLaptopCode />
            </div>
            <h3>Advanced Laboratories</h3>
            <p>
              Experience hands-on learning with cutting-edge laboratories, research
              facilities and innovation spaces designed for future engineers.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate('/academics/labs')}
            >
              Learn More <FaArrowRight className="btn-arrow" />
            </button>
          </div>

          {/* Card 2: Expert Faculty */}
          <div className="why-card">
            <div className="why-icon">
              <FaUserTie />
            </div>
            <h3>Expert Faculty</h3>
            <p>
              Learn from experienced professors, researchers and industry mentors
              dedicated to academic excellence and student success.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate('/academics/teaching-faculty')}
            >
              Learn More <FaArrowRight className="btn-arrow" />
            </button>
          </div>

          {/* Card 3: Industry Connect */}
          <div className="why-card">
            <div className="why-icon">
              <FaHandshake />
            </div>
            <h3>Industry Connect</h3>
            <p>
              Strong collaborations with industries through internships, live projects,
              industrial visits and professional certifications.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate('/academics/industry-collaboration')}
            >
              Learn More <FaArrowRight className="btn-arrow" />
            </button>
          </div>

          {/* Card 4: Career & Placements */}
          <div className="why-card">
            <div className="why-icon">
              <FaChartLine />
            </div>
            <h3>Career & Placements</h3>
            <p>
              Excellent placement training with top recruiters, career guidance and
              entrepreneurship support for every student.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => navigate('/student-life/placements')}
            >
              Learn More <FaArrowRight className="btn-arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. DUAL SCROLLING MARQUEE BANNER OVER NATURAL CAMPUS IMAGE */}
      <section
        ref={partnersRef}
        className="campus-partners-section"
        aria-label="Global Corporate Partners"
      >
        <div className="campus-partners-overlay"></div>

        {/* Top Marquee Track (Smooth Infinite Scroll Left) */}
        <div className="partners-marquee-row top-row">
          <div className={`partners-marquee-inner scroll-left ${partnersInView ? 'is-animating' : ''}`}>
            {[...topRowLogos, ...topRowLogos, ...topRowLogos].map((item, idx) => (
              <div
                key={`top-${idx}`}
                className="partner-logo-wrap"
                title={item.name}
                style={{ '--item-scale': item.scale || 1 }}
              >
                <img src={item.logoWhite || item.logo} alt={item.name} className="partner-vector-logo logo-white" />
                <img src={item.logo} alt={item.name} className="partner-vector-logo logo-color" />
              </div>
            ))}
          </div>
        </div>

        {/* Big Bold Centered Heading */}
        <div className="partners-center-content">
          <h2 className="partners-main-title">
            <span className="title-white">OUR </span>
            <span className="title-gold">INDUSTRY CONNECT</span>
          </h2>

          {/* Golden Ornamental Divider with Lotus Motif */}
          <div className="partners-gold-divider" aria-hidden="true">
            <span className="divider-line left"></span>
            <span className="divider-icon">
              <svg width="32" height="24" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Center Petal */}
                <path d="M18 1C18 1 13 7 13 13.5C13 17 15.2 20 18 21.5C20.8 20 23 17 23 13.5C23 7 18 1 18 1Z" fill="url(#goldPetalGrad)" />
                {/* Left Petal */}
                <path d="M11 7.5C11 7.5 5.5 12 5.5 17C5.5 20.2 8 22.5 11.2 23C13 19.8 14 16.5 14 13.5C14 10.5 11 7.5 11 7.5Z" fill="url(#goldPetalGrad)" opacity="0.9" />
                {/* Right Petal */}
                <path d="M25 7.5C25 7.5 30.5 12 30.5 17C30.5 20.2 28 22.5 24.8 23C23 19.8 22 16.5 22 13.5C22 10.5 25 7.5 25 7.5Z" fill="url(#goldPetalGrad)" opacity="0.9" />
                {/* Center Dot */}
                <circle cx="18" cy="24.2" r="1.6" fill="#fde68a" />
                <defs>
                  <linearGradient id="goldPetalGrad" x1="6" y1="1" x2="30" y2="25" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fff1a8" />
                    <stop offset="45%" stopColor="#e5be68" />
                    <stop offset="100%" stopColor="#b88628" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="divider-line right"></span>
          </div>

          <p className="partners-description">
            A strong network of organizations shaping our students’ careers.
          </p>
        </div>

        {/* Bottom Marquee Track (Smooth Infinite Scroll Right) */}
        <div className="partners-marquee-row bottom-row">
          <div className={`partners-marquee-inner scroll-right ${partnersInView ? 'is-animating' : ''}`}>
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((item, idx) => (
              <div
                key={`bot-${idx}`}
                className="partner-logo-wrap"
                title={item.name}
                style={{ '--item-scale': item.scale || 1 }}
              >
                <img src={item.logoWhite || item.logo} alt={item.name} className="partner-vector-logo logo-white" />
                <img src={item.logo} alt={item.name} className="partner-vector-logo logo-color" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;