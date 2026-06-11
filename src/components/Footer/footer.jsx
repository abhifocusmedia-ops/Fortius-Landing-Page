import { useState } from "react";
import "./footer.css";
import logo from "/assets/logos/fortius-logo.png";
import { FaPaperPlane } from "react-icons/fa";

function Footer() {

  const [contactData, setContactData] = useState({
  parentName: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setContactData({
    ...contactData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(contactData);
};
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

         <form
  className="footer-form"
  onSubmit={handleSubmit}
>

           <input
  type="text"
  name="parentName"
  placeholder="Parent Name"
  value={contactData.parentName}
  onChange={handleChange}
/>

            <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={contactData.email}
  onChange={handleChange}
/>

            <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={contactData.phone}
  onChange={handleChange}
/>

            <textarea
  rows="4"
  name="message"
  placeholder="Your Message"
  value={contactData.message}
  onChange={handleChange}
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