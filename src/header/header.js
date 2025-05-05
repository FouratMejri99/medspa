import React from "react";
import bellelogo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <>
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
