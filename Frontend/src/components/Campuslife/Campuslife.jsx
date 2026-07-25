import "./Campuslife.css";
import { motion } from "framer-motion";

import {
  FaBookOpen,
  FaLaptopCode,
  FaBasketballBall,
  FaHome,
  FaArrowRight,
  FaWifi,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

import campusImg from "../../assets/lab.jpg";
import libraryImg from "../../assets/library.jpg";
import labImg from "../../assets/lab.jpg";
import sportsImg from "../../assets/sports.jpeg";
import hostelImg from "../../assets/hostel.jpg";

const facilities = [
  {
    title: "Computer Labs",
    subtitle:
      "Advanced laboratories with 300+ high-performance computer systems and high-speed internet connectivity.",
    image: labImg,
    icon: <FaLaptopCode />,
    badge: "300+ Systems",
  },

  {
    title: "Sports Complex",
    subtitle:
      "Indoor and outdoor sports facilities that encourage fitness, teamwork and leadership.",
    image: sportsImg,
    icon: <FaBasketballBall />,
    badge: "Indoor + Outdoor",
  },

  {
    title: "Hostel Facilities",
    subtitle:
      "Safe and comfortable hostels with Wi-Fi, hygienic food, security and recreational facilities.",
    image: hostelImg,
    icon: <FaHome />,
    badge: "24×7 Security",
  },

  {
    title: "Digital Library",
    subtitle:
      "Modern library with 50,000+ books, journals, digital resources and research support.",
    image: libraryImg,
    icon: <FaBookOpen />,
    badge: "50,000+ Books",
  },
];

function CampusLife() {
  return (
    <section className="campus-life">

      {/* ================= HEADER ================= */}

      <motion.div
        className="campus-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="campus-tag">
          CAMPUS LIFE
        </p>

        <h2>
          Experience Learning Beyond Classrooms
        </h2>

        <p>
          Discover a vibrant campus where innovation, knowledge,
          technology and student life come together to create an
          unforgettable educational experience.
        </p>

        <div className="title-line"></div>
      </motion.div>

      {/* ================= MAIN GRID ================= */}

      <div className="campus-wrapper">

        {/* ================= FEATURE CARD ================= */}

        <motion.div
          className="campus-feature"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <img
            src={campusImg}
            alt="Central Library"
          />

          <div className="overlay"></div>

          <div className="feature-content">

            <div className="feature-icon">
              <FaBookOpen />
            </div>

            <span className="feature-badge">
              Featured Facility
            </span>

            <h3>
              Central Library
            </h3>

            <p>
              One of the finest academic libraries featuring
              <strong> 50,000+ books</strong>, international journals,
              digital learning resources, discussion halls,
              research support and modern e-library facilities.
            </p>

            <button className="feature-btn">
              Explore Library
              <FaArrowRight />
            </button>

          </div>

        </motion.div>

        {/* ================= RIGHT GRID ================= */}

        <div className="facility-grid">

          {facilities.map((item, index) => (

            <motion.div
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="overlay"></div>

              <div className="facility-badge">
                {item.badge}
              </div>

              <div className="facility-content">

                <div className="facility-icon">
                  {item.icon}
                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.subtitle}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* ================= PREMIUM STATS ================= */}

      <motion.div
        className="campus-stats"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="stat-box">
          <h3>50K+</h3>
          <span>Library Books</span>
        </div>

        <div className="stat-box">
          <h3>300+</h3>
          <span>Computer Systems</span>
        </div>

        <div className="stat-box">
          <h3>25+</h3>
          <span>Modern Laboratories</span>
        </div>

        <div className="stat-box">
          <h3>
            <FaWifi />
          </h3>
          <span>100% Wi-Fi Campus</span>
        </div>

      </motion.div>

      {/* ================= PREMIUM BANNER ================= */}

      <motion.div
        className="campus-banner"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      </motion.div>

    </section>
  );
}

export default CampusLife;