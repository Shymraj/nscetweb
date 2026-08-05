import "./Placement.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 👉 1. Import useNavigate
import {
  FaUserGraduate,
  FaBuilding,
  FaMoneyBillWave,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

/* ================= Recruiter Logos ================= */
// Make sure these paths and extensions perfectly match your project folder!
import tcs from "../../assets/recruiters/tcs.webp";
import infosys from "../../assets/recruiters/infosys.webp";
import accenture from "../../assets/recruiters/accenture.png";
import cognizant from "../../assets/recruiters/cognizant.png";
import hcl from "../../assets/recruiters/hcl.png";
import zoho from "../../assets/recruiters/zoho.png";
import capgemini from "../../assets/recruiters/capgemini.jpeg";
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

/* ================= Recruiters ================= */
const recruiters = [
  { name: "TCS", logo: tcs },
  { name: "Infosys", logo: infosys },
  { name: "Zoho", logo: zoho },
  { name: "HCL", logo: hcl },
  { name: "Accenture", logo: accenture },
  { name: "Amazon", logo: amazon },
  { name: "Deloitte", logo: deloitte },
  { name: "Cognizant", logo: cognizant },
  { name: "Capgemini", logo: capgemini },
  { name: "Tech Mahindra", logo: techm },
];

function Placement() {
  const navigate = useNavigate(); // 👉 2. Initialize navigate function

  return (
    <section className="placement">
      <div className="placement-glow glow1"></div>
      <div className="placement-glow glow2"></div>

      {/* ================= HEADER ================= */}
      <motion.div
        className="placement-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="placement-subtitle">PLACEMENTS & CAREERS</span>
        <h2 className="placement-title">
          Building Careers With
          <span> Global Opportunities</span>
        </h2>
        <p className="placement-description">
          Our dedicated placement cell empowers students through industry-focused
          training, internships, career guidance and recruitment opportunities
          with leading multinational companies.
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
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -12, scale: 1.03 }}
          >
            <div className="card-glow"></div>
            <span className="placement-number">0{index + 1}</span>
            <div className="placement-icon">{item.icon}</div>
            <h3>{item.number}</h3>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ================= TOP RECRUITERS (GLASSMORPHISM WALL) ================= */}
      <motion.div
        className="recruiters-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-heading">
          <span>OUR RECRUITERS</span>
          <h2>Trusted By Global Companies</h2>
          <p>
            Every year leading multinational companies recruit talented NSCET
            students through campus placements, internships and industry
            collaborations.
          </p>
        </div>

        {/* Seamless Glass Wall Layout (Outer Border applied here) */}
        <div className="glass-wall-grid">
          {recruiters.map((item, index) => (
            <div key={index} className="glass-logo-cell">
              <div className="logo-img-container">
                <img src={item.logo} alt={item.name} className="recruiter-logo" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= CTA BANNER ================= */}
      <motion.div
        className="placement-banner"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="banner-content">
          <span>START YOUR SUCCESS JOURNEY</span>
          <h2>
            Shape Your Career With
            <br />
            <strong>NSCET Placement Cell</strong>
          </h2>
          <p>
            From professional training and certification programs to internships
            and campus recruitment, we prepare every student for a successful
            future.
          </p>
          {/* 👉 3. onClick function added to Button */}
          <button 
            className="placement-btn" 
            onClick={() => navigate('/placements')}
          >
            View Placement Report <FaArrowRight />
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