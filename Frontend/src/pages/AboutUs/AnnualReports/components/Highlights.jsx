import React from 'react';
import { motion } from 'framer-motion';
import { highlightsData } from '../data';
import { FaBookOpen, FaChalkboardTeacher, FaLightbulb, FaBuilding, FaUserGraduate } from 'react-icons/fa';

const iconMap = {
  FaBookOpen: <FaBookOpen />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaLightbulb: <FaLightbulb />,
  FaBuilding: <FaBuilding />,
  FaUserGraduate: <FaUserGraduate />
};

const Highlights = () => {
  return (
    <section className="ar-section ar-highlights">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="ar-section-title">Annual Highlights</h2>
        <div className="ar-underline"></div>
      </motion.div>

      <div className="highlights-grid">
        {highlightsData.map((category, index) => (
          <motion.div
            key={index}
            className="highlight-category-card ar-glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="category-header">
              <div className="category-icon">
                {iconMap[category.icon]}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="category-items">
              {category.items.map((item, i) => (
                <div key={i} className={`highlight-item ${item.type}`}>
                  <span className="item-label">{item.label}</span>
                  {item.value && <span className="item-value">{item.value}</span>}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
