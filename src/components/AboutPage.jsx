import React from "react";
import aiman from '../images/aiman.jpg';
import '../styles/About.css';


const AboutPage = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column: Profile Image */}
        <div className="profile-image">
          <img src={aiman} alt="Profile" />
        </div>
        {/* Right Column: Text Content */}
        <div className="about-text">
          <h2 className="about-us">About Me</h2>
          <p className="aiman-text">
            I'm <strong>Mohammed Aiman</strong>, a passionate Full-Stack Developer dedicated to creating custom web solutions that help businesses thrive online. At <strong>DesignHub Technologies</strong>, I specialize in:
          </p>
          <ul>
            <li>✅ Custom Website Development – Fast, modern, and SEO-friendly</li>
            <li>✅ UI/UX Design – Sleek, user-friendly, and responsive interfaces</li>
            <li>✅ Business Automation – Scalable web apps to streamline operations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
