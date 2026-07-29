import './NSS.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const NSS = () => {
  return (
    <div className="nss-page">
      <PageBanner
        title="National Service Scheme (NSS)"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>National Service Scheme (NSS)</h2>
        <p>Information about National Service Scheme (NSS) will be updated here soon.</p>
      </div>
    </div>
  );
};

export default NSS;
