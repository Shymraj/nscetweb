import React, { useState, useEffect } from 'react';
import './BoysHostel.css';

const BoysHostel = () => {
  const hostelData = {
    about: "The boys hostel accommodates students in a comfortable and safe environment. We provide all the necessary amenities to make students feel at home, ensuring they can focus on their academics and personal growth.",
    chiefWarden: { name: "Dr. C. Mathalai Sundaram", role: "Principal & Chief Warden", initials: "CMS" },
    deputyWardens: [
      { name: "Dr. J. Mathalai Raj", role: "Deputy Warden", initials: "JMR" },
      { name: "Mr. R. Santhaseelan", role: "Deputy Warden", initials: "RS" }
    ],
    strength: { rooms: 28, blocks: 2, totalStudents: 22 },
    gallery: [
      { id: 1, title: "Main Gate" },
      { id: 2, title: "Mess Hall" },
      { id: 3, title: "Playground" },
      { id: 4, title: "Study Hall" }
    ],
    events: [
      { id: 1, title: "Annual Hostel Day" }
    ],
    nearby: [
      { place: "NSCET Campus", distance: "0.5 Km" },
      { place: "Nearest Hospital", distance: "2.0 Km" },
      { place: "Main Bus Stand", distance: "1.5 Km" },
      { place: "ATM & Supermarkets", distance: "1.0 Km" }
    ]
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === hostelData.gallery.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [hostelData.gallery.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === hostelData.gallery.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? hostelData.gallery.length - 1 : prev - 1));
  };

  return (
    <div className="modern-hostel-page">
      
      <section className="hostel-hero">
        <div className="hero-content">
          <h1 className="animate-slide-down">NSCET BOYS HOSTEL</h1>
          <p className="animate-fade-in">A Second Home Fostering Academic Excellence</p>
        </div>
      </section>

      <div className="hostel-main-container">
        
        <section className="hostel-section about-section animate-slide-up">
          <div className="about-text">
            <h2 className="section-title">About the Hostel</h2>
            <p>{hostelData.about}</p>
          </div>
          <div className="about-highlights">
            <div className="highlight-chip">24/7 Security</div>
            <div className="highlight-chip">100% Power Backup</div>
            <div className="highlight-chip">RO Purified Water</div>
            <div className="highlight-chip">Peaceful Environment</div>
          </div>
        </section>

        <section className="hostel-section admin-section animate-slide-up-delay-1">
          <h2 className="section-title center">Hostel Administration</h2>
          <div className="admin-cards-container">
            <div className="admin-card chief">
              <div className="admin-avatar">{hostelData.chiefWarden.initials}</div>
              <h3>{hostelData.chiefWarden.name}</h3>
              <span className="admin-role">{hostelData.chiefWarden.role}</span>
            </div>
            <div className="deputy-cards">
              {hostelData.deputyWardens.map((warden, idx) => (
                <div key={idx} className="admin-card deputy">
                  <div className="admin-avatar">{warden.initials}</div>
                  <h3>{warden.name}</h3>
                  <span className="admin-role">{warden.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hostel-section infra-section animate-slide-up-delay-2">
          <h2 className="section-title">Strength & Infrastructure</h2>
          <div className="primary-stats-container">
            <div className="bento-card primary-stats">
              <div className="stat-item">
                <span className="stat-number">{hostelData.strength.totalStudents}</span>
                <span className="stat-label">Total Students</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">{hostelData.strength.rooms}</span>
                <span className="stat-label">Total Rooms</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">{hostelData.strength.blocks}</span>
                <span className="stat-label">Blocks</span>
              </div>
            </div>
          </div>
        </section>

        <section className="hostel-section rules-section animate-slide-up-delay-3">
          <h2 className="section-title">Rules & Regulations</h2>
          <div className="rules-two-container">
            <div className="rules-box">
              <h3 className="rules-box-title">Study Hours & General Rules</h3>
              <ul className="rules-list">
                <li>Strict study hours are enforced every evening from 8:30 PM to 10:30 PM.</li>
                <li>Attendance will be taken daily at 8:15 PM by the respective block wardens.</li>
                <li>Students are responsible for the safe keeping of their personal valuables.</li>
                <li>Usage of heavy electrical appliances (heaters, iron boxes) inside rooms is strictly prohibited.</li>
                <li>Silence must be maintained in the corridors and rooms during study hours and after 10:30 PM.</li>
              </ul>
            </div>
            <div className="rules-box">
              <h3 className="rules-box-title">Leave, Outing & Gate Pass</h3>
              <ul className="rules-list">
                <li>Students must obtain prior digital or physical permission from the warden for weekend outings.</li>
                <li>Gate passes must be signed by the Deputy Warden and submitted at the main security gate.</li>
                <li>No student is allowed to stay outside the hostel after 6:30 PM without prior intimation.</li>
                <li>Day scholars or outsiders are strictly not allowed to enter the hostel rooms.</li>
                <li>Any damage to hostel infrastructure will result in fine and strict disciplinary action.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="hostel-section gallery-section animate-slide-up-delay-4">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gallery-slider-container">
            <div className="slider-images-wrapper">
              {hostelData.gallery.map((img, index) => (
                <div 
                  key={img.id} 
                  className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="slider-img-placeholder">
                    <h2>{img.title} Image</h2> 
                  </div>
                  <div className="slide-caption">{img.title}</div>
                </div>
              ))}
            </div>
            <button className="slider-btn prev-btn" onClick={prevSlide}>&#10094;</button>
            <button className="slider-btn next-btn" onClick={nextSlide}>&#10095;</button>
            <div className="slider-dots">
              {hostelData.gallery.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === currentSlide ? 'active' : ''}`} 
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
        </section>

        <section className="hostel-section events-section animate-slide-up-delay-5">
          <h2 className="section-title">Hostel Culture</h2>
          <div className="culture-image-card">
            <div className="culture-img-placeholder">
              <div className="culture-overlay">
                <h3>{hostelData.events[0].title}</h3>
                <p>Celebrating unity, talents, and memories.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hostel-section nearby-section animate-slide-up-delay-6">
          <h2 className="section-title">Nearby Essentials</h2>
          <div className="nearby-layout">
            <div className="map-integration-box">
              <img src="/map-placeholder.jpg" alt="Google Map" className="map-zoom-image" />
              <div className="map-text-overlay">
                <span className="map-text">Google Map Integration Area</span>
              </div>
            </div>
            <div className="locations-box">
              <ul className="locations-list">
                {hostelData.nearby.map((loc, idx) => (
                  <li key={idx}>
                    <span className="loc-name">{loc.place}</span>
                    <span className="loc-distance">{loc.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BoysHostel;