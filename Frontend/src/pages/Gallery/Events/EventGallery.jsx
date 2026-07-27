import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Event3DGallery from "./components/Event3DGallery";

const EventGallery = () => {
  const { eventSlug } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/events");
        const allEvents = res.data.data;
        const event = allEvents.find((e) => e.slug === eventSlug);
        
        if (event) {
          event.images = event.images ? event.images.map(img => `http://localhost:5000${img}`) : [];
          setSelectedEvent(event);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventSlug]);

  if (loading) return <div>Loading gallery...</div>;
  if (error) return <Navigate to="/gallery/events" replace />;

  return (
    <Event3DGallery 
      event={selectedEvent} 
      images={selectedEvent.images} 
    />
  );
};

export default EventGallery;
