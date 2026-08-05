import React from "react";
import "./PlacedStudents.css";

// EXACT RELATIVE PATHS BASED ON YOUR FOLDER STRUCTURE
// Note: Make sure the file extensions (.jpg or .jpeg) exactly match the files in your folder.
import poster1 from "../../assets/Placements/Placement1.webp";
import poster2 from "../../assets/Placements/Placement2.webp";
import poster3 from "../../assets/Placements/Placement3.webp";
import poster4 from "../../assets/Placements/Placement4.jpeg"; 
import poster5 from "../../assets/Placements/Placement5.webp";
import poster6 from "../../assets/Placements/Placement6.jpeg"; 
import poster7 from "../../assets/Placements/Placement7.jpg";
import poster8 from "../../assets/Placements/Placement8.jpg";

// Array holding the imported images
const placementPosters = [
  { id: 1, image: poster1, altText: "Placement Poster 1" },
  { id: 2, image: poster2, altText: "Placement Poster 2" },
  { id: 3, image: poster3, altText: "Placement Poster 3" },
  { id: 4, image: poster4, altText: "Placement Poster 4" },
  { id: 5, image: poster5, altText: "Placement Poster 5" },
  { id: 6, image: poster6, altText: "Placement Poster 6" },
  { id: 7, image: poster7, altText: "Placement Poster 7" },
  { id: 8, image: poster8, altText: "Placement Poster 8" },
];

const PlacedStudents = () => {
  // Duplicating the array to create a seamless infinite scroll loop
  const marqueeData = [...placementPosters, ...placementPosters];

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