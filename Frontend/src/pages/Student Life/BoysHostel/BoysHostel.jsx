import React, { useState, useEffect } from 'react';
import './BoysHostel.css';

const BoysHostel = () => {
  const hostelData = {
    about: "The Boys Hostel at our college provides a comfortable and secure environment for students. Equipped with modern facilities and 24/7 supervision, the hostel ensures a home-like atmosphere where students can focus on their academics while enjoying their stay. Spacious rooms, hygienic dining, and recreational areas make it an ideal place for holistic growth and development.",
    chiefWarden: { name: "Dr. C. Mathalai Sundaram", role: "Principal & Chief Warden" },
    strength: { rooms: 27, blocks: 3, totalStudents: 31 },
    gallery: [
      { id: 1, imgUrl: "/BOYS%20HOSTEL/hostel1.JPG" },
      { id: 2, imgUrl: "/BOYS%20HOSTEL/hostel2.JPG" },
      { id: 3, imgUrl: "/BOYS%20HOSTEL/hostel3.JPG" },
      { id: 4, imgUrl: "/BOYS%20HOSTEL/hostel5.JPG" }
    ],
    culture: [
      { id: 1, imgUrl: "/BOYS%20HOSTEL/hc3.JPG" },
      { id: 2,  imgUrl: "/BOYS%20HOSTEL/hc2.JPG" },
      { id: 3, imgUrl: "/BOYS%20HOSTEL/hc4.JPG" }
    ],
    facilities: [
      { title: "Gym", desc: "Well-equipped gym with modern exercise machines and weights." },
      { title: "Common Room", desc: "Common room with a TV, comfortable seating, and entertainment options." },
      { title: "Study Area", desc: "Study area with quiet spaces, desks." },
      { title: "Mess", desc: "Mess with a variety of nutritious meals served at convenient timings." },
      { title: "Security", desc: "Security with CCTV cameras and a hostel warden available 24/7." }
    ]
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCultureSlide, setCurrentCultureSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === hostelData.gallery.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [hostelData.gallery.length]);

  useEffect(() => {
    const cultureTimer = setInterval(() => {
      setCurrentCultureSlide((prev) => (prev === hostelData.culture.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(cultureTimer);
  }, [hostelData.culture.length]);

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
          {/* <h1 className="animate-slide-down">NSCET BOYS HOSTEL</h1> */}
        </div>
      </section>

      <div className="hostel-main-container">

        {/* About Section */}
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

        {/* COMPACT & SPLIT CONTAINER: Left (Admin), Right (Strength) */}
        <section className="hostel-section admin-infra-combined-section animate-slide-up-delay-1">
          <div className="admin-infra-split">

            {/* Left Side: Hostel Administration */}
            <div className="admin-side" style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-title">Hostel Administration</h2>
              <div className="admin-cards-container" style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <div className="admin-card chief" style={{ width: '100%', textAlign: 'center', padding: '20px 0' }}>
                  <h3>{hostelData.chiefWarden.name}</h3>
                  <span className="admin-role">{hostelData.chiefWarden.role}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Strength & Infrastructure */}
            <div className="infra-side">
              <h2 className="section-title">Strength & Infrastructure</h2>
              <div className="primary-stats">
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

          </div>
        </section>

        <section className="hostel-section culture-facilities-section animate-slide-up-delay-3">
          <div className="culture-facilities-grid">

            <div className="culture-side">
              <h2 className="section-title">Hostel Culture</h2>
              <div className="culture-image-card">
                <div className="culture-slider-wrapper">
                  {hostelData.culture.map((item, index) => (
                    <div
                      key={item.id}
                      className={`culture-slide ${index === currentCultureSlide ? 'active' : ''}`}
                    >
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="culture-real-image"
                      />
                      <div className="culture-overlay">
                        <h3>{item.title}</h3>
                        <p>Celebrating unity, talents, and memories.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="facilities-side">
              <h2 className="section-title">Facilities</h2>
              <div className="facilities-box">
                <ul className="facilities-list">
                  {hostelData.facilities.map((fac, idx) => (
                    <li key={idx}>
                      <strong>{fac.title}:</strong> {fac.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="hostel-section rules-section animate-slide-up-delay-4">
          <h2 className="section-title">Rules & Regulations</h2>
          <div className="rules-two-container">
            <div className="rules-box">
              <h3 className="rules-box-title">Study Hours & General Rules</h3>
              <ul className="rules-list">
                <li>Strict study hours are enforced every evening from 8:30 PM to 10:30 PM.</li>
                <li>Attendance will be taken daily at 8:15 PM by the respective block wardens.</li>
                <li>Students are responsible for the safe keeping of their personal valuables.</li>
                <li>Keep the hostel environment clean and use dustbins properly.</li>
                <li>No smoking, drinking, or gambling is allowed inside the hostel premises.</li>
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

        <section className="hostel-section gallery-section animate-slide-up-delay-5">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gallery-slider-container">
            <div className="slider-images-wrapper">
              {hostelData.gallery.map((item, index) => (
                <div
                  key={item.id}
                  className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="slider-real-image"
                  />
                </div>
              ))}
            </div>
            <button className="slider-btn prev-btn" onClick={prevSlide}>&#10094;</button>
            <button className="slider-btn next-btn" onClick={nextSlide}>&#10095;</button>
          </div>

          <div className="slider-dots-outside">
            {hostelData.gallery.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default BoysHostel;
