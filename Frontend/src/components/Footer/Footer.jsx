import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import nscetLogo from "../../assets/Img/nscet-logo.webp";
import mandatoryDisclosurePdf from "./pdf's/NSCET - Mandatory Disclosure-2026-27.pdf";
import aictePdf from "./pdf's/aicte.pdf";
import auPdf from "./pdf's/AU 2024-25.pdf";
import feeRefundPdf from "./pdf's/FEE_REFUND_POLICY.pdf";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="global-footer">
      {/* Professional Geometric Background */}
      <div className="footer-bg-animation">
        <div className="geo-shape shape-1"></div>
        <div className="geo-shape shape-2"></div>
        <div className="geo-shape shape-3"></div>
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
            <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
              <img src={nscetLogo} alt="NSCET Logo" />
              <h3>NSCET</h3>
            </Link>
            <p className="footer-about">
              Nadar Saraswathi College of Engineering and Technology is a premier institution dedicated to empowering young minds through innovation, technical excellence, and holistic development.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/nscetofficial/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://x.com/NscetT" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="https://www.instagram.com/nscettmhnu/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://in.linkedin.com/company/nscet" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@NSCETeConnect" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics/details-of-academic-programs">Academics</Link></li>
              <li><Link to="/gallery/events">Events</Link></li>
              <li><Link to="/research/rnd-cell">Research</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul className="footer-links">
              <li><a href={mandatoryDisclosurePdf} target="_blank" rel="noopener noreferrer">Mandatory Disclosure</a></li>
              <li><a href={aictePdf} target="_blank" rel="noopener noreferrer">AICTE Approval</a></li>
              <li><a href={auPdf} target="_blank" rel="noopener noreferrer">AU Affiliation</a></li>
              <li><a href={feeRefundPdf} target="_blank" rel="noopener noreferrer">Fee Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>NSCET, PostboxNo:60, Annanji(P.O), Vadapudupatti, Theni-625531</span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>04546-263900, 901, 902</span>
              </li>
              <li>
                <a href="mailto:principal@nscet.org" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', width: '100%' }}>
                  <FaEnvelope className="contact-icon" />
                  <span style={{ color: 'var(--theme-accent, #f59e0b)', textDecoration: 'underline' }}>principal@nscet.org</span>
                </a>
              </li>
            </ul>
            <a href="https://www.google.com/maps/search/Nadar+Saraswathi+College+of+Engineering+and+Technology,+Theni" target="_blank" rel="noopener noreferrer" className="map-btn">
              <FaMapMarkerAlt /> View on Google Maps
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Nadar Saraswathi College of Engineering and Technology. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
