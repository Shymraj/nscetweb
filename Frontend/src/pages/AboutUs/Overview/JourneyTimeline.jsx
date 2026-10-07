import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { milestones } from "./data";

const TimelineItem = ({ milestone, index }) => {
  const { ref, inView } = useInView({ 
    rootMargin: "0px 0px -10% 0px", 
    triggerOnce: true 
  });
  
  const isLeft = index % 2 === 1; // 0=right, 1=left, 2=right, 3=left...
  
  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'}`}
    >
      <div className={`timeline-dot ${inView ? 'glow-golden' : ''}`}></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`timeline-content ${inView ? 'glow-golden' : ''}`}
      >
        <div className="timeline-year">{milestone.year}</div>
        <h3 className="timeline-title">{milestone.title}</h3>
        <p className="timeline-description">{milestone.description}</p>
      </motion.div>
    </div>
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
      <h2 className="overview-section-heading">OUR JOURNEY</h2>
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
