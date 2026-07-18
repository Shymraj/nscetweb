import { motion } from "framer-motion";
import SpecularButton from "../../../components/SpecularButton/SpecularButton";

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
          <SpecularButton
            size="lg"
            radius={28}
            tint="#ffffff"
            tintOpacity={0.08}
            blur={16}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#ffffff"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => console.log('Explore Departments clicked')}
          >
            Explore Departments
          </SpecularButton>
          <SpecularButton
            size="lg"
            radius={28}
            tint="#ffffff"
            tintOpacity={0.04}
            blur={12}
            textColor="#0b2559"
            lineColor="#0b2559"
            baseColor="#ffffff"
            intensity={0.75}
            shineSize={18}
            shineFade={50}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => console.log('Apply Now clicked')}
          >
            Apply Now
          </SpecularButton>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
