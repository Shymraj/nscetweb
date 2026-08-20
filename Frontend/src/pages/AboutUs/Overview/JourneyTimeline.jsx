import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { milestones } from "./data";

const TimelineItem = ({ milestone, index }) => {
  const { ref, inView } = useInView({ 
    rootMargin: "0px 0px -50% 0px", 
    triggerOnce: true 
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="timeline-item"
    >
      <div className={`timeline-dot ${inView ? 'glow-golden' : ''}`}></div>
      <div className={`timeline-content ${inView ? 'glow-golden' : ''}`}>
        <div className="timeline-year">{milestone.year}</div>
        <h3 className="timeline-title">{milestone.title}</h3>
        <p className="timeline-description">{milestone.description}</p>
      </div>
    </motion.div>
  );
};

const JourneyTimeline = React.memo(() => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const glowTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="journey-section">
      <h2 className="section-title">Our Journey</h2>
      <div className="timeline-container" ref={containerRef}>
        <div className="timeline-line"></div>
        <motion.div
          className="timeline-progress"
          style={{ scaleY, transformOrigin: "top" }}
        ></motion.div>
        <motion.div
          className="timeline-glow-point"
          style={{ top: glowTop }}
        ></motion.div>

        {milestones.map((milestone, index) => (
          <TimelineItem key={index} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  );
});

export default JourneyTimeline;
