import "./footer.css";
import logo from "/assets/logos/fortius-logo.png";
import { FaPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">

          <img
            src={logo}
            alt="Fortius Logo"
            className="footer-logo"
          />

          <p>
            Building active, confident and happy kids through
            sports, creativity and fitness.
          </p>

          <div className="footer-contact-info">

  <div className="contact-item">
    <span>📞</span>
    <p>+91 98765 43210</p>
  </div>

  <div className="contact-item">
   
    <span>✉️</span>
    <p>info@fortiusacademy.com</p>
  </div>

  <div className="contact-item">
    <span>📍</span>
    <p>Hyderabad, Telangana</p>
  </div>

</div>

        </div>

        {/* Right Side Form */}
        <div className="footer-form-card">

          <h2>Get In Touch</h2>

          <p>
            Register your child or send us an enquiry.
          </p>

          <form className="footer-form">

            <input
              type="text"
              placeholder="Parent Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Fortius Summer Camp. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;