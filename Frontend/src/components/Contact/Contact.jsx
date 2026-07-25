import "./Contact.css";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">

      {/* Background Glow */}
      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      {/* Header */}

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <span className="contact-tag">
          GET IN TOUCH
        </span>

        <h2>
          Let's Start a Conversation
        </h2>

        <p>
          Whether you're looking for admissions, placements,
          campus facilities or academic information,
          our team is always ready to assist you.
        </p>

        <div className="title-line"></div>

      </motion.div>

      {/* Quick Enquiry Form */}

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="contact-form">

          <div className="form-header">

            <span>Quick Enquiry</span>

            <h3>Send Us a Message</h3>

            <p>
              Fill out the form below and our team will
              respond as soon as possible.
            </p>

          </div>

          <form>

            <div className="input-grid">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-grid">

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Write your message here..."
            ></textarea>

            <button type="submit">

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </motion.div>

      {/* Google Map */}

      <motion.div
        className="map-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="map-header">

          <h3>
            Visit Our Campus
          </h3>

          <p>
            Experience the vibrant learning environment of
            Nadar Saraswathi College of Engineering &
            Technology located in the heart of Theni.
          </p>

        </div>

        <div className="map-container">

          <iframe
            title="NSCET Location"
            src="https://www.google.com/maps?q=Nadar%20Saraswathi%20College%20of%20Engineering%20and%20Technology&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </motion.div>

    </section>
  );
};

export default Contact;