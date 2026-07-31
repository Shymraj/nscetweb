import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsAnnouncements.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaRegCalendarAlt, FaFilePdf, FaLink, FaBullhorn } from "react-icons/fa";

// Placeholder image (Replace with your actual college event image)
const featuredImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

const defaultAnnouncements = [
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
  const [announcements, setAnnouncements] = useState(defaultAnnouncements);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/home/news");
        if (res.data && res.data.data && res.data.data.length > 0) {
          // Format the DB records to match the component's expected format
          const formattedNews = res.data.data.map((item, index) => {
            const dateObj = new Date(item.date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            return {
              id: item.id,
              title: item.title,
              date: formattedDate !== "Invalid Date" ? formattedDate : item.date,
              // Make the most recent item 'new' so it gets the badge just like the static design
              type: index === 0 ? "new" : "standard",
              content: item.content
            };
          });
          setAnnouncements(formattedNews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);
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
                    <li className={`notice-item ${item.type === 'new' ? 'is-new' : ''}`} key={item.id}>
                      <div className="notice-meta">
                        {item.type === "new" && <span className="badge badge-new">NEW</span>}
                        <span className="notice-date">{item.date}</span>
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