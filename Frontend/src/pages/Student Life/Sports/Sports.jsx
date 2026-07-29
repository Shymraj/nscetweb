import './Sports.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const Sports = () => {
  return (
    <div className="sports-page">
      <PageBanner
        title="Sports"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Sports</h2>
        <p>Information about Sports will be updated here soon.</p>
      </div>
    </div>
  );
};

export default Sports;
