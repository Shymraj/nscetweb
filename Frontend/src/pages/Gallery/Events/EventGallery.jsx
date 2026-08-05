import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Event3DGallery from "./components/Event3DGallery";
import { eventsData as staticEvents } from "./data/eventsData";

const EventGallery = () => {
  const { eventSlug } = useParams();

  // Find initial static event immediately (0ms delay)
  const initialStaticEvent = staticEvents.find(e => 
    e.slug === eventSlug || 
    e.slug.replace(/-2025|-25$/, '') === eventSlug.replace(/-2025|-25$/, '')
  );
  const [selectedEvent, setSelectedEvent] = useState(initialStaticEvent || null);
  const [loading, setLoading] = useState(!initialStaticEvent); // Only load if not in static data

  useEffect(() => {
    const fetchEventFromBackend = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/events", { timeout: 2000 });
        const allEvents = res.data?.data || [];
        const backendEvent = allEvents.find((e) => e.slug === eventSlug);
        
        if (backendEvent) {
          backendEvent.images = backendEvent.images ? backendEvent.images.map(img => `http://localhost:5000${img}`) : [];
          setSelectedEvent(backendEvent);
        }
      } catch (err) {
        console.error("Backend fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventFromBackend();
  }, [eventSlug]);

  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Event...</div>;
  }

  if (!selectedEvent) return <Navigate to="/gallery/events" replace />;

  return (
    <Event3DGallery 
      event={selectedEvent} 
      images={selectedEvent.images} 
    />
  );
};

export default EventGallery;
