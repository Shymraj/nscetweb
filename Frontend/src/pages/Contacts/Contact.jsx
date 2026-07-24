import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Contact.css";

import heroImg from "../../assets/Img/contact_hero_generated.png";

const Contact = () => {
  // Scroll Entrance Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const intercomData = [
    { location: "Reception 1", phone: "263900", intercom: ["900"] },
    { location: "Reception 2", phone: "263901", intercom: ["901"] },
    { location: "Secretary Room", phone: "263903", intercom: ["903"] },
    { location: "Principal", phone: "263904", intercom: ["904"] },
    { location: "Vice Principal", phone: "263905", intercom: ["905"] },
    { location: "Placement Cell", phone: "263902", intercom: ["902"] },
    { location: "Placement Officer", phone: "-", intercom: ["906"] },
    { location: "Exam Cell", phone: "-", intercom: ["907"] },
    { location: "ECE Department", phone: "-", intercom: ["908"] },
    { location: "Civil Department", phone: "-", intercom: ["909"] },
    { location: "CSE Department", phone: "-", intercom: ["910"] },
    { location: "Mechanical Department", phone: "-", intercom: ["911"] },
    { location: "EEE Department", phone: "-", intercom: ["912"] },
    { location: "S&H Department", phone: "-", intercom: ["913"] },
    { location: "Library", phone: "-", intercom: ["914"] },
    { location: "Store", phone: "-", intercom: ["915"] },
    { location: "Admission Cell", phone: "-", intercom: ["916", "917"] },
    { location: "QIC Cell", phone: "-", intercom: ["918"] },
    { location: "Auditorium", phone: "-", intercom: ["919"] },
    { location: "Boys Hostel", phone: "-", intercom: ["920"] },
    { location: "Boys Hostel Security", phone: "-", intercom: ["921"] },
    { location: "Security Main Gate", phone: "-", intercom: ["922"] },
    { location: "AI & DS / IT Department", phone: "-", intercom: ["923"] },
    { location: "Civil SOM Lab", phone: "-", intercom: ["924"] },
    { location: "Mechanical Workshop", phone: "-", intercom: ["925"] },
    { location: "Canteen", phone: "-", intercom: ["926"] },
    { location: "Design Room", phone: "-", intercom: ["927"] },
    { location: "PD Room", phone: "-", intercom: ["928"] },
    { location: "Office", phone: "-", intercom: ["929", "931"] },
    { location: "Principal Office", phone: "-", intercom: ["930"] },
    { location: "Server Room", phone: "-", intercom: ["946"] },
  ];

  return (
    <div className="contact-container">
      <PageBanner
        title="NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY"
        subtitle={
          <>
            Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai<br />
            Accredited by NAAC with 'A' Grade | Recognized under 2(f) of the UGC Act, 1956<br />
            An ISO 9001:2015 Certified Institution
          </>
        }
        hideBreadcrumb={true}
        backgroundImage={heroImg}
      />

      <main className="content-wrapper">
        <div className="content-inner">
          {/* BENTO GRID: CONTACT INFO */}
          <motion.div
            className="contact-bento"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
          <motion.div
            className="contact-card primary"
            variants={zoomIn}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>Headquarters & Campus</h3>
            <p><strong>Postbox No:</strong> 60</p>
            <p>Annanji (P.O), Vadapudupatti,</p>
            <p>Theni - 625531, Tamil Nadu, India.</p>
          </motion.div>

          <motion.div
            className="contact-card secondary"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="contact-icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>General Contact</h3>
            <p>04546 - 263900</p>
            <p>04546 - 263901</p>
            <p>04546 - 263902</p>
          </motion.div>

          <motion.div
            className="contact-card tertiary"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="contact-icon-wrapper">
              <FaMobileAlt className="contact-icon" />
            </div>
            <h3>Admissions & Mobile</h3>
            <p>+91 90951 00235</p>
            <p>+91 90951 00278</p>
            <br />
            <a href="mailto:admissions@nscet.org" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
              <FaEnvelope style={{ color: "var(--primary-accent)" }} /> admissions@nscet.org
            </a>
          </motion.div>
        </motion.div>

        {/* INTERCOM DIRECTORY */}
        <motion.div
          className="intercom-section"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="glam-title">Phone & Intercom <span>Directory</span></h2>
          <div className="table-responsive">
            <table className="intercom-table">
              <thead>
                <tr>
                  <th>Location / Department</th>
                  <th>Direct Phone Line</th>
                  <th>Intercom Number(s)</th>
                </tr>
              </thead>
              <tbody>
                {intercomData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <HiOutlineBuildingOffice2 style={{ color: "var(--primary-accent)", fontSize: "1.2rem" }} />
                        <strong>{row.location}</strong>
                      </div>
                    </td>
                    <td>
                      {row.phone !== "-" ? (
                        <span>04546 - {row.phone}</span>
                      ) : (
                        <span style={{ opacity: 0.5 }}>-</span>
                      )}
                    </td>
                    <td>
                      {row.intercom.map(num => (
                        <span key={num} className="intercom-number" style={{ marginRight: '8px' }}>
                          {num}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CAMPUS MAP */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          style={{ marginTop: '4rem', marginBottom: '2rem' }}
        >
          <h2 className="glam-title">Find Us on <span>Google Maps</span></h2>
          <div className="map-glow-wrapper">
            <div className="map-inner">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=Nadar%20Saraswathi%20College%20of%20Engineering%20%26%20Technology,%20Vadapudupatti,%20Theni&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="NSCET Campus Map"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;