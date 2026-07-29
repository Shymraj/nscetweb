import './AntiRaggingCell.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const AntiRaggingCell = () => {
  return (
    <div className="antiraggingcell-page">
      <PageBanner
        title="Anti-Ragging Cell"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Anti-Ragging Cell</h2>
        <p>Information about Anti-Ragging Cell will be updated here soon.</p>
      </div>
    </div>
  );
};

export default AntiRaggingCell;
