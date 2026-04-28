import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PRODUCTS</a>
        <a href="#">NEWS</a>
        <a href="#">CONTACT</a>
      </div>


<div className="nav-center">
  <img src={logo} alt="logo" className="logo" />
</div>

      <div className="nav-right">
        <span className="cart"><a href="cart.jsx" className="cart">🛒</a></span>
        <button className="login-btn">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;