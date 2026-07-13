import React from "react";
import "./Acadamic calander.css";

const calendars = [
  [
    "Academic Calendar 2025-2026 Even Sem",
    "Academic Calendar 2023-2024 ODD Sem",
    "Academic Calendar 2022-2023 Even Sem",
    "Academic Calendar 2021-2022",
    "Academic Calendar 2018-2019 Even Sem",
  ],
  [
    "Academic Calendar 2024-2025",
    "Academic Calendar 2023",
    "Academic Calendar 2022-2023 ODD Sem",
    "Academic Calendar 2019-2020 Even Sem",
  ],
  [
    "Academic Calendar 2023-2024 Even Sem",
    "Academic Calendar 2022-2023",
    "Academic Calendar 2021-2022 ODD Sem",
    "Academic Calendar 2019-2020 ODD Sem",
  ],
];

function AcademicCalendar() {
  return (
    <div className="academic-page">
      <div className="academic-container">

        <h1 className="academic-title">Academic Calendar</h1>

        <p className="academic-text">
          Our academic calendar provides a structured timeline of important
          dates, including semester start and end dates, examination schedules,
          holidays, and other key academic events. It helps students and faculty
          stay informed and plan their academic activities efficiently.
        </p>

        <p className="academic-text">
          Regular updates ensure that any changes or additions are promptly
          communicated. The calendar serves as a guide for academic progress,
          assisting students in meeting deadlines and preparing for assessments.
          Stay updated to make the most of your academic journey.
        </p>

        <h2 className="list-title">Academic Calendars List</h2>

        <div className="calendar-grid">
          {calendars.map((column, index) => (
            <ul key={index}>
              {column.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AcademicCalendar;