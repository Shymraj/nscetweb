import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaEye } from 'react-icons/fa';

const ReportDocument = () => {
  const handleView = () => {
    const el = document.getElementById('detailed-report');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-section-wrapper bg-white">
      <div className="about-inner-container ar-section ar-report-document">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="ar-section-title">Official Annual Report Showcase</h2>
        <div className="ar-underline"></div>
      </motion.div>

      <motion.div
        className="document-glass-card ar-glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="document-icon-wrapper">
          <FaFileAlt className="document-pdf-icon" />
        </div>
        
        <div className="document-info">
          <h3 className="document-title">Annual Report (2023–24)</h3>
          <p className="document-description">
            Official IQAC Annual Report of Nadar Saraswathi College of Engineering and Technology highlighting 7 core quality dimensions.
          </p>
          
          <div className="document-badges">
            <span className="doc-badge">7 Sections</span>
            <span className="doc-badge doc-badge-type">Format : Interactive Web Report</span>
          </div>
        </div>
        
        <div className="document-actions">
          <button onClick={handleView} className="btn-view-doc">
            <FaEye /> Explore Full Report Below
          </button>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ReportDocument;
