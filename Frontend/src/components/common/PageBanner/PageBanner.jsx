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
  backgroundImage = "https://placehold.co/1920x600/1e40af/FFFFFF/png?text=NSCET+Banner" 
}) => {
  return (
    <section 
      className="page-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-overlay"></div>
      
      <div className="banner-content">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="banner-title"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="banner-subtitle"
          >
            {subtitle}
          </motion.p>
        )}

        {!hideBreadcrumb && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
      </div>
    </section>
  );
};

export default PageBanner;
