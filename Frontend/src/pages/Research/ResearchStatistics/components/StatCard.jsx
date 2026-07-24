import React from "react";
import "./StatCard.css";
import { FaImage } from "react-icons/fa";

const StatCard = ({ title, image, caption, onClick }) => {
  return (
    <div className="stat-card" onClick={() => onClick({ title, image, caption })}>
      <div className="stat-card-image-wrapper">
        {image ? (
          <img src={image} alt={title} className="stat-card-image" loading="lazy" />
        ) : (
          <div className="stat-card-image-placeholder">
            <FaImage className="placeholder-icon" />
            <span>Image not available</span>
          </div>
        )}
        <div className="zoom-overlay">
          <span>Click to View</span>
        </div>
      </div>
      <div className="stat-card-content">
        <h3 className="stat-card-title">{title}</h3>
        <p className="stat-card-caption">{caption}</p>
      </div>
    </div>
  );
};

export default StatCard;
