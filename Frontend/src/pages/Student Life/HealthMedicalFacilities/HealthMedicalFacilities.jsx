import './HealthMedicalFacilities.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';

const HealthMedicalFacilities = () => {
  return (
    <div className="healthmedicalfacilities-page">
      <PageBanner
        title="Health and Medical Facilities"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />
      <div className="container py-5">
        <h2>Health and Medical Facilities</h2>
        <p>Information about Health and Medical Facilities will be updated here soon.</p>
      </div>
    </div>
  );
};

export default HealthMedicalFacilities;
