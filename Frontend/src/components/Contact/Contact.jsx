import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, 
  FaPhoneAlt, FaWhatsapp, FaCity, FaBook, 
  FaMapMarkerAlt, FaCommentAlt, FaCompass, FaHeadset
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "", email: "", mobile: "", whatsapp: "", city: "", subject: "", message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post('http://localhost:5000/api/admin/home/enquiry', formData);
      setStatus("success");
      setFormData({ fullName: "", email: "", mobile: "", whatsapp: "", city: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="enquiry-form" className="cyber-contact-section">
      {/* Background Holographic Glows */}
      <div className="cyber-glow cyber-glow-1"></div>
      <div className="cyber-glow cyber-glow-2"></div>

      <div className="cyber-container">
        {/* Section Header */}
        <motion.div 
          className="cyber-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="cyber-badge"><FaCompass /> ADMISSION PORTAL</span>
          <h2 className="cyber-title">Connect With <span>NSCET</span></h2>
          <p className="cyber-subtitle">Have questions regarding admissions or campus life? Send us a secure transmission or locate our campus below.</p>
        </motion.div>

        {/* LAYOUT 6: FLOATING ISLAND & HOLOGRAPHIC MAP */}
        <motion.div 
          className="cyber-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* FLOATING FORM ISLAND (LEFT) */}
          <div className="floating-island form-island">
            <div className="island-header">
              <h3>Online Admissions & Enquiry</h3>
              <div className="live-status-dot"></div>
            </div>

            <form onSubmit={handleSubmit} className="cyber-form">
              <div className="form-grid">
                <div className="cyber-input-wrap">
                  <FaUser className="cyber-icon" />
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" required className="cyber-input" />
                </div>
                
                <div className="cyber-input-wrap">
                  <FaEnvelope className="cyber-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="cyber-input" />
                </div>

                <div className="cyber-input-wrap">
                  <FaPhoneAlt className="cyber-icon" />
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number *" required className="cyber-input" />
                </div>

                <div className="cyber-input-wrap">
                  <FaWhatsapp className="cyber-icon whatsapp-clr" />
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className="cyber-input" />
                </div>

                <div className="cyber-input-wrap">
                  <FaCity className="cyber-icon" />
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="District" className="cyber-input" />
                </div>

                <div className="cyber-input-wrap">
                  <FaBook className="cyber-icon" />
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required className="cyber-input" />
                </div>
              </div>

              <div className="cyber-input-wrap textarea-wrap">
                <FaCommentAlt className="cyber-icon textarea-icon" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="cyber-input"></textarea>
              </div>

              <div className="cyber-footer">
                <button type="submit" className={`cyber-btn ${status === 'loading' ? 'loading' : ''}`} disabled={status === 'loading'}>
                  <span>{status === "loading" ? "Transmitting..." : "Send Message"}</span>
                  <FaPaperPlane />
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div className="cyber-status success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      <FaCheckCircle /> Transmitted Successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div className="cyber-status error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      Transmission Failed. Try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

          {/* HOLOGRAPHIC MAP & PROFESSIONAL INFO ISLAND (RIGHT) */}
          <div className="floating-island map-island">
            <div className="island-header">
              <h3>Campus Radar & Info</h3>
              <span className="radar-tag">Live Satellite</span>
            </div>

            <div className="holographic-map-box">
              <div className="map-radar-pin"><FaMapMarkerAlt /></div>
              <iframe
                title="NSCET Location"
                src="https://www.google.com/maps?q=Nadar%20Saraswathi%20College%20of%20Engineering%20and%20Technology&t=k&z=17&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <div className="cyber-info-stack">
              <div className="cyber-info-card">
                <FaHeadset className="card-icon" />
                <div>
                  <strong>Admission Cell Hotline</strong>
                  <p>04546-263900 (Mon - Sat)</p>
                </div>
              </div>

              <div className="cyber-info-card">
                <FaEnvelope className="card-icon" />
                <div>
                  <strong>Admissions Email Support</strong>
                  <p>info@nscet.org</p>
                </div>
              </div>

              <div className="cyber-action-row">
                <a href="tel:+919876543210" className="action-pill call-pill">
                  <FaPhoneAlt /> Call Desk
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="action-pill wa-pill">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;