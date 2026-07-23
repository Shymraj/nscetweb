import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {

  const contactInfo = [

    {
      icon: <FaMapMarkerAlt />,
      title: "Campus Address",
      value:
        "Nadar Saraswathi College of Engineering & Technology, Theni Main Road, Theni - 625531, Tamil Nadu, India",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      value: "+91 XXXXX XXXXX",
    },

    {
      icon: <FaEnvelope />,
      title: "Email Address",
      value: "info@nscet.org",
    },

    {
      icon: <FaGlobe />,
      title: "Official Website",
      value: "www.nscet.org",
    },

    {
      icon: <FaClock />,
      title: "Office Hours",
      value: "Monday - Saturday | 9:00 AM - 5:30 PM",
    },

  ];

  return (

    <section className="contact">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      {/* ================= HEADER ================= */}

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

      {/* ================= MAIN CONTAINER ================= */}

      <div className="contact-container">
                {/* ================= LEFT CONTACT CARD ================= */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="info-header">

            <span>Contact Information</span>

            <h3>
              We're Always Here To Help
            </h3>

            <p>
              Connect with NSCET through phone, email or visit our
              beautiful campus. Our admission team is happy to guide
              you through every step.
            </p>

          </div>

          <div className="info-list">

            {contactInfo.map((item, index) => (

              <motion.div
                key={index}
                className="info-box"
                whileHover={{
                  x: 8,
                  scale: 1.02,
                }}
              >

                <div className="icon">

                  {item.icon}

                </div>

                <div className="info-content">

                  <h4>

                    {item.title}

                  </h4>

                  <p>

                    {item.value}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="social-section">

            <h4>Follow NSCET</h4>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </div>

        </motion.div>

        {/* ================= RIGHT FORM ================= */}

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="form-header">

            <span>Quick Enquiry</span>

            <h3>
              Send Us a Message
            </h3>

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

        </motion.div>

      </div>
            {/* ================= GOOGLE MAP ================= */}

      <motion.div
        className="map-section"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="map-header">

          <h2>Visit Our Campus</h2>

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

      {/* ================= PREMIUM CTA ================= */}

      <motion.div
        className="contact-banner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

      </motion.div>

    </section>

  );

};

export default Contact;