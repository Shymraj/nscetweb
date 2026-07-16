import "./Departments.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const departments = [
  {
    title: "Computer Science & Engineering",
    description: "Building future software engineers and innovators.",
  },
  {
    title: "Artificial Intelligence & Data Science",
    description: "Creating intelligent systems with modern AI technologies.",
  },
  {
    title: "Electronics & Communication",
    description: "Empowering communication and embedded technologies.",
  },
  {
    title: "Electrical & Electronics",
    description: "Power systems, automation and electrical innovation.",
  },
  {
    title: "Mechanical Engineering",
    description: "Designing the future of machines and manufacturing.",
  },
  {
    title: "Civil Engineering",
    description: "Building sustainable infrastructure for tomorrow.",
  },
];

function Departments() {
  return (
    
    <section className="departments">

      <div className="department-header">
        <p className="department-subtitle">
          OUR DEPARTMENTS
        </p>

        <h2 className="department-title">
          Explore Our Academic Programs
        </h2>

        <p className="department-description">
          Discover diverse engineering disciplines designed to prepare students
          for successful careers and innovative research.
        </p>
      </div>

      <div className="department-grid">
        {departments.map((dept, index) => (
          <motion.div
            className="department-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="department-image">
              Image Coming Soon
            </div>

            <div className="department-content">
              <h3>{dept.title}</h3>

              <p>{dept.description}</p>

              <button>
                Explore <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Departments;