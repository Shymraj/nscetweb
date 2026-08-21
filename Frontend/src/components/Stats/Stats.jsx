import React from "react";
import Counter from "./Counter";
import "./Stats.css";

const statsData = [
  {
    id: 1,
    // Active Students - Graduation Cap Icon
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.8 12.82v3.68l8.2 4.5 8.2-4.5v-3.68L12 17.2l-8.2-4.38z" />
      </svg>
    ),
    value: 1200,
    suffix: "+",
    label: "Active Students",
    desc: "Enrolled across all departments",
    watermark: "1200",
  },
  {
    id: 2,
    // Expert Faculty - Teacher/Screen Icon
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H3V5h18v10zm-11-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 5c0-1.5 2.5-2.25 4-2.25s4 .75 4 2.25V14H6v-1z" />
      </svg>
    ),
    value: 150,
    suffix: "+",
    label: "Expert Faculty",
    desc: "Guiding the next generation",
    watermark: "150",
  },
  {
    id: 3,
    // Departments - Building Icon
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM8 6h2v2H8V6zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm8 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z" />
      </svg>
    ),
    value: 10,
    suffix: "+",
    label: "Departments",
    desc: "Specialized tech divisions",
    watermark: "10",
  },
  {
    id: 4,
    // Placement Rate - Briefcase Icon
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
    value: 90,
    suffix: "%",
    label: "Placement Rate",
    desc: "Top tier corporate hiring",
    watermark: "90",
  },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-focus-grid">
          {statsData.map((item) => (
            <div className="spatial-card" key={item.id}>
              <div className="card-watermark">{item.watermark}</div>
              <div className="card-content-front">
                <div className="spatial-icon">{item.icon}</div>
                <div className="spatial-value">
                  <Counter end={item.value} suffix={item.suffix} />
                </div>
                <p className="spatial-label">{item.label}</p>
                <p className="spatial-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;