import React from "react";
import "../styles/Solution.css";
import solutionsBg from "../images/solutionbox1.png"; // Adjust path as needed

const SolutionsSection = () => {
  return (
    <section
      className="solutions-section"
      style={{ backgroundImage: `url(${solutionsBg})` }}
    >
      <div className="solutions-content">
        <h2>Solutions</h2>
        <p>
          We create custom solutions tailored to your business needs, ensuring
          fast, secure, and scalable web applications. Whether you need a
          dynamic website, an e-commerce platform, or a business automation
          tool, we’ve got you covered!
        </p>
      </div>
    </section>
  );
};

export default SolutionsSection;
