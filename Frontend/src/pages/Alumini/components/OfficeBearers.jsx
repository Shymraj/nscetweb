import React from 'react';
import { motion } from 'framer-motion';

const OfficeBearers = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const bearers = [
    {
      position: "President",
      responsibilities: [
        "Shall preside over all Association activities and meetings.",
        "Distribute responsibilities among members."
      ],
      details: ["Mr. M. Rajaganesh, Mech"]
    },
    {
      position: "Vice President",
      responsibilities: [
        "Preside over committee meetings in the absence of the President."
      ],
      details: ["Ms. N. Priyadharshan, EEE"]
    },
    {
      position: "Secretary",
      responsibilities: [
        "Coordinate all the Association activities."
      ],
      details: ["Ms. M. Kanimozhi, AP / Civil"]
    },
    {
      position: "Treasurer",
      responsibilities: [
        "Maintain an account of the association's general funds."
      ],
      details: ["Mr. A. Vennimalai Rajan, AP / Mech"]
    },
    {
      position: "Executive Committee Members",
      responsibilities: [
        "Monitor daily operations of the association.",
        "Establish guidelines, rules, and regulations for activities.",
        "Maintain frequent communication between members.",
        "Manage financial records and arrange audits.",
        "Inform members about upcoming activities.",
        "Serve as association mentors."
      ],
      details: [
        "Mr. S. Harikishore, AP / Mech",
        "Ms. M. Sindhu, AP / Civil",
        "Mr. G. Arun Kumar, AP / Mech",
        "Ms. Shantha Devi, AP / ECE",
        "Mr. R. Shanmugapriyan, AP / Civil",
        "Mr. Prakash - Civil",
        "Mr. N. Balamurugan - Mech",
        "Ms. R. Nivethitha Muthupandi - EEE",
        "Ms. A. Priyadharshini - ECE",
        "Ms. M. Kasi Vishalatchi - CSE",
        "Mr. M. Arunprakash - Mech",
        "Mr. K. Anand Raj - CSE"
      ]
    }
  ];

  return (
    <motion.div
      className="alumni-section"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.h2 className="glam-title" variants={fadeInUp}>
        Office <span>Bearers</span>
      </motion.h2>

      <motion.p className="section-intro" variants={fadeInUp}>
        Alumni Association Office Bearers
      </motion.p>

      <motion.div className="alumni-table-container mt-4" variants={fadeInUp}>
        <div className="table-responsive">
          <table className="alumni-table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Position</th>
                <th style={{ width: '45%' }}>Responsibilities</th>
                <th style={{ width: '35%' }}>Name & Details</th>
              </tr>
            </thead>
            <tbody>
              {bearers.map((item, index) => (
                <tr key={index}>
                  <td className="font-semibold text-primary">{item.position}</td>
                  <td>
                    <ul className="alumni-bullets">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="alumni-sublist">
                      {item.details.map((detail, i) => (
                        <li key={i}><strong>{detail}</strong></li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfficeBearers;
