import "../styles/sections.css";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="title-text">BELLE AESTHETICS & WELLNESS</h2>
          <h4 className="location-text">
            A Wellness Spa in 49 Sunrise Highway, Lindenhurst, NY 11757
          </h4>
          <h3 className="sub-heading">Trust, Expertise, Radiance</h3>
          <p>
            At Belle Aesthetics & Wellness, our team consists of highly trained
            and talented professionals who are passionate about delivering
            exceptional care. Our mission is to provide a personalized
            experience that enhances your natural beauty and overall well-being.
          </p>
          <p>
            We believe that the best aesthetic treatments come from a
            combination of expertise, innovation, and personalized attention.
            Each client receives a customized consultation to ensure their needs
            and goals are met with the highest standard of care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
