import React from 'react';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
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
    <div className="nss-page">
      <PageBanner
        title="National Service Scheme"
        subtitle="Empowering Students Through Community Service, Leadership, and Nation Building"
        backgroundImage={nssBanner}
        hideBreadcrumb={false}
        breadcrumb={[
          { label: 'Student Life', link: '#' },
          { label: 'NSS' }
        ]}
        showText={true}
        showOverlay={true}
      />

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
