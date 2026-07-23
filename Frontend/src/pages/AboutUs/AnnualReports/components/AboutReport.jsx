import React from 'react';
import { motion } from 'framer-motion';

const AboutReport = () => {
  return (
    <section className="about-section-wrapper bg-white">
      <div className="about-inner-container ar-section ar-about">
      <motion.div
        className="ar-glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="ar-section-title">Annual Report 2023–24</h2>
        <div className="ar-underline"></div>
        <p className="ar-description">
          The Internal Quality Assurance Cell (IQAC) Annual Report provides a comprehensive overview of the academic, research, administrative, and institutional quality initiatives carried out during the Academic Year 2023–24. It reflects NSCET's commitment towards continuous improvement, academic excellence, innovation, and stakeholder satisfaction while adhering to NAAC quality standards.
        </p>
      </motion.div>
      </div>
    </section>
  );
};

export default AboutReport;
