import React, { useState, useEffect } from 'react';
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
        
        <section className="gh-section gh-about-section gh-animate-slide-up">
          <div className="gh-about-text">
            <h2 className="gh-section-title">About Hostel</h2>
            <p>{hostelData.about}</p>
          </div>
        </section>

        {/* UPDATED: Centered Administration Section with Hover Effect (Strength removed) */}
        <section className="gh-section gh-animate-slide-up-delay-1">
          <div className="gh-admin-section">
            <h2 className="gh-section-title gh-hostel-admin-title" style={{ textAlign: 'center' }}>Hostel Administration</h2>
            
            {hostelData.administration.map((admin, idx) => (
              <div key={idx} className="gh-admin-animated-card">
                <div className="gh-admin-card-content">
                  <h3 style={{ color: '#1e3a8a', marginBottom: '5px' }}>{admin.name}</h3>
                  <p>{admin.role}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Facilities Section - Flex container add panni list-a center panniyachu */}
        <section className="gh-section gh-facilities-section gh-animate-slide-up-delay-2">
          <h2 className="gh-section-title center" style={{ textAlign: 'center' }}>Facilities</h2>
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
              <h2 className="gh-section-title">Cultural Activities</h2>
              <div className="gh-events-card">
                
                {/* UPDATED: Event Image Slider */}
                <div className="gh-event-image-wrapper" style={{ position: 'relative' }}>
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
          <h2 className="gh-section-title center" style={{ textAlign: 'center' }}>Photo Gallery</h2>
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