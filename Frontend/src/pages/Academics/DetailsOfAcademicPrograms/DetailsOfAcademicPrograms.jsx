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

      {/* Hero Section */}
      <PageBanner
        hideBreadcrumb={true}
        showOverlay={false}
        showText={false}
        backgroundImage={heroImg}
      />

      {/* Premium UG Programs Section */}
      <section className='premium-section'>
        <div className='premium-container'>
          
          <div className='premium-header-row'>
            <div className='premium-header-content'>
              <div className='premium-label'>
                <div className='accent-line'></div>
                <span>UG PROGRAMS</span>
                <div className='premium-duration-badge'>
                  <LuCalendarClock className='duration-icon' />
                  <span>4 Years Duration</span>
                </div>
              </div>
              <h2 className='premium-title'>Programs Offered</h2>
              <p className='premium-subtitle'>Choose from our industry-focused undergraduate programs designed to build your future.</p>
            </div>
          </div>

          <div className='premium-grid'>
            {premiumUgPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Link 
                  to={program.route} 
                  className={`premium-program-card ${program.isFullWidth ? 'full-width' : ''}`} 
                  key={index}
                >
                  <div className={`program-card-icon-container ${program.colorClass}`}>
                    <IconComponent className='program-icon' />
                  </div>
                  
                  <div className='program-card-content'>
                    <div className={`program-degree ${program.colorClass}`}>
                      {program.degree}
                    </div>
                    <h3 className='program-title'>{program.name}</h3>
                    <div className='program-divider'></div>
                    <p className='program-desc'>{program.desc}</p>
                  </div>
                  
                  <div className='program-card-arrow-btn'>
                    <FaChevronRight className='arrow-icon' />
                  </div>
                </Link>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* Premium PG Programs Section */}
      <section className='premium-section pg-section'>
        <div className='premium-container'>
          
          <div className='premium-header-row'>
            <div className='premium-header-content'>
              <div className='premium-label'>
                <div className='accent-line pg-accent-line'></div>
                <span className='pg-label-text'>PG PROGRAMS</span>
                <div className='premium-duration-badge pg-duration-badge'>
                  <LuCalendarClock className='duration-icon pg-duration-icon' />
                  <span>2 Years Duration</span>
                </div>
              </div>
              <h2 className='premium-title'>Postgraduate Programs</h2>
              <p className='premium-subtitle'>Advance your expertise with our specialized master's degree programs.</p>
            </div>
          </div>

          <div className='premium-grid'>
            {premiumPgPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Link 
                  to={program.route} 
                  className={`premium-program-card`} 
                  key={index}
                >
                  <div className={`program-card-icon-container ${program.colorClass}`}>
                    <IconComponent className='program-icon' />
                  </div>
                  
                  <div className='program-card-content'>
                    <div className={`program-degree ${program.colorClass}`}>
                      {program.degree}
                    </div>
                    <h3 className='program-title'>{program.name}</h3>
                    <div className='program-divider'></div>
                    <p className='program-desc'>{program.desc}</p>
                  </div>
                  
                  <div className='program-card-arrow-btn pg-arrow-btn'>
                    <FaChevronRight className='arrow-icon' />
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
