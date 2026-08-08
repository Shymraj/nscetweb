import React from "react";
import "./AlumniReviews.css";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserAlt } from "react-icons/fa";

// =========================================================
// FUTURE IMAGES IMPORT (Images vandhadhum idhai uncomment pannunga)
// =========================================================
// import alumni1 from "../../assets/alumni1.jpg";
// import alumni2 from "../../assets/alumni2.jpg";
// import alumni3 from "../../assets/alumni3.jpg";

const reviewsData = [
  {
    id: 1,
    name: "Naveen Bharathi",
    batch: "Batch 2020 - 2024",
    role: "Software Engineer",
    company: "Zoho Corporation",
    image: null, // Future-la images vandhadhum: image: alumni1, nu mathikonga
    review: "The placement training and continuous support from the faculty helped me crack my dream company. The hands-on labs and coding culture at NSCET are truly unmatched.",
  },
  {
    id: 2,
    name: "Divya Prakash",
    batch: "Batch 2019 - 2023",
    role: "Cloud Analyst",
    company: "Amazon Web Services",
    image: null, // Future-la: image: alumni2,
    review: "NSCET provided me with the perfect platform to explore my potential. The industry-connect programs and modern campus facilities prepared me for the corporate world.",
  },
  {
    id: 3,
    name: "Karthik Raj",
    batch: "Batch 2018 - 2022",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    image: null, // Future-la: image: alumni3,
    review: "Beyond academics, the college gave me a holistic development environment. From drone tech to hackathons, the Center of Excellence was a game changer for my career.",
  }
];

const AlumniReviews = () => {
  return (
    <section className="alumni-section">
      <div className="alumni-glow glow-left"></div>
      <div className="alumni-glow glow-right"></div>

      <div className="alumni-container">
        {/* Header */}
        <motion.div 
          className="alumni-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="alumni-subtitle">STUDENT SUCCESS STORIES</span>
          <h2 className="alumni-title">Hear From Our Proud Alumni</h2>
          <p className="alumni-desc">
            Discover how NSCET has transformed the lives and careers of our students, 
            empowering them to reach top positions globally.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="alumni-grid">
          {reviewsData.map((review, index) => (
            <motion.div 
              className="review-card" 
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Floating Avatar (With Fallback Space) */}
              <div className="review-avatar-wrapper">
                {review.image ? (
                  <img src={review.image} alt={review.name} className="review-avatar" />
                ) : (
                  <div className="review-avatar placeholder-avatar">
                    <FaUserAlt />
                  </div>
                )}
                <div className="quote-badge">
                  <FaQuoteLeft />
                </div>
              </div>

              {/* Card Content */}
              <div className="review-content">
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                
                <p className="review-text">"{review.review}"</p>
                
                <div className="alumni-details">
                  <h4 className="alumni-name">{review.name}</h4>
                  <span className="alumni-batch">{review.batch}</span>
                  <div className="alumni-company">
                    <strong>{review.role}</strong> @ {review.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniReviews;