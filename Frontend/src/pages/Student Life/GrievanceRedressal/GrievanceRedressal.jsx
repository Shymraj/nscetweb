import './GrievanceRedressal.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const GrievanceRedressal = () => {
  return (
    <div className="grievanceredressal-page">
      <PageBanner
        title="Grievance Redressal"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Grievance Redressal</h2>
        <p>Information about Grievance Redressal will be updated here soon.</p>
      </div>
    </div>
  );
};

export default GrievanceRedressal;
