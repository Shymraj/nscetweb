import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, 
  FaPhoneAlt, FaWhatsapp, FaCity, FaBook, 
  FaMapMarkerAlt, FaCommentAlt, FaBuilding, FaGraduationCap
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
    <section id="enquiry-form" className="premium-contact-section">
      {/* Background Ambient Glow */}
      <div className="bg-glow glow-top-left"></div>
      <div className="bg-glow glow-bottom-right"></div>

      <div className="contact-container">
        {/* Section Header */}
        <motion.div 
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="premium-badge">QUICK ENQUIRY</span>
          <h2 className="premium-title">Send Us a <span>Message</span></h2>
          <p className="premium-subtitle">Have questions regarding admissions or campus life? Fill out the form below or find us on the map.</p>
        </motion.div>

        {/* DUAL-PILLAR SYMMETRICAL GRID (LAYOUT 7) */}
        <motion.div 
          className="dual-pillar-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* PILLAR 1: ENQUIRY FORM */}
          <div className="pillar-card form-pillar">
            <h3 className="pillar-heading">Online Admissions & Enquiry</h3>
            <form onSubmit={handleSubmit} className="premium-form">
              
              <div className="form-grid">
                {/* Full Name */}
                <div className="premium-input-wrapper">
                  <FaUser className="input-icon" />
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" required className="premium-input" />
                </div>
                
                {/* Email */}
                <div className="premium-input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="premium-input" />
                </div>

                {/* Mobile */}
                <div className="premium-input-wrapper">
                  <FaPhoneAlt className="input-icon" />
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number *" required className="premium-input" />
                </div>

                {/* WhatsApp */}
                <div className="premium-input-wrapper">
                  <FaWhatsapp className="input-icon whatsapp" />
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className="premium-input" />
                </div>

                {/* District */}
                <div className="premium-input-wrapper">
                  <FaCity className="input-icon" />
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="District" className="premium-input" />
                </div>

                {/* Subject */}
                <div className="premium-input-wrapper">
                  <FaBook className="input-icon" />
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required className="premium-input" />
                </div>
              </div>

              {/* Message */}
              <div className="premium-input-wrapper textarea-wrapper">
                <FaCommentAlt className="input-icon textarea-icon" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="premium-input"></textarea>
              </div>

              {/* Form Action Footer */}
              <div className="form-action-footer">
                <button type="submit" className={`premium-submit-btn ${status === 'loading' ? 'loading' : ''}`} disabled={status === 'loading'}>
                  <span>{status === "loading" ? "Sending Request..." : "Send Message"}</span>
                  <FaPaperPlane />
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div className="status-msg success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      <FaCheckCircle /> Request Submitted Successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div className="status-msg error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      Request Failed. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

          {/* PILLAR 2: SATELLITE MAP & ACTION HUB */}
          <div className="pillar-card map-pillar">
            <h3 className="pillar-heading">Campus Location & Support</h3>
            
            {/* Satellite Map */}
            <div className="pillar-map-wrapper">
              <div className="map-badge"><FaMapMarkerAlt /> Campus Location</div>
              <iframe
                title="NSCET Location"
                src="https://www.google.com/maps?q=Nadar%20Saraswathi%20College%20of%20Engineering%20and%20Technology&t=k&z=17&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Quick Info Box */}
            <div className="pillar-info-box">
              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <div>
                  <strong>TNEA Counselling Code</strong>
                  <p>5865</p>
                </div>
              </div>

              <div className="info-item">
                <FaBuilding className="info-icon" />
                <div>
                  <strong>College Campus</strong>
                  <p>Vadapudupatti, Annanji (P.O), Theni - 625531</p>
                </div>
              </div>

              <div className="quick-action-btns">
                <a href="tel:+919876543210" className="quick-btn call-btn">
                  <FaPhoneAlt /> Call Helpdesk
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="quick-btn wa-btn">
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