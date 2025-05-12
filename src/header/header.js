import { useState } from "react";
import bellelogo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={bellelogo} alt="Belle Logo" className="logo-img" />
        <span>Belle</span>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Header;
