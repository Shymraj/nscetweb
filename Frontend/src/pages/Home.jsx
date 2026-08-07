import MarqueeBanner from "../components/MarqueeBanner/MarqueeBanner";
import AnnouncementPopup from "../components/AnnouncementPopup/AnnouncementPopup";
import Hero from "../components/Hero/Hero";
import TimerBanner from "../components/TimerBanner/TimerBanner";
import Stats from "../components/Stats/Stats";
import ChatBot from "../components/chatbox/chatbox.jsx";import VisionMission from "../components/VisionMission/VisionMission";
import NewsAnnouncements from "../components/NewsAnnouncements/NewsAnnouncements";
import About from "../components/About/About";
import Departments from "../components/Departments/Departments";
import ResearchHub from "../components/ResearchHub/ResearchHub";
import Events from "../components/Events/Events";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Contact from "../components/Contact/Contact";
import Placement from "../components/Placement/Placement";
import PlacedStudents from "../components/PlacedStudents/PlacedStudents";

function Home() {
  return (
    <>  
      <AnnouncementPopup />
      <MarqueeBanner />
      <Hero />
      <TimerBanner />
      <Stats />
      <ChatBot />
      <VisionMission />
      <NewsAnnouncements />
      <About />
      <Departments />
      <ResearchHub />
      <Events />
      <WhyChoose />
      <Contact />
      <Placement />
      <PlacedStudents />
    </>
  );
}

export default Home;
