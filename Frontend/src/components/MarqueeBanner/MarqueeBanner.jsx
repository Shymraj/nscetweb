import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarqueeBanner.css';

const MarqueeBanner = () => {
  const [marquees, setMarquees] = useState([]);

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

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {marquees.map((mq, index) => (
          <span key={mq.id} className="marquee-item">
            {mq.content} {index < marquees.length - 1 && <span className="marquee-separator">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
