import React from "react";
import { motion } from "framer-motion";
import ReactCountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { statistics } from "./data";

// Fix Vite CommonJS interop for react-countup
const CountUp = ReactCountUp.default || ReactCountUp;

const StatsSection = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={statsRef} className="stats-section">
      {statistics.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ y: 50, opacity: 0 }}
          animate={statsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="stat-card"
        >
          <div className="stat-value">
            {statsInView ? <CountUp end={stat.value} duration={2.5} /> : 0}
            {stat.suffix}
          </div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsSection;
