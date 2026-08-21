import { motion } from "framer-motion";
import { awards } from "./data";

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="about-section-heading">ACHIEVEMENTS & AWARDS</h2>
      <div className="achievements-grid">
        {awards.map((achievement, index) => {
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
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  style={{ objectPosition: achievement.id === 6 ? 'top center' : 'center center' }}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://placehold.co/600x400/1e40af/FFFFFF?text=${encodeURIComponent(achievement.title)}`;
                  }}
                  className="achievement-image"
                />
                <div className="achievement-overlay">
                  <span style={{color: '#fbbf24', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{achievement.year}</span>
                  <h3 className="achievement-title">{achievement.title}</h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
