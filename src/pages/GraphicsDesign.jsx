import React from "react";
import "../styles/GraphicsDesign.css";
import banner from "../images/solutionbox1.png"; // replace with your own banner image
import branding from "../images/branding.jpg";
import logo from "../images/logo.jpg";
import brochure from "../images/brochure.jpg";
import social from "../images/socialmedia.jpg";
import packaging from "../images/packaging.jpg";

const GraphicsDesign = () => {
  return (
    <section className="graphics-section" id="graphics-design">
      {/* ======= Banner Section ======= */}
      <div className="graphics-banner">
        <img src={banner} alt="Graphics Design Banner" className="banner-img" />
        <div className="banner-text">
          <h2>Creative Visuals that Define Your Brand</h2>
          <h1>Graphic Design Services that Inspire and Engage</h1>
        </div>
      </div>

      {/* ======= Services Section ======= */}
      <div className="graphics-services">

        {/* Branding & Visual Identity */}
        <div className="graphics-card">
          <img src={branding} alt="Branding & Visual Identity" />
          <h3>Branding & Visual Identity</h3>
          <ul>
            <li>Complete brand identity creation with consistent visual themes.</li>
            <li>Designing logos, color palettes, and brand guidelines.</li>
            <li>Ensuring brand coherence across digital and print media.</li>
          </ul>
        </div>

        {/* Logo Design */}
        <div className="graphics-card">
          <img src={logo} alt="Logo Design" />
          <h3>Logo Design</h3>
          <ul>
            <li>Custom-designed logos that reflect your brand’s personality.</li>
            <li>Unique, modern, and scalable designs for all platforms.</li>
            <li>Multiple design options and unlimited revisions.</li>
          </ul>
        </div>

        {/* Brochure & Print Design */}
        <div className="graphics-card">
          <img src={brochure} alt="Brochure & Print Design" />
          <h3>Brochure & Print Design</h3>
          <ul>
            <li>Professional brochure, flyer, and poster design for marketing.</li>
            <li>Eye-catching layouts with premium print-ready quality.</li>
            <li>Creative typography and brand-consistent visuals.</li>
          </ul>
        </div>

        {/* Social Media Creatives */}
        <div className="graphics-card">
          <img src={social} alt="Social Media Creatives" />
          <h3>Social Media Creatives</h3>
          <ul>
            <li>Visually engaging content for social media campaigns.</li>
            <li>Post, story, and ad designs optimized for all platforms.</li>
            <li>Helping you maintain a consistent online presence.</li>
          </ul>
        </div>

        {/* Packaging Design */}
        <div className="graphics-card">
          <img src={packaging} alt="Packaging Design" />
          <h3>Packaging Design</h3>
          <ul>
            <li>Creative packaging concepts that attract and communicate value.</li>
            <li>Modern designs tailored to your product and audience.</li>
            <li>Eco-friendly and high-impact packaging solutions.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default GraphicsDesign;

