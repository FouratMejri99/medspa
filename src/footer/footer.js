import React from "react";
import "../styles/layout.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 49 Sunrise highway , linderhurst , NY 11757</p>
          <p>✉️ info@medandspa.com</p>
        </div>
        <div className="footer-section">
          <h3>Call for appointment</h3>
          <p>📞 631-704-9895</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Belle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
