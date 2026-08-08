import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaLightbulb, 
  FaHandsHelping, 
  FaAward, 
  FaGlobeAsia 
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

const Objectives = () => {
  const objectives = [
    {
      icon: <FaUsers />,
      title: "Social & Civic Responsibility",
      desc: "Develop a sense of social and civic responsibility among student volunteers."
    },
    {
      icon: <FaLightbulb />,
      title: "Community Understanding",
      desc: "Understand the community and its problems to address challenges effectively."
    },
    {
      icon: <FaHandsHelping />,
      title: "Practical Social Solutions",
      desc: "Encourage students to find practical, sustainable solutions to social issues."
    },
    {
      icon: <FaAward />,
      title: "Leadership & Teamwork",
      desc: "Develop leadership skills, organization capacity, and spirit of teamwork."
    },
    {
      icon: <FaGlobeAsia />,
      title: "National Integration",
      desc: "Promote national integration, communal harmony and social equality."
    }
  ];

  return (
    <section className="nss-section nss-objectives-section" id="nss-objectives">
      <div className="nss-bg-decoration dec-2"></div>
      <div className="nss-container">
        <motion.div 
          className="nss-section-header"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="nss-section-title">
            Objectives of NSS
          </motion.h2>
          <motion.div variants={fadeUp} className="nss-accent-line center"></motion.div>
        </motion.div>

        <motion.div 
          className="nss-objectives-grid"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {objectives.map((obj, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              className="nss-objective-card"
              whileHover={{ y: -6 }}
            >
              <div className={`nss-obj-icon-wrap obj-icon-bg-${(index % 5) + 1}`}>
                {obj.icon}
              </div>
              <h3 className="nss-obj-title">{obj.title}</h3>
              <p className="nss-obj-desc">{obj.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Objectives;
