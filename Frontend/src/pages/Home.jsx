import MarqueeBanner from "../components/MarqueeBanner/MarqueeBanner";
import AnnouncementPopup from "../components/AnnouncementPopup/AnnouncementPopup";
import Hero from "../components/Hero/Hero";
import TimerBanner from "../components/TimerBanner/TimerBanner";
import Stats from "../components/Stats/Stats";
import VisionMission from "../components/VisionMission/VisionMission";
import NewsAnnouncements from "../components/NewsAnnouncements/NewsAnnouncements";
import About from "../components/About/About";
import Departments from "../components/Departments/Departments";
import Infrastructure from "../components/Infrastructure/Infrastructure";
import ResearchHub from "../components/ResearchHub/ResearchHub";
import Events from "../components/Events/Events";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Contact from "../components/Contact/Contact";
import Placement from "../components/Placement/Placement";
import PlacedStudents from "../components/PlacedStudents/PlacedStudents";
import AlumniReviews from "../components/AlumniReviews/AlumniReviews";

function Home() {
  return (
    <>  
      <AnnouncementPopup />
      <MarqueeBanner />
      <Hero />
      <TimerBanner />
      <Stats />
      <ResearchHub />
      <VisionMission />
      <NewsAnnouncements />
      <About />
      <Departments />
      <Infrastructure />
      <Events />
      <WhyChoose />
      <Contact />
      <Placement />
      <PlacedStudents />
      <AlumniReviews />
    </>
  );
}

export default Home;