import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import vasanthImg from '../../../assets/administration/images/vasanth sir.jpg';
import './FinanceOfficer.css';

function FinanceOfficer() {
  const responsibilities = [
    "Administering and supervising the institution’s financial assets in accordance with applicable regulations and internal policies.",
    "Creating and tracking yearly budgets, financial reports, and spending summaries.",
    "Promoting optimal use and distribution of financial resources to advance academic programs and infrastructure projects.",
    "Establishing and maintaining financial oversight systems and audit processes to uphold accountability and openness.",
    "Coordinating with governmental organizations, funding partners, and other stakeholders for financial reporting and planning.",
    "Managing payroll, procurement, and other monetary operations in line with institutional procedures.",
    "Providing guidance to leadership on financial planning, investment opportunities, and strategies for cost efficiency."
  ];

  return (
    <div className="fo-page-container">
      <div className="fo-content-wrapper">
        
        {/* Page Main Title */}
        <h1 className="fo-main-title">Financial Officer</h1>

        {/* Main Grid Section */}
        <div className="fo-grid-layout">
          
          {/* Left Column: Officer Card */}
          <div className="fo-left-box">
            <div className="fo-img-container">
              <img 
                src={vasanthImg} 
                alt="Mr. D. Vasanthakumar" 
                className="fo-officer-photo"
              />
            </div>
            <h3 className="fo-name-text">Mr. D. Vasanthakumar</h3>
            <h2 className="fo-degree-text">MCA</h2>
          </div>

          {/* Right Column: Responsibilities Card */}
          <div className="fo-right-box">
            <h2 className="fo-resp-header">The Financial Officer shall be responsible for:</h2>
            
            <ul className="fo-resp-list">
              {responsibilities.map((item, index) => (
                <li key={index} className="fo-resp-item">
                  <FaCheckCircle className="fo-check-icon" />
                  <span className="fo-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default FinanceOfficer;
