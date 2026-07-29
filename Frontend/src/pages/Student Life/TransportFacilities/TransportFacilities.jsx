import './TransportFacilities.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const TransportFacilities = () => {
  return (
    <div className="transportfacilities-page">
      <PageBanner
        title="Transport Facilities"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Transport Facilities</h2>
        <p>Information about Transport Facilities will be updated here soon.</p>
      </div>
    </div>
  );
};

export default TransportFacilities;
