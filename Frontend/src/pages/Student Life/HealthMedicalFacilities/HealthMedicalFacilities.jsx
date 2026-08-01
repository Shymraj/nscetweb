import './HealthMedicalFacilities.css';
import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaHeartbeat, FaUserMd, FaClinicMedical, FaAmbulance, FaCalendarCheck, FaHospital, FaFileMedical } from 'react-icons/fa';
import img1 from './image/img1.png';
import img2 from './image/img2.png';
import inchargeImage from './image/Vayalsamy.JPG';

const HealthMedicalFacilities = () => {
  const facilities = [
    {
      icon: <FaHeartbeat />,
      title: 'First Aid & Emergency Care',
      description: 'Well-equipped first aid center within the campus. Availability of essential medicines and first aid kits in each department/lab.'
    },
    {
      icon: <FaClinicMedical />,
      title: 'Medical Room / Infirmary',
      description: 'A dedicated medical room with a bed, privacy screens, and basic monitoring equipment. Clean and hygienic environment with proper ventilation.'
    },
    {
      icon: <FaUserMd />,
      title: 'Qualified Medical Personnel',
      description: 'A visiting or full-time qualified medical doctor (MBBS). A trained nurse/paramedic available during working hours.'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Health Camps & Awareness',
      description: 'Periodic health check-ups, eye/dental camps, blood donation drives. Health and hygiene awareness programs for students.'
    },
    {
      icon: <FaHospital />,
      title: 'Hospital Tie-Up',
      description: 'TMHNU Trust Hospital for emergency and inpatient care. Emergency contact numbers clearly displayed in hostels and academic blocks.'
    },
    {
      icon: <FaFileMedical />,
      title: 'Record Maintenance',
      description: 'Proper logbook for health incidents, doctor visits, and medical leaves for timely follow-up and care.'
    }
  ];

  return (
    <div className="healthmedicalfacilities-page">
      <PageBanner
        title="Health and Medical Facilities"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
      />

      <div className="hmf-container">
        {/* Overview Section */}
        <section className="hmf-section hmf-overview">
          <div className="hmf-section-header">
            <h2>Overview</h2>
          </div>
          <div className="hmf-overview-content">
            <p>
              NSCET ensures comprehensive medical support for all students and staff through a well-equipped first aid center and dedicated medical room within the campus. Each department and lab is stocked with essential medicines and first aid kits. A qualified medical doctor and trained nurse/paramedic are available during working hours. The college regularly conducts health camps, including eye/dental check-ups and blood donation drives, alongside health and hygiene awareness programs. In case of emergencies, NSCET has a tie-up with TMHNU Trust Hospital. Emergency contact numbers are clearly displayed across campus, and all medical incidents are properly documented for timely follow-up and care.
            </p>
          </div>
        </section>

        {/* Incharge Section */}
        <section className="hmf-section hmf-incharge">
          <div className="hmf-section-header">
            <h2>Medical Incharge</h2>
          </div>
          <div className="hmf-incharge-wrapper">
            <div className="hmf-incharge-card">
              <div className="hmf-incharge-info">
                <div className="hmf-incharge-image">
                  <img src={inchargeImage} alt="Mr. M. Vayalsamy" />
                </div>
                <div className="hmf-incharge-details">
                  <div className="hmf-incharge-badge">
                    <FaUserMd className="hmf-badge-icon" />
                    <span>Health Incharge</span>
                  </div>
                  <h3>Mr. M. Vayalsamy</h3>
                  <div className="hmf-incharge-credentials">
                    <span className="hmf-incharge-qualifications">B.Sc., M.P.Ed.</span>
                    <span className="hmf-incharge-dot">•</span>
                    <span className="hmf-incharge-role">Physical Director</span>
                  </div>
                  <div className="hmf-incharge-desc">
                    Dedicated to ensuring the health and well-being of our students and staff through proactive medical care and fitness programs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="hmf-section hmf-images">
          <div className="hmf-section-header">
            <h2>Gallery</h2>
          </div>
          <div className="hmf-gallery">
            <div className="hmf-gallery-item">
              <img src={img1} alt="Health Facility 1" />
            </div>
            <div className="hmf-gallery-item">
              <img src={img2} alt="Health Facility 2" />
            </div>
          </div>
        </section>

        {/* Facilities & Services Section */}
        <section className="hmf-section hmf-facilities">
          <div className="hmf-section-header">
            <h2>Facilities & Services</h2>
          </div>
          <div className="hmf-facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="hmf-facility-card">
                <div className="hmf-facility-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Appointment Order Section */}
        <section className="hmf-section hmf-appointment">
          <div className="hmf-section-header">
            <h2>Appointment Order – Medical Practitioner</h2>
          </div>
          <div className="hmf-appointment-content">
            <div className="hmf-appointment-header">
              <p><strong>Ref. No:</strong> NSCET/ESTAB/AO/MEDICAL PRACTITIONER/2023-24/01</p>
              <p><strong>Date:</strong> 29.01.2024</p>
            </div>
            <div className="hmf-appointment-to">
              <p><strong>To</strong></p>
              <p>Dr. G. Prabakaran,</p>
              <p>Kamaraj Hospital,</p>
              <p>Samatharmapuram,</p>
              <p>Theni.</p>
            </div>
            <div className="hmf-appointment-body">
              <p><strong>Sir/Madam,</strong></p>
              <p className="hmf-appointment-subject">
                <strong>Sub:</strong> Establishment – Appointment of Dr. G. Prabakaran as Medical Practitioner – Order Issued – Reg.
              </p>
              <div className="hmf-appointment-refs">
                <p><strong>Ref:</strong></p>
                <p>i. Your Application dated 08.01.2024</p>
                <p>ii. Interview dated 27.01.2024</p>
              </div>
              <p className="hmf-appointment-text">
                In the continuation of the application cited and subsequent interview held on 27.01.2024 by the selection committee constituted for the purpose, the management of Nadar Saraswathi College of Engineering and Technology is pleased to appoint Dr. G. Prabakaran as Medical Practitioner.
              </p>
              <p className="hmf-appointment-text">
                You are asked to join the duty on 29.01.2024 (Monday).
              </p>
              <p className="hmf-appointment-text">
                The salary Rs.20,000/- (Rupees Twenty Thousand only) per month for his/her post Medical Practitioner is according to the norms of the Management.
              </p>
              <p className="hmf-appointment-text">
                We would like to request your presence on our campus at least once a week to provide medical consultation and services to our students.
              </p>
              <p className="hmf-appointment-text">
                In this regard, he/she is directed to report for duty to the Principal on the above said date without fail.
              </p>
            </div>
            <div className="hmf-appointment-signature">
              <p><strong>SECRETARY</strong></p>
              <p>NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY</p>
              <p>THENI – 625 531</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthMedicalFacilities;