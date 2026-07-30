import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandHoldingHeart, 
  FaHeartbeat, 
  FaGraduationCap, 
  FaLeaf, 
  FaHandsHelping 
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Activities = () => {
  const activities = [
    {
      title: "Community Service",
      desc: "Blood donation camps, tree plantation, awareness drives.",
      icon: <FaHandHoldingHeart />,
      badge: "Social Welfare"
    },
    {
      title: "Health & Hygiene Programs",
      desc: "Medical camps, sanitation drives, nutrition awareness.",
      icon: <FaHeartbeat />,
      badge: "Healthcare"
    },
    {
      title: "Educational Programs",
      desc: "Literacy campaigns, career guidance, personality development.",
      icon: <FaGraduationCap />,
      badge: "Education"
    },
    {
      title: "Environmental Awareness",
      desc: "Cleanliness drives, eco-friendly initiatives, conservation programs.",
      icon: <FaLeaf />,
      badge: "Environment"
    },
    {
      title: "Relief Work",
      desc: "Disaster relief, fundraising, helping the needy.",
      icon: <FaHandsHelping />,
      badge: "Humanitarian"
    }
  ];

  return (
    <section className="nss-section nss-activities-section" id="nss-activities">
      <div className="nss-bg-decoration dec-3"></div>
      <div className="nss-container">
        <motion.div 
          className="nss-section-header"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="nss-section-title">
            Activities Conducted by NSS
          </motion.h2>
          <motion.div variants={fadeUp} className="nss-accent-line center"></motion.div>
        </motion.div>

        <motion.div 
          className="nss-activities-grid"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {activities.map((act, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              className="nss-activity-card"
              whileHover={{ y: -6 }}
            >
              <div className="nss-activity-badge">{act.badge}</div>
              <div className="nss-activity-icon">
                {act.icon}
              </div>
              <h3 className="nss-activity-title">{act.title}</h3>
              <p className="nss-activity-desc">{act.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
