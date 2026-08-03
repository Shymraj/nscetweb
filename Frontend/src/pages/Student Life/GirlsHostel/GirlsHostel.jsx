import React, { useState, useEffect } from 'react';
import './GirlsHostel.css';

const GirlsHostel = () => {
  const hostelData = {
    about: "The Girls Hostel at our college provides a comfortable and secure environment for students. Equipped with modern facilities and 24/7 supervision, the hostel ensures a home-like atmosphere where students can focus on their academics while enjoying their stay. Spacious rooms, hygienic dining, and recreational areas make it an ideal place for holistic growth and development.",
    administration: [
      { name: "Mrs. R. Uma (Ph.D)", role: "Warden" },
    ],
    strength: [
      { label: "Total Rooms", value: "30" },
      { label: "Number of Students in a Room", value: "03" },
      { label: "Study Room", value: "02" },
      { label: "Total Number of Students", value: "29" }
    ],
    facilities: [
      { title: "Gym", desc: "Well-equipped gym with modern exercise machines and weights." },
      { title: "Common Room", desc: "Common room with a TV, comfortable seating, and entertainment options." },
      { title: "Study Area", desc: "Study area with quiet spaces, desks, and high-speed internet." },
      { title: "Mess", desc: "Mess with a variety of nutritious meals served at convenient timings." },
      { title: "Security", desc: "Security with CCTV cameras and a hostel warden available 24/7." }
    ],
    events: {
      title: "Onam Celebration in College Hostel",
      desc: `The Onam Celebration in the college hostel is a vibrant and joyous occasion, marking the traditional harvest festival of Kerala. It brings together students from diverse backgrounds to partake in the cultural richness and festive spirit. The day typically begins with the creation of intricate floral carpets, known as "Pookalam," in the hostel courtyard, followed by traditional music, dance performances like "Thiruvathira," and a grand, multi-course vegetarian feast called "Sadya" served on banana leaves. The celebration not only honors heritage but also fosters a strong sense of community and camaraderie among the residents.`,
      imgUrl: "/gh_event.jpg"
    },
    rules: [
      "Students must maintain discipline and decorum at all times.",
      "The hostel gate closes at 10:00 PM.",
      "Visitors are not allowed inside the hostel rooms.",
      "Students must adhere to the mess timings.",
      "Smoking, drinking, and the use of illegal substances are strictly prohibited.",
      "Keep your rooms and the hostel environment clean."
    ],
    gallery: [
      { id: 1, imgUrl: "/ghostel1.jpg" },
      { id: 2, imgUrl: "/ghostel2.jpg" },
      { id: 3, imgUrl: "/ghostel3.jpg" },
      { id: 4, imgUrl: "/ghostel4.jpg" }
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
    <div className="modern-girls-hostel-page">
      
      <section className="gh-hero" style={{ aspectRatio: '8 / 3', width: '100%' }}>
        <div className="gh-hero-content">
          <h1 className="gh-animate-slide-down">NSCET GIRLS HOSTEL</h1>
        </div>
      </section>

      <div className="gh-main-container">
        
        <section className="gh-section gh-about-section gh-animate-slide-up">
          <div className="gh-about-text">
            <h2 className="gh-section-title">About Hostel</h2>
            <p>{hostelData.about}</p>
          </div>
        </section>

        <section className="gh-section gh-admin-infra-section gh-animate-slide-up-delay-1">
          <div className="gh-admin-infra-split">
            
            <div className="gh-admin-side" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '15px' }}>
              <h2 className="gh-section-title">Hostel Administration</h2>
              <div className="gh-admin-cards-container" style={{ display: 'flex', flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                {hostelData.administration.map((admin, idx) => (
                  <div key={idx} className={`gh-admin-card ${idx === 0 ? 'gh-chief' : 'gh-deputy'}`} style={{ width: '100%', textAlign: 'center', borderLeft: 'none' }}>
                    <span className="gh-admin-role">{admin.role}</span>
                    <h3>{admin.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="gh-infra-side">
              <h2 className="gh-section-title">Strength</h2>
              <div className="gh-strength-grid">
                {hostelData.strength.map((stat, idx) => (
                  <div key={idx} className="gh-stat-box">
                    <span className="gh-stat-value">{stat.value}</span>
                    <span className="gh-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Facilities Section - Flex container add panni list-a center panniyachu */}
        <section className="gh-section gh-facilities-section gh-animate-slide-up-delay-2">
          <h2 className="gh-section-title center">Facilities</h2>
          <div className="gh-facilities-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <ul style={{ display: 'inline-block', maxWidth: '800px', textAlign: 'left', paddingLeft: '25px', listStyleType: 'disc', lineHeight: '2', color: '#475569' }}>
              {hostelData.facilities.map((fac, idx) => (
                <li key={idx} className="gh-zoom-hover" style={{ marginBottom: '10px' }}>
                  <strong>{fac.title}:</strong> {fac.desc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="gh-section gh-events-rules-section gh-animate-slide-up-delay-3">
          <div className="gh-events-rules-split">
            
            <div className="gh-events-side">
              <h2 className="gh-section-title">Hostel Events</h2>
              <div className="gh-events-card">
                <div className="gh-event-image-wrapper">
                  <img src={hostelData.events.imgUrl} alt="Hostel Event" className="gh-event-image" />
                </div>
                <div className="gh-event-content">
                  <h3 className="gh-event-title">{hostelData.events.title}</h3>
                  <p className="gh-event-desc">{hostelData.events.desc}</p>
                </div>
              </div>
            </div>

            <div className="gh-rules-side">
              <h2 className="gh-section-title">Hostel Rules and Regulations</h2>
              <div className="gh-rules-card">
                <ul style={{ paddingLeft: '25px', listStyleType: 'disc', lineHeight: '2', color: '#475569' }}>
                  {hostelData.rules.map((rule, idx) => (
                    <li key={idx} className="gh-zoom-hover" style={{ marginBottom: '10px' }}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="gh-section gh-gallery-section gh-animate-slide-up-delay-4">
          <h2 className="gh-section-title center">Photo Gallery</h2>
          <div className="gh-gallery-slider-container">
            <div className="gh-slider-images-wrapper">
              {hostelData.gallery.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`gh-slider-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={item.imgUrl} 
                    alt={`Girls Hostel Gallery ${index + 1}`} 
                    className="gh-slider-real-image" 
                  />
                </div>
              ))}
            </div>
            <button className="gh-slider-btn prev-btn" onClick={prevSlide}>&#10094;</button>
            <button className="gh-slider-btn next-btn" onClick={nextSlide}>&#10095;</button>
          </div>
          
          <div className="gh-slider-dots-outside">
            {hostelData.gallery.map((_, idx) => (
              <span 
                key={idx} 
                className={`gh-dot ${idx === currentSlide ? 'active' : ''}`} 
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default GirlsHostel;