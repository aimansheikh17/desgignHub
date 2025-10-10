import React from "react";
import "../styles/AboutUs.css";
import aboutImage from "../images/about.png"; // 👈 Import your image here

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side - Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Crafting visually stunning memorable experiences for web and
            interfaces. With the business sectors booming, even the field of
            technology has stepped into the domain of marketing and business
            development to mint the best benefits out of it. This strategy has
            been equipped because of the growing user scale of these
            technology-based services.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


