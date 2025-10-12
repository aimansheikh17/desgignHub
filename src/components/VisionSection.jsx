import React from "react";
import "../styles/Vision.css";

const VisionSection = () => {
  return (
    <section className="vision-container" id="vision">
      {/* Left side */}
      <div className="vision-left">
        <h2 className="vision-heading">OUR<br />VISION</h2>
        <p className="vision-text">
          To become a global leader in innovative digital solutions — empowering
          businesses of all sizes to transform their ideas into impactful online
          experiences through creativity, technology, and design excellence.
        </p>
        <div className="vision-eye-icon">
          <i className="fas fa-eye"></i>
        </div>
      </div>

      {/* Right side */}
      <div className="vision-right">
        <div className="vision-right-header">
          <div className="vision-target-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h2 className="vision-heading">OUR<br />MISION</h2>
        </div>
        <p className="vision-text">
          At DesignHub Technologies, our mission is to deliver smart, scalable,
          and user-centric web solutions that help businesses grow digitally. We
          aim to bridge the gap between design and technology by providing:
        </p>
        <ul className="vision-list">
          <li>High-performance websites built with the latest technologies.</li>
          <li>Custom digital strategies tailored to each client’s goals.</li>
          <li>
            Reliable IT services that ensure long-term success and
            sustainability.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisionSection;

