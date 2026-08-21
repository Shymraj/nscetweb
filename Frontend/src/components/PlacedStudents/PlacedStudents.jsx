import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlacedStudents.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:5000`;

// 8 Default Placement Posters stored in public/placements for 100% static availability
const STATIC_POSTERS = [
  { id: 'static-1', image: '/placements/Placement1.webp', altText: 'Placement Poster 1' },
  { id: 'static-2', image: '/placements/Placement2.webp', altText: 'Placement Poster 2' },
  { id: 'static-3', image: '/placements/Placement3.webp', altText: 'Placement Poster 3' },
  { id: 'static-4', image: '/placements/Placement4.jpeg', altText: 'Placement Poster 4' },
  { id: 'static-5', image: '/placements/Placement5.webp', altText: 'Placement Poster 5' },
  { id: 'static-6', image: '/placements/Placement6.jpeg', altText: 'Placement Poster 6' },
  { id: 'static-7', image: '/placements/Placement7.jpg', altText: 'Placement Poster 7' },
  { id: 'static-8', image: '/placements/Placement8.jpg', altText: 'Placement Poster 8' },
];

const PlacedStudents = () => {
  // Initialize immediately with STATIC_POSTERS so friends see them with zero backend delay
  const [placementPosters, setPlacementPosters] = useState(STATIC_POSTERS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/admin/placements`);
        if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          const apiImages = res.data.data.map((item, index) => ({
            id: item.id || `api-poster-${index}`,
            image: item.image_url.startsWith('http') 
              ? item.image_url 
              : `${API_BASE_URL}${item.image_url}`,
            altText: `Placement Poster ${index + 1}`
          }));
          setPlacementPosters(apiImages);
        }
      } catch (error) {
        console.log("Using static placement posters (backend offline or unreached)");
      }
    };
    fetchPlacements();
  }, []);

  // Duplicate the array for a seamless infinite scroll marquee loop
  const marqueeData = placementPosters.length > 0 
    ? [...placementPosters, ...placementPosters] 
    : [];

  return (
    <section className="placement-section">
      <div className="placement-container">
        <h2 className="section-title">
          2025-26 <span>PLACED STUDENTS</span>
        </h2>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeData.map((poster, index) => (
              <div className="poster-card" key={`${poster.id}-${index}`}>
                <div className="poster-img-container">
                  <img 
                    src={poster.image} 
                    alt={poster.altText} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/nscet-logo.png';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudents;