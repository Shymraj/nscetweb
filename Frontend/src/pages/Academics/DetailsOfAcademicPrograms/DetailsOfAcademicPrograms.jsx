import React from 'react';
import './DetailsOfAcademicPrograms.css';

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

const DetailsOfAcademicPrograms = () => {
  return (
    <div className='nscet-ap-container'>
      {/* Page Header */}
      <header className='nscet-ap-header'>
        <h1>Details of Academic Programs</h1>
        <p>Explore our wide range of undergraduate, postgraduate, and doctoral research programs designed to foster excellence and innovation.</p>
      </header>

      {/* Grid of Cards */}
      <div className='nscet-ap-grid'>

        {/* UG SECTION */}
        <section className='nscet-ap-card ug-card-theme'>
          <div className='nscet-ap-info-panel'>
            <div className='nscet-ap-icon-wrapper'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h2>UG Programs</h2>
            <span className='nscet-ap-duration-tag'>4 Years Duration</span>
          </div>

          <div className='nscet-ap-content'>
            <ul className='nscet-ap-programs-list'>
              {ugPrograms.map((item, index) => (
                <li key={index} className='nscet-ap-program-item'>
                  <span className='nscet-ap-item-bullet'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PG SECTION */}
        <section className='nscet-ap-card pg-card-theme'>
          <div className='nscet-ap-info-panel'>
            <div className='nscet-ap-icon-wrapper'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h2>PG Programs</h2>
            <span className='nscet-ap-duration-tag'>2 Years Duration</span>
          </div>

          <div className='nscet-ap-content'>
            <ul className='nscet-ap-programs-list'>
              {pgPrograms.map((item, index) => (
                <li key={index} className='nscet-ap-program-item'>
                  <span className='nscet-ap-item-bullet'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PHD SECTION */}
        <section className='nscet-ap-card phd-card-theme'>
          <div className='nscet-ap-info-panel'>
            <div className='nscet-ap-icon-wrapper'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <h2>Doctoral Studies</h2>
            <span className='nscet-ap-duration-tag'>Ph.D. Programs</span>
          </div>

          <div className='nscet-ap-content'>
            <div className='nscet-ap-phd-details'>
              <div className='nscet-ap-phd-box'>
                <div className='nscet-ap-phd-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className='nscet-ap-phd-text'>
                  <h3>Anna University Approved Research Centre</h3>
                  <p>Our Mechanical Engineering Department is recognized as an approved Research Centre by Anna University for conducting advanced Ph.D. programs and scholarly research projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DetailsOfAcademicPrograms;