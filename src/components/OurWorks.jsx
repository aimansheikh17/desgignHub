import React from "react";
import "../styles/OurWorks.css";
import vmevalves from "../images/vmevalves0.png";
import hkborwells from "../images/HK-BOREWELLS.png";
import buynest from "../images/BuyNest.png";

const works = [
  {
    title: "VME VALVES",
    subtitle: "Responsive Website Development",
    image: vmevalves,
  },
  {
    title: "HK-BORWELLS",
    subtitle: "Responsive Website Development",
    image: hkborwells,
  },
  {
    title: "BuyNest",
    subtitle: "Responsive Website Development",
    image: buynest,
  },
];


const OurWorks = () => {
  return (
    <section className="ourworks-section">
      <div className="ourworks-header">
        <h3>Our Works</h3>
        <h2>Latest Works</h2>
      </div>

      <div className="works-container">
        {works.map((work, index) => (
          <div className="work-card" key={index}>
            <div className="work-image">
              <img src={work.image} alt={work.title} />
            </div>
            <div className="work-text">
              <p className="subtitle">{work.subtitle}</p>
              <h4 className="title">{work.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;

