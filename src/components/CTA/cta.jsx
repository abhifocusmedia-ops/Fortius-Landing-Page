import "./cta.css";
import {FaMapMarkerAlt,FaUsers,FaCalendarAlt} from "react-icons/fa";

function CTA({ setShowModal}) {
    return (
    <section className="cta-section" id="contact">

    <div className="cta-container">

        <div className="cta-left">

          <span className="cta-tag">
            LIMITED SPOTS AVAILABLE
          </span>

          <h2>
            Ready To Join
            <span> Fortius Summer Camp?</span>
          </h2>

          <p>
            Give your child an unforgettable summer filled
            with sports, creativity and lifelong friendships.
          </p>

          <div className="cta-info">

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>2 Camp Locations</span>
            </div>

            <div className="info-item">
              <FaUsers />
              <span>Ages 5-15 Years</span>
            </div>

            <div className="info-item">
              <FaCalendarAlt />
              <span>Summer 2026</span>
            </div>

          </div>

          <div className="cta-buttons">
            <button className="cta-primary" onClick={() => setShowModal(true)} >
              Register Now
            </button>

            <button className="cta-secondary" onClick={() => setShowModal(true)}>
              Contact Us
            </button>
          </div>

        </div>

        <div className="cta-right">

          <div className="map-card">

            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.337520056136!2d-84.22125592424153!3d34.112107973134435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59d871f9d5b19%3A0xa247670808ae3f21!2sFortius%20Sports%20Academy%20%40GG!5e0!3m2!1sen!2sin!4v1781188566754!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;