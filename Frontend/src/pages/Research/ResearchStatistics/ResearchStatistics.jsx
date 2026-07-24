import React, { useState, useEffect } from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import StatCard from './components/StatCard';
import { FaTimes } from 'react-icons/fa';
import './ResearchStatistics.css';

// Safely load images using import.meta.glob (support multiple formats)
const rawImages = import.meta.glob('./assets/statistics/*.{webp,jpg,jpeg,png}', { eager: true, import: 'default' });

// Helper to get image path safely
const getImage = (filename) => {
  const key = `./assets/statistics/${filename}`;
  return rawImages[key] || null;
};

const statisticsData = [
  { id: 1, title: 'Journal Publications', image: getImage('journalpublications.jpg'), caption: 'Research publications across academic years.' },
  { id: 2, title: 'Patent Count', image: getImage('patent.jpg'), caption: 'Patents filed and published by faculty members.' },
  { id: 3, title: 'Ph.D. Statistics – Teaching Staff', image: getImage('phd.jpg'), caption: 'Doctoral qualification statistics of teaching staff.' }
];

const ResearchStatistics = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="research-statistics-page">
      <PageBanner
        title="Research Statistics"
        subtitle="Explore the institution's research achievements through publications, patents, funded projects, research grants, doctoral statistics, consultancy activities, intellectual property, and academic contributions."
      />
      
      <div className="rs-container">
        <div className="rs-grid">
          {statisticsData.map((stat) => (
            <StatCard 
              key={stat.id} 
              title={stat.title} 
              image={stat.image} 
              caption={stat.caption}
              onClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && selectedImage.image && (
        <div className="rs-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="rs-modal-content" onClick={e => e.stopPropagation()}>
            <button className="rs-modal-close" onClick={() => setSelectedImage(null)} aria-label="Close modal">
              <FaTimes />
            </button>
            <div className="rs-modal-header">
              <h3 className="rs-modal-title">{selectedImage.title}</h3>
            </div>
            <div className="rs-modal-body">
              <img src={selectedImage.image} alt={selectedImage.title} className="rs-modal-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchStatistics;
