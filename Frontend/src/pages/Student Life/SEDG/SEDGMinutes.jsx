import React from 'react';
import { FileText, ArrowLeft, Download, Eye, Calendar, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PremiumSubPages.css';

const SEDGMinutes = () => {
  const meetingRecords = [
    {
      title: "SC/ST & SEDG Welfare Committee Meeting - AY 2024-2025",
      date: "August 14, 2024",
      agenda: "Review of scholarship disbursement, orientation on NEP 2020 SEDG guidelines, and remedial coaching planning.",
      file: "/SCST Cell (1).pdf",
      status: "Official Record"
    },
    {
      title: "Minutes of Meeting - Academic Year 2023-2024 (Even Semester)",
      date: "January 22, 2024",
      agenda: "Skill development workshops review, placement mentoring for disadvantaged groups, and feedback assessment.",
      file: "/SCST Cell (1).pdf",
      status: "Official Record"
    },
    {
      title: "Minutes of Meeting - Academic Year 2023-2024 (Odd Semester)",
      date: "July 18, 2023",
      agenda: "First-year admission orientation, welfare schemes awareness, and grievance monitoring system evaluation.",
      file: "/SCST Cell (1).pdf",
      status: "Official Record"
    },
    {
      title: "Minutes of Meeting - Academic Year 2022-2023",
      date: "March 10, 2023",
      agenda: "Annual review of equal opportunity cell and SC/ST cell activities, scholarship records audit.",
      file: "/SCST Cell (1).pdf",
      status: "Archived"
    }
  ];

  return (
    <div className="premium-subpage-wrapper">
      <div className="premium-container max-w-850">
        <Link to="/student-life/sedg" className="premium-back-link">
          <ArrowLeft size={18} /> Back to SEDG Cell
        </Link>

        <div className="subpage-header text-center">
          <div className="subpage-badge blue">
            <FileText size={18} />
            <span>OFFICIAL PROCEEDINGS & RECORDS</span>
          </div>
          <h1 className="subpage-title">Minutes of Meeting</h1>
          <p className="subpage-desc">
            Official records, action taken reports, and resolutions of the SC/ST & SEDG Welfare Committee meetings.
          </p>
        </div>

        <div className="minutes-list-container">
          {meetingRecords.map((item, index) => (
            <div className="minute-record-card" key={index}>
              <div className="minute-icon-col">
                <FileText size={24} />
              </div>
              <div className="minute-info-col">
                <div className="minute-meta-row">
                  <span className="minute-date">
                    <Calendar size={14} /> {item.date}
                  </span>
                  <span className="minute-status-badge">{item.status}</span>
                </div>
                <h3 className="minute-card-title">{item.title}</h3>
                <p className="minute-agenda"><strong>Agenda:</strong> {item.agenda}</p>
              </div>
              <div className="minute-actions-col">
                <a 
                  href={item.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="minute-btn primary"
                  title="View PDF Document"
                >
                  <Eye size={16} />
                  <span>View</span>
                </a>
                <a 
                  href={item.file} 
                  download 
                  className="minute-btn secondary"
                  title="Download Record"
                >
                  <Download size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Committee Statement Banner */}
        <div className="minutes-footer-banner">
          <ShieldCheck size={24} className="footer-banner-icon" />
          <div>
            <h4>Commitment to Transparency & Due Process</h4>
            <p>All resolutions passed by the SEDG Committee are submitted to the Governing Council and maintained in institutional records for statutory compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEDGMinutes;