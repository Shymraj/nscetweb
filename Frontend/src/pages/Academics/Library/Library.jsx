import React, { useState, useEffect } from 'react';
import './Library.css'; 

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    let totalMilSecDur = 4000; 
    let steps = 150; 
    let incrementTime = totalMilSecDur / steps; 

    const timer = setInterval(() => {
      start += Math.ceil(end / steps);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}+</span>;
};

const Library = () => {
  const [activeTab, setActiveTab] = useState('objectives');

  const heroImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); 
    return () => clearInterval(bgInterval);
  }, []);

  const collections = [
    { label: "VOLUMES", count: 21810 },
    { label: "TITLES", count: 5016 },
    { label: "PERIODICALS", count: 124 },
    { label: "CIVIL", count: 3544 },
    { label: "MECH", count: 3820 },
    { label: "CSE", count: 3720 },
    { label: "ECE", count: 3831 },
    { label: "EEE", count: 2471 },
    { label: "IT", count: 250 },
    { label: "AI&DS", count: 250 }
  ];

  const objectivesList = [
    "To acquire, organize, and preserve academic resources effectively.",
    "To support the college curriculum and research needs of faculty and students.",
    "To provide high-quality digital infrastructure and seamless access to e-journals.",
    "To foster a habit of continuous reading and self-paced technical learning."
  ];

  const facilitiesList = [
    "Open Access System",
    "Online Public Access Catalogue",
    "Well-Stocked Reference Section",
    "Separate Study Space",
    "Well-Equipped Reading Hall",
    "Free Internet Access"
  ];

  const rulesList = [
    "Strict silence must be maintained in the library.",
    "ID cards are mandatory for borrowing and returning books.",
    "Books must be returned on or before the due date.",
    "Using mobile phones inside the library is strictly prohibited."
  ];
  
  const galleryImages = [
    "/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg",
    "/5.jpeg", "/6.jpeg", "/7.jpeg", "/background.jpeg"
  ];

  // --- NEW MAGIC: Mouse track pannum function ---
  const handleMouseMove = (e) => {
    for(const card of document.getElementsByClassName("m1-stat-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  return (
    <div className="model1-landing-wrapper">
      
      <section 
        className="m1-hero-section"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.3)), url('${heroImages[currentBgIndex]}')`
        }}
      >
        <div className="m1-hero-container">
          <span className="m1-welcome-text">Welcome to</span>
          <h1 className="m1-hero-title">Central Library</h1>
          <p className="m1-hero-subtitle">
            A hub of knowledge, innovation, and inspiration.<br/>
            Empowering minds, shaping futures across all engineering disciplines.
          </p>
          <div className="m1-hero-actions">
            <button className="m1-btn-primary">Explore More</button>
            <button className="m1-btn-secondary">E-Library</button>
          </div>
        </div>
      </section>

      <main className="m1-main-container">
        
        <section className="m1-section m1-about-section">
          <div className="m1-about-grid">
            <div className="m1-about-card">
              <h2 className="m1-about-title">About NSCET Library</h2>
              <p className="m1-about-text">
                The Library, in today’s context, is a modern Learning Resource Centre with a dynamic learning space where students undertake a journey of knowledge acquisition and intellectual enrichment. Our Library is a well-equipped Learning Resource Centre. We have a strong collection of about 21810 books and 120 Indian and foreign journals. The NSCET library is a storehouse of knowledge and it comprises books, journals, e-resources, other learning materials, and technology-aided learning mechanisms which enable students to acquire information, knowledge, and skills required for their study programmes.
              </p>
            </div>
            <div className="m1-about-card">
              <h2 className="m1-about-title">About NSCET E-Library</h2>
              <p className="m1-about-text">
                Our E-Library includes 30 high-speed systems with uninterrupted internet access, enabling students and faculty to explore a wide range of e-resources, including e-books, online journals, and digital learning materials. The integration of technology-aided learning tools ensures that users can conveniently access information and develop the knowledge and skills required for their academic journey. The NSCET E-Library is truly a modern hub for intellectual enrichment and knowledge acquisition.
              </p>
            </div>
          </div>
        </section>

        {/* --- Collections Section (Mouse event inga attach aagirukku) --- */}
        <section className="m1-section m1-collections">
          <h2 className="m1-section-title">Our Collections</h2>
          <div className="m1-stats-grid" onMouseMove={handleMouseMove}>
            {collections.map((item, index) => (
              <div key={index} className="m1-stat-card">
                <div className="m1-stat-card-inner">
                  <span className="m1-stat-num">
                    <AnimatedNumber value={item.count} />
                  </span>
                  <span className="m1-stat-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="m1-section m1-explore">
          <h2 className="m1-section-title">Explore Library</h2>
          
          <div className="m1-tabs-wrapper">
            <div className="m1-tabs-nav">
              <button className={activeTab === 'objectives' ? 'active' : ''} onClick={() => setActiveTab('objectives')}>Objectives</button>
              <button className={activeTab === 'facilities' ? 'active' : ''} onClick={() => setActiveTab('facilities')}>Facilities</button>
              <button className={activeTab === 'rules' ? 'active' : ''} onClick={() => setActiveTab('rules')}>Rules</button>
            </div>
            
            <div className="m1-tab-content-card">
              <div className="m1-tab-text">
                {activeTab === 'objectives' && (
                  <ul>{objectivesList.map((item, i) => <li key={i}>{item}</li>)}</ul>
                )}
                {activeTab === 'facilities' && (
                  <ul>{facilitiesList.map((item, i) => <li key={i}>{item}</li>)}</ul>
                )}
                {activeTab === 'rules' && (
                  <ul>{rulesList.map((item, i) => <li key={i}>{item}</li>)}</ul>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="m1-section m1-gallery">
          <h2 className="m1-section-title">Gallery</h2>
          <div className="m1-gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="m1-gallery-item-wrapper">
                <img src={img} alt={`Library ${index + 1}`} className="m1-gallery-img" />
              </div>
            ))}
          </div>
        </section>

        <section className="m1-section m1-bottom-info">
          
          <div className="m1-info-card">
            <h3 className="m1-info-title">Working Hours</h3>
            <div className="m1-time-row">
              <span className="m1-time-day">Monday - Friday</span>
              <span className="m1-time-hours">8.30 AM - 5.30 PM</span>
            </div>
            <div className="m1-time-row">
              <span className="m1-time-day">Saturday</span>
              <span className="m1-time-hours">9.00 AM - 4.00 PM</span>
            </div>
            <div className="m1-time-row">
              <span className="m1-time-day">Sunday</span>
              <span className="m1-time-hours m1-closed">Closed</span>
            </div>
          </div>

          <div className="m1-info-card">
            <h3 className="m1-info-title">Librarian</h3>
            <div className="m1-lib-profile">
              <img src="/Sinthan.jpg" alt="Dr. S. Sinthan" className="m1-lib-img" />
              <div className="m1-lib-details">
                <h4>Dr. S. Sinthan</h4>
                <span>Chief Librarian</span>
              </div>
            </div>
            <p className="m1-lib-quote">
              "Our library vows to shape future leaders by providing unlimited access to global knowledge."
            </p>
          </div>

        </section>

      </main>
    </div>
  );
};

export default Library;