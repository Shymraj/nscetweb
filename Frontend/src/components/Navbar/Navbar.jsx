import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/nscet-logo.webp";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  
  const [darkMode, setDarkMode] = useState(false);

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
            <p>Theni, Tamil Nadu</p>
          </div>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/about">About Us</Link></li>
          
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/infrastructure">Infrastructure</Link></li>
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
    <button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>
    <button className="apply-btn">Apply Now →</button>
</div>

      </nav>
    </header>
  );
}

export default Navbar;