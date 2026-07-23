import React from "react";
import "./Events.css";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

import waves from "../../assets/waves.jpeg";
import sports from "../../assets/sports.jpeg";
import pongal from "../../assets/pongal.webp";
import ps1 from "../../assets/ps1.jpg";

const events = [
  {
    category: "Hackathon",
    categoryClass: "badge-orange",
    image: waves,
    date: "18 Mar 2026",
    title: "Hackathon 2025–26",
    description:
      "National-level 48-hour coding marathon open to all engineering students with exciting prizes.",
    button: "Register Now"
  },
  {
    category: "Cultural Fest",
    categoryClass: "badge-green",
    image: sports,
    date: "25 Feb 2026",
    title: "Waves'25",
    description:
      "NSCET's flagship cultural festival celebrating music, dance, drama, fine arts and technology.",
    button: "Know More"
  },
  {
    category: "Conference",
    categoryClass: "badge-blue",
    image: pongal,
    date: "12 Apr 2026",
    title: "ICRTT 2026",
    description:
      "International Conference on Recent Trends in Technology with keynote speakers and paper presentations.",
    button: "Submit Paper"
  },
  {
    category: "Sports",
    categoryClass: "badge-purple",
    image: ps1,
    date: "08 Jan 2026",
    title: "Annual Sports Meet",
    description:
      "Indoor and outdoor sports competitions encouraging teamwork, discipline and sportsmanship.",
    button: "View Details"
  },

];

const Events = () => {
  return (
    <section className="events">
      <div className="events-header">
        <span>UPCOMING & FEATURED</span>
        <h2>Campus Events</h2>
        <p>
          Explore the latest technical, cultural and academic events happening
          at NSCET throughout the year.
        </p>
        <div className="title-line"></div>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
          >
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <span className={`badge ${event.categoryClass}`}>
                {event.category}
              </span>
            </div>

            <div className="event-content">
              <small>
                <FaCalendarAlt className="calendar-icon" />
                {event.date}
              </small>

              <h3>{event.title}</h3>

              <p>{event.description}</p>

              <button className="event-btn">
                <span>{event.button}</span>
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;