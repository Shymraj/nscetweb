import "./Departments.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Indha lines unga file mela iruka nu check pannikonga
import cse from "../../assets/departments/cse.jpg";
import aids from "../../assets/departments/aids.jpg";
import ece from "../../assets/departments/ece.jpg";
import eee from "../../assets/departments/eee.jpg";
import mech from "../../assets/departments/mech.jpg";
import civil from "../../assets/departments/civil.jpg";

const allDepartments = [
  // ================= B.E PROGRAMS =================
  { image: cse, title: "Computer Science & Engineering", category: "B.E", link: "/departments/cse" },
  { image: ece, title: "Electronics & Communication Engineering", category: "B.E", link: "/departments/electronics" },
  { image: eee, title: "Electrical & Electronics Engineering", category: "B.E", link: "/departments/electrical" },
  { image: civil, title: "Civil Engineering", category: "B.E", link: "/departments/civil" },
  { image: mech, title: "Mechanical Engineering", category: "B.E", link: "/departments/mechanical" },

  // ================= B.TECH PROGRAMS =================
  { image: aids, title: "Information Technology", category: "B.Tech", link: "/departments/it" },
  { image: aids, title: "Artificial Intelligence & Data Science", category: "B.Tech", link: "/departments/aids" },

  // ================= M.E PROGRAMS =================
  { image: cse, title: "Computer Science & Engineering", category: "M.E", link: "/departments/me-cse" },
  { image: ece, title: "Embedded Systems & Technology", category: "M.E", link: "/departments/me-embedded" },
  { image: civil, title: "Structural Engineering", category: "M.E", link: "/departments/me-structural" }
];

const tabs = ["All Programs", "B.E", "B.Tech", "M.E"];

function Departments() {
  const [activeTab, setActiveTab] = useState("All Programs");
  const [items, setItems] = useState([]);
  
  const [visibleCards, setVisibleCards] = useState(3);
  const [offset, setOffset] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState("0s");
  const [isHovered, setIsHovered] = useState(false);
  
  const navigate = useNavigate();
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setVisibleCards(1);
      else if (window.innerWidth <= 1024) setVisibleCards(2);
      else setVisibleCards(3); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter and setup item mapping
  useEffect(() => {
    const filtered = activeTab === "All Programs" 
      ? allDepartments 
      : allDepartments.filter(dept => dept.category === activeTab);
    
    let safeItems = [...filtered];

    // CRITICAL: Only duplicate for loop if it is "All Programs" or "B.E"
    if (activeTab === "All Programs" || activeTab === "B.E") {
      while (safeItems.length < visibleCards + 3) {
        safeItems = [...safeItems, ...filtered];
      }
    }

    const finalItems = safeItems.map((item, index) => ({
      ...item,
      uniqueId: `${activeTab}-${index}-${Math.random()}`
    }));

    setItems(finalItems);
    setOffset(0);
    setTransitionDuration("0s");
  }, [activeTab, visibleCards]);

  // Next Slide Logic
  const nextSlide = useCallback(() => {
    // BLOCK ACTION: If tab is B.Tech or M.E, prevent auto loop shifting mechanics
    if (activeTab === "B.Tech" || activeTab === "M.E") return;
    if (isAnimating.current || items.length === 0) return;
    isAnimating.current = true;

    setTransitionDuration("0.6s");
    setOffset(-1);

    setTimeout(() => {
      setTransitionDuration("0s");
      setOffset(0);
      setItems((prev) => {
        const newArr = [...prev];
        newArr.push(newArr.shift());
        return newArr;
      });
      isAnimating.current = false;
    }, 600);
  }, [items.length, activeTab]);

  // Previous Slide Logic
  const prevSlide = useCallback(() => {
    if (activeTab === "B.Tech" || activeTab === "M.E") return;
    if (isAnimating.current || items.length === 0) return;
    isAnimating.current = true;

    setTransitionDuration("0s");
    setOffset(-1);
    setItems((prev) => {
      const newArr = [...prev];
      newArr.unshift(newArr.pop());
      return newArr;
    });

    setTimeout(() => {
      setTransitionDuration("0.6s");
      setOffset(0);
    }, 50);

    setTimeout(() => {
      isAnimating.current = false;
    }, 650);
  }, [items.length, activeTab]);

  // Autoplay Logic triggered conditionally
  useEffect(() => {
    if (isHovered || items.length === 0) return;
    if (activeTab === "B.Tech" || activeTab === "M.E") return; // Freeze interval loop straight ahead
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    
    return () => clearInterval(interval);
  }, [nextSlide, isHovered, items.length, activeTab]);

  // Determine if track template needs absolute alignment centering controls properties values overriding fallback
  const shouldCenterTrack = activeTab === "B.Tech" || activeTab === "M.E";

  return (
    <section className="wide-courses-section">
      <div className="wide-courses-container">
        
        {/* ================= HEADER CONTROLS ================= */}
        <div className="wide-courses-header">
          <div className="w-header-left">
            <span className="w-subtitle">ACADEMIC DEPARTMENTS</span>
            <h2 className="w-title">Explore Our Popular Programs</h2>
          </div>
          <div className="w-header-right">
            <button onClick={() => navigate("/departments")} className="w-view-all-btn" style={{ cursor: "pointer", border: "none" }}>
              VIEW ALL COURSES
            </button>
          </div>
        </div>

        {/* ================= FILTER TABS ================= */}
        <div className="wide-filter-tabs-wrapper">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`wide-filter-tab ${activeTab === tab ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="tab-text">{tab}</span>
              {activeTab === tab && (
                <motion.span 
                  className="wide-tab-bg" 
                  layoutId="wideActiveIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= SLIDER WITH SIDE ARROWS ================= */}
        <div 
          className="wide-slider-master-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Hide navigation indicators globally if columns fields structures are locked */}
          {!shouldCenterTrack && (
            <button className="side-arrow left-arrow" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
          )}

          <div className="wide-slider-viewport">
            <div 
              className={`wide-slider-track ${shouldCenterTrack ? "center-aligned-track" : ""}`}
              style={{
                transform: shouldCenterTrack ? "none" : `translateX(calc(${offset} * (100% / ${visibleCards})))`,
                transition: `transform ${transitionDuration} ease-in-out`
              }}
            >
              {items.map((dept) => (
                <div 
                  className="wide-card-column"
                  key={dept.uniqueId}
                  style={{ 
                    flex: shouldCenterTrack ? "0 1 33.33%" : `0 0 calc(100% / ${visibleCards})`, 
                    width: shouldCenterTrack ? "33.33%" : `calc(100% / ${visibleCards})`,
                    maxWidth: "440px"
                  }}
                >
                  <div className="wide-course-card">
                    
                    <div className="w-card-image-box">
                      <img src={dept.image} alt={dept.title} className="w-card-img" />
                      <div className="w-card-gradient"></div>
                    </div>

                    <div className="w-card-top-badge">
                      <span>{dept.category}</span>
                    </div>

                    <div className="w-card-info-box">
                      <h3 className="w-card-name">{dept.title}</h3>
                      
                      <button 
                        onClick={() => navigate(dept.link)} 
                        className="w-explore-btn"
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        EXPLORE COURSE <FaArrowRight className="w-arrow-icon" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {!shouldCenterTrack && (
            <button className="side-arrow right-arrow" onClick={nextSlide}>
              <FaChevronRight />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}

export default Departments;