import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBullhorn } from 'react-icons/fa';
import './MarqueeBanner.css';

const MarqueeBanner = () => {
  const [marquees, setMarquees] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 34) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchMarquees = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/home/marquee');
        if (res.data && res.data.success) {
          // Filter only active ones
          const activeMarquees = res.data.data.filter(mq => mq.is_active);
          setMarquees(activeMarquees);
        }
      } catch (err) {
        console.error('Error fetching marquees:', err);
      }
    };

    fetchMarquees();
  }, []);

  if (marquees.length === 0) return null;

  // Duplicate marquees array to guarantee continuous seamless scrolling
  const displayMarquees = [...marquees, ...marquees, ...marquees, ...marquees];

  return (
    <div className={`marquee-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="marquee-badge">
        <FaBullhorn className="marquee-badge-icon" />
        <span>UPDATES</span>
      </div>

      <div className="marquee-track-wrapper">
        <div className="marquee-content">
          {displayMarquees.map((mq, index) => (
            <span key={`${mq.id}-${index}`} className="marquee-item">
              {mq.content}
              <span className="marquee-separator">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;

