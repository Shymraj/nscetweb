import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlacedStudents.css";

const PlacedStudents = () => {
  const [placementPosters, setPlacementPosters] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/placements");
        if (res.data.success && res.data.data.length > 0) {
          const apiImages = res.data.data.map((item, index) => ({
            id: item.id,
            image: `http://localhost:5000${item.image_url}`,
            altText: `Placement Poster ${index + 1}`
          }));
          setPlacementPosters(apiImages);
        } else {
          setPlacementPosters([]);
        }
      } catch (error) {
        console.error("Error fetching placements:", error);
        setPlacementPosters([]);
      }
    };
    fetchPlacements();
  }, []);

  // Duplicating the array to create a seamless infinite scroll loop
  const marqueeData = placementPosters.length > 0 ? [...placementPosters, ...placementPosters] : [];

  if (placementPosters.length === 0) {
    return null; // or return an empty section if preferred
  }

  return (
    <section className="placement-section">
      <div className="placement-container">
        <h2 className="section-title">
          2025-26 <span>PLACED STUDENTS</span>
        </h2>

        {/* MARQUEE WRAPPER - Handles the Fade Mask and hides overflow */}
        <div className="marquee-wrapper">
          
          {/* MARQUEE TRACK - The continuously moving container */}
          <div className="marquee-track">
            {marqueeData.map((poster, index) => (
              
              // INDIVIDUAL POSTER CARD
              <div className="poster-card" key={index}>
                <div className="poster-img-container">
                  <img src={poster.image} alt={poster.altText} />
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