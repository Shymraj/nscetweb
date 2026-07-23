import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import logo from "../../assets/Img/nscet-logo.webp";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Slow, elegant, and smooth loading progress animation
  useEffect(() => {
    let currentProgress = 1;
    const interval = setInterval(() => {
      // Steady, smooth increment for elegant pacing
      let increment = Math.random() < 0.7 ? 1 : 2;
      
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Wait gracefully at 100% before smooth fade out
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 800);
        }, 600);
      } else {
        setProgress(currentProgress);
      }
    }, 65); // Slower interval timing (65ms per step)

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`splash-container ${isFadingOut ? "fade-out" : ""}`}>
      {/* Ambient Radial Soft Glow */}
      <div className="splash-ambient-glow"></div>

      {/* Clean Full-Screen Content */}
      <div className="splash-content-wrapper">
        {/* Prominent Large Logo with Soft Glow */}
        <div className="splash-logo-container">
          <div className="splash-logo-glow"></div>
          <img src={logo} alt="NSCET Logo" className="splash-logo-large" />
        </div>

        {/* College Title */}
        <h1 className="splash-college-title">
          NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY
        </h1>

        {/* Golden Tagline */}
        <div className="splash-tagline-wrapper">
          <span className="splash-tagline-divider"></span>
          <p className="splash-tagline-text">Empowering Future Engineers</p>
          <span className="splash-tagline-divider"></span>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="splash-loading-section">
          <div className="splash-status-text">
            Loading
            <span className="splash-dots">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </span>
          </div>

          <div className="splash-progress-track">
            <div
              className="splash-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="splash-progress-glow-tip"></div>
            </div>
          </div>

          <div className="splash-percentage">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
