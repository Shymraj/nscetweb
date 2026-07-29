import './EqualOpportunityCell.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const EqualOpportunityCell = () => {
  return (
    <div className="equalopportunitycell-page">
      <PageBanner
        title="Equal Opportunity Cell"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Equal Opportunity Cell</h2>
        <p>Information about Equal Opportunity Cell will be updated here soon.</p>
      </div>
    </div>
  );
};

export default EqualOpportunityCell;
