import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import AboutSection from "./aboutsection/about";
import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import ServiceSection from "./Servicessection/services";

function App() {
  return (
    <div className="App">
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-clip">
          <source src="/bellevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Welcome Section */}
      <section id="welcome" className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to</h1>
          <h2 className="welcome-subtitle">B E L L E</h2>

          <h3 className="welcome-slogan">Beauty from the inside out</h3>
        </div>
      </section>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="content">
        <AboutSection />
        <ServiceSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
