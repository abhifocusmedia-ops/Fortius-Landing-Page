import "./footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "/assets/logos/fortius-logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">
            <div className="logo">
                <img src={logo} alt="Fortius Logo" />
            </div>
        <p>
            Building active, confident and happy kids through
            sports, creativity and fitness.
        </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#whychoose">Why Fortius</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Programs</h3>
          <ul>
            <li><a href="#programs">Football</a></li>
            <li><a href="#programs">Badminton</a></li>
            <li><a href="#programs">Yoga</a></li>
            <li><a href="#programs">Dance</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Hyderabad
          </p>

          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>

          <p>
            <FaEnvelope /> info@fortius.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Fortius Summer Camp. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;