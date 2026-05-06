import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="home.jsx">HOME</a>
        <a href="About.jsx">ABOUT</a>
        <a href="products.jsx">PRODUCTS</a>
        <a href="news.jsx">NEWS</a>
        <a href="contact.jsx">CONTACT</a>
      </div>


<div className="nav-center">
  <img src={logo} alt="logo" className="logo" />
</div>

      <div className="nav-right">
        <span className="cart"><a href="cart.jsx" className="cart">🛒</a></span>
        <button className="login-btn">LOGIN </button>
      </div>
    </nav>
  );
};

export default Navbar;