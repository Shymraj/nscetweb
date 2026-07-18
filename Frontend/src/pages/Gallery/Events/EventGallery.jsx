import { useParams, Navigate } from "react-router-dom";
import { eventsData } from "./data/eventsData";
import Event3DGallery from "./components/Event3DGallery";

const EventGallery = () => {
  const { eventSlug } = useParams();

  // Find the selected event
  const selectedEvent = eventsData.find((e) => e.slug === eventSlug);

  // If the event doesn't exist, redirect back to the events gallery
  if (!selectedEvent) {
    return <Navigate to="/gallery/events" replace />;
  }

  return (
    <Event3DGallery 
      event={selectedEvent} 
      images={selectedEvent.images} 
    />
  );
};

export default EventGallery;
