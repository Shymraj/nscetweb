import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBuilding } from "react-icons/fa";
import { departmentData } from "../data";

const DepartmentAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="dev-section">
      <h2 className="dev-section-title" style={{ display: "block", textAlign: "center", marginBottom: "3rem" }}>
        Department-wise Alignment
      </h2>
      <div className="accordion-wrapper">
        {departmentData.map((dept, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`premium-glass-card accordion-item ${openIndex === index ? "open" : ""}`}
          >
            <div 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-header-left">
                <div className="accordion-icon">
                  <FaBuilding />
                </div>
                <h3 className="accordion-title">{dept.name}</h3>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="accordion-toggle-icon"
              >
                <FaChevronDown />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="accordion-content-wrapper"
                >
                  <div className="accordion-content">
                    <div className="accordion-section">
                      <h4>Vision</h4>
                      <p>{dept.vision}</p>
                    </div>
                    
                    <div className="accordion-section">
                      <h4>Mission</h4>
                      <ul>
                        {dept.mission.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="accordion-section highlight-section">
                      <h4>Alignment Highlights</h4>
                      <div className="highlight-tags">
                        {dept.alignment.map((item, i) => (
                          <span key={i} className="highlight-tag">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentAccordion;
