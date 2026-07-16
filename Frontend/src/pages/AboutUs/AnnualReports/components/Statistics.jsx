import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statisticsData } from '../data';
import { FaUserGraduate, FaChalkboardTeacher, FaDesktop, FaAward, FaHandshake, FaBook, FaChalkboard, FaHandsHelping } from 'react-icons/fa';

const iconMap = {
  FaUserGraduate: <FaUserGraduate />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaDesktop: <FaDesktop />,
  FaAward: <FaAward />,
  FaHandshake: <FaHandshake />,
  FaBook: <FaBook />,
  FaChalkboard: <FaChalkboard />,
  FaHandsHelping: <FaHandsHelping />
};

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const duration = 2000;
      const incrementTime = Math.max(Math.floor(duration / end), 10);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / incrementTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  return (
    <section className="ar-section ar-statistics">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="ar-section-title">Key Statistics</h2>
        <div className="ar-underline"></div>
      </motion.div>

      <div className="stats-grid">
        {statisticsData.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card ar-glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)" }}
          >
            <div className="stat-icon-wrapper">
              {iconMap[stat.icon]}
            </div>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
