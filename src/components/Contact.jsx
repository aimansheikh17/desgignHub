import React, { useState } from "react";
import axios from "axios";
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = {
      access_key: "c97ff1c5-aa09-4432-973e-bad4650e67c6", // Replace with your actual Web3Forms API key
      ...formData,
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", formPayload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
