import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/nscet-logo.webp";
import { FaMoon, FaSun, FaSearch, FaTimes } from "react-icons/fa";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (


    <header>
      <nav className="navbar">

        <div className="logo-section">
          <div className="logo-box">
            <img src={logo} alt="NSCET Logo" className="logo" />
          </div>
          
          <div className="college-name">
            <h2>NSCET</h2>
          </div>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>


          <li className="dropdown">
            <Link to="/about">About Us</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about/overview">Overview</Link></li>
              <li><Link to="/about/actstatutes">Act and Statutes</Link></li>
              <li><Link to="/about/development-plan">Institutional Development Plan</Link></li>
              <li><Link to="/about/affiliation">Affiliation & Accreditation</Link></li>
              <li><Link to="/about/annual-reports">Annual Reports</Link></li>
              <li><Link to="/about/annual-accounts">Annual Accounts</Link></li>
            </ul>
          </li>


          <li className="dropdown">
            <Link to="/administration">Administration</Link>
            <ul className="dropdown-menu">
              <li><Link to="/administration/tmhnutrust">TMHNU Trust</Link></li>
              <li><Link to="/administration/principal">Principal</Link></li>
              <li><Link to="/administration/finance-officer">Finance Officer</Link></li>
              <li><Link to="/administration/controller-examination">Controller of Examination</Link></li>
              <li><Link to="/administration/ombudsperson">Ombudsperson</Link></li>
              <li><Link to="/administration/governing-council">Governing Council</Link></li>
              <li><Link to="/administration/internal-complaints-committee">Internal Complaints Committee</Link></li>
              <li><Link to="/administration/academic-leadership">Academic Leadership</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/academics">Academics</Link>
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
            <Link to="/departments">Departments</Link>
            <ul className="dropdown-menu">
              <li className="has-submenu">
                <Link to="/departments/cse">Faculty of Computer Science & Engineering <span className="submenu-arrow">›</span></Link>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/cse">B.E Computer Science & Engineering</Link></li>
                  <li><Link to="/departments/me-cse">M.E Computer Science & Engineering</Link></li>
                  <li><Link to="/departments/it">B.TECH Information Technology</Link></li>
                  <li><Link to="/departments/aids">B.TECH Artificial Intelligence & Data Science</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/departments/civil">Faculty of Civil Engineering <span className="submenu-arrow">›</span></Link>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/civil">B.E Civil Engineering</Link></li>
                  <li><Link to="/departments/me-structural">M.E Structural Engineering</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/departments/mechanical">Faculty of Mechanical Engineering <span className="submenu-arrow">›</span></Link>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/mechanical">B.E Mechanical Engineering</Link></li>
                  <li><Link to="/departments/me-manufacturing">M.E Manufacturing Engineering</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/departments/electrical">Faculty of Electrical Engineering <span className="submenu-arrow">›</span></Link>
                <ul className="sub-dropdown-menu">
                  <li><Link to="/departments/electrical">B.E Electrical & Electronics Engineering</Link></li>
                  <li><Link to="/departments/me-embedded">M.E Embedded System & Technology</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/departments/electronics">Faculty of Electronics Engineering <span className="submenu-arrow">›</span></Link>
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
            <Link to="/research">Research</Link>
            <ul className="dropdown-menu">
              <li><Link to="/research/rnd-cell">Research and Development Cell</Link></li>
              <li><Link to="/research/statistics">Research Statistics</Link></li>
              <li><Link to="/research/centre">Research Centre</Link></li>
              <li><Link to="/research/entrepreneurship-cell">Entrepreneurship Development Cell</Link></li>
              <li><Link to="/research/industry-collaboration">Industry Collaboration</Link></li>
            </ul>
          </li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-right">
         {!showSearch && (
<button
className="search-btn"
onClick={()=>setShowSearch(true)}
>
<FaSearch/>
</button>
)}
  

{showSearch ? (

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
) : (

  <>
    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>

    <button className="apply-btn">
      Apply Now →
    </button>
  </>

)}
        </div>

      </nav>
    </header>
  );
}

export default Navbar;