import "./Departments.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Images Import (Check paths as per your folder structure)
import cse from "../../assets/departments/cse.jpg";
import it from "../../assets/departments/it.jpg";
import aids from "../../assets/departments/aids.jpg";
import ece from "../../assets/departments/ece.jpg";
import eee from "../../assets/departments/eee.jpg";
import mech from "../../assets/departments/mech.jpg";
import civil from "../../assets/departments/civil.jpg";

const allDepartments = [
  // ================= B.E PROGRAMS =================
  { id: "be-cse", image: cse, title: "Computer Science & Engineering", category: "B.E", link: "/departments/cse" },
  { id: "be-ece", image: ece, title: "Electronics & Communication Engineering", category: "B.E", link: "/departments/electronics" },
  { id: "be-eee", image: eee, title: "Electrical & Electronics Engineering", category: "B.E", link: "/departments/electrical" },
  { id: "be-civil", image: civil, title: "Civil Engineering", category: "B.E", link: "/departments/civil" },
  { id: "be-mech", image: mech, title: "Mechanical Engineering", category: "B.E", link: "/departments/mechanical" },

  // ================= B.TECH PROGRAMS =================
  { id: "bt-it", image: it, title: "Information Technology", category: "B.Tech", link: "/departments/it" },
  { id: "bt-aids", image: aids, title: "Artificial Intelligence & Data Science", category: "B.Tech", link: "/departments/aids" },

  // ================= M.E PROGRAMS =================
  { id: "me-cse", image: cse, title: "Computer Science & Engineering", category: "M.E", link: "/departments/me-cse" },
  { id: "me-ece", image: ece, title: "Embedded Systems & Technology", category: "M.E", link: "/departments/me-embedded" },
  { id: "me-civil", image: civil, title: "Structural Engineering", category: "M.E", link: "/departments/me-structural" }
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

  // Responsive breakpoints
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

  // Filter and setup item mapping (Only for Slider categories)
  useEffect(() => {
    if (activeTab === "All Programs") return; 

    const filtered = allDepartments.filter(dept => dept.category === activeTab);
    let safeItems = [...filtered];

    if (activeTab === "B.E") {
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

  const nextSlide = useCallback(() => {
    if (activeTab === "All Programs" || activeTab === "B.Tech" || activeTab === "M.E") return;
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

  const prevSlide = useCallback(() => {
    if (activeTab === "All Programs" || activeTab === "B.Tech" || activeTab === "M.E") return;
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

  useEffect(() => {
    if (isHovered || items.length === 0) return;
    if (activeTab === "All Programs" || activeTab === "B.Tech" || activeTab === "M.E") return; 
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    
    return () => clearInterval(interval);
  }, [nextSlide, isHovered, items.length, activeTab]);

  const shouldCenterTrack = activeTab === "B.Tech" || activeTab === "M.E";

  const renderCard = (dept) => (
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
        >
          EXPLORE COURSE <FaArrowRight className="w-arrow-icon" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="wide-courses-section">
      <div className="wide-courses-container">
        
        {/* ================= HEADER CONTROLS (CENTERED & REMOVED BUTTON) ================= */}
        <div className="wide-courses-header">
          <span className="w-subtitle">ACADEMIC DEPARTMENTS</span>
          <h2 className="w-title">Explore Our Popular Programs</h2>
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
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ================= DYNAMIC LAYOUT AREA ================= */}
        {activeTab === "All Programs" ? (
          <div className="all-programs-grid">
            <AnimatePresence>
              {allDepartments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {renderCard(dept)}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            className="wide-slider-master-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
                    {renderCard(dept)}
                  </div>
                ))}
              </div>
            </div>

            {!shouldCenterTrack && (
              <button className="side-arrow right-arrow" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Departments;