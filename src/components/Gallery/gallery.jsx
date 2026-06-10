import "./gallery.css";
import { motion } from "framer-motion";
import soccer from "../../assets/images/soccer.jpg";
import badminton from "../../assets/images/badminton.jpg";
import hero from "../../assets/images/hero-image.jpg";
import yoga from "../../assets/images/yoga.jpg";
import dance from "../../assets/images/dance.jpg";
import download from "../../assets/images/download.jpg"
import fitness from "../../assets/images/fitness.avif"
import free from "../../assets/images/free.jpg"


function Gallery() {
  const images = [
    {
      title: "Football Training",
      image: soccer,
    },
    {
      title: "Badminton Coaching",
      image: badminton,
    },
    {
      title: "Main Camp Experience",
      image: hero,
    },
    {
      title: "Yoga Sessions",
      image: yoga,
    },
    {
      title: "Dance Classes",
      image: dance,
    },
  ];

  const cardAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-title">
        <span>OUR GALLERY</span>
        <h2>Moments From Fortius Summer Camp</h2>
        <p>
          Explore exciting activities, sports training,
          creativity and unforgettable memories.
        </p>
      </div>

      <div className="gallery-grid">

  {/* Left Column */}
  <div className="gallery-column">

  <motion.div
  className="gallery-card small"
  {...cardAnimation}>
      <img src={soccer} alt="Football Training" />
      <div className="gallery-overlay">
        <h3>Football Training</h3>
      </div>
    </motion.div>

    <motion.div className="gallery-card small"
  {...cardAnimation}>
      <img src={yoga} alt="Yoga Sessions" />
      <div className="gallery-overlay">
        <h3>Yoga Sessions</h3>
      </div>
    </motion.div>

    <motion.div className="gallery-card small"
  {...cardAnimation}>
      <img src={dance} alt="Dance Classes" />
      <div className="gallery-overlay">
        <h3>Dance Classes</h3>
      </div>
    </motion.div>

  </div>

  {/* Center Column */}
  <div className="gallery-column">

    <motion.div
  className="gallery-card tall"
  {...cardAnimation}>
      <img src={hero} alt="Fortius Summer Camp" />

      <div className="gallery-overlay center-overlay">
        <h2>FORTIUS SUMMER CAMP</h2>
        <p>• Learn • Play • Grow</p>
      </div>
    </motion.div>

    <motion.div
  className="gallery-card small"
  {...cardAnimation}>
      <img src={free} alt="Kids Activities" />
      <div className="gallery-overlay">
        <h3>Kids Activities</h3>
      </div>
    </motion.div>

  </div>

  {/* Right Column */}
  <div className="gallery-column">

    <motion.div className="gallery-card small"
  {...cardAnimation}>
      <img src={badminton} alt="Badminton Coaching" />
      <div className="gallery-overlay">
        <h3>Badminton Coaching</h3>
      </div>
    </motion.div>

    <motion.div className="gallery-card small"
  {...cardAnimation}>
      <img src={fitness} alt="Fitness Training" />
      <div className="gallery-overlay">
        <h3>Fitness Training</h3>
      </div>
    </motion.div>

    <motion.div className="gallery-card small"
  {...cardAnimation}>
      <img src={free} alt="Camp Event" />
      <div className="gallery-overlay">
        <h3>Camp Event</h3>
      </div>
    </motion.div>

  </div>

</div>

    </section>
  );
}

export default Gallery;