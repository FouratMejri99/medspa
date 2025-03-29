import React from "react";
import bellelogo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      {/* Contact Details (Top Bar) */}
      <div className="top-bar">
        <div className="info">
          <span>📍 49 Sunrise highway , linderhurst , NY 11757</span>
          <span>📞 613-704-9895</span>
        </div>
        <div className="offer">🎉 50$ OFF on Any Service! 🎉</div>
      </div>
      {/* Gold Line Between Top Bar & Navbar */}
      <div className="gold-line"></div>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={bellelogo} alt="Belle Logo" className="logo-img" />
          <span href="#video">Belle</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
