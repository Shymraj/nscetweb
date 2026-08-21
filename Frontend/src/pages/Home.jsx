import MarqueeBanner from "../components/MarqueeBanner/MarqueeBanner";
import AnnouncementPopup from "../components/AnnouncementPopup/AnnouncementPopup";
import Hero from "../components/Hero/Hero";
import homeMobileHero from "../assets/mobile-hero/home-mobile-hero.png";
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
import PlacedStudents from "../components/PlacedStudents/PlacedStudents";
import AlumniReviews from "../components/AlumniReviews/AlumniReviews";
import Principal from "./Administration/Principal/Principal";

function Home() {
  return (
    <>  
      <AnnouncementPopup />
      <MarqueeBanner />
      <Hero />
      <div className="mobile-home-hero">
        <img src={homeMobileHero} alt="Mobile Hero Placeholder" />
        <div className="mobile-hero-overlay">
          <div className="mobile-hero-content">
            <h4 className="mobile-hero-trust">Theni Melapettai Hindu Nadargal Uravinmurai</h4>
            <h1 className="mobile-hero-title">
              NADAR SARASWATHI<br/>
              COLLEGE OF<br/>
              ENGINEERING &<br/>
              TECHNOLOGY
            </h1>
            <p className="mobile-hero-tagline">Empowering Minds, Shaping the Future</p>
            
            <div className="mobile-hero-approvals">
              <p>Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai</p>
              <p>Accredited by NAAC with 'A' Grade</p>
              <p>Recognized under 2(f) of the UGC Act, 1956</p>
              <p>An ISO 9001:2015 Certified Institution</p>
              <p>Vadapudupatti, Annanji (PO), Theni – 625531.</p>
            </div>

            <div className="mobile-hero-buttons">
              <button className="mobile-hero-btn primary">Apply Now</button>
              <button className="mobile-hero-btn secondary">Explore Campus</button>
            </div>
          </div>
        </div>
      </div>
      <TimerBanner />
      <Stats />
      <ResearchHub />
      <VisionMission />
      <NewsAnnouncements />
      <About />
      <Principal hideBreadcrumb={true} />
      <Departments />
      <Infrastructure />
      <Events />
      <WhyChoose />
      <Contact />
      <PlacedStudents />
      <AlumniReviews />
    </>
  );
}

export default Home;