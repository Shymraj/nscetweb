import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="global-footer">
      {/* Background Animations */}
      <div className="footer-bg-animation">
        <div className="footer-blob blob-1"></div>
        <div className="footer-blob blob-2"></div>
      </div>

      {/* Wave Divider */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="footer-container">

        {/* Main Footer Links */}
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/src/assets/logo.png" alt="NSCET Logo" onError={(e) => e.target.src = "https://placehold.co/100x100/1e40af/FFF?text=N"} />
              <h3>NSCET</h3>
            </div>
            <p className="footer-about">
              Nadar Saraswathi College of Engineering and Technology is a premier institution dedicated to empowering young minds through innovation, technical excellence, and holistic development.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul className="footer-links">
              <li><a href="#">Mandatory Disclosure</a></li>
              <li><a href="#">NAAC</a></li>
              <li><a href="#">AICTE</a></li>
              <li><a href="#">Anna University</a></li>
              <li><a href="#">NIRF</a></li>
              <li><a href="#">RTI Policies</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Nadar Saraswathi College of Engineering and Technology, Vadapudupatti, Theni - 625 531</span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>+91 96880 96880</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>principal@nscet.org</span>
              </li>
            </ul>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-btn">
              <FaMapMarkerAlt /> View on Google Maps
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Nadar Saraswathi College of Engineering and Technology. All Rights Reserved.
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
