import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsOfAcademicPrograms.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
// Auto-load any image inside ./images/
const imageGlobs = import.meta.glob("./images/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const heroImg = Object.values(imageGlobs)[0] || null;

import { LuCalendarClock, LuBrainCircuit, LuMonitorPlay } from 'react-icons/lu';
import { TbBuildingArch, TbCircuitCell } from 'react-icons/tb';
import { MdOutlineSettingsInputAntenna } from 'react-icons/md';
import { FaLaptopCode, FaChevronRight } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';

const premiumUgPrograms = [
  {
    name: 'Artificial Intelligence & Data Science',
    degree: 'B.Tech.',
    route: '/departments/aids',
    desc: 'Build intelligent systems and data-driven solutions for tomorrow.',
    icon: LuBrainCircuit,
    colorClass: 'color-purple'
  },
  {
    name: 'Civil Engineering',
    degree: 'B.E.',
    route: '/departments/civil',
    desc: 'Design and build the infrastructure that shapes our world.',
    icon: TbBuildingArch,
    colorClass: 'color-cyan'
  },
  {
    name: 'Computer Science and Engineering',
    degree: 'B.E.',
    route: '/departments/cse',
    desc: 'Build software, solve problems, and power the digital world.',
    icon: LuMonitorPlay,
    colorClass: 'color-blue'
  },
  {
    name: 'Electrical & Electronics Engineering',
    degree: 'B.E.',
    route: '/departments/electrical',
    desc: 'Power the future with smart systems and sustainable energy.',
    icon: TbCircuitCell,
    colorClass: 'color-orange'
  },
  {
    name: 'Electronics & Communication Engineering',
    degree: 'B.E.',
    route: '/departments/electronics',
    desc: 'Connect the world through innovative communication technologies.',
    icon: MdOutlineSettingsInputAntenna,
    colorClass: 'color-pink'
  },
  {
    name: 'Information Technology',
    degree: 'B.Tech.',
    route: '/departments/it',
    desc: 'Innovate, develop, and manage technology that drives the future.',
    icon: FaLaptopCode,
    colorClass: 'color-green'
  },
  {
    name: 'Mechanical Engineering',
    degree: 'B.E.',
    route: '/departments/mechanical',
    desc: 'Design, innovate and build mechanical systems that drive progress.',
    icon: GoGear,
    colorClass: 'color-yellow',
    isFullWidth: true
  }
];

const premiumPgPrograms = [
  {
    name: 'Computer Science and Engineering',
    degree: 'M.E.',
    route: '/departments/me-cse',
    desc: 'Advanced studies in algorithms, computing systems, and software design.',
    icon: LuMonitorPlay,
    colorClass: 'color-blue'
  },
  {
    name: 'Embedded Systems and Technology',
    degree: 'M.E.',
    route: '/departments/me-embedded',
    desc: 'Design and develop intelligent embedded systems for specialized applications.',
    icon: TbCircuitCell,
    colorClass: 'color-orange'
  },
  {
    name: 'Manufacturing Engineering',
    degree: 'M.E.',
    route: '/departments/me-manufacturing',
    desc: 'Master advanced manufacturing processes and industrial engineering systems.',
    icon: GoGear,
    colorClass: 'color-yellow'
  },
  {
    name: 'Structural Engineering',
    degree: 'M.E.',
    route: '/departments/me-structural',
    desc: 'Advanced design and analysis of modern infrastructure and structural systems.',
    icon: TbBuildingArch,
    colorClass: 'color-cyan'
  }
];

const AcademicPrograms = () => {
  return (
    <div className='ap-page'>

      {/* Hero Banner Section */}
      <PageBanner
        className="academic-programs-banner"
        hideBreadcrumb={true}
        showOverlay={false}
        showText={false}
        backgroundImage={heroImg}
      />

      {/* UG Programs Section */}
      <section className='ap-section ap-ug-section'>
        <div className='ap-container'>
          
          {/* Header Card */}
          <div className='ap-header-card ap-ug-header'>
            <div className='ap-header-top'>
              <div className='ap-badge-group'>
                <span className='ap-tag ap-ug-tag'>UG Programs</span>
                <div className='ap-duration-badge ap-ug-duration'>
                  <LuCalendarClock className='ap-duration-icon' />
                  <span>4 Years Duration</span>
                </div>
              </div>
            </div>
            <h2 className='ap-section-title'>Undergraduate Programs Offered</h2>
            <p className='ap-section-subtitle'>
              Choose from our industry-focused undergraduate engineering and technology programs designed to build your future.
            </p>
          </div>

          <div className='ap-grid'>
            {premiumUgPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Link 
                  to={program.route} 
                  className={`ap-program-card ${program.isFullWidth ? 'ap-card-full' : ''}`} 
                  key={index}
                >
                  <div className={`ap-icon-box ${program.colorClass}`}>
                    <IconComponent className='ap-icon' />
                  </div>
                  
                  <div className='ap-card-body'>
                    <div className={`ap-degree-chip ${program.colorClass}`}>
                      {program.degree}
                    </div>
                    <h3 className='ap-card-title'>{program.name}</h3>
                    <div className='ap-card-divider'></div>
                    <p className='ap-card-desc'>{program.desc}</p>
                  </div>
                  
                  <div className='ap-arrow-btn'>
                    <FaChevronRight className='ap-arrow-icon' />
                  </div>
                </Link>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* PG Programs Section */}
      <section className='ap-section ap-pg-section'>
        <div className='ap-container'>
          
          {/* Header Card */}
          <div className='ap-header-card ap-pg-header'>
            <div className='ap-header-top'>
              <div className='ap-badge-group'>
                <span className='ap-tag ap-pg-tag'>PG Programs</span>
                <div className='ap-duration-badge ap-pg-duration'>
                  <LuCalendarClock className='ap-duration-icon' />
                  <span>2 Years Duration</span>
                </div>
              </div>
            </div>
            <h2 className='ap-section-title'>Postgraduate Programs Offered</h2>
            <p className='ap-section-subtitle'>
              Advance your expertise and research acumen with our specialized master's degree engineering programs.
            </p>
          </div>

          <div className='ap-grid'>
            {premiumPgPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Link 
                  to={program.route} 
                  className='ap-program-card' 
                  key={index}
                >
                  <div className={`ap-icon-box ${program.colorClass}`}>
                    <IconComponent className='ap-icon' />
                  </div>
                  
                  <div className='ap-card-body'>
                    <div className={`ap-degree-chip ${program.colorClass}`}>
                      {program.degree}
                    </div>
                    <h3 className='ap-card-title'>{program.name}</h3>
                    <div className='ap-card-divider'></div>
                    <p className='ap-card-desc'>{program.desc}</p>
                  </div>
                  
                  <div className='ap-arrow-btn ap-pg-arrow'>
                    <FaChevronRight className='ap-arrow-icon' />
                  </div>
                </Link>
              );
            })}
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default AcademicPrograms;
