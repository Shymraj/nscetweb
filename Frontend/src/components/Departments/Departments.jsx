import "./Departments.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import cse from "../../assets/departments/cse.jpg";
import aids from "../../assets/departments/aids.jpg";
import ece from "../../assets/departments/ece.jpg";
import eee from "../../assets/departments/eee.jpg";
import mech from "../../assets/departments/mech.jpg";
import civil from "../../assets/departments/civil.jpg";

const departments = [
  {
    image: cse,
    title: "Computer Science & Engineering",
    description:
      "Building future software engineers through innovation, coding excellence and industry-oriented learning.",
  },
  {
    image: aids,
    title: "Artificial Intelligence & Data Science",
    description:
      "Empowering students with Artificial Intelligence, Machine Learning and Data Analytics.",
  },
  {
    image: ece,
    title: "Electronics & Communication Engineering",
    description:
      "Creating communication professionals with expertise in embedded systems and IoT.",
  },
  {
    image: eee,
    title: "Electrical & Electronics Engineering",
    description:
      "Developing engineers for smart power systems, automation and renewable energy.",
  },
  {
    image: mech,
    title: "Mechanical Engineering",
    description:
      "Designing modern machines through manufacturing, CAD/CAM and industrial technologies.",
  },
  {
    image: civil,
    title: "Civil Engineering",
    description:
      "Building sustainable infrastructure with innovative construction technologies.",
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
          Choose from world-class engineering programs designed to prepare
          students for innovation, research and successful careers.
        </p>

      </div>

      <div className="department-grid">

        {departments.map((dept, index) => (

          <motion.div
            key={index}
            className="department-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
          >

            {/* Image */}

            <div className="department-image">

              <img
                src={dept.image}
                alt={dept.title}
              />

              <div className="department-overlay">

                <span className="department-tag">
                  Department
                </span>

                <h4>
                  {dept.title}
                </h4>

              </div>

            </div>

            {/* Content */}

            <div className="department-content">

              <p>
                {dept.description}
              </p>

              <button>

                Explore Department

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Departments;