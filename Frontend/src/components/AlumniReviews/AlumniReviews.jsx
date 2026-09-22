import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AlumniReviews.css";
import { motion } from "framer-motion";
import { 
  FaQuoteLeft, 
  FaStar, 
  FaUserAlt, 
  FaTrophy, 
  FaBuilding, 
  FaChartLine, 
  FaGraduationCap 
} from "react-icons/fa";

const defaultStats = [
  { id: 1, label: "Placement Rate", value: "98%", icon: <FaChartLine /> },
  { id: 2, label: "Highest Package", value: "28 LPA", icon: <FaTrophy /> },
  { id: 3, label: "Top Recruiters", value: "60+", icon: <FaBuilding /> },
  { id: 4, label: "Total Offers", value: "200+", icon: <FaGraduationCap /> },
];

const fallbackReviews = [
  {
    id: 1,
    name: "Naveen Bharathi",
    batch: "Batch 2020 - 2024",
    role: "Software Engineer",
    company: "Zoho Corporation",
    package: "18 LPA",
    rating: 5,
    image_url: null,
    review: "The placement training and continuous support from the faculty helped me crack my dream company. The hands-on labs and coding culture at NSCET are truly unmatched.",
  },
  {
    id: 2,
    name: "Divya Prakash",
    batch: "Batch 2019 - 2023",
    role: "Cloud Analyst",
    company: "Amazon Web Services",
    package: "14 LPA",
    rating: 5,
    image_url: null,
    review: "NSCET provided me with the perfect platform to explore my potential. The industry-connect programs and modern campus facilities prepared me for the corporate world.",
  },
  {
    id: 3,
    name: "Karthik Raj",
    batch: "Batch 2018 - 2022",
    role: "System Engineer",
    company: "TCS Digital",
    package: "9 LPA",
    rating: 5,
    image_url: null,
    review: "Beyond academics, the college gave me a holistic development environment. From drone tech to hackathons, the Center of Excellence was a game changer for my career.",
  },
  {
    id: 4,
    name: "Anitha Ramesh",
    batch: "Batch 2020 - 2024",
    role: "UI/UX Developer",
    company: "Freshworks",
    package: "12 LPA",
    rating: 5,
    image_url: null,
    review: "Designing real-world applications during lab hours gave me the confidence to clear technical rounds easily. Super proud to be an NSCETian!",
  }
];

const AlumniReviews = () => {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [settings, setSettings] = useState({
    badge: "PLACEMENT RECORD",
    title: "Proven Track Record of Excellence",
    description: "Our campus placements stand as a testament to our quality education, modern lab ecosystem, and industry-oriented syllabus.",
    stat1_label: "Placement Rate",
    stat1_value: "98%",
    stat2_label: "Highest Package",
    stat2_value: "28 LPA",
    stat3_label: "Top Recruiters",
    stat3_value: "60+",
    stat4_label: "Total Offers",
    stat4_value: "200+"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reviewsRes, settingsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/admin/home/reviews").catch(() => null),
          axios.get("http://localhost:5000/api/admin/home/reviews-settings").catch(() => null)
        ]);

        if (reviewsRes && reviewsRes.data && reviewsRes.data.data && reviewsRes.data.data.length > 0) {
          setReviews(reviewsRes.data.data);
        }
        if (settingsRes && settingsRes.data && settingsRes.data.data) {
          setSettings(settingsRes.data.data);
        }
      } catch (err) {
        console.error("Error fetching alumni reviews:", err);
      }
    };

    fetchData();
  }, []);

  const activeStats = [
    { id: 1, label: settings.stat1_label || "Placement Rate", value: settings.stat1_value || "98%", icon: <FaChartLine /> },
    { id: 2, label: settings.stat2_label || "Highest Package", value: settings.stat2_value || "28 LPA", icon: <FaTrophy /> },
    { id: 3, label: settings.stat3_label || "Top Recruiters", value: settings.stat3_value || "60+", icon: <FaBuilding /> },
    { id: 4, label: settings.stat4_label || "Total Offers", value: settings.stat4_value || "200+", icon: <FaGraduationCap /> },
  ];

  // Seamless continuous loop
  const displayList = reviews.length > 0 ? reviews : fallbackReviews;
  const loopCount = displayList.length < 4 ? 4 : 2;
  const doubleReviews = Array(loopCount).fill(displayList).flat();

  return (
    <section className="alumni-section">
      <div className="alumni-glow glow-left"></div>
      <div className="alumni-glow glow-right"></div>

      <div className="alumni-container split-layout">
        {/* LEFT SIDE: STICKY METRICS PANEL */}
        <motion.div 
          className="sticky-metrics-panel"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="alumni-badge">{settings.badge || "PLACEMENT RECORD"}</span>
          <h2 className="alumni-title">{settings.title || "Proven Track Record of Excellence"}</h2>
          <p className="alumni-desc">
            {settings.description || "Our campus placements stand as a testament to our quality education, modern lab ecosystem, and industry-oriented syllabus."}
          </p>

          {/* Stats Grid */}
          <div className="stats-grid">
            {activeStats.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <h3 className="stat-value">{stat.value}</h3>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: AUTO-SCROLLING REVIEWS STREAM */}
        <div className="reviews-stream-wrapper">
          <div className="vertical-marquee">
            {doubleReviews.map((review, idx) => {
              const starsCount = Math.min(5, Math.max(1, review.rating || 5));
              const imgSrc = review.image_url
                ? (review.image_url.startsWith("http") ? review.image_url : `http://localhost:5000${review.image_url}`)
                : null;

              return (
                <div className="stream-card" key={`${review.id}-${idx}`}>
                  <div className="stream-card-top">
                    <div className="stars">
                      {[...Array(starsCount)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    {review.package && <span className="package-pill">{review.package}</span>}
                  </div>

                  <p className="stream-quote">"{review.review}"</p>

                  <div className="stream-footer">
                    <div className="avatar-box">
                      {imgSrc ? (
                        <img src={imgSrc} alt={review.name} className="avatar-img" />
                      ) : (
                        <div className="avatar-img placeholder-avatar">
                          <FaUserAlt />
                        </div>
                      )}
                      <div className="quote-badge">
                        <FaQuoteLeft />
                      </div>
                    </div>

                    <div className="user-details">
                      <h4 className="user-name">{review.name}</h4>
                      <p className="user-meta">
                        {review.batch} • <strong className="company-text">{review.company}</strong>
                      </p>
                      <span className="role-text">{review.role}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniReviews;