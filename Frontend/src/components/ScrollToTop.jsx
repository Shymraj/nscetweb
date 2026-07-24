import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track scroll position to display floating up-arrow button after hero section (>450px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          <FaChevronUp className="scroll-top-icon" />
        </button>
      )}
    </>
  );
}
