import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaBolt, FaTint, FaLeaf } from 'react-icons/fa';
import './GirlsHostel.css';

const GirlsHostel = () => {
  const hostelData = {
    about: "The Girls Hostel at our college provides a comfortable and secure environment for students. Equipped with modern facilities and 24/7 supervision, the hostel ensures a home-like atmosphere where students can focus on their academics while enjoying their stay. Spacious rooms, hygienic dining, and recreational areas make it an ideal place for holistic growth and development.",
    administration: [
      { name: "Mrs. R. Uma (Ph.D)", role: "Warden" },
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
      // UPDATED: Single imgUrl badhila array of images add pannirukken
      images: [
        "/GH/ghc.jpg",
        "/GH/ghc1.JPG",  // Unga extra images inga add pannikalam
        "/GH/ghc2.JPG",
        "/GH/ghc3.JPG"
      ]
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
      { id: 1, imgUrl: "/GH/GH.jpg" },
      { id: 2, imgUrl: "/GH/GH2.jpg" },
      { id: 4, imgUrl: "/GH/GH1.png" }
    ]
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentEventSlide, setCurrentEventSlide] = useState(0); // NEW: Event slide-kaga state

  // Existing Gallery Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === hostelData.gallery.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [hostelData.gallery.length]);

  // NEW: Events Image Timer (3 seconds once)
  useEffect(() => {
    const eventTimer = setInterval(() => {
      setCurrentEventSlide((prev) => (prev === hostelData.events.images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(eventTimer);
  }, [hostelData.events.images.length]);

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
        
        <section className="gh-section gh-about-section gh-animate-slide-up" style={{ display: 'flex', gap: '40px', alignItems: 'center', textAlign: 'left', backgroundColor: '#ffffff' }}>
          <div className="gh-about-text" style={{ flex: 1.5 }}>
            <h2 className="gh-section-title">About Hostel</h2>
            <p style={{ textAlign: 'justify', maxWidth: 'none', margin: '0' }}>{hostelData.about}</p>
          </div>
          <div className="gh-about-highlights" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
            <div className="gh-highlight-chip">
              <FaShieldAlt className="chip-icon" /> 24/7 Security
            </div>
            <div className="gh-highlight-chip">
              <FaBolt className="chip-icon" /> 100% Power Backup
            </div>
            <div className="gh-highlight-chip">
              <FaTint className="chip-icon" /> RO Purified Water
            </div>
            <div className="gh-highlight-chip">
              <FaLeaf className="chip-icon" /> Peaceful Environment
            </div>
          </div>
        </section>

        {/* UPDATED: Split Administration Section matching Boys Hostel */}
        <section className="gh-section gh-animate-slide-up-delay-1" style={{ padding: '50px 6%' }}>
          <div className="gh-admin-split-container">
            <div className="gh-admin-split-left">
              <div className="gh-admin-profile-full">
                <img src="https://via.placeholder.com/150/ffffff/cccccc?text=Profile" alt={hostelData.administration[0].name} className="gh-admin-profile-full-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
                <h3 className="gh-admin-profile-name">{hostelData.administration[0].name}</h3>
                <p className="gh-admin-profile-role">{hostelData.administration[0].role}</p>
              </div>
            </div>
            <div className="gh-admin-split-right">
              <h2 className="gh-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Hostel Administration</h2>
              <div className="gh-admin-divider" style={{ width: '50px', height: '3px', background: '#e2e8f0', margin: '0 0 20px 0', borderRadius: '2px' }}></div>
              <p className="gh-admin-description" style={{ textAlign: 'justify', color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
                The Girls Hostel administration is dedicated to maintaining a disciplined, nurturing, and home-like environment. We focus on holistic student development, ensuring the highest standards of safety, hygiene, and academic support throughout their stay.
              </p>
            </div>
          </div>
        </section>

        {/* Combined Culture and Facilities Section */}
        <section className="gh-section gh-culture-facilities-section gh-animate-slide-up-delay-2" style={{ background: 'white', padding: '35px 5%', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', margin: '0 3% 30px 3%', width: '94%' }}>
          <div className="gh-culture-facilities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            
            <div className="gh-culture-side" style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="gh-section-title">Cultural Activities</h2>
              <div className="gh-events-card" style={{ height: '100%', minHeight: '280px', margin: 0, padding: 0, overflow: 'hidden', background: '#000', position: 'relative', border: 'none', borderRadius: '14px', flex: 1, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
                <div className="gh-event-image-wrapper" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '280px', borderRadius: 0, boxShadow: 'none' }}>
                  {hostelData.events.images.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Hostel Event ${idx + 1}`} 
                      className="gh-event-image" 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: idx === currentEventSlide ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ))}
                  <div className="gh-event-content" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))', color: 'white', zIndex: 3, margin: 0 }}>
                    <h3 className="gh-event-title" style={{ fontSize: '1rem', color: 'white', borderBottom: 'none', paddingBottom: 0, margin: '0 0 5px 0' }}>{hostelData.events.title}</h3>
                    <p className="gh-event-desc" style={{ fontSize: '0.9rem', color: 'white', margin: 0, opacity: 0.9, lineHeight: 1.5 }}>Celebrating unity, talents, and memories.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gh-facilities-side" style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="gh-section-title">Facilities</h2>
              <div className="gh-facilities-box" style={{ background: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '14px', padding: '20px', flex: 1, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', margin: 0 }}>
                <ul className="gh-facilities-list-new">
                  {hostelData.facilities.map((fac, idx) => (
                    <li key={idx} className="gh-zoom-hover">
                      <strong>{fac.title}:</strong> {fac.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Rules Section split into two boxes */}
        <section className="gh-section gh-rules-section gh-animate-slide-up-delay-3" style={{ background: 'white', padding: '35px 5%', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', margin: '0 3% 30px 3%', width: '94%' }}>
          <h2 className="gh-section-title">Rules & Regulations</h2>
          <div className="gh-rules-two-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div className="gh-rules-box" style={{ background: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.02)' }}>
              <h3 className="gh-rules-box-title" style={{ fontSize: '1.15rem', marginBottom: '15px', borderBottom: '2px solid #fff7ed', paddingBottom: '10px', color: '#1e3a8a' }}>General Rules</h3>
              <ul className="gh-rules-list">
                {hostelData.rules.slice(0, 3).map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="gh-rules-box" style={{ background: '#fdfdfd', border: '1px solid #eaeaea', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.02)' }}>
              <h3 className="gh-rules-box-title" style={{ fontSize: '1.15rem', marginBottom: '15px', borderBottom: '2px solid #fff7ed', paddingBottom: '10px', color: '#1e3a8a' }}>Timings & Restrictions</h3>
              <ul className="gh-rules-list">
                {hostelData.rules.slice(3).map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="gh-section gh-gallery-section gh-animate-slide-up-delay-4" style={{ background: 'white', padding: '35px 5%', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', margin: '0 3% 30px 3%', width: '94%' }}>
          <h2 className="gh-section-title">Photo Gallery</h2>
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