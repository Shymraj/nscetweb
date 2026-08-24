import './HealthMedicalFacilities.css';
import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaHeartbeat, FaUserMd, FaClinicMedical, FaAmbulance, FaCalendarCheck, FaHospital, FaFileMedical, FaNotesMedical, FaStethoscope, FaImages, FaFileSignature } from 'react-icons/fa';
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
    <div className="healthmedicalfacilities-page">
      <PageBanner
        title="Health and Medical Facilities"
        subtitle="Student Life at NSCET"
        hideBreadcrumb={false}
        backgroundImage={bannerImg}
      />

      <div className="hmf-container">
        {/* Overview */}
        <motion.section 
          className="hmf-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hmf-section-header">
            <FaNotesMedical className="hmf-header-icon" />
            <h2>Overview</h2>
          </div>
          
          <div className="hmf-about-grid">
            <motion.div 
              className="hmf-about-main-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Comprehensive Care</h3>
              <p>
                NSCET ensures comprehensive medical support for all students and staff through a well-equipped first aid center and dedicated medical room within the campus. Each department and lab is stocked with essential medicines and first aid kits. A qualified medical doctor and trained nurse/paramedic are available during working hours. 
              </p>
              <p>
                The college regularly conducts health camps, including eye/dental check-ups and blood donation drives, alongside health and hygiene awareness programs. In case of emergencies, NSCET has a tie-up with TMHNU Trust Hospital.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Medical Incharge */}
        <motion.section 
          className="hmf-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hmf-section-header">
            <FaStethoscope className="hmf-header-icon" />
            <h2>Medical Incharge</h2>
          </div>
          <div className="hmf-incharge-wrapper">
            <motion.div
              className="hmf-incharge-profile-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="hmf-incharge-img-wrapper">
                <img src={inchargeData.image} alt={inchargeData.name} />
              </div>
              <div className="hmf-incharge-details">
                <h3>{inchargeData.name}</h3>
                <p className="hmf-incharge-desig">{inchargeData.desig}</p>
                <p className="hmf-incharge-spec">{inchargeData.spec}</p>
                <p className="hmf-incharge-desc">{inchargeData.desc}</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Facilities & Services Bento */}
        <motion.section 
          className="hmf-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hmf-section-header">
            <FaHeartbeat className="hmf-header-icon" />
            <h2>Facilities & Services</h2>
          </div>
          <div className="hmf-facilities-bento">
            <motion.div 
              className="hmf-facility-bento-main"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="hmf-facility-bento-icon"><FaHeartbeat /></div>
              <div className="hmf-facility-bento-content">
                <h3>First Aid & Emergency Care</h3>
                <p>Well-equipped first aid center within the campus. Availability of essential medicines and first aid kits in each department and lab for immediate response.</p>
              </div>
            </motion.div>

            <div className="hmf-facilities-bento-subgrid">
              {facilities.map((fac, index) => (
                <motion.div 
                  key={index}
                  className="hmf-facility-card-premium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="hmf-fc-icon-wrapper">{fac.icon}</div>
                  <div className="hmf-fc-content">
                    <h4>{fac.title}</h4>
                    <p>{fac.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Appointment Order */}
        <motion.section 
          className="hmf-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hmf-section-header">
            <FaFileSignature className="hmf-header-icon" />
            <h2>Appointment Order – Medical Practitioner</h2>
          </div>
          
          <div className="hmf-appointment-hero-card">
             <div className="hmf-appointment-icon"><FaUserMd /></div>
             <div className="hmf-appointment-hero-content">
                <h3>Official Appointment Order</h3>
                
                <div className="hmf-order-details">
                  <div className="hmf-order-meta">
                    <p><strong>Ref. No:</strong> NSCET/ESTAB/AO/MEDICAL PRACTITIONER/2023-24/01</p>
                    <p><strong>Date:</strong> 29.01.2024</p>
                  </div>
                  
                  <div className="hmf-order-to">
                    <strong>To:</strong><br/>
                    Dr. G. Prabakaran,<br/>
                    Kamaraj Hospital,<br/>
                    Samatharmapuram, Theni.
                  </div>

                  <p className="hmf-order-subject">
                    <strong>Sub:</strong> Establishment – Appointment of Dr. G. Prabakaran as Medical Practitioner – Order Issued – Reg.
                  </p>

                  <div className="hmf-order-body">
                    <p>In the continuation of the application cited and subsequent interview held on 27.01.2024 by the selection committee, the management of Nadar Saraswathi College of Engineering and Technology is pleased to appoint Dr. G. Prabakaran as Medical Practitioner.</p>
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
        </motion.section>

        {/* Gallery */}
        <motion.section 
          className="hmf-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hmf-section-header">
            <FaImages className="hmf-header-icon" />
            <h2>Gallery</h2>
          </div>
          <div className="hmf-gallery-grid">
            <motion.div 
              className="hmf-gallery-item-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={img1} alt="Health Facility 1" />
            </motion.div>
            <motion.div 
              className="hmf-gallery-item-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={img2} alt="Health Facility 2" />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HealthMedicalFacilities;
