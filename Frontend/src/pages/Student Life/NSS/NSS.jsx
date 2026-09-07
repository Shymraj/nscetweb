import React from 'react';
import AboutNSS from './components/AboutNSS';
import Objectives from './components/Objectives';
import Activities from './components/Activities';
import NSSTeam from './components/NSSTeam';
import NSSGallery from './components/NSSGallery';
import ContactCard from './components/ContactCard';

import nssBanner from './assets/banner/NSS banner.png';
import './NSS.css';

const NSS = () => {
  return (
    /* 👇 Main container-ku common-page-wrapper add panniyachu 👇 */
    <div className="common-page-wrapper nss-page">
      
      {/* 👇 PageBanner-ku bathila pudhu responsive Banner Div 👇 */}
      <div className="common-hero-banner">
        {nssBanner && (
          <img 
            src={nssBanner} 
            alt="NSS Banner" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        )}
      </div>

      <div className="nss-content">
        <AboutNSS />
        <Objectives />
        <Activities />
        <NSSTeam />
        <NSSGallery />
        <ContactCard />
      </div>
    </div>
  );
};

export default NSS;