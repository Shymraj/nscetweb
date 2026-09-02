import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Img/nscet-logo.png";
import { FaMoon, FaSun, FaSearch, FaTimes, FaBars, FaLinkedin, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import annualAccountsPdf from "../../pages/AboutUs/AnnualAccounts/assets/documents/annual-accounts.pdf";
import governingPdf from "../../pages/Administration/GoverningCouncil/governing.pdf";

const searchData = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Act and Statutes", path: "/about/actstatutes" },
  { name: "Institutional Development Plan", path: "/about/development-plan" },
  { name: "Affiliation & Accreditation", path: "/about/affiliation" },
  { name: "Annual Accounts", path: "/about/annual-accounts" },
  { name: "TMHNU Trust", path: "/administration/tmhnutrust" },
  { name: "Finance Officer", path: "/administration/finance-officer" },
  { name: "Exam Cell", path: "/administration/controller-examination" },
  { name: "Ombudsperson", path: "/administration/ombudsperson" },
  { name: "Governing Council", path: governingPdf, isPdf: true },
  { name: "Internal Complaints Committee", path: "/administration/internal-complaints-committee" },
  { name: "Academic Leadership", path: "/administration/academic-leadership" },
  { name: "Details of Academic Programs", path: "/academics/details-of-academic-programs" },
  { name: "Academic Calendar", path: "/academics/academic-calendar" },
  { name: "Statutes/Ordinances Pertaining", path: "/academics/statutes-ordinances-pertaining" },
  { name: "Teaching Faculty", path: "/academics/teaching-faculty" },
  { name: "Non-Teaching Faculty", path: "/academics/non-teaching-faculty" },
  { name: "IQAC", path: "/academics/iqac" },
  { name: "Infosys Springboard", path: "/academics/e-learning/infosys-springboard" },
  { name: "NPTEL", path: "/academics/e-learning/nptel" },
  { name: "Library", path: "/academics/library" },
  { name: "Labs", path: "/academics/labs" },
  { name: "Industry Collaboration", path: "/academics/industry-collaboration" },
  { name: "B.E Computer Science & Engineering", path: "/departments/cse" },
  { name: "M.E Computer Science & Engineering", path: "/departments/me-cse" },
  { name: "B.TECH Information Technology", path: "/departments/it" },
  { name: "B.TECH Artificial Intelligence & Data Science", path: "/departments/aids" },
  { name: "B.E Civil Engineering", path: "/departments/civil" },
  { name: "M.E Structural Engineering", path: "/departments/me-structural" },
  { name: "B.E Mechanical Engineering", path: "/departments/mechanical" },
  { name: "M.E Manufacturing Engineering", path: "/departments/me-manufacturing" },
  { name: "B.E Electrical & Electronics Engineering", path: "/departments/electrical" },
  { name: "M.E Embedded System & Technology", path: "/departments/me-embedded" },
  { name: "B.E Electronics & Communication Engineering", path: "/departments/electronics" },
  { name: "Department of Science & Humanities", path: "/departments/science-humanities" },
  { name: "Research and Development Cell", path: "/research/rnd-cell" },
  { name: "Research Statistics", path: "/research/statistics" },
  { name: "Research Centre", path: "/research/centre" },
  { name: "Entrepreneurship Development Cell", path: "/research/entrepreneurship-cell" },
  { name: "ISPIN", path: "/ispin" },
  { name: "WAVES'26", path: "/gallery/waves25" },
  { name: "CLUBS & CHAPTERS", path: "/gallery/clubs-chapters" },
  { name: "NIRF", path: "/gallery/nirf" },
  { name: "RTI", path: "/gallery/rti" },
  { name: "Events", path: "/gallery/events" },
  { name: "Sports", path: "/student-life/sports" },
  { name: "NSS", path: "/student-life/nss" },
  { name: "Boys Hostel", path: "/student-life/boys-hostel" },
  { name: "Girls Hostel", path: "/student-life/girls-hostel" },
  { name: "Placements", path: "/student-life/placements" },
  { name: "Grievance Redressal", path: "/student-life/grievance-redressal" },
  { name: "Anti-Ragging Cell", path: "/student-life/anti-ragging-cell" },
  { name: "Equal Opportunity Cell", path: "/student-life/equal-opportunity-cell" },
  { name: "Health and Medical Facilities", path: "/student-life/health-medical-facilities" },
  { name: "Transport Facilities", path: "/student-life/transport-facilities" },
  { name: "SEDG", path: "/student-life/sedg" },
  { name: "Alumni", path: "/alumni" },
  { name: "Contact", path: "/contact" }
];

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
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

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const results = searchData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleSearchResultClick = (result) => {
    if (result.isPdf) {
      window.open(result.path + '#toolbar=0', "_blank");
    } else {
      navigate(result.path);
    }
    setShowSearch(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-contact phone-contact" aria-label="Phone">
            <span className="contact-btn" aria-hidden="true"><FaPhoneAlt className="contact-icon" /></span>
            <span className="contact-text">04546-263900, 901, 902</span>
          </span>

          <span className="topbar-contact" aria-label="Email">
            <span className="contact-btn" aria-hidden="true"><FaEnvelope className="contact-icon" /></span>
            <a href="mailto:info@nscet.org" className="contact-text" style={{ textDecoration: 'none', color: 'inherit' }}>info@nscet.org</a>
          </span>

          <span className="topbar-contact topbar-address" aria-label="Address">
            <span className="contact-btn" aria-hidden="true"><FaMapMarkerAlt className="contact-icon" /></span>
            <span className="contact-text">Theni Road, Vadapudupatti, Theni - 625531</span>
          </span>
        </div>
        <div className="topbar-right">
          <div className="follow-us-box">
            <span className="follow-text">Follow Us</span>
            <div className="social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn youtube" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">

        <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
          <div className="logo-box">
            <img src={logo} alt="NSCET Logo" className="logo" />
          </div>

          <div className="college-name">
            <h2 className="nscet-text">NSCET</h2>
          </div>
        </Link>

        <ul key={location.pathname} className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>


          <li className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`} onMouseLeave={() => window.innerWidth > 1024 && setActiveDropdown(null)}>
            <Link to="/about" onClick={(e) => {
              if (window.innerWidth <= 1024) {
                e.preventDefault();
                setActiveDropdown(activeDropdown === 'about' ? null : 'about');
              }
            }}>About Us</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about/actstatutes">Act and Statutes</Link></li>
              <li><Link to="/about/development-plan">Institutional Development Plan</Link></li>
              <li><Link to="/about/affiliation">Affiliation & Accreditation</Link></li>
              <li><Link to="/about/annual-accounts">Annual Accounts</Link></li>
            </ul>
          </li>


          <li className={`dropdown ${activeDropdown === 'admin' ? 'active' : ''}`} onMouseLeave={() => window.innerWidth > 1024 && setActiveDropdown(null)}>
            <Link to="/administration/tmhnutrust" onClick={(e) => {
              if (window.innerWidth <= 1024) {
                e.preventDefault();
                setActiveDropdown(activeDropdown === 'admin' ? null : 'admin');
              }
            }}>Administration</Link>
            <ul className="dropdown-menu">
              {/* <li><Link to="/administration/finance-officer">Finance Officer</Link></li>*/}
              <li><Link to="/administration/controller-examination">Exam Cell</Link></li>
              <li><Link to="/administration/ombudsperson">Ombudsperson</Link></li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(governingPdf + '#toolbar=0', "_blank");
                  }}
                >
                  Governing Council
                </a>
              </li>
              <li><Link to="/administration/internal-complaints-committee">Internal Complaints Committee</Link></li>
              <li><Link to="/administration/academic-leadership">Academic Leadership</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${activeDropdown === 'academics' ? 'active' : ''}`} onMouseLeave={() => window.innerWidth > 1024 && setActiveDropdown(null)}>
            <Link to="/academics/details-of-academic-programs" onClick={(e) => {
              if (window.innerWidth <= 1024) {
                e.preventDefault();
                setActiveDropdown(activeDropdown === 'academics' ? null : 'academics');
              }
            }}>Academics</Link>
            <ul className="dropdown-menu">
              <li><Link to="/academics/academic-calendar">Academic Calendar</Link></li>
              <li><Link to="/academics/statutes-ordinances-pertaining">Statutes/Ordinances Pertaining</Link></li>
              <li><Link to="/academics/teaching-faculty">Teaching Faculty</Link></li>
              <li><Link to="/academics/non-teaching-faculty">Non-Teaching Faculty</Link></li>
              <li><Link to="/academics/iqac">IQAC</Link></li>
              <li className="has-submenu">
                <span className="submenu-label">E-learning <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/academics/e-learning/infosys-springboard">INFOSYS SPRINGBOARD</Link></li>
                  <li><Link to="/academics/e-learning/nptel">NPTEL</Link></li>
                </ul>
              </li>
              <li><Link to="/academics/library">Library</Link></li>
              <li><Link to="/academics/labs">Labs</Link></li>
              <li><Link to="/academics/industry-collaboration">Industry Collaboration</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${activeDropdown === 'departments' ? 'active' : ''}`} onMouseLeave={() => { if (window.innerWidth > 1024) { setActiveDropdown(null); setActiveSubmenu(null); } }}>
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth <= 1024) {
                setActiveDropdown(activeDropdown === 'departments' ? null : 'departments');
              }
            }}>Departments</Link>
            <ul className={`dropdown-menu ${activeSubmenu ? 'has-active-submenu' : ''}`}>
              <li className={`has-submenu ${activeSubmenu === 'cse' ? 'active' : ''}`}>
                <span className="submenu-label" onClick={(e) => { e.preventDefault(); setActiveSubmenu(activeSubmenu === 'cse' ? null : 'cse'); }}>Dept of Computer Science & Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/cse">B.E Computer Science & Engineering</Link></li>
                  <li><Link to="/departments/me-cse">M.E Computer Science & Engineering</Link></li>
                  <li><Link to="/departments/it">B.TECH Information Technology</Link></li>
                  <li><Link to="/departments/aids">B.TECH Artificial Intelligence & Data Science</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${activeSubmenu === 'civil' ? 'active' : ''}`}>
                <span className="submenu-label" onClick={(e) => { e.preventDefault(); setActiveSubmenu(activeSubmenu === 'civil' ? null : 'civil'); }}>Dept of Civil Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/civil">B.E Civil Engineering</Link></li>
                  <li><Link to="/departments/me-structural">M.E Structural Engineering</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${activeSubmenu === 'mech' ? 'active' : ''}`}>
                <span className="submenu-label" onClick={(e) => { e.preventDefault(); setActiveSubmenu(activeSubmenu === 'mech' ? null : 'mech'); }}>Dept of Mechanical Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/mechanical">B.E Mechanical Engineering</Link></li>
                  <li><Link to="/departments/me-manufacturing">M.E Manufacturing Engineering</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${activeSubmenu === 'eee' ? 'active' : ''}`}>
                <span className="submenu-label" onClick={(e) => { e.preventDefault(); setActiveSubmenu(activeSubmenu === 'eee' ? null : 'eee'); }}>Dept of Electrical Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/electrical">B.E Electrical & Electronics Engineering</Link></li>
                  <li><Link to="/departments/me-embedded">M.E Embedded System & Technology</Link></li>
                </ul>
              </li>
              <li className={`has-submenu ${activeSubmenu === 'ece' ? 'active' : ''}`}>
                <span className="submenu-label" onClick={(e) => { e.preventDefault(); setActiveSubmenu(activeSubmenu === 'ece' ? null : 'ece'); }}>Dept of Electronics Engineering <span className="submenu-arrow">›</span></span>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/electronics">B.E Electronics & Communication Engineering</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/departments/science-humanities">Science & Humanities</Link>
              </li>
            </ul>
          </li>
          <li className={`dropdown ${activeDropdown === 'research' ? 'active' : ''}`} onMouseLeave={() => window.innerWidth > 1024 && setActiveDropdown(null)}>
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth <= 1024) {
                setActiveDropdown(activeDropdown === 'research' ? null : 'research');
              }
            }}>Research</Link>
            <ul className="dropdown-menu">
              <li><Link to="/research/rnd-cell">Research and Development Cell</Link></li>
              <li><Link to="/research/statistics">Research Statistics</Link></li>
              <li><Link to="/research/centre">Research Centre</Link></li>
              <li><Link to="/research/entrepreneurship-cell">Entrepreneurship Development Cell</Link></li>
            </ul>
          </li>
          <li><Link to="/ispin">ISPIN</Link></li>
          <li className={`dropdown ${activeDropdown === 'gallery' ? 'active' : ''}`} onMouseLeave={() => window.innerWidth > 1024 && setActiveDropdown(null)}>
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth <= 1024) {
                setActiveDropdown(activeDropdown === 'gallery' ? null : 'gallery');
              }
            }}>Gallery</Link>
            <ul className="dropdown-menu">
              <li><Link to="/gallery/waves25">WAVES'26</Link></li>
              <li><Link to="/gallery/clubs-chapters">CLUBS & CHAPTERS</Link></li>
              <li><Link to="/gallery/nirf">NIRF</Link></li>
              <li><Link to="/gallery/rti">RTI</Link></li>
              <li><Link to="/gallery/events">Events</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${activeDropdown === 'student-life' ? 'active' : ''}`} onMouseLeave={() => window.innerWidth > 1024 && setActiveDropdown(null)}>
            <Link to="#" onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth <= 1024) {
                setActiveDropdown(activeDropdown === 'student-life' ? null : 'student-life');
              }
            }}>Student Life</Link>
            <ul className="dropdown-menu">
              <li><Link to="/student-life/sports">Sports</Link></li>
              <li><Link to="/student-life/nss">NSS</Link></li>
              <li><Link to="/student-life/boys-hostel">Boys Hostel</Link></li>
              <li><Link to="/student-life/girls-hostel">Girls Hostel</Link></li>
              <li><Link to="/student-life/placements">Placements</Link></li>
              <li><Link to="/student-life/grievance-redressal">Grievance Redressal</Link></li>
              <li><Link to="/student-life/anti-ragging-cell">Anti-Ragging Cell</Link></li>
              <li><Link to="/student-life/equal-opportunity-cell">Equal Opportunity Cell</Link></li>
              <li><Link to="/student-life/health-medical-facilities">Health and Medical Facilities</Link></li>
              <li><Link to="/student-life/transport-facilities">Transport Facilities</Link></li>
              <li><Link to="/student-life/sedg">SEDG</Link></li>
            </ul>
          </li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-right">
          {!showSearch ? (
            <div className="nav-desktop-elements">
              <button
                className="search-btn"
                onClick={() => setShowSearch(true)}
                title="Search"
                aria-label="Search"
              >
                <FaSearch />
              </button>
              <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <img src="/images/naac.png?v=3" alt="NAAC Logo" className="naac-logo" />
            </div>
          ) : (
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchResults.length > 0) {
                    handleSearchResultClick(searchResults[0]);
                  }
                }}
                autoFocus
              />
              <button
                className="close-search"
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                  setSearchResults([]);
                }}
                title="Close Search"
                aria-label="Close Search"
              >
                <FaTimes />
              </button>

              {searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleSearchResultClick(result)}
                    >
                      {result.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="tnea-badge-hanging">
          <span className="tnea-badge-title">TNEA CODE</span>
          <span className="tnea-badge-number">5865</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
