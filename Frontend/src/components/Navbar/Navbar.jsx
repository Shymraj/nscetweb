import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Img/nscet-logo.webp";
import { FaMoon, FaSun, FaSearch, FaTimes, FaBars, FaLinkedin, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import annualAccountsPdf from "../../pages/Aboutus/AnnualAccounts/assets/documents/annual-accounts.pdf";
import governingPdf from "../../pages/Administration/GoverningCouncil/governing.pdf";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 34) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-contact phone-contact" aria-label="Phone">
            <span className="contact-btn" aria-hidden="true"><FaPhoneAlt className="contact-icon" /></span>
            <span className="contact-text">+91 4567 890 123</span>
          </span>

          <span className="topbar-contact" aria-label="Email">
            <span className="contact-btn" aria-hidden="true"><FaEnvelope className="contact-icon" /></span>
            <span className="contact-text">info@nscet.org</span>
          </span>

          <span className="topbar-contact topbar-address" aria-label="Address">
            <span className="contact-btn" aria-hidden="true"><FaMapMarkerAlt className="contact-icon" /></span>
            <span className="contact-text">Theni Road, Vadapudupatti, Theni - 625531</span>
          </span>
        </div>
        <div className="topbar-right">
          <span className="follow-text">Follow Us:</span>
          <a className="social-btn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className="social-btn" href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a className="social-btn" href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      <nav className="navbar">

        <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
          <div className="logo-box">
            <img src={logo} alt="NSCET Logo" className="logo" />
          </div>

          <div className="college-name">
            <h2 className="nscet-text" style={{ color: darkMode ? '#ffffff' : '#0d3b8e', fontSize: '21px', fontWeight: 800 }}>NSCET</h2>
          </div>
        </Link>

        <ul key={location.pathname} className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>


          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>About Us</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about/overview">Overview</Link></li>
              <li><Link to="/about/actstatutes">Act and Statutes</Link></li>
              <li><Link to="/about/development-plan">Institutional Development Plan</Link></li>
              <li><Link to="/about/affiliation">Affiliation & Accreditation</Link></li>
              <li><Link to="/about/annual-reports">Annual Reports</Link></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(annualAccountsPdf, "_blank");
                  }}
                >
                  Annual Accounts
                </a>
              </li>
            </ul>
          </li>


          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>Administration</Link>
            <ul className="dropdown-menu">
              <li><Link to="/administration/tmhnutrust">TMHNU Trust</Link></li>
              <li><Link to="/administration/principal">Principal</Link></li>
              <li><Link to="/administration/finance-officer">Finance Officer</Link></li>
              <li><Link to="/administration/controller-examination">Controller of Examination</Link></li>
              <li><Link to="/administration/ombudsperson">Ombudsperson</Link></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(governingPdf, "_blank");
                  }}
                >
                  Governing Council
                </a>
              </li>
              <li><Link to="/administration/internal-complaints-committee">Internal Complaints Committee</Link></li>
              <li><Link to="/administration/academic-leadership">Academic Leadership</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>Academics</Link>
            <ul className="dropdown-menu">
              <li><Link to="/academics/details-of-academic-programs">Details of Academic Programs</Link></li>
              <li><Link to="/academics/academic-calendar">Academic Calendar</Link></li>
              <li><Link to="/academics/statutes-ordinances-pertaining">Statutes/Ordinances Pertaining</Link></li>
              <li><Link to="/academics/teaching-faculty">Teaching Faculty</Link></li>
              <li><Link to="/academics/non-teaching-faculty">Non-Teaching Faculty</Link></li>
              <li><Link to="/academics/iqac">IQAC</Link></li>
              <li><Link to="/academics/library">Library</Link></li>
              <li><Link to="/academics/industry-collaboration">Industry Collaboration</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>Departments</Link>
            <ul className="dropdown-menu">
              <li className="has-submenu">
                <span className="submenu-label">Faculty of Computer Science & Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/cse">B.E Computer Science & Engineering</Link></li>
                  <li><Link to="/departments/me-cse">M.E Computer Science & Engineering</Link></li>
                  <li><Link to="/departments/it">B.TECH Information Technology</Link></li>
                  <li><Link to="/departments/aids">B.TECH Artificial Intelligence & Data Science</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <span className="submenu-label">Faculty of Civil Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/civil">B.E Civil Engineering</Link></li>
                  <li><Link to="/departments/me-structural">M.E Structural Engineering</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <span className="submenu-label">Faculty of Mechanical Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/mechanical">B.E Mechanical Engineering</Link></li>
                  <li><Link to="/departments/me-manufacturing">M.E Manufacturing Engineering</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <span className="submenu-label">Faculty of Electrical Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/electrical">B.E Electrical & Electronics Engineering</Link></li>
                  <li><Link to="/departments/me-embedded">M.E Embedded System & Technology</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <span className="submenu-label">Faculty of Electronics Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/electronics">B.E Electronics & Communication Engineering</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/departments/science-humanities">Department of Science & Humanities</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>Research</Link>
            <ul className="dropdown-menu">
              <li><Link to="/research/rnd-cell">Research and Development Cell</Link></li>
              <li><Link to="/research/statistics">Research Statistics</Link></li>
              <li><Link to="/research/centre">Research Centre</Link></li>
              <li><Link to="/research/entrepreneurship-cell">Entrepreneurship Development Cell</Link></li>
              <li><Link to="/research/industry-collaboration">Industry Collaboration</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#" onClick={(e) => e.preventDefault()}>Gallery</Link>
            <ul className="dropdown-menu">
              <li><Link to="/gallery/waves25">WAVES'25</Link></li>
              <li><Link to="/gallery/clubs-chapters">CLUBS & CHAPTERS</Link></li>
              <li><Link to="/gallery/nirf">NIRF</Link></li>
              <li><Link to="/gallery/rti">RTI</Link></li>
              <li><Link to="/gallery/iqarena">IQARENA</Link></li>
              <li><Link to="/gallery/events">Events</Link></li>
            </ul>
          </li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-right">
          <div className="nav-desktop-elements" style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: showSearch ? 0 : 1, visibility: showSearch ? 'hidden' : 'visible', pointerEvents: showSearch ? 'none' : 'auto', transition: 'opacity 0.3s ease' }}>
            <button
              className="search-btn"
              onClick={() => setShowSearch(true)}
            >
              <FaSearch />
            </button>
            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <img src="/images/naac.png" alt="NAAC Logo" className="naac-logo" />
          </div>

          {showSearch && (
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
              />
              <button
                className="close-search"
                onClick={() => setShowSearch(false)}
              >
                <FaTimes />
              </button>
            </div>
          )}
          <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;