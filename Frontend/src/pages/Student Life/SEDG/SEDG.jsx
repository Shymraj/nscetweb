import './SEDG.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const SEDG = () => {
  return (
    <div className="sedg-page">
      <PageBanner
        title="SEDG"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>SEDG</h2>
        <p>Information about SEDG will be updated here soon.</p>
      </div>
    </div>
  );
};

export default SEDG;
