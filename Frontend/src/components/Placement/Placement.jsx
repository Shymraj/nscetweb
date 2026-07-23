import "./Placement.css";

import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaBuilding,
  FaMoneyBillWave,
  FaChartLine,
  FaArrowRight,
  FaAward,
  FaBriefcase,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa";

/* ================= Recruiter Logos ================= */

import tcs from "../../assets/recruiters/tcs.webp";
import infosys from "../../assets/recruiters/infosys.webp";
import accenture from "../../assets/recruiters/accenture.png";
import cognizant from "../../assets/recruiters/cognizant.png";
import wipro from "../../assets/recruiters/wipro.png";
import hcl from "../../assets/recruiters/hcl.png";
import zoho from "../../assets/recruiters/zoho.png";
import capgemini from "../../assets/recruiters/capgemini.jpeg";
import ibm from "../../assets/recruiters/ibm.png";
import amazon from "../../assets/recruiters/amazon.webp";
import deloitte from "../../assets/recruiters/deloitte.jpeg";
import techm from "../../assets/recruiters/techm.jpg";

/* ================= Placement Stats ================= */

const stats = [

  {
    icon: <FaUserGraduate />,
    number: "95%",
    title: "Placement Rate",
    desc: "Consistent placement record with leading multinational companies.",
    color: "blue",
  },

  {
    icon: <FaMoneyBillWave />,
    number: "₹18 LPA",
    title: "Highest Package",
    desc: "Highest salary package offered through campus recruitment.",
    color: "orange",
  },

  {
    icon: <FaChartLine />,
    number: "₹5.2 LPA",
    title: "Average Package",
    desc: "Competitive salary packages offered every academic year.",
    color: "green",
  },

  {
    icon: <FaBuilding />,
    number: "250+",
    title: "Recruiters",
    desc: "Top national & international companies visit our campus.",
    color: "purple",
  },

];

/* ================= Achievement Cards ================= */

const achievements = [

  {
    icon: <FaAward />,
    number: "6000+",
    title: "Successful Alumni",
  },

  {
    icon: <FaBriefcase />,
    number: "5000+",
    title: "Placement Offers",
  },

  {
    icon: <FaHandshake />,
    number: "250+",
    title: "Industry Partners",
  },

  {
    icon: <FaLaptopCode />,
    number: "100+",
    title: "Training Programs",
  },

];

/* ================= Recruiters ================= */

const recruiters = [

  { name: "TCS", logo: tcs },
  { name: "Infosys", logo: infosys },
  { name: "Accenture", logo: accenture },
  { name: "Cognizant", logo: cognizant },
  { name: "Wipro", logo: wipro },
  { name: "HCL", logo: hcl },
  { name: "Zoho", logo: zoho },
  { name: "Capgemini", logo: capgemini },
  { name: "IBM", logo: ibm },
  { name: "Amazon", logo: amazon },
  { name: "Deloitte", logo: deloitte },
  { name: "Tech Mahindra", logo: techm },

];

function Placement() {

  return (

    <section className="placement">

      <div className="placement-glow glow1"></div>
      <div className="placement-glow glow2"></div>

      {/* ================= HEADER ================= */}

      <motion.div
        className="placement-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <span className="placement-subtitle">

          PLACEMENTS & CAREERS

        </span>

        <h2 className="placement-title">

          Building Careers With

          <span> Global Opportunities</span>

        </h2>

        <p className="placement-description">

          Our dedicated placement cell empowers students through
          industry-focused training, internships, career guidance
          and recruitment opportunities with leading multinational
          companies.

        </p>

        <div className="title-line"></div>

      </motion.div>
            {/* ================= PLACEMENT STATS ================= */}

      <div className="placement-grid">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            className={`placement-card ${item.color}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >

            <div className="card-glow"></div>

            <span className="placement-number">

              0{index + 1}

            </span>

            <div className="placement-icon">

              {item.icon}

            </div>

            <h3>

              {item.number}

            </h3>

            <h4>

              {item.title}

            </h4>

            <p>

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

      {/* ================= ACHIEVEMENTS ================= */}

      <motion.div
        className="achievement-strip"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        {achievements.map((item, index) => (

          <motion.div
            key={index}
            className="strip-card"
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
          >

            <div className="strip-icon">

              {item.icon}

            </div>

            <h2>

              {item.number}

            </h2>

            <span>

              {item.title}

            </span>

          </motion.div>

        ))}

      </motion.div>
            {/* ================= TOP RECRUITERS ================= */}

      <motion.div
        className="recruiters-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <div className="section-heading">

          <span>OUR RECRUITERS</span>

          <h2>

            Trusted By Global Companies

          </h2>

          <p>

            Every year leading multinational companies recruit
            talented NSCET students through campus placements,
            internships and industry collaborations.

          </p>

        </div>

        {/* Infinite Logo Slider */}

        <div className="logo-slider">

          <div className="logo-track">

            {[...recruiters, ...recruiters].map((item, index) => (

              <motion.div
                key={index}
                className="logo-card"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
              >

                <img
                  src={item.logo}
                  alt={item.name}
                />

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

      {/* ================= CTA ================= */}

      <motion.div
        className="placement-banner"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <div className="banner-content">

          <span>

            START YOUR SUCCESS JOURNEY

          </span>

          <h2>

            Shape Your Career With
            <br />

            <strong>NSCET Placement Cell</strong>

          </h2>

          <p>

            From professional training and certification programs
            to internships and campus recruitment,
            we prepare every student for a successful future.

          </p>

          <button className="placement-btn">

            View Placement Report

            <FaArrowRight />

          </button>

        </div>

        <div className="banner-stats">

          <div className="banner-box">

            <h3>250+</h3>

            <span>Recruiters</span>

          </div>

          <div className="banner-box">

            <h3>95%</h3>

            <span>Placement Rate</span>

          </div>

          <div className="banner-box">

            <h3>₹18 LPA</h3>

            <span>Highest Package</span>

          </div>

          <div className="banner-box">

            <h3>6000+</h3>

            <span>Successful Alumni</span>

          </div>

        </div>

      </motion.div>

    </section>

  );

}

export default Placement;