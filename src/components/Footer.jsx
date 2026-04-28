import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Info Column */}
        <div className="footer-column">
          <h3>Info</h3>
          <p>Unique art,<br />crafted with style.</p>
        </div>

        {/* Quick Shop Column */}
        <div className="footer-column">
          <h3>Quick Shop</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>News</li>
            <li>Contact</li>
            <li>Log In</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: artzy.creative@gmail.com</p>
          <p>Phone: +383 00 000 000</p>
        </div>

        {/* Feedback Column */}
        <div className="footer-column feedback-col">
          <h3>Send an Anonymous Feedback</h3>
          <textarea placeholder="Your message"></textarea>
          <button className="send-btn">Send</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;