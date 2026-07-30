import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaUserAlt } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const NSSTeam = () => {
  const teamMembers = [
    {
      name: "Mr. R. Pradeep Kumar",
      role: "Coordinator",
      dept: "Assistant Professor / ECE"
    },
    {
      name: "Mr. B. Nagarajan",
      role: "Coordinator",
      dept: "Assistant Professor / MECH"
    },
    {
      name: "Mr. C. Shiva",
      role: "Coordinator",
      dept: "Assistant Professor / EEE"
    },
    {
      name: "Mr. P. Arul Jebaraj",
      role: "Member",
      dept: "Assistant Professor / Civil"
    },
    {
      name: "Mr. N. Kesavamoorthy",
      role: "Member",
      dept: "Assistant Professor / CSE"
    },
    {
      name: "Mrs. N. Abirami",
      role: "Member",
      dept: "Assistant Professor / EEE"
    },
    {
      name: "Mr. K. Rajaguru",
      role: "Member",
      dept: "Assistant Professor / Physics"
    },
    {
      name: "Mr. J. Vinothkumar",
      role: "Member",
      dept: "Assistant Professor / AI&DS"
    },
    {
      name: "Mrs. M. Arulvizhi",
      role: "Member",
      dept: "Assistant Professor / Mathematics"
    }
  ];

  return (
    <section className="nss-section nss-team-section" id="nss-team">
      <div className="nss-bg-decoration dec-4"></div>
      <div className="nss-container">
        <motion.div 
          className="nss-section-header"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="nss-section-title">
            NSS Team
          </motion.h2>
          <motion.div variants={fadeUp} className="nss-accent-line center"></motion.div>
        </motion.div>

        <motion.div 
          className="nss-team-grid"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              className="nss-member-card"
              whileHover={{ y: -4 }}
            >
              <div className="nss-member-avatar">
                {member.role === 'Coordinator' ? <FaUserTie /> : <FaUserAlt />}
              </div>
              <div className="nss-member-info">
                <div className="nss-member-header">
                  <h3 className="nss-member-name">{member.name}</h3>
                  <span className={`nss-role-badge ${member.role.toLowerCase()}`}>
                    {member.role}
                  </span>
                </div>
                <p className="nss-member-dept">{member.dept}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NSSTeam;
