import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaImages, FaCalendarAlt, FaArrowRight, FaFilter, FaStar } from "react-icons/fa";
import axios from "axios";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import bannerImage from "./assets/banner/pongal3.webp";
import { eventsData as staticEvents } from "./data/eventsData";
import "./Events.css";

// Helper to determine category tags for filtering
const getCategory = (event) => {
  const title = (event.title || "").toLowerCase();
  const slug = (event.slug || "").toLowerCase();
  
  if (slug.includes("2025") || slug.includes("-25")) return "2025";
  if (slug.includes("2024") || slug.includes("-24")) return "2024";
  if (title.includes("diwali") || title.includes("onam") || title.includes("pongal") || title.includes("waves") || title.includes("fresher")) return "Cultural";
  if (title.includes("sports")) return "Sports";
  return "Academic";
};

const Events = () => {
  const [eventsData, setEventsData] = useState(staticEvents);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/events");
        if (res.data && res.data.data && res.data.data.length > 0) {
          const formattedEvents = res.data.data.map(ev => ({
            ...ev,
            coverImage: ev.coverImage ? `http://localhost:5000${ev.coverImage}` : null,
            images: ev.images ? ev.images.map(img => `http://localhost:5000${img}`) : []
          }));
          setEventsData(formattedEvents);
        }
      } catch (error) {
        // Silently fallback to staticEvents if backend is offline
        console.log("Backend offline, displaying local static events.");
      }
    };
    fetchEvents();
  }, []);

  // Compute categories and counts
  const filters = useMemo(() => [
    { label: "All", count: eventsData.length },
    { label: "2025", count: eventsData.filter(e => e.slug.includes("2025") || e.slug.includes("-25")).length },
    { label: "2024", count: eventsData.filter(e => e.slug.includes("2024") || e.slug.includes("-24")).length },
    { label: "Cultural", count: eventsData.filter(e => {
        const t = e.title.toLowerCase();
        return t.includes("diwali") || t.includes("onam") || t.includes("pongal") || t.includes("waves") || t.includes("fresher");
      }).length 
    },
    { label: "Sports", count: eventsData.filter(e => e.title.toLowerCase().includes("sports")).length },
    { label: "Academic", count: eventsData.filter(e => {
        const t = e.title.toLowerCase();
        return !t.includes("diwali") && !t.includes("onam") && !t.includes("pongal") && !t.includes("waves") && !t.includes("fresher") && !t.includes("sports");
      }).length 
    }
  ], [eventsData]);

  // Filter events based on active selection
  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return eventsData;
    if (activeFilter === "2025") return eventsData.filter(e => e.slug.includes("2025") || e.slug.includes("-25"));
    if (activeFilter === "2024") return eventsData.filter(e => e.slug.includes("2024") || e.slug.includes("-24"));
    if (activeFilter === "Cultural") return eventsData.filter(e => {
      const t = e.title.toLowerCase();
      return t.includes("diwali") || t.includes("onam") || t.includes("pongal") || t.includes("waves") || t.includes("fresher");
    });
    if (activeFilter === "Sports") return eventsData.filter(e => e.title.toLowerCase().includes("sports"));
    if (activeFilter === "Academic") return eventsData.filter(e => {
      const t = e.title.toLowerCase();
      return !t.includes("diwali") && !t.includes("onam") && !t.includes("pongal") && !t.includes("waves") && !t.includes("fresher") && !t.includes("sports");
    });
    return eventsData;
  }, [eventsData, activeFilter]);

  // Separate featured hero event (first item) and remaining bento items
  const featuredEvent = filteredEvents[0];
  const bentoEvents = filteredEvents.slice(1);

  return (
    <div className="events-gallery-page">
      <PageBanner
        title="Events Gallery"
        subtitle="Explore Memorable Moments from Our Campus History"
        backgroundImage={bannerImage}
        hideBreadcrumb={true}
      />

      <div className="events-editorial-container">
        
        {/* Category & Year Filter Chips */}
        <div className="events-filter-bar">
          <div className="filter-label">
            <FaFilter className="filter-icon" /> Filter Gallery:
          </div>
          <div className="filter-chips">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className={`filter-chip ${activeFilter === filter.label ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.label)}
              >
                <span>{filter.label}</span>
                <span className="chip-count">{filter.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="bento-section-header">
          <h3 className="bento-section-title">
            {activeFilter === "All" ? "All Event Albums" : `${activeFilter} Events`}
          </h3>
          <span className="bento-section-subtitle">Showing {filteredEvents.length} Events</span>
        </div>

        {/* Structured Animated Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="structured-events-grid"
          >
            {filteredEvents.map((event, index) => {
              const is2025 = event.slug.includes("2025") || event.slug.includes("-25");
              const categoryTag = getCategory(event);

              return (
                <motion.div
                  key={event.id || event.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="structured-event-card"
                >
                  <Link to={`/gallery/events/${event.slug}`} className="structured-card-link">
                    {/* Image Box */}
                    <div className="structured-image-wrapper">
                      {event.coverImage ? (
                        <img 
                          src={event.coverImage} 
                          alt={event.title} 
                          className="structured-image" 
                          loading="lazy" 
                        />
                      ) : (
                        <div className="structured-placeholder">
                          <FaImages className="placeholder-icon" />
                          <span>Photos Coming Soon</span>
                        </div>
                      )}
                      
                      {/* Top Badges */}
                      <div className="structured-card-badges">
                        <span className="badge-category">{categoryTag}</span>
                        <span className="badge-photos">
                          <FaImages /> {event.images?.length || 1}
                        </span>
                      </div>
                      
                      {/* Shimmer Effect */}
                      <div className="card-shimmer"></div>
                    </div>

                    {/* Card Body */}
                    <div className="structured-card-body">
                      <div className="structured-card-meta">
                        <span className="meta-year">
                          <FaCalendarAlt /> {is2025 ? "2025 Edition" : "Annual Event"}
                        </span>
                      </div>

                      <h3 className="structured-card-title">{event.title}</h3>

                      <div className="structured-card-footer">
                        <span className="action-text">Explore Album</span>
                        <span className="action-arrow">
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Events;
