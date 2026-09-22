import { FaArrowRight } from "react-icons/fa";
import MarqueeBanner from "../components/MarqueeBanner/MarqueeBanner";
import AnnouncementPopup from "../components/AnnouncementPopup/AnnouncementPopup";
import Hero from "../components/Hero/Hero";
import homeMobileHero from "../assets/mobile-hero/home-mobile-hero.png";
import TimerBanner from "../components/TimerBanner/TimerBanner";
import Stats from "../components/Stats/Stats";
import Counter from "../components/Stats/Counter";
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
  const scrollToEnquiry = () => {
    const formSection = document.getElementById("enquiry-form") || document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  const handleExploreCampus = () => {
    const target = document.getElementById("infrastructure") || document.getElementById("departments");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/about";
    }
  };

  const scrollToNextSection = () => {
    const nextElem = document.querySelector(".timer-banner-container, .stats-section, .vision-mission, .about-section, #enquiry-form");
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 450, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnnouncementPopup />
      <MarqueeBanner />
      <Hero />
      <div className="mobile-home-hero">
        <div className="mobile-hero-wrapper">
          <img src={homeMobileHero} alt="NSCET Campus Building" className="mobile-hero-img" />

          {/* Top Header Text Overlay (matching reference image) */}
          <div className="mobile-hero-top-content">
            <span className="mobile-hero-trust-tag">THENI MELAPETTAI HINDU NADARGAL URAVINMURAI</span>
            <h1 className="mobile-hero-title">
              <span className="mobile-hero-title-main">NADAR SARASWATHI</span>
              <span className="mobile-hero-title-accent">COLLEGE OF ENGINEERING &amp;</span>
              <span className="mobile-hero-title-accent">TECHNOLOGY</span>
            </h1>
            <p className="mobile-hero-subtitle">
              Empowering Minds, Shaping the Future
            </p>
            <div className="mobile-hero-divider"></div>
          </div>

          {/* Action Buttons (Apply Now & Explore Campus) */}
          <div className="mobile-hero-actions">
            <button className="mobile-hero-btn apply" onClick={scrollToEnquiry}>
              <span>Apply Now</span>
              <FaArrowRight className="btn-arrow" />
            </button>
            <button className="mobile-hero-btn explore" onClick={handleExploreCampus}>
              <span>Explore Campus</span>
              <FaArrowRight className="btn-arrow" />
            </button>
          </div>
        </div>

        {/* Bottom Floating Stats Card overlapping the image with Capsule Scroll Down Button */}
        <div className="mobile-hero-stats-container">
          <div className="mobile-hero-stats-card">
            <div className="mobile-hero-stat-col">
              <svg className="mobile-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="3" />
                <path d="M6 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
                <circle cx="4.5" cy="9.5" r="2" />
                <path d="M1 18.5v-.5a3.5 3.5 0 0 1 3-3.2" />
                <circle cx="19.5" cy="9.5" r="2" />
                <path d="M20 14.8a3.5 3.5 0 0 1 3 3.2v.5" />
              </svg>
              <div className="mobile-stat-val">
                <Counter end={1000} suffix="+" />
              </div>
              <div className="mobile-stat-lbl">Students</div>
            </div>

            <div className="mobile-stat-sep"></div>

            <div className="mobile-hero-stat-col">
              <svg className="mobile-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="7" width="18" height="13" rx="2.5" />
                <path d="M8 7V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
              <div className="mobile-stat-val">
                <Counter end={200} suffix="+" />
              </div>
              <div className="mobile-stat-lbl">Placed</div>
            </div>

            <div className="mobile-stat-sep"></div>

            <div className="mobile-hero-stat-col">
              <svg className="mobile-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3L2 8.5l10 5.5 10-5.5-10-5.5z" />
                <path d="M6 10.8v4.8c0 1.8 2.7 3.4 6 3.4s6-1.6 6-3.4v-4.8" />
                <path d="M20 10.5v6" />
              </svg>
              <div className="mobile-stat-val">
                <Counter end={85} suffix="+" />
              </div>
              <div className="mobile-stat-lbl">Faculty</div>
            </div>

            <div className="mobile-stat-sep"></div>

            <div className="mobile-hero-stat-col">
              <svg className="mobile-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l7 3.5-7 3.5-7-3.5 7-3.5z" />
                <path d="M18 6.5v4" />
                <circle cx="12" cy="11.5" r="2.5" />
                <path d="M5.5 21v-1a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v1" />
              </svg>
              <div className="mobile-stat-val">
                <Counter end={200} suffix="+" />
              </div>
              <div className="mobile-stat-lbl">Alumni</div>
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