import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlacedStudents.css";

const PlacedStudents = () => {
  const [placementPosters, setPlacementPosters] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

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
      } finally {
        setLoading(false); // Stop loading after API call finishes (success or fail)
      }
    };
    fetchPlacements();
  }, []);

  // Duplicating the array to create a seamless infinite scroll loop
  const marqueeData = placementPosters.length > 0 ? [...placementPosters, ...placementPosters] : [];

  return (
    <section className="placement-section">
      <div className="placement-container">
        <h2 className="section-title">
          2025-26 <span>PLACED STUDENTS</span>
        </h2>

        {/* Show Loading, Empty Message, or Marquee based on state */}
        {loading ? (
          <p className="status-message">Loading placement records...</p>
        ) : placementPosters.length > 0 ? (
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {marqueeData.map((poster, index) => (
                <div className="poster-card" key={index}>
                  <div className="poster-img-container">
                    <img src={poster.image} alt={poster.altText} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="status-message">New placement records will be updated soon!</p>
        )}
        
      </div>
    </section>
  );
};

export default PlacedStudents;