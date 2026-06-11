import "./hero.css";
import { motion } from "framer-motion";
import { FaFutbol, FaPaintBrush } from "react-icons/fa";
import { GiShuttlecock, GiMeditation } from "react-icons/gi";
import { MdSportsKabaddi } from "react-icons/md";

function Hero({ setShowModal }) {
    return (
    <section className="hero" id="hero">

        <div className="hero-overlay"></div>

      {/* Floating Shapes */}
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>

        <div className="hero-container">

        <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <span className="hero-tag">
            Fortius Summer Camp 2026
            </span>
            <span className="hero-mini-title">
                • Sports • Creativity • Fitness
            </span>

            <h1>
            FORTIUS
            <span> SUMMER CAMP</span>
            </h1>

            <p>
            An active, engaging space where kids learn,
            play & express themselves through sports,
            creativity and fitness.
            </p>

            <div className="activity-chips">

            <span>
            <GiShuttlecock /> Badminton
            </span>

            <span>
                <MdSportsKabaddi /> Dance
            </span>

            <span>
                <GiMeditation /> Yoga
            </span>

            <span>
                <FaPaintBrush /> Arts & Crafts
            </span>

            <span>
                <FaFutbol /> Indoor Soccer
            </span>

            <span>
                <GiMeditation /> Fun & Fitness
            </span>


            </div>

            <div className="hero-buttons">
            <button className="primary-btn"  onClick={() => setShowModal(true)}>
                Register Now
            </button>

            <button className="secondary-btn" >
                <a href="#programs"> Explore Program</a>
            </button>
            </div>

        </motion.div>


        {/* Right Side Cards */}
        <div className="hero-right">

    <div className="floating-card offer-card">
        <h3>📅 Daily Drop-In</h3>
        <div className="card-price">
            Full Day - $80
        </div>

        <div className="card-price">
            Half Day - $60
        </div>
    </div>

    <div className="floating-card timing-card">
        <h3>⏰ Half Day</h3>
        <h2>9 AM - 12 PM</h2>
        <p>or 1 PM - 4 PM</p>
        <div className="card-price">
            $225 / Week
        </div>
    </div>

    <div className="floating-card timing-card">
        <h3>🏆 Full Day</h3>
        <h2>9 AM - 4 PM</h2>
        <p>Lunch Available</p>
        <div className="card-price">
            $350 / Week
        </div>
    </div>

    </div>

        </div>

    </section>
    );
}

export default Hero;