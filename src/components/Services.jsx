import React from "react";
import '../styles/Services.css';


const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2>Services</h2>
      <div className="services-grid">
        {/* 1. Custom Website Development */}
        <div className="service-card">
          <h3>Custom Website Development</h3>
          <p>
            Fast, Secure & SEO-Friendly Websites. Get a custom-tailored website aligned to your business needs with modern design and high performance.
          </p>
        </div>

        {/* 2. E-Commerce Solutions */}
        <div className="service-card">
          <h3>E-Commerce Solutions</h3>
          <p>
            Feature-Rich Online Stores. Secure payment gateways, premium product listings, and user-friendly checkout flows.
          </p>
        </div>

        {/* 3. Business Web Apps */}
        <div className="service-card">
          <h3>Business Web Apps</h3>
          <p>
            Scalable & Efficient Business Solutions. CRM, admin dashboards, automation systems for business growth.
          </p>
        </div>

        {/* 4. UI/UX Design */}
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>
            Modern & User-Friendly Interfaces. Engaging, responsive designs that enhance user experience.
          </p>
        </div>

        {/* 5. SEO & Performance Optimization */}
        <div className="service-card">
          <h3>SEO & Performance Optimization</h3>
          <p>
            Boost Website Speed & Search Ranking. Get faster loading pages and on-page SEO strategies.
          </p>
        </div>

        {/* 6. Product Designer */}
        <div className="service-card">
          <h3>Product Designer</h3>
          <p>
            Innovative Digital Product Designs. From concept to UI/UX, put practical solutions into production.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
