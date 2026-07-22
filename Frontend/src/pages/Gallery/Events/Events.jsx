import "./Events.css";
import { eventsData } from "./data/eventsData";
import EventCard from "./components/EventCard";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import bannerImage from "./assets/banner/pongal3.webp";

const Events = () => {
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
