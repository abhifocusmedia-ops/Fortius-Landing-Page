import "./whychoose.css";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaShieldAlt,
  FaFutbol,
  FaSmileBeam,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie />,
    title: "Expert Coaches",
    desc: "Experienced trainers helping children learn, grow and improve with confidence.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Environment",
    desc: "A secure and supportive space where kids can explore and have fun safely.",
  },
  {
    icon: <FaFutbol />,
    title: "Multiple Activities",
    desc: "Sports, fitness, yoga, dance and creative programs all under one roof.",
  },
  {
    icon: <FaSmileBeam />,
    title: "Fun Learning",
    desc: "Building confidence, teamwork and friendships through engaging activities.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section" id="whychoose">

      <div className="why-title">
        <span>WHY CHOOSE FORTIUS</span>

        <h2>
          More Than A Camp,
          <br />
          A Place To Grow
        </h2>

        <p>
          We create unforgettable experiences that help children
          stay active, build confidence and develop lifelong skills.
        </p>
      </div>

      <div className="why-grid">

        {features.map((item, index) => (
          <motion.div
            className="why-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;