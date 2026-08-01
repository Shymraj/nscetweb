import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import DetailedAnnualReport from '../AnnualReports/components/DetailedAnnualReport';
import { motion } from 'framer-motion';
import { FaFilePdf, FaEye } from 'react-icons/fa';
import '../AnnualReports/AnnualReports.css';
import bannerImage from './banner/AnnualAccounts.png';

import annualAccountsPdf from './assets/documents/annual-accounts.pdf';
import annualReportPdf from './assets/documents/annual-report.pdf';

const AnnualAccounts = () => {
  return (
    <div className="annual-reports-page">
      <PageBanner
        backgroundImage={bannerImage}
        hideBreadcrumb={true}
        showOverlay={false}
        showText={false}
      />

      <DetailedAnnualReport />

      <section className="about-section-wrapper bg-white">
        <div className="about-inner-container ar-section ar-report-document">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="ar-section-title">Official Documents</h2>
            <div className="ar-underline"></div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
            <motion.div
              className="document-glass-card ar-glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="document-icon-wrapper">
                <FaFilePdf className="document-pdf-icon" />
              </div>
              <div className="document-info">
                <h3 className="document-title">Annual Accounts</h3>
                <p className="document-description">
                  Official Annual Accounts of Nadar Saraswathi College of Engineering and Technology.
                </p>
                <div className="document-badges">
                  <span className="doc-badge doc-badge-type">Document Type : PDF</span>
                </div>
              </div>
              <div className="document-actions">
                <button onClick={() => window.open(annualAccountsPdf + '#toolbar=0', '_blank')} className="btn-view-doc">
                  <FaEye /> View Annual Accounts
                </button>
              </div>
            </motion.div>

            <motion.div
              className="document-glass-card ar-glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="document-icon-wrapper">
                <FaFilePdf className="document-pdf-icon" />
              </div>
              <div className="document-info">
                <h3 className="document-title">Annual Report</h3>
                <p className="document-description">
                  Official Annual Report of Nadar Saraswathi College of Engineering and Technology.
                </p>
                <div className="document-badges">
                  <span className="doc-badge doc-badge-type">Document Type : PDF</span>
                </div>
              </div>
              <div className="document-actions">
                <button onClick={() => window.open(annualReportPdf + '#toolbar=0', '_blank')} className="btn-view-doc">
                  <FaEye /> View Annual Report
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Blobs */}
      <div className="ar-bg-blobs">
        <div className="ar-blob ar-blob-1"></div>
        <div className="ar-blob ar-blob-2"></div>
      </div>
    </div>
  );
};

export default AnnualAccounts;
