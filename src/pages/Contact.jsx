import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./App.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Contact Us</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;