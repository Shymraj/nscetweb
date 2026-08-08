import React, { useState } from "react";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, 
  FaPhoneAlt, FaWhatsapp, FaCity, FaBook, 
  FaMapMarkerAlt, FaCommentAlt 
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
      // Backend API call simulation (2 seconds delay)
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      setStatus("success");
      setFormData({ fullName: "", email: "", mobile: "", whatsapp: "", city: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="premium-badge">QUICK ENQUIRY</span>
          <h2 className="premium-title">Send Us a <span>Message</span></h2>
          <p className="premium-subtitle">Fill out the form below and our team will respond as soon as possible.</p>
        </motion.div>

        {/* Centered Premium Form Wrapper */}
        <motion.div 
          className="centered-form-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="premium-form">
            
            <div className="form-grid">
              {/* Full Name (Compulsory) */}
              <div className="premium-input-wrapper">
                <FaUser className="input-icon" />
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" required className="premium-input" />
              </div>
              
              {/* Email (Compulsory) */}
              <div className="premium-input-wrapper">
                <FaEnvelope className="input-icon" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="premium-input" />
              </div>

              {/* Mobile (Compulsory) */}
              <div className="premium-input-wrapper">
                <FaPhoneAlt className="input-icon" />
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number *" required className="premium-input" />
              </div>

              {/* WhatsApp (Optional) */}
              <div className="premium-input-wrapper">
                <FaWhatsapp className="input-icon whatsapp" />
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className="premium-input" />
              </div>

              {/* City (Optional) */}
              <div className="premium-input-wrapper">
                <FaCity className="input-icon" />
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="premium-input" />
              </div>

              {/* Subject (Compulsory) */}
              <div className="premium-input-wrapper">
                <FaBook className="input-icon" />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required className="premium-input" />
              </div>
            </div>

            {/* Message (Optional) */}
            <div className="premium-input-wrapper textarea-wrapper">
              <FaCommentAlt className="input-icon textarea-icon" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="premium-input"></textarea>
            </div>

            {/* Form Footer & Button */}
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
              </AnimatePresence>
            </div>

          </form>
        </motion.div>
      </div> {/* End of contact-container */}

      {/* FULL WIDTH MAP SECTION (Outside of limited container) */}
      <motion.div 
        className="full-width-map-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="map-badge"><FaMapMarkerAlt /> Find Us on Map</div>
        <iframe
          title="NSCET Location"
          /* 👉 INGA '&t=k' ADD PANNI SATELLITE (EARTH) MAP AH MATHIYACHU */
          src="https://www.google.com/maps?q=Nadar%20Saraswathi%20College%20of%20Engineering%20and%20Technology&t=k&z=17&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </motion.div>

    </section>
  );
};

export default Contact;