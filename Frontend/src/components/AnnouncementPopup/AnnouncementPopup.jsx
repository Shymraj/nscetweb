import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnnouncementPopup.css';
import { FaTimes } from 'react-icons/fa';

const AnnouncementPopup = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/home/announcement');
        if (res.data.success && res.data.data.length > 0) {
          setAnnouncements(res.data.data);
          setIsVisible(true);
        }
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      }
    };
    
    fetchAnnouncements();
  }, []);

  if (!isVisible || announcements.length === 0) return null;

  const latestAnnouncement = announcements[0];

  return (
    <div className="announcement-overlay">
      <div className="announcement-modal">
        <button className="announcement-close" onClick={() => setIsVisible(false)}>
          <FaTimes />
        </button>
        <img 
          src={`http://localhost:5000${latestAnnouncement.photo_url}`} 
          alt="Announcement" 
          className="announcement-image"
        />
      </div>
    </div>
  );
};

export default AnnouncementPopup;
