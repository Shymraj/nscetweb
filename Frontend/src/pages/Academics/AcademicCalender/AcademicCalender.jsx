
import React from 'react';
import './AcademicCalendar.css';
import calendarIcon from './banner/calendar-icon.svg';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaCalendarAlt, FaDownload, FaInfoCircle, FaStar, FaGift, FaClock, FaEye } from 'react-icons/fa';

import cal1 from './images/REVISED Academic Calendar 2025-26.pdf';
import cal2 from './images/Academic Calendar 2024 -25.pdf';
import cal3 from './images/2023-24 EVEN SEM.pdf';

// Auto-load custom banner image from ./banner/ (excluding svg icons)
const bannerGlobs = import.meta.glob("./banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const heroImage = Object.values(bannerGlobs)[0] || null;

const academicCalendars = [
  { title: 'Academic Calendar 2025-2026 Even Sem', latest: true, revised: true, file: cal1 },
  { title: 'Academic Calendar 2024-2025', latest: false, revised: false, file: cal2 },
  { title: 'Academic Calendar 2023-2024 Even Sem', latest: false, revised: false, file: cal3 },
];

const importantDates = [
  { event: 'Reopening for UG Sem III, V & VII + PG Sem III', date: '28 July 2025', remarks: 'For all years' },
  { event: 'Freshers Induction', date: '11 August 2025', remarks: '-' },
  { event: 'Reopening for UG I Sem', date: '18 August 2025', remarks: '-' },
  { event: 'Internal Assessment – I (UG III, V, VII & PG III)', date: '01 – 08 September 2025', remarks: '-' },
  { event: 'Teachers Day Celebration', date: '13 September 2025', remarks: '-' },
  { event: '16th Batch Fresher\'s Day', date: '17 September 2025', remarks: '-' },
  { event: 'NSCET Hackathon', date: '19 – 20 September 2025', remarks: '-' },
  { event: 'Waves \'25', date: '26 – 27 September 2025', remarks: '-' },
  { event: 'Navarathri Celebration', date: '29 September 2025', remarks: '-' },
  { event: 'Internal Assessment – I (UG I Sem)', date: '06 – 13 October 2025', remarks: '-' },
  { event: 'Diwali Celebration', date: '18 October 2025', remarks: '-' },
  { event: 'Diwali Holidays', date: '20 – 21 October 2025', remarks: '-' },
  { event: 'Internal Assessment – II (UG III, V, VII)', date: '03 – 08 November 2025', remarks: '-' },
  { event: 'University Model Practical', date: '10 – 12 November 2025', remarks: '-' },
  { event: 'Last Working Day (UG Sem III, V & VII)', date: '14 November 2025', remarks: 'For all years' },
  { event: 'Commencement of University Examinations (UG Sem III, V, VII)', date: '19 November 2025', remarks: '-' },
  { event: 'Last Working Day (UG Sem I)', date: '10 December 2025', remarks: '-' },
  { event: 'Commencement of University Examinations (UG Sem I)', date: '16 December 2025', remarks: '-' },
];

const holidays = [
  { name: 'Teachers Day Celebration', date: '13 September 2025' },
  { name: 'Navarathri Celebration', date: '29 September 2025' },
  { name: 'Diwali Celebration', date: '18 October 2025' },
  { name: 'Diwali Holidays', date: '20 – 21 October 2025' },
];


const AcademicCalendar = () => {
  return (
    <div className="academic-calendar-page">
      <PageBanner
        title=""
        subtitle=""
        hideBreadcrumb={true}
        {...(heroImage ? { backgroundImage: heroImage } : {})}
        height="auto"
      />

      <div className="academic-calendar-content">
        {/* About Section */}
        <section className="ac-about-section">
          <div className="ac-about-header">
            <FaInfoCircle className="ac-header-icon" />
            <h2>About Academic Calendar</h2>
          </div>
          <div className="ac-about-content">
            <p>
              The academic calendar provides a structured timeline of important dates including semester start/end dates, examination schedules, holidays, and other key academic events. It helps students and faculty plan activities efficiently.Regular updates ensure that any changes or additions are promptly communicated. The calendar serves as a guide for academic progress, assisting students in meeting deadlines and preparing for assessments. Stay updated to make the most of your academic journey.
            </p>
          </div>
        </section>

        {/* Important Dates Table */}
        <section className="ac-dates-section">
          <div className="ac-section-header">
            <FaClock className="ac-header-icon" />
            <h2>Important Dates (Odd Semester Focus – Higher Years)</h2>
          </div>
          <div className="ac-table-wrapper">
            <table className="ac-dates-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {importantDates.map((item, index) => (
                  <tr key={index}>
                    <td>{item.event}</td>
                    <td>{item.date}</td>
                    <td>{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>



        {/* Even Semester */}
        <section className="ac-even-section">
          <div className="ac-section-header">
            <FaCalendarAlt className="ac-header-icon" />
            <h2>Even Semester (Tentative)</h2>
          </div>
          <div className="ac-even-content">
            <div className="ac-even-card">
              <p>
                <strong>Reopening for UG Sem II, IV, VI & VIII + PG Sem II & IV</strong> → 
                <span className="ac-even-date">05 January 2026</span>
              </p>
            </div>
          </div>
        </section>



        {/* Available Academic Calendars */}
        <section className="ac-calendars-section">
          <div className="ac-section-header">
            <FaCalendarAlt className="ac-header-icon" />
            <h2>Available Academic Calendars</h2>
          </div>
          <div className="ac-calendars-grid">
            {academicCalendars.map((calendar, index) => (
              <div key={index} className="ac-calendar-card">
                <div className="ac-calendar-info">
                  <h3>{calendar.title}</h3>
                  <div className="ac-calendar-badges">
                    {calendar.latest && <span className="ac-badge ac-badge-latest">Latest</span>}
                    {calendar.revised && <span className="ac-badge ac-badge-revised">Revised</span>}
                  </div>
                </div>
                <div className="ac-calendar-actions">
                  <a href={calendar.file} target="_blank" rel="noopener noreferrer" className="ac-view-btn">
                    <FaEye className="ac-view-icon" />
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicCalendar;