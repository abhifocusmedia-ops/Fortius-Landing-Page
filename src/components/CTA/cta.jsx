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
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;