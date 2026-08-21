import "./Placement.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import {
  FaUserGraduate,
  FaBuilding,
  FaMoneyBillWave,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

/* ================= EXACT RECRUITER LOGOS ================= */
// Folder paths unified to lowercase "recruiters" for safety
import tcs1 from "../../assets/recruiters/tcs.png";
import schneider from "../../assets/recruiters/schneider.jpeg";
import webberax from "../../assets/recruiters/webberax.png";
import rds from "../../assets/recruiters/rds.jpeg";
import wgtech from "../../assets/recruiters/wgtech.png";
import alpha from "../../assets/recruiters/alpha.png";
import mssoftware from "../../assets/recruiters/M&S software.png";
import spark from "../../assets/recruiters/spark.png";
import tesla1 from "../../assets/recruiters/tesla.png";
import logoOg from "../../assets/recruiters/logo-og.png";

// Set 2 (New 5 Logos)
import ftl from "../../assets/recruiters/company.png";
import hcl from "../../assets/recruiters/HCL.png";
import infosys from "../../assets/recruiters/Infosys_logo.svg.png";
import tcs2 from "../../assets/recruiters/tcs.png";

/* 
  🛑 ERROR FIX: 
  'tesla-electronic-vclogo_2.jpg' file folder la illadha kaaranathala error varudhu. 
  App crash aagama iruka, temporary ah pazhaya 'tesla1' image-ye assign panniruken.
*/
const tesla2 = tesla1; 

/* ================= Placement Stats ================= */
const stats = [
  {
    icon: <FaUserGraduate />,
    number: "97.97%",
    title: "Placement Rate",
    desc: "Consistent placement record with leading multinational companies.",
    color: "blue",
  },
  {
    icon: <FaMoneyBillWave />,
    number: "₹28 LPA",
    title: "Highest Package",
    desc: "Highest salary package offered through campus recruitment.",
    color: "orange",
  },
  {
    icon: <FaChartLine />,
    number: "₹5 LPA",
    title: "Average Package",
    desc: "Competitive salary packages offered every academic year.",
    color: "green",
  },
  {
    icon: <FaBuilding />,
    number: "80+",
    title: "Recruiters",
    desc: "Top national & international companies visit our campus.",
    color: "purple",
  },
];

/* ================= Recruiters Array (Total 15) ================= */
const recruiters = [
  { name: "TCS", logo: tcs1 },
  { name: "Schneider Electric", logo: schneider },
  { name: "Webberax Solutions", logo: webberax },
  { name: "Ramesh Design Studio", logo: rds },
  { name: "WGTECH", logo: wgtech },
  { name: "Alpha Hospital Solutions", logo: alpha },
  { name: "M&S Software", logo: mssoftware },
  { name: "Spark Minda", logo: spark },
  { name: "Tesla Electric", logo: tesla1 },
  { name: "Indo Shell", logo: logoOg },
  { name: "FTL Maldives", logo: ftl },
  { name: "HCL", logo: hcl },
  { name: "Infosys", logo: infosys },
  { name: "Tata Consultancy Services", logo: tcs2 },
  { name: "Tesla Electronic", logo: tesla2 },
];

function Placement() {
  const navigate = useNavigate(); 

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
    </section>
  );
}

export default Placement;