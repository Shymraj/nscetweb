import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBullhorn } from 'react-icons/fa';
import './MarqueeBanner.css';

const MarqueeBanner = () => {
  const [marquees, setMarquees] = useState([]);
  const [speedSeconds, setSpeedSeconds] = useState(20);
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
    const fetchMarqueeData = async () => {
      try {
        const [contentRes, settingsRes] = await Promise.allSettled([
          axios.get('http://localhost:5000/api/admin/home/marquee'),
          axios.get('http://localhost:5000/api/admin/home/marquee-settings')
        ]);

        if (contentRes.status === 'fulfilled' && contentRes.value.data?.success) {
          const activeMarquees = contentRes.value.data.data.filter(mq => mq.is_active);
          setMarquees(activeMarquees);
        }

        if (settingsRes.status === 'fulfilled' && settingsRes.value.data?.success && settingsRes.value.data.data?.speed_seconds) {
          setSpeedSeconds(Number(settingsRes.value.data.data.speed_seconds));
        }
      } catch (err) {
        console.error('Error fetching marquees or settings:', err);
      }
    };

    fetchMarqueeData();
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
        <div 
          className="marquee-content"
          style={{
            animationDuration: `${speedSeconds}s`,
            WebkitAnimationDuration: `${speedSeconds}s`,
            '--marquee-duration': `${speedSeconds}s`
          }}
        >
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

