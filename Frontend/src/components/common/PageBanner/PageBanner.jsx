import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";
import "./PageBanner.css";

const PageBanner = ({ 
  title, 
  subtitle, 
  breadcrumb = [], 
  hideBreadcrumb = false,
  backgroundImage = "https://placehold.co/1920x600/1e40af/FFFFFF/png?text=NSCET+Banner",
  height
}) => {
  // Calculate dynamic font size class based on title length
  let titleSizeClass = "title-size-xl";
  if (title) {
    if (title.length > 40) {
      titleSizeClass = "title-size-sm";
    } else if (title.length > 25) {
      titleSizeClass = "title-size-md";
    } else if (title.length > 15) {
      titleSizeClass = "title-size-lg";
    }
  }

  return (
    <section 
      className="page-banner"
      style={{ 
        ...(height ? { '--custom-banner-height': height } : {})
      }}
    >
      {/* Right side background image (TMHNU Trust style) */}
      <div className="page-banner-right">
        <img src={backgroundImage} alt={title || "Page Banner"} />
        <div className="page-banner-overlay"></div>
      </div>

      {/* Left side content (TMHNU Trust style) */}
      <div className="page-banner-left">
        <div className="page-banner-content">
          
          {/* Breadcrumb */}
          {!hideBreadcrumb && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="banner-breadcrumb"
            >
              <Link to="/" className="breadcrumb-link">
                <FaHome className="breadcrumb-icon" /> Home
              </Link>
              
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <FaChevronRight className="breadcrumb-separator" />
                  {item.link ? (
                    <Link to={item.link} className="breadcrumb-link">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="breadcrumb-current">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          )}

          {/* Page Title */}
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`banner-title ${titleSizeClass}`}
          >
            {title}
          </motion.h1>
          
          {/* Accent Line (from TMHNUTrust style) */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="banner-accent-line"
          ></motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="banner-subtitle"
            >
              {subtitle}
            </motion.h3>
          )}

        </div>
      </div>
    </section>
  );
};

export default PageBanner;
