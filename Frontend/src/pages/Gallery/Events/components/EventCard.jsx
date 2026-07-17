import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <Link to={`/gallery/events/${event.slug}`} className="event-card">
      <div className="event-card-image-wrapper">
        {event.coverImage ? (
          <img src={event.coverImage} alt={event.title} className="event-card-image" loading="lazy" />
        ) : (
          <div className="event-card-placeholder">
            <FaImage className="event-card-placeholder-icon" />
            <span>Photos Coming Soon</span>
          </div>
        )}
      </div>
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
      </div>
    </Link>
  );
};

export default EventCard;
