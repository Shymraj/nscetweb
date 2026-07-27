import "./Events.css";
import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./components/EventCard";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import bannerImage from "./assets/banner/pongal3.webp";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/events");
        // We must map the backend image paths to absolute URLs (http://localhost:5000)
        const formattedEvents = res.data.data.map(ev => ({
          ...ev,
          coverImage: ev.coverImage ? `http://localhost:5000${ev.coverImage}` : null,
          images: ev.images ? ev.images.map(img => `http://localhost:5000${img}`) : []
        }));
        setEventsData(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-gallery-page">
      <PageBanner
        title="Events Gallery"
        subtitle="Explore memorable moments from our institution's history"
        backgroundImage={bannerImage}
        hideBreadcrumb={true}
      />
      <div className="events-gallery-container">
        <div className="events-grid">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Events;
