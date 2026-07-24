import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaMobileAlt, 
  FaSearch,
  FaBuilding,
  FaGraduationCap,
  FaHeadset,
  FaShieldAlt,
  FaThList
} from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Contact.css";

import heroImg from "../../assets/Img/contact_hero_generated.png";

const Contact = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const intercomData = [
    { location: "Reception 1", phone: "263900", intercom: ["900"], category: "Administration" },
    { location: "Reception 2", phone: "263901", intercom: ["901"], category: "Administration" },
    { location: "Secretary Room", phone: "263903", intercom: ["903"], category: "Administration" },
    { location: "Principal", phone: "263904", intercom: ["904"], category: "Administration" },
    { location: "Vice Principal", phone: "263905", intercom: ["905"], category: "Administration" },
    { location: "Placement Cell", phone: "263902", intercom: ["902"], category: "Facilities & Cells" },
    { location: "Placement Officer", phone: "-", intercom: ["906"], category: "Facilities & Cells" },
    { location: "Exam Cell", phone: "-", intercom: ["907"], category: "Facilities & Cells" },
    { location: "ECE Department", phone: "-", intercom: ["908"], category: "Academic Departments" },
    { location: "Civil Department", phone: "-", intercom: ["909"], category: "Academic Departments" },
    { location: "CSE Department", phone: "-", intercom: ["910"], category: "Academic Departments" },
    { location: "Mechanical Department", phone: "-", intercom: ["911"], category: "Academic Departments" },
    { location: "EEE Department", phone: "-", intercom: ["912"], category: "Academic Departments" },
    { location: "S&H Department", phone: "-", intercom: ["913"], category: "Academic Departments" },
    { location: "Library", phone: "-", intercom: ["914"], category: "Facilities & Cells" },
    { location: "Store", phone: "-", intercom: ["915"], category: "Facilities & Cells" },
    { location: "Admission Cell", phone: "-", intercom: ["916", "917"], category: "Facilities & Cells" },
    { location: "QIC Cell", phone: "-", intercom: ["918"], category: "Facilities & Cells" },
    { location: "Auditorium", phone: "-", intercom: ["919"], category: "Facilities & Cells" },
    { location: "Boys Hostel", phone: "-", intercom: ["920"], category: "Hostels & Security" },
    { location: "Boys Hostel Security", phone: "-", intercom: ["921"], category: "Hostels & Security" },
    { location: "Security Main Gate", phone: "-", intercom: ["922"], category: "Hostels & Security" },
    { location: "AI & DS / IT Department", phone: "-", intercom: ["923"], category: "Academic Departments" },
    { location: "Civil SOM Lab", phone: "-", intercom: ["924"], category: "Academic Departments" },
    { location: "Mechanical Workshop", phone: "-", intercom: ["925"], category: "Academic Departments" },
    { location: "Canteen", phone: "-", intercom: ["926"], category: "Facilities & Cells" },
    { location: "Design Room", phone: "-", intercom: ["927"], category: "Administration" },
    { location: "PD Room", phone: "-", intercom: ["928"], category: "Administration" },
    { location: "Office", phone: "-", intercom: ["929", "931"], category: "Administration" },
    { location: "Principal Office", phone: "-", intercom: ["930"], category: "Administration" },
    { location: "Server Room", phone: "-", intercom: ["946"], category: "Administration" },
  ];

  const categories = [
    { name: "All", icon: FaThList },
    { name: "Administration", icon: FaBuilding },
    { name: "Academic Departments", icon: FaGraduationCap },
    { name: "Facilities & Cells", icon: FaHeadset },
    { name: "Hostels & Security", icon: FaShieldAlt },
  ];

  const filteredData = intercomData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.intercom.some((num) => num.includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="contact-container">
      <PageBanner
        title="Contact Us"
        subtitle="Nadar Saraswathi College of Engineering & Technology, Vadapudupatti, Theni"
        breadcrumb={[{ label: "Contact Us" }]}
        backgroundImage={heroImg}
      />

      <main className="content-wrapper">
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
            <div className="contact-card-content">
              <h3>Headquarters & Campus</h3>
              <p><strong>Postbox No:</strong> 60</p>
              <p>Annanji (P.O), Vadapudupatti,</p>
              <p>Theni - 625531, Tamil Nadu, India.</p>
            </div>
          </motion.div>

          <motion.div className="contact-card card-phone" variants={fadeInUp}>
            <div className="contact-icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <div className="contact-card-content">
              <h3>General Contact</h3>
              <p>04546 - 263900</p>
              <p>04546 - 263901</p>
              <p>04546 - 263902</p>
            </div>
          </motion.div>

          <motion.div className="contact-card card-mobile" variants={fadeInUp}>
            <div className="contact-icon-wrapper">
              <FaMobileAlt className="contact-icon" />
            </div>
            <div className="contact-card-content">
              <h3>Admissions & Mobile</h3>
              <p>+91 90951 00235</p>
              <p>+91 90951 00278</p>
              <a href="mailto:admissions@nscet.org" className="admissions-email">
                <FaEnvelope className="email-icon" /> admissions@nscet.org
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* INTERCOM DIRECTORY SECTION */}
        <motion.div
          className="intercom-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="directory-header">
            <h2 className="glam-title">Phone & Intercom <span>Directory</span></h2>
            <p className="directory-subtitle">Quick extension search and department contacts</p>

            {/* SEARCH AND FILTER BAR */}
            <div className="directory-controls">
              <div className="search-bar-wrapper">
                <FaSearch className="search-bar-icon" />
                <input
                  type="text"
                  placeholder="Search location, department, phone, or intercom extension..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="directory-search-input"
                />
              </div>

              <div className="category-tabs">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      className={`cat-tab ${activeCategory === cat.name ? "active" : ""}`}
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      <Icon className="tab-icon" />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* TABLE DISPLAY */}
          <div className="table-responsive">
            <table className="intercom-table">
              <thead>
                <tr>
                  <th>Location / Department</th>
                  <th className="phone-header">Direct Phone Line</th>
                  <th className="intercom-header">Intercom Extension</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((row, index) => (
                    <tr key={index}>
                      <td className="location-cell">
                        <HiOutlineBuildingOffice2 className="location-icon" />
                        <strong>{row.location}</strong>
                      </td>
                      <td className="phone-cell">
                        {row.phone !== "-" ? (
                          <span className="phone-badge">04546 - {row.phone}</span>
                        ) : (
                          <span className="dash-text">-</span>
                        )}
                      </td>
                      <td className="intercom-cell">
                        {row.intercom.map((num) => (
                          <span key={num} className="intercom-badge">
                            {num}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="no-results">
                      No matching directory records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CAMPUS MAP SECTION */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
      </main>
    </div>
  );
};

export default Contact;