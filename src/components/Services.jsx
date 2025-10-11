import React from "react";
import "../styles/Services.css";
import appDevIcon from "../images/coding.png";
import uiuxIcon from "../images/user-interface.png";
import graphicIcon from "../images/graphic-designer.png";
import itIcon from "../images/social-media.png";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Find Out How We Can Help You
Succeed In Business </h2>

      <div className="services-grid">
        {/* Application Development */}
        <div className="service-card">
          <img src={appDevIcon} alt="Application Development" />
          <h3>Application Development</h3>
          <p>
            Build modern, secure, and scalable applications tailored to your
            business needs with high-end performance.
          </p>
          {/* 👇 ADD THIS BUTTON */}
          <button className="read-more-btn">Get Started</button>
        </div>

        {/* UI/UX Design */}
        <div className="service-card">
          <img src={uiuxIcon} alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>
            Create visually appealing, user-friendly interfaces with intuitive
            navigation for a seamless user experience.
          </p>
          <button className="read-more-btn">Get Started</button>
        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <img src={itIcon} alt="IT Support" />
          <h3>Digital Marketing</h3>
          <p>
            Our team creates data-driven campaigns that boost your brand, engage your audience, and drive measurable growth.
          </p>
          <button className="read-more-btn">Get Started</button>
        </div>

        {/* Graphic Design */}
        <div className="service-card">
          <img src={graphicIcon} alt="Graphic Design" />
          <h3>Graphic Design</h3>
          <p>
            Enhance your brand identity with creative logos, banners, social
            media posts, and marketing visuals.
          </p>
          <button className="read-more-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Services;


