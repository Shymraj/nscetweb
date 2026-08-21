import React from "react";
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

// =========================================================
// FUTURE IMAGES IMPORT
// =========================================================
// import alumni1 from "../../assets/alumni1.jpg";
// import alumni2 from "../../assets/alumni2.jpg";
// import alumni3 from "../../assets/alumni3.jpg";

const statsData = [
  { id: 1, label: "Placement Rate", value: "95%+", icon: <FaChartLine /> },
  { id: 2, label: "Highest Package", value: "18 LPA", icon: <FaTrophy /> },
  { id: 3, label: "Top Recruiters", value: "85+", icon: <FaBuilding /> },
  { id: 4, label: "Total Offers", value: "450+", icon: <FaGraduationCap /> },
];

const reviewsData = [
  {
    id: 1,
    name: "Naveen Bharathi",
    batch: "Batch 2020 - 2024",
    role: "Software Engineer",
    company: "Zoho Corporation",
    package: "18 LPA",
    image: null,
    review: "The placement training and continuous support from the faculty helped me crack my dream company. The hands-on labs and coding culture at NSCET are truly unmatched.",
  },
  {
    id: 2,
    name: "Divya Prakash",
    batch: "Batch 2019 - 2023",
    role: "Cloud Analyst",
    company: "Amazon Web Services",
    package: "14 LPA",
    image: null,
    review: "NSCET provided me with the perfect platform to explore my potential. The industry-connect programs and modern campus facilities prepared me for the corporate world.",
  },
  {
    id: 3,
    name: "Karthik Raj",
    batch: "Batch 2018 - 2022",
    role: "System Engineer",
    company: "TCS Digital",
    package: "9 LPA",
    image: null,
    review: "Beyond academics, the college gave me a holistic development environment. From drone tech to hackathons, the Center of Excellence was a game changer for my career.",
  },
  {
    id: 4,
    name: "Anitha Ramesh",
    batch: "Batch 2020 - 2024",
    role: "UI/UX Developer",
    company: "Freshworks",
    package: "12 LPA",
    image: null,
    review: "Designing real-world applications during lab hours gave me the confidence to clear technical rounds easily. Super proud to be an NSCETian!",
  }
];

const AlumniReviews = () => {
  // Seamless continuous loop-க்காக array-வை duplicate செய்கிறோம்
  const doubleReviews = [...reviewsData, ...reviewsData];

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
          <span className="alumni-badge">PLACEMENT RECORD</span>
          <h2 className="alumni-title">Proven Track Record of Excellence</h2>
          <p className="alumni-desc">
            Our campus placements stand as a testament to our quality education, modern lab ecosystem, and industry-oriented syllabus.
          </p>

          {/* Stats Grid */}
          <div className="stats-grid">
            {statsData.map((stat) => (
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
            {doubleReviews.map((review, idx) => (
              <div className="stream-card" key={`${review.id}-${idx}`}>
                <div className="stream-card-top">
                  <div className="stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="package-pill">{review.package}</span>
                </div>

                <p className="stream-quote">"{review.review}"</p>

                <div className="stream-footer">
                  <div className="avatar-box">
                    {review.image ? (
                      <img src={review.image} alt={review.name} className="avatar-img" />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniReviews;