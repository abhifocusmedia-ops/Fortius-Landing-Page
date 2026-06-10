import "./stats.css";
import { FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { MdSportsSoccer } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { motion } from "framer-motion";

function Stats() {
    const stats = [
    {
        number: 500,
        suffix: "+",
        title: "Happy Kids",
        icon: <FaUsers />
    },
    {
        number: 6,
        suffix: "+",
        title: "Activities",
        icon: <MdSportsSoccer />
    },
    {
        number: 2,
        suffix: "",
        title: "Locations",
        icon: <FaMapMarkerAlt />
    },
    {
        number: 15,
        suffix: "%",
        title: "Early Bird",
        icon: <GiTrophyCup />
    }
];

    return (
    <section className="stats-section">

        <div className="stats-title">
            <span>FORTIUS SUMMER CAMP</span>
            <h2>Creating Active, Happy & Confident Kids</h2>
            <p className="stats-desc">Building confidence, friendships and healthy habits through sports, 
                creativity and fun.</p>
        </div>

        <div className="stats-grid">
            {stats.map((item, index) => (
            <motion.div className="stat-item" key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 0.6, delay: index * 0.15}}
                viewport={{ once: true }}>

            <div className="stat-icon">
            {item.icon}
            </div>

            <h3>
            {item.number}
            {item.suffix}
            </h3>

            <p>{item.title}</p>
            </motion.div>
        ))}
        </div>

    </section>
    );
}

export default Stats;