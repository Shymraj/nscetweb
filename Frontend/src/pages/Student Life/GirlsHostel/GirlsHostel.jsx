import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaBolt, FaTint, FaLeaf } from 'react-icons/fa';
import './GirlsHostel.css';

// Auto-load custom banner image from ./banner/
const bannerGlobs = import.meta.glob("./banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const customBanner = Object.values(bannerGlobs)[0] || null;

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
    /* 👇 Main container-ku common-page-wrapper add panniyachu 👇 */
    <div className="common-page-wrapper modern-girls-hostel-page">
      
      {/* 👇 Pazhaya gh-hero-a thookitu pudhu responsive Banner Div 👇 */}
      <div className="common-hero-banner">
        {customBanner && (
          <img 
            src={customBanner} 
            alt="Girls Hostel Banner" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        )}
      </div>

      <div className="gh-main-container">
        
        {/* About Section */}
        <section className="gh-section gh-about-section gh-animate-slide-up">
          <div className="gh-about-text gh-content-card">
            <h2 className="gh-section-title">About Hostel</h2>
            <p>{hostelData.about}</p>
          </div>
          <div className="gh-about-highlights">
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

        {/* Administration Section */}
        <section className="gh-section gh-admin-split-section gh-animate-slide-up-delay-1">
          <div className="gh-content-card">
            <h2 className="gh-section-title">Hostel Administration</h2>
            <div className="gh-admin-divider"></div>
            <p className="gh-admin-description">
              The Girls Hostel administration is dedicated to maintaining a disciplined, nurturing, and home-like environment. We focus on holistic student development, ensuring the highest standards of safety, hygiene, and academic support throughout their stay.
            </p>
          </div>
        </section>

        {/* Combined Culture and Facilities Section */}
        <section className="gh-section gh-culture-facilities-section gh-animate-slide-up-delay-2">
          <div className="gh-culture-facilities-grid">
            
            <div className="gh-culture-side">
              <h2 className="gh-section-title">Cultural Activities</h2>
              <div className="gh-events-card">
                <div className="gh-event-image-wrapper">
                  {hostelData.events.images.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Hostel Event ${idx + 1}`} 
                      className={`gh-event-image ${idx === currentEventSlide ? 'active' : ''}`} 
                    />
                  ))}
                  <div className="gh-event-content">
                    <h3 className="gh-event-title">{hostelData.events.title}</h3>
                    <p className="gh-event-desc">Celebrating unity, talents, and memories.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gh-facilities-side">
              <h2 className="gh-section-title">Facilities</h2>
              <div className="gh-facilities-box">
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
        <section className="gh-section gh-rules-section gh-animate-slide-up-delay-3">
          <h2 className="gh-section-title">Rules & Regulations</h2>
          <div className="gh-rules-two-container">
            <div className="gh-rules-box">
              <h3 className="gh-rules-box-title">General Rules</h3>
              <ul className="gh-rules-list">
                {hostelData.rules.slice(0, 3).map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="gh-rules-box">
              <h3 className="gh-rules-box-title">Timings & Restrictions</h3>
              <ul className="gh-rules-list">
                {hostelData.rules.slice(3).map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="gh-section gh-gallery-section gh-animate-slide-up-delay-4">
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
            <button className="gh-slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
            <button className="gh-slider-btn next-btn" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
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