import React from "react";
import "../styles/OurWorks.css";
import vmevalves from "../images/vmevalves0.png";
import hkborwells from "../images/HK-BOREWELLS.png";
import buynest from "../images/BuyNest.png";
import vmeposter from "../images/poster1.png";
import vmelogo from "../images/vmelogo.png";
import vmeposter1 from "../images/poster2.png";
import vmeposter3 from "../images/poster3.png";
import vmeposter4 from "../images/poster4.png";

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
  {
    title: "VME Poster",
    subtitle: "Poster Design",
    image: vmeposter,
  },
  {
    title: "VME",
    subtitle: "Logo Design",
    image: vmelogo,
  },
  {
    title: "VME",
    subtitle: "Poster Design",
    image: vmeposter1,
  },
  {
    title: "VME",
    subtitle: "Poster Design",
    image: vmeposter3,
  },
  {
    title: "VME",
    subtitle: "Poster Design",
    image: vmeposter4,
  },
];

const OurWorks = () => {
  return (
    // Added id="portfolio" to make the navbar link scroll here
    <section className="ourworks-section" id="portfolio">
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

