import { useState } from "react";
import "./navbar.css";
import logo from "/assets/logos/fortius-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar({ setShowModal }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Fortius Logo" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
    </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
                <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
            </li>

            <li>
                <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
            </li>

            <li>
                <a href="#whychoose" onClick={() => setMenuOpen(false)}>Why Choose Us</a>
            </li>

            <li>
                <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            </li>

            <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
        </ul>

        <button className="nav-btn" onClick={() => setShowModal(true)}>
            Register Now
        </button>
    </nav>
    );
}

export default Navbar;