import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaUserTie, FaRegStar } from 'react-icons/fa';

const AlumniMeets = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.3 } }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } }
  };

  return (
    <motion.div
      className="alumni-section"
      initial="hidden" animate="visible" variants={containerVariants}
    >
      <motion.h2 className="glam-title" variants={fadeInUp}>
        Alumni <span>Meets</span>
      </motion.h2>
      <motion.p className="section-intro" variants={fadeInUp} style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
        Celebrating our rich legacy through annual reunions. Reconnecting graduates, sharing success, and building the future.
      </motion.p>

      <div className="meets-bento-grid">

        {/* LATEST MEET: 2025 (Featured Large Card) */}
        <motion.div className="meet-card featured-meet" variants={popIn}>
          <div className="meet-year-badge">Upcoming Event</div>
          <div className="meet-content-inner">
            <h3 className="meet-event-title">Alumni Meet 2K25</h3>
            <div className="meet-meta-ribbon">
              <span className="meet-meta-item"><FaCalendarAlt /> 30.03.2025</span>
              <span className="meet-meta-item"><FaMapMarkerAlt /> Sir C.V. Raman Auditorium</span>
            </div>
            <p className="meet-description">
              Get ready! This year's meet continues the tradition, bringing alumni together to share success stories, network with industry peers, and strengthen connections with the institution.
            </p>
          </div>
        </motion.div>

        {/* PAST MEET: 2024 */}
        <motion.div className="meet-card standard-meet" variants={fadeInUp}>
          <div className="meet-year-badge archive">2024</div>
          <div className="meet-content-inner">
            <h3 className="meet-event-title">Alumni Meet 2K24</h3>
            <div className="meet-meta-ribbon">
              <span className="meet-meta-item"><FaCalendarAlt /> 20.04.2024</span>
              <span className="meet-meta-item"><FaMapMarkerAlt /> Sir C.V. Raman Auditorium</span>
            </div>
            <p className="meet-description">
              A fantastic gathering that brought our graduates together, sharing corporate success stories and strengthening their bond with the college.
            </p>
          </div>
        </motion.div>

        {/* HUGE EVENT SUMMARY: 2022 */}
        <motion.div className="meet-card expanded-meet" variants={fadeInUp}>
          <div className="meet-year-badge archive">2022</div>
          <div className="meet-content-inner">
            <h3 className="meet-event-title">Alumni Meet 2K22 (Mega Reunion)</h3>

            <div className="meet-meta-ribbon">
              <span className="meet-meta-item"><FaCalendarAlt /> 12.11.2022</span>
              <span className="meet-meta-item"><FaMapMarkerAlt /> Sir C.V. Raman Auditorium</span>
              <span className="meet-meta-item highlight-meta"><FaRegStar /> Batches: 2014 – 2022</span>
            </div>

            <p className="meet-description" style={{ marginBottom: '2rem' }}>
              This massive event brought together graduates from across all our core engineering factions including Civil, CSE, EEE, ECE, and Mechanical. Students actively shared their industrial experiences and delightfully reconnected with their mentors.
            </p>

            <div className="meet-guests-split">
              <div className="guest-list-panel primary-panel">
                <h4><FaUserTie /> Distinguished Guests</h4>
                <ul>
                  <li><strong>Mr. A. Rajkumar</strong> - Secretary</li>
                  <li><strong>Mr. A. S.R. Maheswaran</strong> - Secretary</li>
                  <li><strong>Mr. E. Naveen Ram</strong> - Joint Secretary</li>
                  <li><strong>Dr. C. Mathalai Sundaram</strong> - Principal</li>
                </ul>
              </div>
              <div className="guest-list-panel secondary-panel">
                <h4><FaUsers /> Key Faculty Present</h4>
                <ul>
                  <li>Mr. S. Harikishore</li>
                  <li>Mrs. P. Shantha Devi</li>
                  <li>Mr. A. Vennimalai Rajan</li>
                  <li>Mr. G. Arunkumar & Mr. R. Shanmugapriyan</li>
                  <li>Mrs. M. Kanimozhi & Mrs. M. Sindhu</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default AlumniMeets;
