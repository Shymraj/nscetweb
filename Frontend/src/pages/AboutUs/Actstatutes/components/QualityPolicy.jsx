import { motion } from "framer-motion";
import { qualityPolicyIntro, qualityPolicyCards, qualityPolicyCommitment } from "../data";

const QualityPolicy = () => {
  return (
    <section id="quality-policy" className="act-section">
      <div className="section-header">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Quality Policy
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-intro"
        >
          {qualityPolicyIntro}
        </motion.p>
      </div>

      <div className="quality-grid">
        {qualityPolicyCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="quality-card"
          >
            <div className="card-glass">
              <h3 className="quality-card-title">{card.title}</h3>
              <p className="quality-card-content">{card.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="commitment-section"
      >
        <div className="premium-quote-panel">
          <h3 className="commitment-title">Our Commitment</h3>
          <blockquote className="commitment-quote">
            "{qualityPolicyCommitment}"
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default QualityPolicy;
