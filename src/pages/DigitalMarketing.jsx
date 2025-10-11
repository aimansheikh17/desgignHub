import React from "react";
import "../styles/DigitalMarketing.css";
import banner from "../images/solutionbox1.png"; // replace with your own banner
import seo from "../images/searchengine.jpeg";
import smm from "../images/social.jpeg";
import content from "../images/content.jpeg";
import email from "../images/email.jpeg";
import influencer from "../images/influencer.jpeg"; // <-- add this image

const DigitalMarketing = () => {
  return (
    <section className="digital-section" id="digital-marketing">
      {/* ======= Banner Section ======= */}
      <div className="digital-banner">
        <img src={banner} alt="Digital Marketing Banner" className="banner-img" />
        <div className="banner-text">
          <h2>Visuals that talk, ideas that shine.</h2>
          <h1>We craft designs that express your brand with creativity and impact</h1>
        </div>
      </div>

      {/* ======= Services Section ======= */}
      <div className="digital-services">

        {/* SEO Optimization */}
        <div className="digital-card">
          <img src={seo} alt="SEO Optimization" />
          <h3>Search Engine Optimization (SEO)</h3>
          <ul>
            <li>Improve your website’s visibility across search engines.</li>
            <li>Comprehensive keyword research and on-page optimization.</li>
            <li>Backlink strategies and content optimization for better ranking.</li>
          </ul>
        </div>

        {/* Social Media Marketing */}
        <div className="digital-card">
          <img src={smm} alt="Social Media Marketing" />
          <h3>Social Media Marketing (SMM)</h3>
          <ul>
            <li>Grow your audience and engagement on all major platforms.</li>
            <li>Creative campaigns tailored for Facebook, Instagram, and LinkedIn.</li>
            <li>Community management and analytics-driven strategies.</li>
          </ul>
        </div>

        {/* Content Marketing */}
        <div className="digital-card">
          <img src={content} alt="Content Marketing" />
          <h3>Content Marketing</h3>
          <ul>
            <li>High-quality blogs, infographics, and videos that attract and retain audiences.</li>
            <li>SEO-friendly and value-driven content creation.</li>
            <li>Consistent storytelling aligned with your brand voice.</li>
          </ul>
        </div>

        {/* Email & SMS Marketing */}
        <div className="digital-card">
          <img src={email} alt="Email & SMS Marketing" />
          <h3>Email & SMS Marketing</h3>
          <ul>
            <li>Personalized campaigns to nurture leads and retain customers.</li>
            <li>Automated workflows with performance tracking.</li>
            <li>Engaging visuals and persuasive copywriting for conversions.</li>
          </ul>
        </div>

        {/* Influencer & Brand Collaboration */}
        <div className="digital-card">
          <img src={influencer} alt="Influencer & Brand Collaboration" />
          <h3>Influencer & Brand Collaboration</h3>
          <ul>
            <li>Partner with top influencers who align with your brand’s voice.</li>
            <li>Data-driven influencer selection to maximize reach and authenticity.</li>
            <li>Campaign execution and performance analysis for measurable results.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketing;

