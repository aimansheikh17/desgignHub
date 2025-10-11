import React from "react";
import "../styles/WebDevelopment.css";
import banner from "../images/solutionbox1.png"; // replace with your banner image
import custom from "../images/customweb1.png";
import responsive from "../images/responsive.jpg";
import ecommerce from "../images/eccommerce.jpg";
import webapp from "../images/webapp.jpeg";
import maintenance from "../images/webmaintance.jpeg";

const WebDevelopment = () => {
  return (
    <section className="webdev-section" id="web-development">
      {/* ======= Banner Section ======= */}
      <div className="webdev-banner">
        <img src={banner} alt="Web Development Banner" className="banner-img" />
        <div className="banner-text">
          <h2>Transform Your Ideas into</h2>
          <h1>Powerful, Scalable, and Engaging Websites</h1>
        </div>
      </div>

      {/* ======= Services Section ======= */}
      <div className="webdev-services">

        {/* Custom Website Development */}
        <div className="webdev-card">
          <img src={custom} alt="Custom Website Development" />
          <h3>Custom Website Development</h3>
          <ul>
            <li>Fully tailored websites built from scratch — no templates.</li>
            <li>Designed around your brand identity, goals, and user needs.</li>
            <li>Built using modern technologies like HTML5, CSS3, JavaScript, React, or WordPress.</li>
          </ul>
        </div>

        {/* Responsive Web Design */}
        <div className="webdev-card">
          <img src={responsive} alt="Responsive Web Design" />
          <h3>Responsive Web Design</h3>
          <ul>
            <li>Mobile-first and cross-device optimized layouts.</li>
            <li>Adaptive and fast-loading website experiences.</li>
            <li>SEO-friendly design for higher search rankings.</li>
          </ul>
        </div>

        {/* E-Commerce Development */}
        <div className="webdev-card">
          <img src={ecommerce} alt="E-Commerce Development" />
          <h3>E-Commerce Development</h3>
          <ul>
            <li>Online stores with WooCommerce, Shopify, or custom solutions.</li>
            <li>Secure payment gateways — PayPal, Stripe, Razorpay, etc.</li>
            <li>Inventory management, product filtering, and customer dashboards.</li>
          </ul>
        </div>

        {/* Web Application Development */}
        <div className="webdev-card">
          <img src={webapp} alt="Web Application Development" />
          <h3>Web Application Development</h3>
          <ul>
            <li>Dynamic and data-driven applications with React, Next.js, or Laravel.</li>
            <li>Custom dashboards, APIs, and workflow integrations.</li>
            <li>High performance, scalability, and modern UI design.</li>
          </ul>
        </div>

        {/* Website Maintenance & Support */}
        <div className="webdev-card">
          <img src={maintenance} alt="Website Maintenance & Support" />
          <h3>Website Maintenance & Support</h3>
          <ul>
            <li>Regular updates, bug fixes, and performance optimization.</li>
            <li>Backup, security monitoring, and database management.</li>
            <li>24/7 technical support and emergency response.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WebDevelopment;
