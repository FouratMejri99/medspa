import React from "react";
import hydroFacialImg from "../assets/1.png";
import chemicalPeelImg from "../assets/2.webp";
import botox from "../assets/botox.jpeg";
import ivhydration from "../assets/iv.jpg";
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
          <h3>Micro Needling</h3>
          <p>
            Stimulates collagen production to improve skin texture and reduce
            scars.
          </p>
        </div>
        <div className="service-card">
          <img src={chemicalPeelImg} alt="Chemical Peels" />
          <h3>Chemical Peels</h3>
          <p>
            Exfoliates the skin to improve texture and reduce the appearance of
            fine lines.
          </p>
        </div>
      </div>

      {/* Second row - 3 services */}
      <div className="service-grid second-row">
        <div className="service-card">
          <img src={microneed} alt="Microneedling" />
          <h3>Hydro Facials</h3>
          <p>
            Hydrates, exfoliates, and removes dead skin cells for a youthful
            glow.
          </p>
        </div>
        <div className="service-card">
          <img src={ivhydration} alt="IV Hydration" />
          <h3>IV Hydration</h3>
          <p>
            Provides nutrients and hydration to rejuvenate and revitalize the
            skin and body.
          </p>
        </div>
        <div className="service-card">
          <img src={botox} alt="Botox and Fillers" />
          <h3>Botox and Fillers</h3>
          <p>
            Reduces wrinkles and restores volume to the face with non-invasive
            injections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
