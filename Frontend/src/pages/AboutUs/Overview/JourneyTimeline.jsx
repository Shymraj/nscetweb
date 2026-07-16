import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { milestones } from "./data";

const TimelineItem = ({ milestone, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="timeline-item"
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-year">{milestone.year}</div>
        <h3 className="timeline-title">{milestone.title}</h3>
        <p className="timeline-description">{milestone.description}</p>
      </div>
    </motion.div>
  );
};

const JourneyTimeline = React.memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="journey-section">
      <h2 className="section-title">Our Journey</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <motion.div
          className="timeline-progress"
          style={{ scaleY, transformOrigin: "top" }}
        ></motion.div>

        {milestones.map((milestone, index) => (
          <TimelineItem key={index} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  );
});

export default JourneyTimeline;
