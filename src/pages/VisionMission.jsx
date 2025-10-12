import React from "react";
import "../styles/VisionMission.css";
import topBanner from "../images/solutionbox1.png"; // top section image
import visionImg from "../images/vision1.png"; // compass image
import missionImg from "../images/Mision1.png"; // team hands image

const VisionMission = () => {
  return (
    <section className="visionmission-section">
      {/* ===== Top Banner ===== */}
      <div className="visionmission-banner">
        <img src={topBanner} alt="Top Banner" className="banner-img" />
      </div>

      {/* ===== Vision Section ===== */}
      <div className="vision-section">
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            Our vision is to position DesignHub Technologies as a global leader in
            digital innovation, where creativity meets technology to shape the
            future of branding. <br />
            We strive to be the most trusted digital partner for businesses —
            recognized for our commitment to excellence, creativity, and delivering
            real results.
          </p>
          <p>
            As we grow, we envision expanding from the heart of the UAE to the
            global stage, helping businesses of all sizes harness the full
            potential of the digital world.
          </p>
          <p>
            Our goal is simple yet ambitious — to inspire growth, spark creativity,
            and redefine what digital success means for every brand we work with.
          </p>
        </div>
        <div className="vision-image">
          <img src={visionImg} alt="Vision" />
        </div>
      </div>

      {/* ===== Mission Section ===== */}
      <div className="mission-section">
        <div className="mission-image">
          <img src={missionImg} alt="Mission" />
        </div>
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At DesignHub Technologies, our mission is to redefine how brands connect
            with their audiences in the digital era. We aim to deliver strategic,
            data-driven marketing, impactful designs, and innovative web and app
            solutions that help businesses grow and thrive.
          </p>
          <p>
            Our focus is to empower startups, local enterprises, and global brands
            alike with digital tools that build visibility, drive engagement, and
            create measurable success.
          </p>
          <p>
            We don’t just deliver services — we create partnerships built on
            creativity, trust, and performance. Every campaign, design, or platform
            we create is driven by one purpose: to transform your brand into a
            powerful digital identity that stands out and leaves a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

