import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import DetailedAnnualReport from '../AnnualReports/components/DetailedAnnualReport';
import '../AnnualReports/AnnualReports.css';
import bannerImage from './banner/AnnualAccounts.png';

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

      {/* Background Blobs */}
      <div className="ar-bg-blobs">
        <div className="ar-blob ar-blob-1"></div>
        <div className="ar-blob ar-blob-2"></div>
      </div>
    </div>
  );
};

export default AnnualAccounts;
