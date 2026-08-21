import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlacedStudents.css";

import placement1 from "../../assets/Placements/Placement1.webp";
import placement2 from "../../assets/Placements/Placement2.webp";
import placement3 from "../../assets/Placements/Placement3.webp";
import placement4 from "../../assets/Placements/Placement4.jpeg";
import placement5 from "../../assets/Placements/Placement5.webp";
import placement6 from "../../assets/Placements/Placement6.jpeg";
import placement7 from "../../assets/Placements/Placement7.jpg";
import placement8 from "../../assets/Placements/Placement8.jpg";

const API_BASE_URL = import.meta.env.VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:5000`;

// 8 Default Placement Posters imported directly for 100% frontend static availability
const STATIC_POSTERS = [
  { id: 'static-1', image: placement1, altText: 'Placement Poster 1', fallback: placement1 },
  { id: 'static-2', image: placement2, altText: 'Placement Poster 2', fallback: placement2 },
  { id: 'static-3', image: placement3, altText: 'Placement Poster 3', fallback: placement3 },
  { id: 'static-4', image: placement4, altText: 'Placement Poster 4', fallback: placement4 },
  { id: 'static-5', image: placement5, altText: 'Placement Poster 5', fallback: placement5 },
  { id: 'static-6', image: placement6, altText: 'Placement Poster 6', fallback: placement6 },
  { id: 'static-7', image: placement7, altText: 'Placement Poster 7', fallback: placement7 },
  { id: 'static-8', image: placement8, altText: 'Placement Poster 8', fallback: placement8 },
];

const PlacedStudents = () => {
  const [placementPosters, setPlacementPosters] = useState(STATIC_POSTERS);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/admin/placements`);
        if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          const apiImages = res.data.data.map((item, index) => ({
            id: item.id || `api-poster-${index}`,
            image: item.image_url?.startsWith('http') 
              ? item.image_url 
              : `${API_BASE_URL}${item.image_url}`,
            altText: `Placement Poster ${index + 1}`,
            fallback: STATIC_POSTERS[index % STATIC_POSTERS.length].image
          }));
          
          // Merge API images with STATIC_POSTERS so frontend images are always present
          setPlacementPosters([...apiImages, ...STATIC_POSTERS]);
        }
      } catch (error) {
        console.log("Using static placement posters (backend offline or unreached)");
      }
    };
    fetchPlacements();
  }, []);

  // Duplicate array for seamless infinite marquee scrolling
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
                      e.target.src = poster.fallback || placement1;
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