import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import DetailedAnnualReport from '../AnnualReports/components/DetailedAnnualReport';
import '../AnnualReports/AnnualReports.css';
import bannerImage from '../AnnualReports/assets/banner/annual-reports-hero-banner.png';

const AnnualAccounts = () => {
  return (
    <div className="annual-reports-page">
      <PageBanner
        title="Annual Accounts"
        subtitle="Institutional Quality Assurance & Academic Financial Overview (2023–24)"
        hideBreadcrumb={true}
        backgroundImage={bannerImage}
        imageFit="cover"
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
