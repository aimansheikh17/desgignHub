import React from "react";
import '../styles/Portfolio.css';

import proj1 from '../images/quiz.png';
import proj2 from '../images/user customer page.png';
import proj3 from '../images/ticket.png';
import proj4 from '../images/employee1.png';
import proj5 from '../images/hokkah2.png';
import proj6 from '../images/mosque3.png';




const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Projects</h2>
      <p className="portfolio-intro">
        Check out some of my recent projects where I’ve build modern, responsive, and scalable web solutions
      </p>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src={proj1} alt="Project 1" />
        </div>
        <div className="portfolio-item">
          <img src={proj2} alt="Project 2" />
        </div>
        <div className="portfolio-item">
          <img src={proj3} alt="Project 3" />
        </div>
        <div className="portfolio-item">
          <img src={proj4} alt="Project 4" />
        </div>
        <div className="portfolio-item">
          <img src={proj5} alt="Project 5" />
        </div>
        <div className="portfolio-item">
          <img src={proj6} alt="Project 6" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
