import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import pdfFile from "../assets/documents/policies.pdf";

const PolicyDocument = () => {
  const handleOpenPdf = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <section id="policy-document" className="act-section">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="document-showcase-card"
        onClick={handleOpenPdf}
      >
        <div className="card-glow-effect"></div>
        <div className="document-content">
          <div className="document-icon-wrapper">
            <FaFilePdf className="pdf-icon" />
          </div>
          <div className="document-details">
            <span className="official-badge">Official Document Badge</span>
            <h3 className="document-title">Policies</h3>
            <p className="document-description">
              Official Policies Document of Nadar Saraswathi College of Engineering and Technology.
            </p>
            <div className="document-meta">
              <span className="meta-item">Total Pages : 47</span>
              <span className="meta-item">Document Type : PDF</span>
            </div>
          </div>
          <div className="document-action">
            <button className="premium-btn" onClick={(e) => { e.stopPropagation(); handleOpenPdf(); }}>
              <span>View Document <FaExternalLinkAlt className="btn-icon" /></span>
              <span className="btn-subtitle">Opening in New Tab</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PolicyDocument;
