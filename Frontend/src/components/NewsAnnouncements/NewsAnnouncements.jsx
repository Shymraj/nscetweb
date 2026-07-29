import React from "react";
import "./NewsAnnouncements.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaRegCalendarAlt, FaFilePdf, FaLink, FaBullhorn } from "react-icons/fa";

// Placeholder image (Replace with your actual college event image)
const featuredImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const announcements = [
  {
    id: 1,
    title: "Revised Schedule for Even Semester Internal Examinations 2026",
    date: "Oct 24, 2026",
    type: "new",
  },
  {
    id: 2,
    title: "Official Holiday Circular for Diwali Festival & Campus Closure",
    date: "Oct 20, 2026",
    type: "pdf",
  },
  {
    id: 3,
    title: "Link to Download Hall Tickets for November University Exams",
    date: "Oct 18, 2026",
    type: "link",
  },
  {
    id: 4,
    title: "Call for Papers: International Conference on AI & Robotics (ICAIR)",
    date: "Oct 15, 2026",
    type: "standard",
  },
  {
    id: 5,
    title: "Campus Placement Drive: Tech Mahindra Phase 2 Registration",
    date: "Oct 12, 2026",
    type: "new",
  },
  {
    id: 6,
    title: "Hostel Fee Payment Deadline Extended for Final Year Students",
    date: "Oct 10, 2026",
    type: "standard",
  }
];

function NewsAnnouncements() {
  return (
    <section className="news-section">
      <div className="news-container">
        
        {/* ================= HEADER ================= */}
        <div className="news-header">
          <div className="header-left">
            <p className="news-subtitle">STAY UPDATED</p>
            <h2 className="news-main-title">Campus News & Announcements</h2>
          </div>
          <button className="view-all-btn">
            View All Updates <FaArrowRight />
          </button>
        </div>

        {/* ================= CONTENT SPLIT ================= */}
        <div className="news-grid">
          
          {/* LEFT: FEATURED NEWS */}
          <motion.div 
            className="featured-news-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="featured-card">
              <div className="featured-image-wrapper">
                <img src={featuredImage} alt="Featured College Event" className="featured-image" />
                <div className="featured-tag">Campus Event</div>
              </div>
              
              <div className="featured-content">
                <div className="featured-meta">
                  <FaRegCalendarAlt /> <span>October 25, 2026</span>
                </div>
                <h3 className="featured-title">
                  National Tech Symposium 2026: A Grand Success with over 50+ Colleges Participating
                </h3>
                <p className="featured-description">
                  Our annual technical symposium witnessed an overwhelming response with 
                  students showcasing groundbreaking innovations in AI, Robotics, and IoT. 
                  Chief Guest Dr. APJ Abdul Kalam Innovation Award winners were announced.
                </p>
                <button className="read-more-link">
                  Read Full Story <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: NOTICE BOARD */}
          <motion.div 
            className="notice-board-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="notice-board-wrapper">
              <div className="notice-board-header">
                <h3><FaBullhorn className="board-icon" /> Notice Board</h3>
              </div>
              
              <div className="notice-scroll-area">
                <ul className="notice-list">
                  {announcements.map((item) => (
                    <li className="notice-item" key={item.id}>
                      <div className="notice-meta">
                        <span className="notice-date">{item.date}</span>
                        {item.type === "new" && <span className="badge badge-new">NEW</span>}
                        {item.type === "pdf" && <span className="badge badge-pdf"><FaFilePdf /> PDF</span>}
                        {item.type === "link" && <span className="badge badge-link"><FaLink /> LINK</span>}
                      </div>
                      <a href="#/" className="notice-title">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="notice-board-footer">
                <button className="load-more-text">Load Older Notices</button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default NewsAnnouncements;