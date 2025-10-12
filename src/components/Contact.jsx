import React, { useState } from "react";
import "../styles/Contact.css";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c97ff1c5-aa09-4432-973e-bad4650e67c6"); // Replace with your real key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Let's Chat</h2>
          <p>
            Whether you have a question, want to start a project or simply want to connect.
            <br />
            <br />
            Feel free to <span>send me a message</span> in the contact form.
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Contact</h2>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name <span className="required">*</span>
              <input type="text" name="name" placeholder="Enter your name" required />
            </label>

            <label>
              Email <span className="required">*</span>
              <input type="email" name="email" placeholder="Enter your email" required />
            </label>

            <label>
              Company
              <input type="text" name="company" placeholder="Enter your company" />
            </label>

            <label>
              Phone
              <input type="text" name="phone" placeholder="Enter your phone number" />
            </label>

            <label>
              Message
              <textarea name="message" placeholder="Enter your message"></textarea>
            </label>

            <button type="submit">SUBMIT</button>
          </form>

          <p className="form-status">{result}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;



