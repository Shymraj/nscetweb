import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBuilding, FaTrophy, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { departmentData } from "../data";

const DepartmentAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="dev-section-wrapper bg-white">
      <div className="dev-inner-container">
      <h2 className="about-section-heading">
        DEPARTMENT-WISE ALIGNMENT
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
              <div className="accordion-title-group">
                <div className="accordion-icon" style={{ color: dept.color }}>
                  {dept.icon === "FaTrophy" && <FaTrophy />}
                  {dept.icon === "FaLightbulb" && <FaLightbulb />}
                  {dept.icon === "FaShieldAlt" && <FaShieldAlt />}
                  {!dept.icon && <FaBuilding />}
                </div>
                <h3>{dept.name || dept.title}</h3>
              </div>
              <div className="accordion-toggle-icon">
                <FaChevronDown />
              </div>
            </div>
            
            <div className="accordion-content-wrapper">
              <div className="accordion-content">
                <div className="accordion-section">
                  <h4>Vision</h4>
                  <p>{dept.vision}</p>
                </div>
                
                <div className="accordion-section">
                  <h4>Mission</h4>
                  <ul>
                    {dept.mission?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="accordion-section highlight-section">
                  <h4>Alignment Highlights</h4>
                  <div className="highlight-tags">
                    {dept.alignment?.map((item, i) => (
                      <span key={i} className="highlight-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default DepartmentAccordion;
