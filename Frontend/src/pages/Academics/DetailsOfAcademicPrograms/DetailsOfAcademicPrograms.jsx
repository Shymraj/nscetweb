import React from 'react';
import './AcademicPrograms.css';

const ugPrograms = [
  'B.E. - Civil Engineering',
  'B.E. - Computer Science and Engineering',
  'B.E. - Electronics & Communication Engineering',
  'B.E. - Electrical & Electronics Engineering',
  'B.E. - Mechanical Engineering',
  'B.Tech. - Information Technology',
  'B.Tech. - Artificial Intelligence & Data Science',
];

const pgPrograms = [
  'M.E. - Manufacturing Engineering',
  'M.E. - Structural Engineering',
];

const AcademicPrograms = () => {
  return (
    <div className='ap-page'>

      {/* Hero Section */}
      <section className='ap-hero'>
        <div className='ap-hero-content'>
          <div className='ap-hero-text'>
            <h1>
              Details of <span>Academic Programs</span>
            </h1>
            <div className='ap-line'></div>
            <p>
              Explore our wide range of undergraduate, postgraduate,
              and doctoral research programs designed to foster
              excellence and innovation.
            </p>
          </div>

          <div className='ap-hero-image'>
            <img
  src='/images/college-building.jpg'
  alt='College Building'
/>
          </div>
        </div>
      </section>

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
              <div className='ap-item' key={index}>
                <span className='ap-check'>✓</span>
                <p>{program}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PG + Doctoral Row */}
      <div className='ap-row'>

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
                <div className='ap-item green-item' key={index}>
                  <span className='ap-check green-check'>✓</span>
                  <p>{program}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctoral */}
        <section className='ap-card ap-phd'>
          <div className='ap-left purple'>
            <div className='ap-icon'>🏅</div>
            <h2>Doctoral Studies</h2>
            <div className='ap-divider'></div>
            <span>Ph.D. Programs</span>
          </div>

          <div className='ap-right'>
            <div className='ap-research-box'>
              <div className='ap-research-icon'>🎓</div>
              <div>
                <h3>Anna University Approved Research Centre</h3>
                <p>
                  Our Mechanical Engineering Department is recognized as an approved
                  Research Centre by Anna University for conducting advanced Ph.D.
                  programs and scholarly research projects.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default AcademicPrograms;