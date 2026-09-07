import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaUserAlt } from 'react-icons/fa';

import imgPradeep from '../Images/pradeepkumar.jpg';
import imgNagarajan from '../Images/nagarajan.jpg';
import imgShiva from '../Images/shiva.jpg';
import imgArulJebaraj from '../Images/aruljebaraj.jpg';
import imgKesavamoorthy from '../Images/kesavamoorthy.jpg';
import imgAbirami from '../Images/Abirami.jpg';
import imgRajaguru from '../Images/rajaguru.jpg';
import imgVinothkumar from '../Images/vinothkumar.jpg';
import imgArulvizhi from '../Images/arulvizhi.jpg';

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
      dept: "Assistant Professor / ECE",
      image: imgPradeep,
      img: "/ECE/pradeepkumar.jpg" 
    },
    {
      name: "Mr. B. Nagarajan",
      role: "Coordinator",
      dept: "Assistant Professor / MECH",
      image: imgNagarajan,
      img: "/MECH/nagarajan.jpg" 
    },
    {
      name: "Mr. C. Shiva",
      role: "Coordinator",
      dept: "Assistant Professor / EEE",
      image: imgShiva,
      img: "/EEE/shiva.jpg" 
    },
    {
      name: "Mr. P. Arul Jebaraj",
      role: "Member",
      dept: "Assistant Professor / Civil",
      image: imgArulJebaraj,
      img: "/CIVIL/aruljebaraj.jpg"
    },
    {
      name: "Mr. N. Kesavamoorthy",
      role: "Member",
      dept: "Assistant Professor / IT",
      image: imgKesavamoorthy,
      img: "/IT/kesavamoorthy.jpg"
    },
    {
      name: "Mrs. N. Abirami",
      role: "Member",
      dept: "Assistant Professor / EEE",
      image: imgAbirami,
      img: "/EEE/Abirami.jpg"
    },
    {
      name: "Mr. K. Rajaguru",
      role: "Member",
      dept: "Assistant Professor / Physics",
      dept: "Assistant Professor / S&H",
      image: imgRajaguru,
      img: "/S&H/rajaguru.jpg"
    },
    {
      name: "Mr. J. Vinothkumar",
      role: "Member",
      dept: "Assistant Professor / AI&DS",
      image: imgVinothkumar,
      img: "/AIDS/vinothkumar.jpg"
    },
    {
      name: "Mrs. M. Arulvizhi",
      role: "Member",
      dept: "Assistant Professor / Mathematics",
      dept: "Assistant Professor / S&H",
      image: imgArulvizhi,
      img: "/S&H/arulvizhi.jpg"
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
                {member.image || member.img ? (
                  <img src={member.image || member.img} alt={member.name} className="nss-member-img" />
                ) : (
                  member.role === 'Coordinator' ? <FaUserTie /> : <FaUserAlt />
                )}
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