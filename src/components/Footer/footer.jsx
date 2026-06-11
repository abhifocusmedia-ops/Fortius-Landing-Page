import { useState } from "react";
import "./footer.css";
import logo from "/assets/logos/fortius-logo.png";
import { FaPaperPlane } from "react-icons/fa";

function Footer() {

  const [errors, setErrors] = useState({
  email: "",
  phone: "",
});

  const [contactData, setContactData] = useState({
  parentName: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setContactData({
    ...contactData,
    [name]: value,
  });

  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value && !emailRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  }

  if (name === "phone") {
    if (value.length > 0 && value.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be 10 digits",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (errors.email || errors.phone) {
    return;
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbxwbT5b96FJFo-cNoTj69gPKSmKlumtrIKlDIf3Ic1A1Kbb1ZUIgHWg4pycCLICS_zn/exec",
    {
      method: "POST",
      body: JSON.stringify({
        formType: "contact",
        ...contactData,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      alert("Message Sent Successfully!");

      setContactData({
        parentName: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch((err) => {
      console.error(err);
      alert("Something went wrong");
    });
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
{errors.email && (
  <p className="error-text">{errors.email}</p>
)}

            <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={contactData.phone}
  onChange={handleChange}
/>
{errors.phone && (
  <p className="error-text">{errors.phone}</p>
)}

            <textarea
  rows="4"
  name="message"
  placeholder="Your Message"
  value={contactData.message}
  onChange={handleChange}
></textarea>

            <button
  type="submit"
  disabled={
    !contactData.parentName ||
    !contactData.email.includes("@") ||
    contactData.phone.length !== 10 ||
    !contactData.message
  }
>
  Send Message
  <FaPaperPlane/>
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