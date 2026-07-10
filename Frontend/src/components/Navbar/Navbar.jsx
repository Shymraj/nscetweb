import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Img/nscet-logo.webp";

function Navbar() {
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
          
         <li className="dropdown">
    <Link to="/about">About Us</Link>

    <ul className="dropdown-menu">

        <li><Link to="/overview">Overview</Link></li>

        <li><Link to="/act-status">Act and Status</Link></li>

        <li><Link to="/development-plan">Institutional Development Plan</Link></li>

        <li><Link to="/affiliation">Affiliation & Accreditation</Link></li>

        <li><Link to="/annual-reports">Annual Reports</Link></li>

        <li><Link to="/annual-accounts">Annual Accounts</Link></li>

    </ul>

</li>   

          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/infrastructure">Infrastructure</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-right">
    <button className="theme-btn">🌙</button>
    <button className="apply-btn">Apply Now →</button>
</div>

      </nav>
    </header>
  );
}

export default Navbar;