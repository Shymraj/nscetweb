import React, { useState } from 'react';
import './Library.css'; 

const Library = () => {
  // Tab State Management
  const [activeTab, setActiveTab] = useState('facilities');

  // Static Data from the Video
  const collections = [
    { name: "VOLUMES", count: "21810" },
    { name: "TITLES", count: "5016" },
    { name: "PERIODICALS", count: "124" },
    { name: "CIVIL", count: "3544" },
    { name: "MECH", count: "3820" },
    { name: "CSE", count: "3720" },
    { name: "ECE", count: "3831" },
    { name: "EEE", count: "2471" },
    { name: "IT", count: "250" },
    { name: "AI & DS", count: "250" }
  ];

  const facilitiesList = [
    "Open Access System", "Online Public Access Catalogue",
    "Well-Stocked Reference Section", "Separate Study Space for Staff and Students",
    "Well-Equipped Reading Hall", "Free Internet Access to Students and Faculty",
    "Access to NPTEL Video Lectures", "Access to Online Journals and E-Books",
    "Reprographic Services", "Membership in NDLI (National Digital Library of India)",
    "Membership in DELNET (Developing Library Network)"
  ];

  const objectivesList = [
    "To acquire, organize and update the library collection to support the teaching learning process.",
    "To encourage students to read beyond the requirements of the curriculum.",
    "To work with faculty in integrating information skills, knowledge of information resources and the use of technology in accessing information need for learning and teaching.",
    "Providing students centered learning environment that meet the informational, educational and recreational need of the students."
  ];

  const rulesList = [
    "Every student must possess his/her Library Card while making use of the Library facility...",
    "Reference material should not be taken outside the Library.",
    "Enter your name and Sign in the register kept at the entrance counter before entering library.",
    "Strict discipline must be maintained in the Library.",
    "Using Mobile phones and audio instruments with or without speaker or headphone is strictly prohibited."
    // Add the rest of the rules here...
  ];

  return (
    <div className="library-container">
      
      {/* 1. Header Section */}
      <section className="lib-header">
        <div className="lib-header-content">
          <div className="lib-about-box">
            <h2>About NSCET Library</h2>
            <p>The Library, in today's context, is a modern Learning Resource Centre with a dynamic learning space where students undertake a journey of knowledge acquisition and intellectual enrichment. Our library is a well-equipped Learning Resource Centre. We have a strong collection of about 21810 books and 120 Indian and foreign journals...</p>
          </div>
          <div className="lib-about-box dark-box">
            <h2>About NSCET E-Library</h2>
            <p>Our E-Library includes 30 high-speed systems with uninterrupted internet access, enabling students and faculty to explore a wide range of e-resources, including e-books, online journals, and digital learning materials...</p>
          </div>
        </div>
      </section>

      {/* 2. Collections (Stats Design) */}
      <section className="lib-collections">
        <h2 className="section-title">Library Collections</h2>
        <div className="stats-grid">
          {collections.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.count}</h3>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Tabs for Details */}
      <section className="lib-details-tabs">
        <div className="tab-buttons">
          <button className={activeTab === 'objectives' ? 'active' : ''} onClick={() => setActiveTab('objectives')}>Objectives</button>
          <button className={activeTab === 'facilities' ? 'active' : ''} onClick={() => setActiveTab('facilities')}>Facilities</button>
          <button className={activeTab === 'rules' ? 'active' : ''} onClick={() => setActiveTab('rules')}>Rules & Regulations</button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'objectives' && (
            <ul className="custom-list">
              {objectivesList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          )}
          {activeTab === 'facilities' && (
            <ul className="custom-list grid-list">
              {facilitiesList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          )}
          {activeTab === 'rules' && (
            <ul className="custom-list">
              {rulesList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          )}
        </div>
      </section>

      {/* 4. Timing & Librarian Profile */}
      <section className="lib-footer-info">
        <div className="working-hours">
          <h2>Working Hours</h2>
          <div className="hours-box">
            <p><strong>Monday to Friday:</strong> 8.30 AM to 5.30 PM</p>
            <p><strong>Saturday:</strong> 9.00 AM to 4.00 PM</p>
          </div>
        </div>
        <div className="librarian-profile">
          <div className="profile-card">
            {/* Add Librarian photo in public folder */}
            <img src="/librarian-photo.jpg" alt="Dr. S. Sinthan" />
            <div>
              <h3>Dr. S. Sinthan</h3>
              <p>Librarian</p>
            </div>
          </div>
          <blockquote className="lib-quote">
            "OUR LIBRARY VOWS TO SHAPE YOU FOR AN ENLIVENED PRESENT AND ENLIGHTENED FUTURE TOO"
          </blockquote>
        </div>
      </section>

    </div>
  );
};

export default Library;