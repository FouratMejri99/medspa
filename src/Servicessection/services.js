import React from "react";
import hydroFacialImg from "../assets/1.png";
import chemicalPeelImg from "../assets/2.webp";
import botox from "../assets/botox.jpeg";
import ivhydration from "../assets/hydration.jpeg";
import microneed from "../assets/ll.jpg";
import "../styles/navbar.css";
import "../styles/services.css";

const ServiceSection = () => {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>

      {/* First row - 2 services */}
      <div className="service-grid first-row">
        <div className="service-card">
          <img src={hydroFacialImg} alt="Hydro Facials" />
          <h3>Hydro Facials</h3>
          <p>Deeply cleanses and hydrates your skin for a fresh glow.</p>
        </div>
        <div className="service-card">
          <img src={chemicalPeelImg} alt="Chemical Peels" />
          <h3>Chemical Peels</h3>
          <p>Exfoliates and smooths skin texture for a youthful look.</p>
        </div>
      </div>

      {/* Second row - 3 services */}
      <div className="service-grid second-row">
        <div className="service-card">
          <img src={microneed} alt="Service 3" />
          <h3>Micro needling</h3>
          <p>Gently removes dead skin cells for a smooth complexion.</p>
        </div>
        <div className="service-card">
          <img src={ivhydration} alt="Service 4" />
          <h3>IV Hydration</h3>
          <p>Advanced laser technology for skin rejuvenation.</p>
        </div>
        <div className="service-card">
          <img src={botox} alt="Service 5" />
          <h3>Botox and fillers</h3>
          <p>Non-invasive treatment for firm and youthful skin.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
