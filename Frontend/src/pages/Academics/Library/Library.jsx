import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaLaptopCode, 
  FaClock, 
  FaUserGraduate, 
  FaLayerGroup, 
  FaImages
} from 'react-icons/fa';
import './Library.css'; 


const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    let totalMilSecDur = 5000; 
    let steps = 200; 
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

  return <span>{count.toLocaleString()}+</span>;
};

const Library = () => {
  const [activeTab, setActiveTab] = useState('objectives');

  const collections = [
    { label: "VOLUMES", count: 22191, icon: <FaBook /> },
    { label: "TITLES", count: 5017, icon: <FaLayerGroup /> },
    { label: "JOURNALS", count: 144, icon: <FaBook /> }
  ];

  const objectivesList = [
    "To acquire, organize, and preserve academic resources effectively for learning & research.",
    "To support the college curriculum and research needs of faculty and students.",
    "To provide high-quality digital infrastructure and seamless access to e-journals & digital repositories.",
    "To foster a habit of continuous reading and self-paced technical learning among engineering scholars."
  ];

  const facilitiesList = [
    "Open Access System for seamless book selection and physical exploration.",
    "Online Public Access Catalogue (OPAC) for rapid digital search & retrieval.",
    "Well-Stocked Reference Section with rare technical volumes & research periodicals.",
    "Dedicated Quiet Study Space for deep research and individual reading.",
    "Well-Equipped Air-Conditioned Reading Hall with high seating capacity.",
    "Free High-Speed Wi-Fi & Internet Access across the library premises."
  ];

  const rulesList = [
    "Strict silence and decorum must be maintained inside the library at all times.",
    "College ID cards are mandatory for borrowing, returning, and accessing library resources.",
    "Borrowed books must be returned on or before the specified due date to avoid fines.",
    "Using mobile phones for audio calls or media playback inside the reading hall is strictly prohibited."
  ];
  
  const galleryImages = [
    "/library/1.jpeg", "/library/2.jpeg", "/library/3.jpeg", "/library/4.jpeg",
    "/library/5.jpeg", "/library/6.jpeg", "/library/7.jpeg", "/library/background.jpeg"
  ];

  const handleMouseMove = (e) => {
    for(const card of document.getElementsByClassName("m1-stat-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className="model1-landing-wrapper">
      
      {/* 👇 PLAIN IMAGE BANNER ADD PANNAPATTULLATHU 👇 */}
      <div 
        style={{ 
          backgroundImage: `url('/library/6.jpeg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          width: '100%', 
          aspectRatio: '8 / 3',
          minHeight: '350px' 
        }}
      >
      </div>

      <main className="m1-main-container">
        
        {/* ABOUT LIBRARY & E-LIBRARY DUAL CARDS */}
        <section className="m1-section m1-about-section" id="elibrary">
          <div className="m1-about-grid">
            <motion.div 
              className="m1-about-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="about-card-header">
                <div className="about-icon-bg"><FaBook /></div>
                <h2 className="m1-about-title">About NSCET Central Library</h2>
              </div>
              <p className="m1-about-text">
                The Library is a modern Learning Resource Centre with a dynamic learning space where students undertake a journey of knowledge acquisition and intellectual enrichment. We maintain a strong collection of over 21,810 books and 124 Indian and international journals, serving as a comprehensive storehouse of academic knowledge.
              </p>
            </motion.div>

            <motion.div 
              className="m1-about-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="about-card-header">
                <div className="about-icon-bg teal"><FaLaptopCode /></div>
                <h2 className="m1-about-title">About NSCET E-Library</h2>
              </div>
              <p className="m1-about-text">
                Our E-Library is equipped with 30 high-speed computer terminals with uninterrupted internet access, enabling students and faculty to explore e-books, online IEEE/Springer journals, and digital learning portals seamlessly. Technology-aided learning tools ensure instant access to global research literature.
              </p>
            </motion.div>
          </div>
        </section>

        {/* STATS & COLLECTIONS GRID (GLOWING SPOTLIGHT CARDS) */}
        <section className="m1-section m1-collections">
          <div className="section-title-wrap">
            <span className="section-subtitle-badge">COLLECTION STATISTICAL BREAKDOWN</span>
            <h2 className="m1-section-title">Library Resources & Departmental Holdings</h2>
          </div>
          
          <div className="m1-stats-grid" onMouseMove={handleMouseMove}>
            {collections.map((item, index) => (
              <div key={index} className="m1-stat-card">
                <div className="m1-stat-card-inner">
                  <div className="stat-card-icon">{item.icon}</div>
                  <span className="m1-stat-num">
                    <AnimatedNumber value={item.count} />
                  </span>
                  <span className="m1-stat-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORE LIBRARY TABS (OBJECTIVES / FACILITIES / RULES) */}
        <section className="m1-section m1-explore" id="explore">
          <div className="section-title-wrap">
            <span className="section-subtitle-badge">GUIDELINES & SERVICES</span>
            <h2 className="m1-section-title">Explore Library Operations</h2>
          </div>
          
          <div className="m1-tabs-wrapper">
            <div className="m1-tabs-nav">
              <button 
                className={`ntf-tab-chip ${activeTab === 'objectives' ? 'active' : ''}`} 
                onClick={() => setActiveTab('objectives')}
              >
                Objectives
              </button>
              <button 
                className={`ntf-tab-chip ${activeTab === 'facilities' ? 'active' : ''}`} 
                onClick={() => setActiveTab('facilities')}
              >
                Facilities
              </button>
              <button 
                className={`ntf-tab-chip ${activeTab === 'rules' ? 'active' : ''}`} 
                onClick={() => setActiveTab('rules')}
              >
                Rules & Regulations
              </button>
            </div>
            
            <div className="m1-tab-content-card">
              <div className="m1-tab-text">
                {activeTab === 'objectives' && (
                  <ul>
                    {objectivesList.map((item, i) => (
                      <li key={i}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'facilities' && (
                  <ul>
                    {facilitiesList.map((item, i) => (
                      <li key={i}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'rules' && (
                  <ul>
                    {rulesList.map((item, i) => (
                      <li key={i}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="m1-section m1-gallery">
          <div className="section-title-wrap">
            <span className="section-subtitle-badge">CAMPUS INFRASTRUCTURE</span>
            <h2 className="m1-section-title"><FaImages /> Central Library Gallery</h2>
          </div>
          
          <div className="m1-gallery-grid">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index} 
                className="m1-gallery-item-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img} alt={`Library ${index + 1}`} className="m1-gallery-img" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM INFO: WORKING HOURS & LIBRARIAN */}
        <section className="m1-section m1-bottom-info">
          
          <div className="m1-info-card">
            <h3 className="m1-info-title"><FaClock /> Working Hours</h3>
            <div className="m1-time-row">
              <span className="m1-time-day">Monday - Friday</span>
              <span className="m1-time-hours">8:30 AM - 5:30 PM</span>
            </div>
            <div className="m1-time-row">
              <span className="m1-time-day">Saturday</span>
              <span className="m1-time-hours">9:00 AM - 4:00 PM</span>
            </div>
            <div className="m1-time-row">
              <span className="m1-time-day">Sunday & Public Holidays</span>
              <span className="m1-time-hours m1-closed">Closed</span>
            </div>
          </div>

          <div className="m1-info-card">
            <h3 className="m1-info-title"><FaUserGraduate /> Chief Librarian</h3>
            <div className="m1-lib-profile">
              <img src="/library/Sinthan.jpg" alt="Dr. S. Sinthan" className="m1-lib-img" />
              <div className="m1-lib-details">
                <h4>Dr. S. Sinthan</h4>
                <span>Chief Librarian</span>
              </div>
            </div>
            <p className="m1-lib-quote">
              "Our library vows to shape future engineering leaders by providing unlimited access to global technical knowledge and cutting-edge digital resources."
            </p>
          </div>

        </section>

      </main>
    </div>
  );
};

export default Library;