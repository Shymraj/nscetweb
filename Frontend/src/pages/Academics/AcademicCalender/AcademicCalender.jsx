import React from 'react';
import './Acadamic calander.css';
import calendarIcon from './banner/calendar-icon.svg';
import heroImage from '../../../assets/ps1.jpg';

const infoCards = [
  {
    title: 'Academic Calendar Overview',
    text: 'Our academic calendar provides a structured timeline of important dates, including semester start and end dates, examination schedules, holidays, and other key academic events. It helps students and faculty stay informed and plan their academic activities efficiently.',
    theme: 'blue',
  },
  {
    title: 'Stay Updated',
    text: 'Regular updates ensure that any changes or additions are promptly communicated. The calendar serves as a guide for academic progress, assisting students in meeting deadlines and preparing for assessments.',
    theme: 'green',
  },
];

const calendarLinks = [
  'Academic Calendar 2025–2026 Even Sem',
  'Academic Calendar 2024–2025',
  'Academic Calendar 2025–2024 Even Sem',
  'Academic Calendar 2023–2024 ODD Sem',
  'Academic Calendar 2023',
  'Academic Calendar 2022–2023',
  'Academic Calendar 2022–2023 Even Sem',
  'Academic Calendar 2022–2023 ODD Sem',
  'Academic Calendar 2021–2022 ODD Sem',
  'Academic Calendar 2021–2022',
  'Academic Calendar 2019–2020 Even Sem',
  'Academic Calendar 2019–2020 ODD Sem',
  'Academic Calendar 2018–2019 Even Sem',
];

const AcademicCalendar = () => {
  return (
    <div className="academic-calendar-wrapper">
      <header
        className="header"
        style={{
          '--header-width': '1200px',
          '--title-width': '640px',
          backgroundImage: `linear-gradient(rgba(168, 175, 183, 0.78), rgba(169, 173, 181, 0.78)), url(${heroImage})`,
        }}
      >
        <div className="header-content">
            <div className="header-decor">
              <span className="line" />
              <span className="calendar-symbol">📅</span>
              <span className="line" />
            </div>
            <h1 className="header-title">Academic Calendar</h1>
        </div>
      </header>

      <section className="info-section">
        {infoCards.map((card) => (
          <article key={card.title} className={`info-card info-card-${card.theme}`}>
            <div className="info-icon">
              <img src={calendarIcon} alt="calendar icon" />
            </div>
            <div className="info-content">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section-content">
        <div className="section-heading">
          <h2 className="section-title">Academic Calendars List</h2>
          <div className="section-decor">
            <span className="line" />
            <span className="calendar-symbol">📅</span>
            <span className="line" />
          </div>
        </div>

        <div className="calendar-grid" role="list">
          {calendarLinks.map((title, index) => (
            <button key={`${title}-${index}`} type="button" className="calendar-card">
              <div className="calendar-card-left">
                <div className="calendar-card-icon">
                  <img src={calendarIcon} alt="calendar icon" />
                </div>
                <span className="calendar-card-text">{title}</span>
              </div>
              <span className="calendar-card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;