import React from "react";
import "../styles/layout.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 49 Sunrise highway , linderhurst , ny 11757</p>
          <p>📞 631-704-9895</p>
          <p>✉️ info@medandspa.com</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 10:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
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
        <p>&copy; 2024 med&spa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
