import { motion } from "framer-motion";
import { features } from "./data";

const Achievements = () => {
  return (
    <section className="about-section-wrapper bg-white">
      <div className="about-inner-container achievements-section">
      <h2 className="section-title">Achievements & Awards</h2>
      <div className="achievements-grid">
        {features.map((achievement, index) => {
          return (
            <motion.div
              key={achievement.id}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10 }}
              className="achievement-card"
            >
              <div className="achievement-image-wrapper">
                {/* Fallback to a styled placeholder until the user adds actual images */}
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://placehold.co/600x400/1e40af/FFFFFF?text=${encodeURIComponent(achievement.title)}`;
                  }}
                  className="achievement-image"
                />
                <div className="achievement-overlay">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Achievements;
