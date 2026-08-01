import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsOfAcademicPrograms.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
// Auto-load any image inside ./images/
const imageGlobs = import.meta.glob("./images/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const heroImg = Object.values(imageGlobs)[0] || null;

const ugPrograms = [
  { name: 'B.Tech. - Artificial Intelligence & Data Science', route: '/departments/aids' },
  { name: 'B.E. - Civil Engineering', route: '/departments/civil' },
  { name: 'B.E. - Computer Science and Engineering', route: '/departments/cse' },
  { name: 'B.E. - Electrical & Electronics Engineering', route: '/departments/electrical' },
  { name: 'B.E. - Electronics & Communication Engineering', route: '/departments/electronics' },
  { name: 'B.Tech. - Information Technology', route: '/departments/it' },
  { name: 'B.E. - Mechanical Engineering', route: '/departments/mechanical' },
];

const pgPrograms = [
  { name: 'M.E. - Computer Science and Engineering', route: '/departments/me-cse' },
  { name: 'M.E. - Embedded Systems and Technology', route: '/departments/me-embedded' },
  { name: 'M.E. - Manufacturing Engineering', route: '/departments/me-manufacturing' },
  { name: 'M.E. - Structural Engineering', route: '/departments/me-structural' },
];

const AcademicPrograms = () => {
  return (
    <div className='ap-page'>

      {/* Hero Section */}
      <PageBanner
        title="Details of Academic Programs"
        subtitle="Explore our wide range of undergraduate, postgraduate, and doctoral research programs designed to foster excellence and innovation."
        hideBreadcrumb={true}
        backgroundImage={heroImg}
      />

      {/* UG Programs */}
      <section className='ap-card ap-ug'>
        <div className='ap-left blue'>
          <div className='ap-icon'>🎓</div>
          <h2>UG Programs</h2>
          <div className='ap-divider'></div>
          <span>4 Years Duration</span>
        </div>

        <div className='ap-right'>
          <div className='ap-grid'>
            {ugPrograms.map((program, index) => (
              <Link to={program.route} className='ap-item' key={index}>
                <span className='ap-check'>✓</span>
                <p>{program.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PG Programs */}
      <section className='ap-card ap-pg'>
        <div className='ap-left green'>
          <div className='ap-icon'>📖</div>
          <h2>PG Programs</h2>
          <div className='ap-divider'></div>
          <span>2 Years Duration</span>
        </div>

        <div className='ap-right'>
          <div className='ap-grid ap-grid-single'>
            {pgPrograms.map((program, index) => (
              <Link to={program.route} className='ap-item green-item' key={index}>
                <span className='ap-check green-check'>✓</span>
                <p>{program.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AcademicPrograms;
