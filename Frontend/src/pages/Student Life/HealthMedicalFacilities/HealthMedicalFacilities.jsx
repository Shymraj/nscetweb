import './HealthMedicalFacilities.css';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaClinicMedical, FaAmbulance, FaCalendarCheck, FaHospital, FaFileMedical, FaNotesMedical, FaStethoscope, FaImages, FaFileSignature, FaCheckCircle } from 'react-icons/fa';
import img1 from './image/img1.png';
import img2 from './image/img2.png';
import inchargeImage from '../../Administration/AcademicLeadership/Ponnaiah.png';
import bannerImg from './banner/HealthMedicalFacilities.png';

const HealthMedicalFacilities = () => {
  const facilities = [
    {
      icon: <FaClinicMedical />,
      title: 'Medical Room / Infirmary',
      description: 'Dedicated medical room with beds, privacy screens, and monitoring equipment in a clean, hygienic environment.'
    },
    {
      icon: <FaUserMd />,
      title: 'Qualified Personnel',
      description: 'Full-time/visiting qualified medical doctor and a trained nurse/paramedic available during working hours.'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Health Camps',
      description: 'Periodic health check-ups, eye/dental camps, blood donation drives, and hygiene awareness programs.'
    },
    {
      icon: <FaHospital />,
      title: 'Hospital Tie-Up',
      description: 'TMHNU Trust Hospital for emergency and inpatient care. Contact numbers are displayed across campus.'
    },
    {
      icon: <FaFileMedical />,
      title: 'Record Maintenance',
      description: 'Proper logbook for health incidents, doctor visits, and medical leaves for timely follow-up.'
    }
  ];

  const inchargeData = {
    name: "Mr. Ponnaiah",
    desig: "Physical Director & Health Incharge",
    image: inchargeImage,
    spec: "B.Sc., M.P.Ed.",
    desc: "Dedicated to ensuring the health and well-being of our students and staff through proactive medical care and fitness programs. Coordinates all periodic health camps, manages the infirmary inventory, and serves as the primary liaison with TMHNU Trust Hospital during medical emergencies to ensure immediate and effective care."
  };

  return (
    /* 👇 Main container-ku common-page-wrapper add panniyachu 👇 */
    <div className="common-page-wrapper healthmedicalfacilities-page">
      
      {/* 👇 PageBanner-ku bathila pudhu responsive Banner Div 👇 */}
      <div className="common-hero-banner">
        {bannerImg && (
          <img 
            src={bannerImg} 
            alt="Health and Medical Facilities Banner" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        )}
      </div>

      <div className="hmf-container">
        {/* Overview */}
        <section className="hmf-overview-section">
          <div className="hmf-section-header">
            <div className="hmf-header-icon-wrap gradient-1">
              <FaNotesMedical />
            </div>
            <div>
              <h3>Overview</h3>
              <div className="hmf-header-line"></div>
            </div>
          </div>
          
          <div className="hmf-about-card">
            <div className="hmf-about-accent"></div>
            <div className="hmf-about-card-content">
              <h4>Comprehensive Healthcare on Campus</h4>
              <p>
                NSCET ensures comprehensive medical support for all students and staff through a well-equipped first aid center and dedicated medical room within the campus. Each department and lab is stocked with essential medicines and first aid kits. A qualified medical doctor and trained nurse/paramedic are available during working hours.
              </p>
              <p>
                The college regularly conducts health camps, including eye/dental check-ups and blood donation drives, alongside health and hygiene awareness programs. In case of emergencies, NSCET maintains an active tie-up with TMHNU Trust Hospital for immediate advanced care.
              </p>
            </div>
          </div>
        </section>

        {/* Medical Incharge */}
        <section className="hmf-incharge-section">
          <div className="hmf-section-header">
            <div className="hmf-header-icon-wrap gradient-2">
              <FaStethoscope />
            </div>
            <div>
              <h3>Medical Incharge</h3>
              <div className="hmf-header-line"></div>
            </div>
          </div>
          <div className="hmf-incharge-wrapper">
            <div className="hmf-incharge-profile-card">
              <div className="hmf-incharge-img-wrapper">
                <img src={inchargeData.image} alt={inchargeData.name} />
              </div>
              <div className="hmf-incharge-details">
                <h3>{inchargeData.name}</h3>
                <p className="hmf-incharge-desig">{inchargeData.desig}</p>
                <span className="hmf-incharge-spec">{inchargeData.spec}</span>
                <p className="hmf-incharge-desc">{inchargeData.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities & Services Bento */}
        <section className="hmf-facilities-section">
          <div className="hmf-section-header">
            <div className="hmf-header-icon-wrap gradient-3">
              <FaHeartbeat />
            </div>
            <div>
              <h3>Facilities & Services</h3>
              <div className="hmf-header-line"></div>
            </div>
          </div>
          <div className="hmf-facilities-bento">
            <div className="hmf-facility-bento-main">
              <div className="hmf-facility-bento-icon">
                <FaHeartbeat />
              </div>
              <div className="hmf-facility-bento-content">
                <h4>First Aid & Emergency Care</h4>
                <p>Well-equipped first aid center within the campus. Availability of essential medicines and first aid kits in each department and lab for immediate response.</p>
              </div>
            </div>

            <div className="hmf-facilities-bento-subgrid">
              {facilities.map((fac, index) => (
                <div key={index} className="hmf-facility-card-premium">
                  <div className="hmf-fc-icon-wrapper">{fac.icon}</div>
                  <div className="hmf-fc-content">
                    <h4>{fac.title}</h4>
                    <p>{fac.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Order */}
        <section className="hmf-appointment-section">
          <div className="hmf-section-header">
            <div className="hmf-header-icon-wrap gradient-4">
              <FaFileSignature />
            </div>
            <div>
              <h3>Appointment Order – Medical Practitioner</h3>
              <div className="hmf-header-line"></div>
            </div>
          </div>
          
          <div className="hmf-appointment-hero-card">
            <div className="hmf-appointment-icon">
              <FaUserMd />
            </div>
            <div className="hmf-appointment-hero-content">
              <h4>Official Appointment Order</h4>
              
              <div className="hmf-order-details">
                <div className="hmf-order-meta">
                  <span><strong>Ref. No:</strong> NSCET/ESTAB/AO/MEDICAL PRACTITIONER/2023-24/01</span>
                  <span><strong>Date:</strong> 29.01.2024</span>
                </div>
                
                <div className="hmf-order-to">
                  <strong>To:</strong><br/>
                  Dr. G. Prabakaran,<br/>
                  Kamaraj Hospital,<br/>
                  Samatharmapuram, Theni.
                </div>

                <div className="hmf-order-subject">
                  <strong>Sub:</strong> Establishment – Appointment of Dr. G. Prabakaran as Medical Practitioner – Order Issued – Reg.
                </div>

                <div className="hmf-order-body">
                  <p>In continuation of the application cited and subsequent interview held on 27.01.2024 by the selection committee, the management of Nadar Saraswathi College of Engineering and Technology is pleased to appoint Dr. G. Prabakaran as Medical Practitioner.</p>
                  <p>You are asked to join the duty on 29.01.2024 (Monday). The salary Rs.20,000/- (Rupees Twenty Thousand only) per month is according to the norms of the Management.</p>
                  <p>We would like to request your presence on our campus at least once a week to provide medical consultation and services to our students.</p>
                </div>
                
                <div className="hmf-order-signature">
                  <strong>SECRETARY</strong>
                  <span>NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY</span>
                  <span>THENI – 625 531</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="hmf-gallery-section">
          <div className="hmf-section-header">
            <div className="hmf-header-icon-wrap gradient-5">
              <FaImages />
            </div>
            <div>
              <h3>Gallery</h3>
              <div className="hmf-header-line"></div>
            </div>
          </div>
          <div className="hmf-gallery-grid">
            <div className="hmf-gallery-item-premium">
              <img src={img1} alt="Health Facility 1" />
            </div>
            <div className="hmf-gallery-item-premium">
              <img src={img2} alt="Health Facility 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthMedicalFacilities;