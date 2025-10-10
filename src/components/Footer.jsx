import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h3 className="footer-heading">
        FOLLOW US ON SOCIAL MEDIA FOR MORE INDUSTRY INSIGHTS
      </h3>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-links">
        <a href="#terms">Terms of Service</a>
        <span>|</span>
        <a href="#privacy">Privacy Policy</a>
        <span>|</span>
        <a href="#refund">Refund Policy</a>
      </div>

      <p className="copyright">
        © Copyright {new Date().getFullYear()} DesignHub Technologies. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

