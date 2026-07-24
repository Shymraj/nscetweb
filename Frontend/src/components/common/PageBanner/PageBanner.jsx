import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect: Moves the background image slightly slower than the page scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

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
      ref={ref}
      className="page-banner"
      style={{ 
        ...(height ? { '--custom-banner-height': height } : {})
      }}
    >
      {/* Parallax Background */}
      <motion.div 
        className="banner-bg-image"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          y: backgroundY
        }}
      />

      {/* Subtle Dark Overlay */}
      <div className="banner-overlay"></div>
      
      <div className="banner-content">
        {/* 1. Breadcrumb */}
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

        {/* 2. Page Title */}
        <motion.h1 
          initial={{ y: 30, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={`banner-title ${titleSizeClass}`}
        >
          {title}
        </motion.h1>
        
        {/* 3. Subtitle */}
        {subtitle && (
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="banner-subtitle"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
