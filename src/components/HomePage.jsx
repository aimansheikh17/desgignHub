import React from "react";
import "../styles/HomePage.css"; // Import CSS file
import Group8 from '../images/Group8.png' // Replace with your image

const HomePage = () => {
  return (
    <section id="home" className="home"> 
    <div className="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome To Design Hub Technology</h1>
          <p className="pragraph1">Transforming Ideas into Stunning Digital Experiences</p>
          <p className="paragraph2">Custom web solutions that help businesses grow and succeed online.</p>
          <a href="#contact" className="btn">Connect Now</a>
        </div>
        <div className="hero-image">
          <img src={Group8} alt="Technology" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HomePage;

