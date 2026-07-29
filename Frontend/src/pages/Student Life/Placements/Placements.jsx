import './Placements.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const Placements = () => {
  return (
    <div className="placements-page">
      <PageBanner
        title="Placements"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Placements</h2>
        <p>Information about Placements will be updated here soon.</p>
      </div>
    </div>
  );
};

export default Placements;
