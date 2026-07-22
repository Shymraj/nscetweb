import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import AboutReport from './components/AboutReport';
import Highlights from './components/Highlights';
import Statistics from './components/Statistics';
import InstitutionalValues from './components/InstitutionalValues';
import ReportDocument from './components/ReportDocument';
import './AnnualReports.css';
import bannerImage from './assets/banner/dji_fly_20250823_103504_700_1755932917562_photo.jpg';

const AnnualReports = () => {
  return (
    <div className="annual-reports-page">
      <PageBanner
        title="Annual Reports"
        subtitle="A Year of Academic Excellence, Innovation and Institutional Growth."
        hideBreadcrumb={true}
        backgroundImage={bannerImage}
      />

        <AboutReport />
        <Highlights />
        <Statistics />
        <InstitutionalValues />
        <ReportDocument />

      
      {/* Background Blobs */}
      <div className="ar-bg-blobs">
        <div className="ar-blob ar-blob-1"></div>
        <div className="ar-blob ar-blob-2"></div>
      </div>
    </div>
  );
};

export default AnnualReports;