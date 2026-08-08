import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaHeart } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ContactCard = () => {
  return (
    <section className="nss-section nss-motto-section" id="nss-motto">
      <div className="nss-bg-decoration dec-2"></div>
      <div className="nss-container">
        <motion.div 
          className="nss-motto-card"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="nss-motto-header">
            <span className="nss-motto-tag">
              <FaHeart className="nss-tag-icon" /> NSS Motto
            </span>
            <h2 className="nss-motto-title">
              <FaQuoteLeft className="nss-quote-icon left" /> "Not Me But You" <FaQuoteRight className="nss-quote-icon right" />
            </h2>
            <div className="nss-accent-line center"></div>
          </div>

          <p className="nss-motto-desc">
            The National Service Scheme inspires students to place community welfare above self-interest. Through selfless service, teamwork, and leadership, NSS shapes responsible citizens committed to building a stronger, more compassionate and socially responsible nation.
          </p>

          <div className="nss-motto-pillars">
            <div className="nss-pillar-item">
              <span className="pillar-num">01</span>
              <span className="pillar-label">Selfless Service</span>
            </div>
            <div className="nss-pillar-item">
              <span className="pillar-num">02</span>
              <span className="pillar-label">Community Welfare</span>
            </div>
            <div className="nss-pillar-item">
              <span className="pillar-num">03</span>
              <span className="pillar-label">Nation Building</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCard;
