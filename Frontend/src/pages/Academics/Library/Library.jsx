import React, { useState, useEffect, useRef } from 'react';
import './Library.css'; 

// Puthusa namma eluthuna Custom Counting Animation Component (No third-party library needed!)
const AnimatedNumber = ({ end }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <span ref={ref}>{count}</span>;
};

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
    "Every student must possess his/her Library Card while making use of the Library facility and produce the same to the Library Staff on entering the library.",
    "Reference material should not be taken outside the Library.",
    "Enter your name and Sign in the register kept at the entrance counter before entering library.",
    "The newspaper(s) should be folded properly after reading and kept back in the designated place.",
    "The librarian may recall any book from any member at any time and the member shall return the same immediately.",
    "Strict discipline must be maintained in the Library. Indiscipline may lead to disciplinary action and the withdrawal of library facility.",
    "Using Mobile phones and audio instruments with or without speaker or headphone is strictly prohibited in the library premises.",
    "Books removed from the shelves, if not required further, should be kept on the book trolley or on the table nearest to them. Please do not try to shelve them yourself. Please remember that a book misplaced is a book lost.",
    "Refreshment of any kind shall not be taken anywhere in the library premises.",
    "No Due Certificate will be issued only on the return of all the books and surrendering the borrower's cards."
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
              <h3>
                {/* Namma Custom Component Ithu */}
                <AnimatedNumber end={Number(item.count)} />
              </h3>
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
            <img src="/Sinthan.jpg" alt="Dr. S. Sinthan" />
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

      {/* 5. Library Gallery Section */}
      <section className="lib-gallery-section">
        <h2 className="section-title">LIBRARY GALLERY</h2>
        <div className="gallery-grid">
         <img src="/1.jpeg" alt="img" />
         <img src="/2.jpeg" alt="img" />
         <img src="/3.jpeg" alt="img" />
         <img src="/4.jpeg" alt="img" />
         <img src="/5.jpeg" alt="img" />
         <img src="/6.jpeg" alt="img" />
         <img src="/7.jpeg" alt="img" />
         <img src="/background.jpeg" alt="img" />
        </div>
      </section>

    </div>
  );
};

export default Library;