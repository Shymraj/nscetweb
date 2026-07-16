import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="particle" style={{ width: 100, height: 100, top: '10%', left: '5%' }}></div>
      <div className="particle" style={{ width: 150, height: 150, bottom: '20%', right: '10%' }}></div>
      <div className="particle" style={{ width: 50, height: 50, top: '40%', left: '80%' }}></div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cta-content"
      >
        <h2 className="cta-title">Begin Your Journey at NSCET</h2>
        <p className="cta-description">
          Join thousands of successful engineers who started their careers at Nadar Saraswathi College of Engineering and Technology. Explore opportunities, innovation, research, and excellence with us.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Explore Departments</button>
          <button className="btn-secondary">Apply Now</button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
