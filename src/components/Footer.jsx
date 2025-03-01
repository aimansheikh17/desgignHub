import React from "react";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column: Branding & Description */}
        <div className="footer-left">
          <h2>
            Design Hub <span>Technology</span>
          </h2>
          <p>
            DesignHub Technologies is a freelance web development service specializing in custom websites, e-commerce solutions, and business automation.
          </p>
        </div>

        {/* Middle Column: Navigation Links */}
        <div className="footer-middle">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Column: Contact Info */}
        <div className="footer-right">
          <p>Location: Mangalore</p>
          <p>Email: mohammedaiman2020@gmail.com</p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/918722552732?text=Hello%20DesignHub%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Now
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DesignHub Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

