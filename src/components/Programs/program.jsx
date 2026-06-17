import "./programs.css";
import { motion } from "framer-motion";
import Programbg from "/assets/images/banner.webp";
import FunandFitness from "/assets/images/fun and fitness.webp";
import IndoorGames from "/assets/images/indoor-game.webp";
import Dances from "/assets/images/Dances.webp";
import yoga from "/assets/images/yoga.webp";
import badminton from "/assets/images/badminton.webp";

const programs = [
    {
    title: "Fun & Fitness",
    image: FunandFitness,
    description: "Learn teamwork, coordination and football skills through fun training sessions."
    },
    {
    title: "Badminton",
    image: badminton,
    description: "Improve agility, focus and reflexes with exciting badminton coaching."
    },
    {
    title: "Yoga",
    image: yoga,
    description: "Build flexibility, balance and mindfulness through guided yoga practice."
    },
    {
    title: "Dance",
    image: Dances,
    description: "Express creativity and confidence through energetic dance sessions."
    },
    {
    title: "Arts & Crafts",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    description: "Encourage imagination and creativity with engaging art activities."
    },
    {
    title: "Indoor Games",
    image: IndoorGames,
    description: "Fun indoor activities that develop strategic thinking and teamwork."
    }
];

function Programs() {
    return (
    <section className="programs-section" id="programs" style={{
    backgroundImage: ` url(${Programbg})`,}}>
        <div className="section-title">
        <span>FORTIUS ACTIVITIES</span>
            <h2>Explore Our Exciting
                Summer Camp Programs
            </h2>

            <p className="program-subtitle">
                Sports, creativity, fitness and fun experiences
                designed to keep every child active and engaged.
            </p>
        </div>

        

  <div className="programs-grid">

    {programs.map((program, index) => (
      <motion.div
        className="program-card"
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
      >

        <img src={program.image} alt={program.title} />

        <div className="program-overlay">

          <div className="program-content">

            <h3>{program.title}</h3>
            <p>Sports Training</p>

          </div>
          </div>

      </motion.div>
    ))}

  </div>


        </section>
    );
}

export default Programs;