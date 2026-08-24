import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Elearning.css';

// Import local images
import infosysLogo from './images/infosys.png';
import nptelLogo from './images/nptel.png';

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2 className="section-heading">{title}</h2>
  </div>
);

const InfosysContent = () => (
  <motion.div 
    className="partner-content"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="partner-intro">
      <div className="intro-eyebrow">E-Learning</div>
      
      <div className="partner-logo-container">
        <img src={infosysLogo} alt="Infosys Springboard Logo" className="hero-logo" />
      </div>
      
      <h1 className="main-page-title">NSCET × Infosys Springboard</h1>
      <p className="tagline">NSCET collaborates with Infosys Springboard to enhance digital skills</p>
      
      <div className="external-link-wrapper">
        <a href="https://infyspringboard.onwingspan.com/" target="_blank" rel="noopener noreferrer" className="external-link-inline">
          Access Infosys Springboard Portal
        </a>
      </div>
    </div>

    <div className="partner-details">
      <section className="content-section">
        <SectionHeader title="Partnership Overview" />
        <p className="content-paragraph">
          To implement the education vision of the Government of India, Nadar Saraswathi College of Engineering and Technology (NSCET) aims to integrate state-of-the-art skill development subjects into its engineering curriculum in collaboration with Infosys Springboard. It is essential for NSCET’s faculty to be proficient in the latest technologies to effectively train students in industry-relevant skills. Infosys has launched Infosys Springboard, which offers a rich repository of over 12,000 courses. In this context, NSCET leverages the Memorandum of Understanding (MoU) between Anna University and Infosys Springboard to utilize the Infosys Springboard program for developing the digital skills of its faculty and students.
        </p>
      </section>

      <section className="content-section">
        <SectionHeader title="Glimpses of the Partnership Activities" />
        <div className="glimpses-grid">
          <img src="https://www.nscet.org/e-learning/files/IMG1.jpg" alt="Partnership Activity 1" className="content-img" />
          <img src="https://www.nscet.org/e-learning/files/IMG2.jpeg" alt="Partnership Activity 2" className="content-img" />
        </div>
      </section>
    </div>
  </motion.div>
);

const NptelContent = () => (
  <motion.div 
    className="partner-content"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="partner-intro">
      <div className="intro-eyebrow">Academic Partnerships</div>
      
      <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" className="partner-logo-container">
        <img src={nptelLogo} alt="NPTEL Logo" className="hero-logo" />
      </a>
      
      <h1 className="main-page-title">NSCET × NPTEL Local Chapter</h1>
      <p className="tagline">NSCET partners with NPTEL to provide advanced online learning opportunities</p>
    </div>

    <div className="partner-details">
      <section className="content-section">
        <SectionHeader title="Program Overview" />
        <p className="content-paragraph">
          [Note: The existing two paragraphs for the Program Overview were not provided in the prompt and could not be recovered. Please supply them to complete this section.]
        </p>
      </section>

      <section className="content-section">
        <SectionHeader title="Objectives" />
        <div className="objectives-list">
          <div className="objective-item">
            <div className="objective-number">01</div>
            <div className="objective-content">
              <div className="objective-title">Access to Quality Content</div>
              <div className="objective-text">Provide students with access to curated courses developed by IITs and IISc faculty.</div>
            </div>
          </div>
          
          <div className="objective-item">
            <div className="objective-number">02</div>
            <div className="objective-content">
              <div className="objective-title">Certification</div>
              <div className="objective-text">Facilitate participation in NPTEL’s certification exams to enhance career opportunities and academic records.</div>
            </div>
          </div>
          
          <div className="objective-item">
            <div className="objective-number">03</div>
            <div className="objective-content">
              <div className="objective-title">Faculty Development</div>
              <div className="objective-text">Support continuous learning and skill development for NSCET faculty members.</div>
            </div>
          </div>
          
          <div className="objective-item">
            <div className="objective-number">04</div>
            <div className="objective-content">
              <div className="objective-title">Academic Support</div>
              <div className="objective-text">Encourage the use of NPTEL content as supplementary resources for classroom teaching and self-study.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeader title="Key Benefits" />
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-card-number">01</div>
            <div className="benefit-card-title">2500+ COURSES</div>
            <div className="benefit-card-text">Access to 2500+ courses across multiple disciplines.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-card-number">02</div>
            <div className="benefit-card-title">MENTORSHIP</div>
            <div className="benefit-card-text">Mentorship and support from NPTEL-certified faculty coordinators.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-card-number">03</div>
            <div className="benefit-card-title">EMPLOYABILITY</div>
            <div className="benefit-card-text">Improved employability and skill set through domain-focused learning paths.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-card-number">04</div>
            <div className="benefit-card-title">RECOGNITION</div>
            <div className="benefit-card-text">Recognition from premier institutions (IITs/IISc) upon successful completion.</div>
          </div>
        </div>
      </section>
    </div>
  </motion.div>
);

const Elearning = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes('nptel') ? 'nptel' : 'infosys';

  return (
    <div className="elearning-page-container">
      {activeTab === 'infosys' && <InfosysContent />}
      {activeTab === 'nptel' && <NptelContent />}
    </div>
  );
};

export default Elearning;
