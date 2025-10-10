import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fa-layer-group",
      title: "Full-Service Expertise",
      text: "From web development and UI/UX design to branding, graphics, and IT support — we offer complete digital solutions under one roof.",
    },
    {
      icon: "fa-pencil-ruler",
      title: "Creative & User-Focused Design",
      text: "Every interface and visual we craft is intuitive, engaging, and aligned with your brand identity.",
    },
    {
      icon: "fa-code",
      title: "Custom Web Solutions",
      text: "We build responsive, high-performance websites using the latest technologies — optimized for speed and scalability.",
    },
    {
      icon: "fa-headset",
      title: "Reliable IT Support",
      text: "Our technical experts ensure your systems stay secure and up-to-date with fast, proactive support.",
    },
    {
      icon: "fa-clock",
      title: "Transparent & Timely Delivery",
      text: "We follow a clear process — no hidden costs or delays. You’ll always know what’s happening and when.",
    },
    {
      icon: "fa-handshake",
      title: "Long-Term Partnership",
      text: "We don’t just complete projects — we build relationships. Our post-launch support helps your business keep growing.",
    },
  ];

  return (
    <section className="whychoose-container">
      <div className="whychoose-header">
        <h2>WHY CHOOSE US</h2>
        <p>
          We combine creativity, technology, and strategy to help businesses
          stand out and scale online.
        </p>
      </div>

      <div className="whychoose-grid">
        {features.map((feature, index) => (
          <div className="whychoose-card" key={index}>
            <div className="whychoose-icon">
              <i className={`fas ${feature.icon}`}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

