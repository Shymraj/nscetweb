import "./WhyChoose.css";
import { motion } from "framer-motion";

import {
  FaFlask,
  FaChalkboardTeacher,
  FaIndustry,
  FaBriefcase,
  FaArrowRight,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFlask />,
    title: "Advanced Laboratories",
    desc:
      "Experience hands-on learning with cutting-edge laboratories, research facilities and innovation spaces designed for future engineers.",
    badge: "25+ Labs",
  },

  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    desc:
      "Learn from experienced professors, researchers and industry mentors dedicated to academic excellence and student success.",
    badge: "250+ Faculty",
  },

  {
    icon: <FaIndustry />,
    title: "Industry Connect",
    desc:
      "Strong collaborations with industries through internships, live projects, industrial visits and professional certifications.",
    badge: "100+ Partners",
  },

  {
    icon: <FaBriefcase />,
    title: "Career & Placements",
    desc:
      "Excellent placement training with top recruiters, career guidance and entrepreneurship support for every student.",
    badge: "95% Placement",
  },
];

function WhyChoose() {
  return (
    <section className="whychoose">

      {/* ================= Header ================= */}

      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="why-subtitle">
          WHY CHOOSE NSCET
        </p>

        <h2 className="why-title">
          Excellence Beyond Classrooms
        </h2>

        <p className="why-description">
          Discover a world-class learning ecosystem that blends
          academic excellence, industry exposure, innovation,
          research and outstanding career opportunities to prepare
          students for a successful future.
        </p>

        <div className="title-line"></div>
      </motion.div>

      {/* ================= Feature Cards ================= */}

      <div className="why-grid">
                {features.map((item, index) => (

          <motion.div
            key={index}
            className="why-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >

            <div className="card-glow"></div>

            <div className="why-icon">
              {item.icon}
            </div>

            <span className="why-badge">
              {item.badge}
            </span>

            <span className="why-number">
              0{index + 1}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

            <button className="why-btn">

              Learn More

              <FaArrowRight />

            </button>

          </motion.div>

        ))}

      </div>

      {/* ================= Premium Banner ================= */}

      <motion.div
        className="why-banner"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="banner-left">

          <div className="award-icon">
            <FaAward />
          </div>

          <h2>
            Shape Your Future with NSCET
          </h2>

          <p>
            Empowering students through innovation,
            research, industry collaboration,
            global opportunities and career excellence.
          </p>

        </div>

        <div className="banner-right">
                    <div className="banner-stat">
            <h3>95%</h3>
            <span>Placement Success</span>
          </div>

          <div className="banner-stat">
            <h3>6000+</h3>
            <span>Students</span>
          </div>

          <div className="banner-stat">
            <h3>250+</h3>
            <span>Faculty</span>
          </div>

          <div className="banner-stat">
            <h3>30+</h3>
            <span>Departments</span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}
        export default WhyChoose;
