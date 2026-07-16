import "./WhyChoose.css";
import {
  FaFlask,
  FaChalkboardTeacher,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WhyChoose() {
  const features = [
    {
      icon: <FaFlask />,
      title: "Modern Laboratories",
      desc: "State-of-the-art laboratories equipped with advanced technology for practical learning.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Faculty",
      desc: "Dedicated professors and mentors committed to academic excellence and innovation.",
    },
    {
      icon: <FaIndustry />,
      title: "Industry Collaboration",
      desc: "Strong partnerships with leading industries for internships, projects, and training.",
    },
    {
      icon: <FaBriefcase />,
      title: "Excellent Placements",
      desc: "Outstanding placement opportunities with top recruiters and multinational companies.",
    },
  ];

  return (
    <section className="whychoose">

      <div className="why-header">
        <p className="why-subtitle">WHY CHOOSE NSCET</p>

        <h2 className="why-title">
          Excellence Beyond Classrooms
        </h2>

        <p className="why-description">
          NSCET provides an inspiring learning environment with modern
          infrastructure, experienced faculty, and industry-focused education.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="why-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default WhyChoose;