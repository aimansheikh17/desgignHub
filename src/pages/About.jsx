import React from "react";
import "../styles/About.css";
import topBanner from "../images/solutionbox1.png"; // top section image
import img1 from "../images/about1.png"; // handshake image
import img2 from "../images/about2.png"; // workspace image

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      {/* ===== Top Banner ===== */}
      <div className="aboutus-banner">
        <img src={topBanner} alt="Top Banner" className="banner-img" />
      </div>

      {/* ===== Content Section ===== */}
      <div className="aboutus-content">
        {/* ===== Text Section ===== */}
        <div className="aboutus-text">
          <h2>About Us</h2>
          <p>
            At DesignHub Technologies, we believe that creativity and technology
            together can redefine how brands connect with people. What started
            as a small creative initiative has now evolved into a full-fledged
            digital studio specializing in graphic design, web development, and
            digital marketing solutions that help businesses grow, engage, and
            inspire.
          </p>
          <p>
            We’re not just designers or developers — we’re storytellers,
            strategists, and innovators. Our mission is simple: to turn your
            ideas into visually stunning and digitally powerful experiences.
            Whether it’s a sleek website, a captivating brand identity, or a
            high-impact marketing campaign, we approach every project with
            precision, passion, and purpose.
          </p>
          <p>
            At DesignHub Technologies, we don’t believe in one-size-fits-all. We
            collaborate closely with our clients to understand their goals,
            audience, and challenges — because your brand deserves a strategy as
            unique as you are.
          </p>
          <p>
            We’re more than just a creative agency — we’re your partners in
            growth, innovation, and digital transformation. Together, let’s
            build designs that speak, websites that perform, and brands that
            thrive.
          </p>
        </div>

        {/* ===== Images Section ===== */}
        <div className="aboutus-images">
          <div className="image-card top">
            <img src={img1} alt="Teamwork" />
          </div>
          <div className="image-card bottom">
            <img src={img2} alt="Workspace" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


