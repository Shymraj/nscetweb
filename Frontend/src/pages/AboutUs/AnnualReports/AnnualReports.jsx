import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import AboutReport from './components/AboutReport';
import Highlights from './components/Highlights';
import Statistics from './components/Statistics';
import InstitutionalValues from './components/InstitutionalValues';
import ReportDocument from './components/ReportDocument';
import './AnnualReports.css';

const AnnualReports = () => {
  return (
    <div className="annual-reports-page">
      <PageBanner
        title="Annual Reports"
        subtitle="A Year of Academic Excellence, Innovation and Institutional Growth."
        hideBreadcrumb={true}
      />
      <div className="annual-reports-container">
        <AboutReport />
        <Highlights />
        <Statistics />
        <InstitutionalValues />
        <ReportDocument />
      </div>
      
      {/* Background Blobs */}
      <div className="ar-bg-blobs">
        <div className="ar-blob ar-blob-1"></div>
        <div className="ar-blob ar-blob-2"></div>
      </div>
    </div>
  );
};

export default AnnualReports;